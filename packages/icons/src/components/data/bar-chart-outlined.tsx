
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-bar-chart-outlined')

export const BarChartOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}    viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="icon/01-line/bar-chart" stroke="none" >
        <path d="M11,20 L9,20 C6.790861,20 5,21.790861 5,24 L5,32 C5,34.209139 6.790861,36 9,36 L11,36 C13.209139,36 15,34.209139 15,32 L15,24 C15,21.790861 13.209139,20 11,20 Z M9,24 L11,24 L11,32 L9,32 L9,24 Z" id="矩形" ></path>
        <path d="M25,5 L23,5 C20.790861,5 19,6.790861 19,9 L19,32 C19,34.209139 20.790861,36 23,36 L25,36 C27.209139,36 29,34.209139 29,32 L29,9 C29,6.790861 27.209139,5 25,5 Z M23,9 L25,9 L25,32 L23,32 L23,9 Z" id="矩形备份" ></path>
        <path d="M39,13 L37,13 C34.790861,13 33,14.790861 33,17 L33,32 C33,34.209139 34.790861,36 37,36 L39,36 C41.209139,36 43,34.209139 43,32 L43,17 C43,14.790861 41.209139,13 39,13 Z M37,17 L39,17 L39,32 L37,32 L37,17 Z" id="矩形备份-2" ></path>
        <rect id="矩形"  x="5" y="39" width="38" height="4" rx="1"></rect>
    </g>
</svg>
    )
  }
)

if (__DEV__) {
  BarChartOutlined.displayName = 'BarChartOutlined'
}
  