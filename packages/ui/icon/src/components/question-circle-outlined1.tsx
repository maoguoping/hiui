import React, { forwardRef } from "react";
import { cx, getPrefixCls } from "@hi-ui/classname";
import { __DEV__ } from "@hi-ui/env";
import { IconProps } from "../@types/props";

const _role = "icon-question-circle-outlined1";
const _prefix = getPrefixCls(_role);

export const QuestionCircleOutlined1 = forwardRef<
  SVGSVGElement | null,
  IconProps
>(({ prefixCls = _prefix, role = _role, className, children, style }, ref) => {
  const cls = cx(prefixCls, className);

  return (
    <svg
      className={cls}
      ref={ref}
      role={role}
      style={style}
      viewBox="0 0 1025 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512.024 1024C229.252 1024 0 794.794 0 512 0 229.254 229.252 0 512.024 0c282.769 0 512.021 229.252 512.021 512 0 282.794-229.253 512-512.021 512z m0.044-954.096c-244.205 0-442.164 197.937-442.164 442.143 0 238.758 197.97 442.186 442.164 442.186 244.183 0 442.165-197.982 442.165-442.186S756.25 69.904 512.068 69.904z m23.36 510.364l-0.09 49.54c0 25.134-15.612 45.496-34.906 45.496-19.27 0-35.628-19.752-35.628-44.884l0.859-73.105c0-25.18 15.635-45.542 34.905-45.542 5.592 0 19.226-0.454 19.226-0.454 60.586-4.044 108.649-53.995 108.649-115.58 0-64.268-52.11-116.398-116.352-116.398-56.315 0-103.242 39.996-114.013 93.127l-2.57 13.317c0 18.407-15.497 33.36-34.633 33.36-19.112 0-34.632-14.953-34.632-33.36l1.227-13.317c11.476-91.856 89.651-162.94 184.596-162.94 102.833 0 186.188 83.357 186.188 186.165 0.002 94.9-71.038 173.03-162.825 184.575z m-34.86 164.714c19.204 0 34.792 15.36 34.792 34.313l-0.135 1c0 18.954-15.568 34.317-34.793 34.317-19.204 0-34.792-15.363-34.792-34.316l0.135-1.001c0.001-18.953 15.591-34.313 34.793-34.313z" />
    </svg>
  );
});

if (__DEV__) {
  QuestionCircleOutlined1.displayName = "QuestionCircleOutlined1";
}
