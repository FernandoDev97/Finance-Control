import React, { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { InputText } from '../InputText';

interface Props {
    children?: ReactNode
    id?: string
    onClose?: () => void
}

export const ModalAddExpense = ({ children, id = 'modal', onClose }: Props) => {

    function handleOutSideClick(e) {
        if (e.target.id === id) {
            onClose();
        }
    }
    return (
        <TemplateModal id={id} onClick={handleOutSideClick} >
            <Modal>
                <TitleModal>Cadastre nova despesa</TitleModal>
                <TemplateFormModal>
                    <InputText label='Despesa:' type='text'/>
                    <InputText label='Categoria:' type='text' />
                    <InputText label='Valor:' type='number' />
                    <ContainerButtonModal>
                        <ButtonAdd>Adicionar</ButtonAdd>
                        <ButtonCalcel onClick={onClose}>Cancelar</ButtonCalcel>
                    </ContainerButtonModal>
                </TemplateFormModal>
            </Modal>
        </TemplateModal>
    )
}

const TemplateModal = tw.section`
    w-full 
    h-screen 
    absolute 
    top-0 
    left-0 
    z-10 
    bg-black 
    bg-opacity-70 
    flex 
    justify-center 
    items-center
`
const Modal = tw.div`
    bg-gray-100 
    text-black 
    w-3/5 
    h-3/5 
    rounded-lg
    relative
`
const TitleModal = tw.h1`
    h-20 
    w-full 
    bg-purple-400 
    rounded-t-md
    flex 
    justify-center 
    items-center 
    font-bold 
    text-3xl 
    text-center 
    text-white
`

const TemplateFormModal = tw.form`
    flex 
    flex-col 
    justify-center
    items-center
    w-full 
    gap-8
    mt-14
`
const ContainerButtonModal = tw.div`
    w-1/2 
    h-20 
    flex 
    items-center 
    justify-around 
`
const ButtonAdd = tw.button`
    w-28 
    h-10 
    rounded-lg 
    bg-green-500 
    hover:bg-green-400 
    text-white 
    font-bold
`
const ButtonCalcel = tw.button`
    w-28 
    h-10 
    mr-3 
    rounded-lg 
    bg-red-400 
    hover:bg-red-300 
    text-white 
    font-bold
`