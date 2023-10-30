
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-car-filled')

export const CarFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M723.072 128a85.333333 85.333333 0 0 1 82.261333 62.592l1.024 4.138667 47.04 210.624 14.506667 7.253333a128 128 0 0 1 70.656 109.312l0.106667 5.184V725.333333a64 64 0 0 1-60.245334 63.893334L874.666667 789.333333h-42.602667v21.333334a85.354667 85.354667 0 0 1-170.624 4.266666L661.333333 810.666667v-21.333334H362.666667v21.333334a85.333333 85.333333 0 0 1-170.56 4.266666l-0.085334-4.266666v-21.333334H149.333333a64 64 0 0 1-63.893333-60.245333L85.333333 725.333333v-198.186666a128 128 0 0 1 66.218667-112.106667l4.586667-2.410667 14.549333-7.253333 49.28-211.413333a85.333333 85.333333 0 0 1 78.869333-65.856L303.061333 128h420.010667zM288 576a53.333333 53.333333 0 1 0 0 106.666667 53.333333 53.333333 0 0 0 0-106.666667z m448 0a53.333333 53.333333 0 1 0 0 106.666667 53.333333 53.333333 0 0 0 0-106.666667z m-87.552-298.666667H375.552a42.666667 42.666667 0 0 0-40.746667 30.016l-0.896 3.413334L298.666667 469.333333h426.666666l-35.242666-158.592a42.666667 42.666667 0 0 0-38.144-33.28L648.448 277.333333z" p-id="10992"></path></svg>
    )
  }
)

if (__DEV__) {
  CarFilled.displayName = 'CarFilled'
}
  