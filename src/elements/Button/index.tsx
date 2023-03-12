import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

type ButtonProp = {
  type: "button" | "link"
  isPrimary: boolean,
  onClick: void,
  target: string,
  className: string,
  isDisabled: boolean,
  isLoading: boolean,
  isSmall: boolean,
  isLarge: boolean,
  isBlock: boolean,
  isExternal: boolean,
  hasShadow: boolean,



}
const Button: FC<ButtonProp> = (props: ButtonProp) => {
  const className  = [props.className]
  if(props.isPrimary) className.push()
  return (
    <div>index</div>
  )
}

export default Button;
