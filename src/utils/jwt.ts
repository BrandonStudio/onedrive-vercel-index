// Generating JWT with private key
// https://stackoverflow.com/questions/59216430/how-can-i-sign-a-jwt-to-exchange-an-access-token-from-azure-active-directory

import apiConfig from "../../config/api.config";

export function getJwt(): string {
  const { tenantId, clientId, certThumbprint, privateKey } = apiConfig
  
  const jwt = require("jsonwebtoken");
  const { v1: uuidv1 } = require('uuid');

  var certOctets = certThumbprint!.match(/.{1,2}/g)!
  var certBuffer = Buffer.alloc(certOctets.length)
  for (var i = 0; i < certOctets.length; i++) {
    certBuffer.writeUInt8(parseInt(certOctets[i], 16), i);
  }
  //Perform base64url-encoding as per RFC7515 Appendix C
  var x5t = certBuffer.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  var current = Date.now().toString().substring(0, 10);

  var payload =
  {
    "aud": "https://login.microsoftonline.com/" + tenantId + "/oauth2/token",
    "exp": Number(current) + 3600,
    "iss": clientId,
    "jti": uuidv1(),
    "nbf": Number(current),
    "sub": clientId
  }
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', header: { "x5t": x5t } })
}