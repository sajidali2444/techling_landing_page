import * as React from "react"
import { SVGProps } from "react"
const BlueArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#1371FF"
      fillRule="evenodd"
      d="M6.921 1.282a1.5 1.5 0 0 1 2.12 0L14.7 6.938a1.5 1.5 0 1 1-2.122 2.121L7.981 4.463 3.385 9.06a1.5 1.5 0 0 1-2.122-2.12L6.92 1.281l.001.001Z"
      clipRule="evenodd"
    />
  </svg>
)
export default BlueArrow
