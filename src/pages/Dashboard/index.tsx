import { Button } from "../../components/Button";
import { TemplateContainer } from "../../components/templates";

export default function Dashboard() {
    return (
        <div>
            <TemplateContainer>
                <header className='w-full max-w-screen-xl items-center h-1/6 flex justify-between'>
                    <span className='font-bold text-2xl'>
                        Finance control
                    </span>
                    <nav className='flex gap-4'>
                        <Button>Adicionar nova Conta</Button>
                        <Button variat='ghost'>Sair</Button>
                    </nav>
                </header>
            </TemplateContainer>
        </div>
    )
}