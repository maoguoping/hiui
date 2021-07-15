
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../@types/props'

const _role = 'icon-collection-outlined'
const _prefix = getPrefixCls(_role)

export const CollectionOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M519.08 79.806a16 16 0 0 1 7.268 7.266l132.6 268.674 296.498 43.084a16 16 0 0 1 8.868 27.29L785.93 600H671.32l144.29-140.65-209.788-30.484L512 238.764l-93.82 190.102-209.792 30.484 151.806 147.974-35.836 208.942L512 717.618V808l-265.198 139.422a16 16 0 0 1-23.214-16.866l50.648-295.3L59.686 426.12a16 16 0 0 1 8.868-27.29l296.5-43.084 132.6-268.674a16 16 0 0 1 21.428-7.266zM892 842a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H588a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h304z m-40-160a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H588a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h264z" p-id="12825"></path></svg>
    )
  }
)

if (__DEV__) {
  CollectionOutlined.displayName = 'CollectionOutlined'
}
  