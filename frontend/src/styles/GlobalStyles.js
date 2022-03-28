import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1044%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M625.9855817530475 334.98619871515746L734.7444652785468 297.53751192677356 697.295778490163 188.7786284012742 588.5368949646637 226.2273151896581z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1092.6573728638407 301.35717749438186L1107.5780844585665 195.19079797684327 1001.4117049410279 180.27008638211754 986.4909933463022 286.4364658996561z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M838.1637232223972 109.18836562051447L718.9632756309776 61.02825866229182 670.803168672755 180.22870625371138 790.0036162641745 228.38881321193404z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M626.3407151381939 463.8875816838078L527.6641871817054 532.9816304033022 596.7582359011998 631.6581583597907 695.4347638576883 562.5641096402964z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-9.619357954988782 436.67199390010654L-63.479996420695436 503.1843431905701 63.21884674785325 550.7191262438982z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M881.8567830146924 319.29937758821177L892.1360535800471 235.58143707708 761.4195075306721 262.0215014846136z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1029.339443509324 290.9724631023214L1073.8327227163654 168.7281831634847 951.5884427775288 124.2349039564431 907.0951635704872 246.4791838952798z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M964.9818628923038 176.24319246874572L944.1435184044584 92.665157710444 860.5654836461567 113.50350219828931 881.4038281340021 197.08153695659104z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M486.987%2c579.368C513.089%2c578.799%2c532.352%2c556.999%2c543.974%2c533.621C554.248%2c512.955%2c552.768%2c489.378%2c541.826%2c469.058C530.201%2c447.468%2c511.496%2c428.562%2c486.987%2c427.785C461.336%2c426.972%2c438.429%2c443.051%2c425.773%2c465.377C413.295%2c487.389%2c413.558%2c513.91%2c425.529%2c536.202C438.223%2c559.84%2c460.162%2c579.952%2c486.987%2c579.368' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1502.2884914105157 338.0212070013356L1377.5346059715407 306.91656989790897 1346.429968868114 431.67045533688406 1471.183854307089 462.7750924403107z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M257.0467025878791 318.1549722074341L249.3598706262979 230.29408084402374 169.18581122446872 325.84180416901535z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1350.1997805261647 451.83387281178034L1469.8811567608261 507.7811370608791 1461.8251800968376 392.5753034173223z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M628.477%2c135.225C663.467%2c133.946%2c696.878%2c118.133%2c714.182%2c87.695C731.3%2c57.585%2c726.759%2c21.437%2c710.575%2c-9.186C693.065%2c-42.319%2c665.872%2c-72.028%2c628.477%2c-74.476C587.123%2c-77.184%2c546.065%2c-57.221%2c525.375%2c-21.312C504.713%2c14.548%2c508.416%2c59.823%2c531.181%2c94.387C551.917%2c125.87%2c590.804%2c136.603%2c628.477%2c135.225' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1231.9456619488858 157.06069058205495L1231.9456619488858 318.6980418038479 1393.5830131706787 318.69804180384784 1393.5830131706787 157.06069058205492z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M244.9760601958364 419.59621787324323L343.11798910824234 514.3707769618673 437.8925481968664 416.22884804946136 339.75061928446047 321.4542889608373z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-81.72 284.09 a127.43 127.43 0 1 0 254.86 0 a127.43 127.43 0 1 0 -254.86 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-165.98 83.19 a185.23 185.23 0 1 0 370.46 0 a185.23 185.23 0 1 0 -370.46 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1044'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"); 
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no repeat;
    cursor: default;
  }
  
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`

export default GlobalStyles
