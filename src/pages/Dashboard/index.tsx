import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { TemplateContainer } from "../../components/templates";
import Router from 'next/router'

export default function Dashboard() {

    const array = [
        { id: '0', expense: 'Netflix', category:'streamming', cost: 39.99},
        { id: '1', expense: 'Ifood', category:'food', cost: 25.99},
        { id: '2', expense: 'Spotify', category:'streamming', cost: 19.99},
        { id: '3', expense: 'Internet', category:'account', cost: 99.99},
        { id: '4', expense: 'Amazon', category:'streamming', cost: 9.99}
    ]

    function handleAddNewExpense () {
        Router.push('/dashboard/add')
    }

    return (
        <TemplateContainer>
            <header className='w-full max-w-screen-lg h-1/6 flex items-center justify-between'>
                <span className='font-bold text-2xl'>
                    Finance Control
                </span>
                <nav className='flex gap-4'>
                    <Button onClick={handleAddNewExpense}>Adicionar nova Despesa</Button>
                    <Button variat='ghost'>Sair</Button>
                </nav>
            </header>

            <main className='w-full max-w-screen-lg bg-purple-50 h-5/6 overflow-y-scroll grid content-start grid-cols-3 gap-4 p-8'>
                {array.map((item) => (
                    <Card key={item.id} expense={item.expense} category={item.category} cost={item.cost} />
                ))}
            </main>
        </TemplateContainer>
    )
}