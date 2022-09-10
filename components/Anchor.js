import Link from "next/link";

/**Custom Link (next/link) tag.
 * 
 * Uses daisyui "link" class. Remove by setting override to true.
 * 
 * Add more classes using className prop
 */
export default function Anchor({ href, children, className = "", override = false }) {
  let classes = "link";

  if (override) { 
    classes  = className;
  }
  return (
    <Link href={href} passHref>
      <a className={classes}>
        {children}
      </a>
    </Link>
  );
}