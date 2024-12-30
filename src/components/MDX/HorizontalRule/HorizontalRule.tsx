import { clsx } from "clsx"

import { horizontalRule } from "./HorizontalRule.css"

/**
 * A styled `<hr>` element, for use in MDX.
 */
export function HorizontalRule({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLHRElement>) {
  return <hr {...restProps} className={clsx(horizontalRule, className)} />
}
