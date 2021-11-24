import LinkNext from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: ReactNode
}

export const Link = ({children, href, ...props}: Props) => {
    return (
        <LinkNext href={href}>
            <a className=' h-12 max-w-lg flex justify-center items-center
                        text-white font-bold bg-blue-400 hover:bg-blue-300 
                        rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300' {...props}>
                {children}</a>
        </LinkNext>
    )
}
