import * as React from "react";

export interface TextProps {
  family?: "inter" | "chakra";
  size?: "base" | "xl" | "2xl" | "6xl";
  weight?: "normal" | "bold";
  color?: "default" | "muted" | "primary" | "white";
  align?: "left" | "center";
  leading?: "normal" | "tight" | "none";
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

function TextComponent(
  {
    family = "inter",
    size = "base",
    weight = "normal",
    color = "default",
    align = "left",
    leading = "normal",
    as: Component = "p",
    className,
    children,
    ...props
  }: TextProps,
  ref: React.Ref<HTMLElement>
) {
  const familyStyles = {
    inter: "font-inter",
    chakra: "font-chakra",
  };

  const sizeStyles = {
    base: "text-base",
    xl: "text-xl",
    "2xl": "text-2xl",
    "6xl": "text-6xl",
  };

  const leadingStyles = {
    normal: "leading-normal",
    tight: "leading-tight",
    none: "leading-none",
  };

  const weightStyles = {
    normal: "font-normal",
    bold: "font-bold",
  };

  const colorStyles = {
    default: "var(--color-blue-dark)",
    muted: "var(--color-blue-muted)",
    primary: "var(--color-cyan-primary)",
    white: "var(--color-white)",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
  };

  const textClasses = `${familyStyles[family]} ${sizeStyles[size]} ${
    leadingStyles[leading]
  } ${weightStyles[weight]} ${alignStyles[align]} ${className || ""}`;

  const style = { color: colorStyles[color] } as React.CSSProperties;

  return (
    <Component
      className={textClasses.trim()}
      style={style}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}

export const Text = React.forwardRef(TextComponent);
