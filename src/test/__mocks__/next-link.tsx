import React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  onClick?: () => void;
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...props }, ref) => {
  return (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  );
});

Link.displayName = "Link";

export default Link;
