
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-security-lock-filled'
const _prefix = getPrefixCls(_role)

export const SecurityLockFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M514.21 66.536l371.826 97.894a8 8 0 0 1 5.964 7.736v551.22a8 8 0 0 1-3.992 6.926L516.042 945.68a8 8 0 0 1-8.016 0L135.992 730.31a8 8 0 0 1-3.992-6.922v-551.22a8 8 0 0 1 5.964-7.736L510.14 66.536a8 8 0 0 1 4.072 0zM513 338c-39.212 0-71 31.788-71 71 0 23.94 11.848 45.112 30 57.972V596a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V468.338c19.278-12.696 32-34.53 32-59.338 0-39.212-31.788-71-71-71z" p-id="11255"></path></svg>
    )
  }
)

if (__DEV__) {
  SecurityLockFilled.displayName = 'SecurityLockFilled'
}
  