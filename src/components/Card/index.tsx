import React from 'react'
import { Button } from '../Button'

export const Card = ({expense, category, cost}) => {
    return (
        <article className='bg-white p-4 shadow-md h-40 rounded-lg relative flex justify-between flex-col gap-2'>
            <Button variat='delete'>Excluir</Button>
            <h2 className='font-bold text-xl '>{expense}</h2>
            <p className='px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 rounded-full self-start'>{category}</p>
            <p className='font-medium'>{cost}</p>
        </article>
    )
}
