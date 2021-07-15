
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-skin-filled'
const _prefix = getPrefixCls(_role)

export const SkinFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M378 78c0 71.798 58.202 130 130 130s130-58.202 130-130h272a8 8 0 0 1 8 8v344a8 8 0 0 1-8 8h-102v500a8 8 0 0 1-8 8H216a8 8 0 0 1-8-8V438H106a8 8 0 0 1-8-8V86a8 8 0 0 1 8-8h272z" p-id="12015"></path></svg>
    )
  }
)

if (__DEV__) {
  SkinFilled.displayName = 'SkinFilled'
}
  