import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText = ({label, ...props}: Props) => {
    return (
        <label className='flex flex-col w-full max-w-lg'>
            <span>{label}</span>
            <input type="email" {...props} className='focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent border border-gray-300 h-12 px-4 rounded-lg'/>
        </label>
    )
}
