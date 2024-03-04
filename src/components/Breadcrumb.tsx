import type { ParsedUrlQuery } from 'querystring'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

const HomeCrumb = () => {
  const { t } = useTranslation()

  return (
    <Link href="/">
      <a className="flex items-center">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="flag"
          className="svg-inline--fa fa-flag fa-w-16 h-3 w-3" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 16">
          <image width="15" height="16" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMi0wN1QxNDo1OTo1NiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDItMDdUMTU6NDU6MDkrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMDdUMTU6NDU6MDkrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SGlzdG9yeT0iMjAyMi0wMi0wN1QxNTowMDozNCswODowMCYjeDk75paH5Lu2IHRvb2xfaG9tZS5tYXNrLnBuZyDlt7LmiZPlvIAmI3hBOzIwMjItMDItMDdUMTU6MDM6MjkrMDg6MDAmI3g5O+aWh+S7tiBDOlxVc2Vyc1xCcmFuZG9uXERlc2t0b3BcdG9vbF9ob21lLm1hc2sucG5nIOW3suWtmOWCqCYjeEE7MjAyMi0wMi0wN1QxNTowNToxMyswODowMCYjeDk75paH5Lu2IHRvb2xfaG9tZS5tYXNrLnBuZyDlt7LmiZPlvIAmI3hBOzIwMjItMDItMDdUMTU6NDU6MDkrMDg6MDAmI3g5O+aWh+S7tiBDOlxVc2Vyc1xCcmFuZG9uXERlc2t0b3BcdG9vbF9ob21lLm1hc2sucG5nIOW3suWtmOWCqCYjeEE7IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyYjc1MGZkLWU2OWQtNmM0YS04ZmFiLTMyNjQ4YmMwNGU2MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmM2M4ZmUwYS0xYjU5LWY5NGQtOTA1Ny05MDdmMmYwZWQzOTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmM2M4ZmUwYS0xYjU5LWY5NGQtOTA1Ny05MDdmMmYwZWQzOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYzYzhmZTBhLTFiNTktZjk0ZC05MDU3LTkwN2YyZjBlZDM5MSIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0wN1QxNDo1OTo1NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MmI3NTBmZC1lNjlkLTZjNGEtOGZhYi0zMjY0OGJjMDRlNjEiIHN0RXZ0OndoZW49IjIwMjItMDItMDdUMTU6NDU6MDkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cOmDkAAACF0lEQVQokY2ST0iTYRzHv8/zDtpeRuxde7e9ewmHRE5FuuZBBUUGq5DNwxBHUaJ18VaXjgV5CToJC7Q6iN2EwHMYemgHXTihsMG2gkCCDTu88T7vn5+H2hj2Gn5vD9/Ph4ff8/wAjxARI6LE9MzMLSJKEBEnosTVVOpT/8DANhElAIB7yQC00fHxQqVcfjs8MnIXQBwANF0P68lktA39IxNRYjKTmTIM4/Hlnh7TsqxHE+n0NABcSaW+ybJMnjIRJW5ksxOtZvOZputWNB4Xmq5bv46Pn+Ty+ckXS0uryd7er22edYvZfH74e6NRjGkaFEWxOefkui5rtVq+n0dHrH9w8MGrYtGVJGmTMSZ4WyzMzV1r1OvLkWi0IwIA55wURbEvqSp9PjhYvrOw8BtABAAkItLmFxf79vf2Xqux2AU1ErG5JFH3OIwxBPx+cgFfvVrN7FYqH3ZLJVM6FmLo487Om3AkclFVVUvy+YiIIITgjuMwx3GYJEnEOYccCLgu4K9Vq+kvtdp7RkR9AKZu5nIPw+GwDQCGYUijY2Ole7Oz+6vr60PbW1vXZVl2AKDZbPo2NzaeA3jHARwCWHNdt/N4Qgh2O59fCQaDT+cLhRUhRKf7y60BOOx8lW3bHcA0TR4KhcoAhCzLZdM0PbmzNgwAnPZlROQJeMpnweeSzxtf96F7ttPx6hjwZ8MA3D/VvWSM/fhfdwJQx++06/PF4AAAAABJRU5ErkJggg==" />
        </svg>
        <span className="ml-2 font-medium">{t('Home')}</span>
      </a>
    </Link>
  )
}

const Breadcrumb: React.FC<{ query?: ParsedUrlQuery }> = ({ query }) => {
  if (query) {
    const { path } = query
    if (Array.isArray(path)) {
      // We are rendering the path in reverse, so that the browser automatically scrolls to the end of the breadcrumb
      // https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up/18614561
      return (
        <ol className="no-scrollbar inline-flex flex-row-reverse items-center gap-1 overflow-x-scroll text-sm text-gray-600 dark:text-gray-300 md:gap-3">
          {path
            .slice(0)
            .reverse()
            .map((p: string, i: number) => (
              <li key={i} className="flex flex-shrink-0 items-center">
                <FontAwesomeIcon className="h-3 w-3" icon="angle-right" />
                <Link
                  href={`/${path
                    .slice(0, path.length - i)
                    .map(p => encodeURIComponent(p))
                    .join('/')}`}
                  passHref
                  className={`ml-1 transition-all duration-75 hover:opacity-70 md:ml-3 ${
                    i == 0 && 'pointer-events-none opacity-80'
                  }`}
                >
                  <a
                    className={`ml-1 transition-all duration-75 hover:opacity-70 md:ml-3 ${i == 0 && 'pointer-events-none opacity-80'
                      }`}
                  >
                    {p}
                  </a>
                </Link>
              </li>
            ))}
          <li className="flex-shrink-0 transition-all duration-75 hover:opacity-80">
            <HomeCrumb />
          </li>
        </ol>
      )
    }
  }

  return (
    <div className="text-sm text-gray-600 transition-all duration-75 hover:opacity-80 dark:text-gray-300">
      <HomeCrumb />
    </div>
  )
}

export default Breadcrumb
