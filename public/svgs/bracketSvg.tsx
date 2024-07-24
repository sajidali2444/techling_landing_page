import * as React from "react"
import { SVGProps } from "react"
const BracketSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={144}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1371FF"
        d="M1.966 144.001a1.617 1.617 0 0 1-1.493-.997 1.652 1.652 0 0 1 .856-2.155 10.142 10.142 0 0 0 6.111-9.32v-50.89c0-.505.23-.98.623-1.293l.024-.018L15.332 72l-7.277-7.362-.063-.055a1.65 1.65 0 0 1-.552-1.233V12.47c0-4.058-2.4-7.716-6.113-9.318A1.65 1.65 0 0 1 1.354.12 1.615 1.615 0 0 1 2.6.132c4.912 2.12 8.084 6.963 8.084 12.338v50.19l8.09 8.181a1.66 1.66 0 0 1-.001 2.322l-8.089 8.178v50.189c0 5.375-3.174 10.219-8.084 12.338-.2.088-.416.134-.635.134l.001-.001Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v144H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default BracketSVG
