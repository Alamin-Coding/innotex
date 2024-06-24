import Link from 'next/link'
import React from 'react'

const shadow = {
    boxShadow: "0 4px 60px rgba(0, 0, 0, 0.05)"
}

const Button = ({text, ButtonElement=Link, primary=true, ...props}) => {
  return (
    <ButtonElement style={shadow} {...props} className={`rounded-md uppercase px-6 py-[14px] block duration-200 sm:inline-block text-center  ${primary? "bg-primary text-white border border-primary hover:bg-transparent hover:text-primary" : "bg-white text-primary"}`}>
     {text}
    </ButtonElement>
  )
}

export const ButtonOutline = ({text, ButtonElement=Link, ...props}) => {
  return (
    <ButtonElement style={shadow} {...props} className="rounded-md uppercase px-6 py-[14px] block duration-200 sm:inline-block text-center bg-transparent text-primary border border-primary hover:bg-primary hover:text-white">
     {text}
    </ButtonElement>
  )
}

export default Button