import { ButtonHTMLAttributes, ReactNode } from "react"
import tw from 'tailwind-styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variat?: 'ghost' | 'delete'
}

export const Button = ({children, variat, ...props}: Props) => {
   if(variat === 'ghost'){ 
    return (
        <LogoutButton {...props}>
            {children}
        </LogoutButton>
    ) 
   }

   if(variat === 'delete') {
       return (
           <DeleteButton {...props}>
               {children}
           </DeleteButton>
       )
   }

    return (
        <MainButton {...props}>
            {children}
        </MainButton>
    )
}

export const BaseButton = tw.button`
    h-12 
    max-w-lg 
    px-8
    text-white 
    font-bold 
    rounded-lg 
    disabled:cursor-not-allowed d
    isabled:bg-gray-300
`
export const MainButton = tw(BaseButton)`
    bg-purple-600
    hover:bg-purple-500 
`
export const LogoutButton = tw(BaseButton)`
    bg-transparent
    bg-red-500
    hover:bg-red-400
`
export const DeleteButton = tw.button `
    h-10
    max-w-lg 
    px-8
    font-bold
    rounded-md
    text-red-500
    hover:bg-gray-100
    absolute 
    top-0 
    right-0
`