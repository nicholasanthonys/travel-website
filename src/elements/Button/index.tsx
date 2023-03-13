import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

interface ButtonProp {
  type?: "button" | "link"
  isPrimary?: boolean,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  target?: string,
  className?: string,
  isDisabled?: Boolean,
  isLoading?: boolean,
  isSmall?: boolean,
  isLarge?: boolean,
  isBlock?: boolean,
  isExternal?: boolean,
  hasShadow?: boolean,
  href?: string,
  children?: React.ReactNode,
  style?: React.CSSProperties,



}
const Button: FC<ButtonProp> = (props: ButtonProp) => {
  const className = [props.className]
  if (props.isPrimary) className.push('btn-primary')
  if (props.isLarge) className.push('btn-lg')
  if (props.isSmall) className.push('btn-sm')
  if (props.isBlock) className.push('btn-block-primary')
  if (props.hasShadow) className.push('btn-shadow')

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (props.onClick) {
      return props.onClick(event)
    }
  }

  if (props.isDisabled || props.isLoading) {
    // disable the button
    if (props.isDisabled) className.push("disabled")
    return <span className={className.join(" ")} style={props.style}>
      {
        props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )
      }
    </span>
  }

  if (props.type == "link") {
    if (props.isExternal) {
      return (
        <a href={props.href} className={className.join(" ")} style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      )

    } else {

      return (
        <Link to={props.href ? props.href : ""}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      )

    }
  }

  return (
    <button className={className.join(" ")} style={props.style} onClick={onClick}>
      {props.children}

    </button>
  )
}

export default Button;
