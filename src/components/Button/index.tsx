import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({children, ...props}: Props) => {
    return (
        <button {...props}
            className=' h-12 max-w-lg
                        text-white font-bold bg-purple-600 hover:bg-purple-500 
                        rounded-lg disabled:cursor-not-allowed disabled:bg-gray-300'>
            {children}
        </button>
    )
}
