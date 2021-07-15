
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-shop-outlined'
const _prefix = getPrefixCls(_role)

export const ShopOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M162 922a8 8 0 0 1-8-8V484a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v358h146V610a8 8 0 0 1 8-8h254a8 8 0 0 1 8 8v232h144V484a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v430a8 8 0 0 1-8 8H162z m408-240h-110v160h110v-160zM835.936 94a48 48 0 0 1 45.87 33.856l74.002 240c7.812 25.334-6.392 52.2-31.726 60.012A48 48 0 0 1 909.94 430H120c-26.51 0-48-21.49-48-48a48 48 0 0 1 2.132-14.144l74-240A48 48 0 0 1 194.004 94h641.934z m-23.62 80H217.62l-54.27 176h703.234l-54.27-176z" p-id="13175"></path></svg>
    )
  }
)

if (__DEV__) {
  ShopOutlined.displayName = 'ShopOutlined'
}
  