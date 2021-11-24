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

export const Register = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <TemplateImgAsideBar>
                    <img src="/login-image.svg" alt="" />
                </TemplateImgAsideBar>
                <TemplateMain>
                    <h1 className='font-bold text-3xl text-center max-w-lg'>Crie sua conta gratuitamente!</h1>
                    <TemplateForm>
                        <InputText label='Email' type='email'/>
                        <InputText label='Senha' type='password' />
                        <Button >Criar Conta</Button>
                    </TemplateForm>
                    <Link href='/'>Ja possou uma Conta</Link>
                </TemplateMain>
            </TemplateContent>
        </TemplateContainer>
    )
}
