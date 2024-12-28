import { clsx } from "clsx"

import {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
} from "./headings.css"

/**
 * A styled `<h1>` element, for use in MDX.
 */
export function h1({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={clsx(heading1, className)} {...restProps} />
}

/**
 * A styled `<h2>` element, for use in MDX.
 */
export function h2({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx(heading2, className)} {...restProps} />
}

/**
 * A styled `<h3>` element, for use in MDX.
 */
export function h3({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx(heading3, className)} {...restProps} />
}

/**
 * A styled `<h4>` element, for use in MDX.
 */
export function h4({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={clsx(heading4, className)} {...restProps} />
}

/**
 * A styled `<h5>` element, for use in MDX.
 */
export function h5({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={clsx(heading5, className)} {...restProps} />
}

/**
 * A styled `<h6>` element, for use in MDX.
 */
export function h6({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h6 className={clsx(heading6, className)} {...restProps} />
}

export const headings = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
