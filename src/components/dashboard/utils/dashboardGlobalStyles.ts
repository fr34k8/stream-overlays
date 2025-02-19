import { css } from '@emotion/react'
import { colors } from '@resir014/chungking-react'

const dashboardGlobalStyles = css`
  a {
    text-decoration: none;
    color: ${colors.white};
    border-bottom: 2px solid ${colors.white};
    border-top: 2px solid transparent;
  }

  a:hover,
  a:focus {
    background-color: ${colors.white};
    color: ${colors.grey[900]};
    border-top-color: ${colors.white};
  }
`

export default dashboardGlobalStyles
