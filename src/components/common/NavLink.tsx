import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} text-black-700 bg-gray-200`
  }

  return (
    <Link replace={href === '/'} href={href}>
      {React.cloneElement(children, { className })}
    </Link>
  )
}
