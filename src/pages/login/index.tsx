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

export const Login = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <TemplateImgAsideBar>
                    <img src="/login-image.svg" alt="" />
                </TemplateImgAsideBar>
                <TemplateMain>
                    <h1 className='font-bold text-3xl text-center max-w-lg'>Tenha o controle de todos os seus gastos!</h1>
                    <TemplateForm>
                        <InputText label='Email' type='email'/>
                        <InputText label='Senha' type='password' />
                        <Button >Login</Button>
                    </TemplateForm>
                    <Link href='/register'>Criar conta</Link>
                </TemplateMain>
            </TemplateContent>
        </TemplateContainer>
    )
}
