import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputText = ({label, ...props}: Props) => {
    return (
        <label className='flex flex-col w-full max-w-lg'>
            <span>{label}</span>
            <input type="email" {...props} className='border border-gray-200 h-12 px-4 rounded-lg'/>
        </label>
    )
}
