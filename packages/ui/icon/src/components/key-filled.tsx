
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-key-filled'
const _prefix = getPrefixCls(_role)

export const KeyFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M837.068 166.932c117.158 117.158 117.158 307.106 0 424.264-106.096 106.096-271.886 116.112-389.256 30.052L199.26 869.796a8 8 0 0 1-11.314 0l-45.254-45.254a8 8 0 0 1 0-11.314l247.42-247.42c-93.9-117.778-86.334-289.848 22.694-398.876 117.158-117.158 307.106-117.158 424.264 0zM185.116 782.114l138.592 138.594a8 8 0 0 1 0 11.314l-45.254 45.254a8 8 0 0 1-11.314 0l-138.592-138.592a8 8 0 0 1 0-11.314L173.8 782.114a8 8 0 0 1 11.314 0zM326.538 640.694l138.592 138.592a8 8 0 0 1 0 11.314l-45.254 45.254a8 8 0 0 1-11.314 0l-138.594-138.592a8 8 0 0 1 0-11.314l45.256-45.254a8 8 0 0 1 11.314 0z" p-id="12175"></path></svg>
    )
  }
)

if (__DEV__) {
  KeyFilled.displayName = 'KeyFilled'
}
  