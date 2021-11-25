import { Button } from "../../components/Button"
import { InputText } from "../../components/InputText"
import { Link } from "../../components/Link"
import { 
    TemplateImgAsideBar,
    TemplateContainer, 
    TemplateContent, 
    TemplateMain,
    TemplateForm
} from "../../components/templates"

export const DashboardAdd = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <TemplateImgAsideBar>
                    <img src="/login-image.svg" alt="" />
                </TemplateImgAsideBar>
                <TemplateMain>
                    <h1 className='font-bold text-3xl text-center max-w-lg'>Cadastre nova despesa</h1>
                    <TemplateForm>
                        <InputText label='Despesa' type='text'/>
                        <InputText label='Categoria' type='text' />
                        <InputText label='Valor' type='number' />
                        <Button >Cadastrar</Button>
                    </TemplateForm>
                    <Link href='/dashboard'>Voltar</Link>
                </TemplateMain>
            </TemplateContent>
        </TemplateContainer>
    )
}
