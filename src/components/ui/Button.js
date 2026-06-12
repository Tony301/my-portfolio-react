import React from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  download = false,
  target = null,
  rel = null,
  ...props
}) {
  return (
    <a
      href={href}
      className={`button ${variant}`}
      download={download}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
}
