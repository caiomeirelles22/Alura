import * as React from 'react'

export interface TextProps {
  family?: 'inter' | 'chakra'
  size?: 'base' | 'xl' | '2xl' | '6xl'
  weight?: 'normal' | 'bold'
  color?: 'default' | 'muted' | 'primary' | 'white'
  align?: 'left' | 'center'
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

function TextComponent(
  {
    family = 'inter',
    size = 'base',
    weight = 'normal',
    color = 'default',
    align = 'left',
    as: Component = 'p',
    className,
    children,
    ...props
  }: TextProps,
  ref: React.Ref<HTMLElement>,
) {
  const familyStyles = {
    inter: 'font-inter',
    chakra: 'font-chakra',
  }

  const sizeStyles = {
    base: 'text-base leading-normal',
    xl: 'text-xl leading-tight',
    '2xl': 'text-2xl leading-tight',
    '6xl': 'text-6xl leading-tight',
  }

  const weightStyles = {
    normal: 'font-normal',
    bold: 'font-bold',
  }

  const colorStyles = {
    default: 'text-blue-dark',
    muted: 'text-blue-muted',
    primary: 'text-cyan-primary',
    white: 'text-white',
  }

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  }

  const textClasses = `${familyStyles[family]} ${sizeStyles[size]} ${weightStyles[weight]} ${colorStyles[color]} ${alignStyles[align]} ${className || ''}`

  return (
    <Component className={textClasses.trim()} ref={ref} {...props}>
      {children}
    </Component>
  )
}

export const Text = React.forwardRef(TextComponent)
