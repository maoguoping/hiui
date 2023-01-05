
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-line-chart-outlined')

export const LineChartOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}    viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="icon/01-line/line-chart" stroke="none" >
        <rect id="矩形"  x="5" y="39" width="38" height="4" rx="1"></rect>
        <path d="M43,11.4348961 C43.7810486,12.2159447 43.7810486,13.4822746 43,14.2633232 L30.8284271,26.4348961 L30.8284271,26.4348961 C29.3183999,27.9449234 26.9014356,27.9952576 25.3309459,26.5858988 L25.1715729,26.4348961 L19.0667149,19.3300381 L7.82842712,30.5683259 C7.04737854,31.3493745 5.78104858,31.3493745 5,30.5683259 C4.21895142,29.7872773 4.21895142,28.5209473 5,27.7398988 L16.2382878,16.501611 L16.2382878,16.501611 C17.748315,14.9915837 20.1652793,14.9412495 21.735769,16.3506083 L21.895142,16.501611 L28,23.606469 L40.1715729,11.4348961 C40.9526215,10.6538475 42.2189514,10.6538475 43,11.4348961 Z" id="路径-15" ></path>
    </g>
</svg>
    )
  }
)

if (__DEV__) {
  LineChartOutlined.displayName = 'LineChartOutlined'
}
  