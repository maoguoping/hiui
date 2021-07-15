
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-rotate-left-outlined'
const _prefix = getPrefixCls(_role)

export const RotateLeftOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M760 416a8 8 0 0 1 8 8v480a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8V424a8 8 0 0 1 8-8h640z m-72 80H192v336h496V496zM427.2 69.6a4 4 0 0 1 0.8 2.4v70.032l4.85 0.04C724.34 146.754 959.706 382.4 963.942 673.998l-80.01 0.002c-4.246-249.03-206.388-449.856-455.928-451.982L428 296a4 4 0 0 1-6.4 3.2l-149.334-112a4 4 0 0 1 0-6.4l149.334-112a4 4 0 0 1 5.6 0.8z" p-id="13495"></path></svg>
    )
  }
)

if (__DEV__) {
  RotateLeftOutlined.displayName = 'RotateLeftOutlined'
}
  