import tw from 'tailwind-styled-components'

export const TemplateContainer = tw.div`
    w-screen 
    h-screen 
    bg-gray-100 
    flex 
    flex-col
    items-center
`

export const TemplateContent = tw.div`
    w-full 
    h-full 
    max-w-screen-xl 
    grid 
    grid-cols-2
`
export const TemplateImgAsideBar = tw.aside`
    w-full 
    flex 
    justify-center 
    items-center
`
export const TemplateMain = tw.main`
    w-full 
    flex 
    flex-col 
    justify-center 
    gap-16 
    ml-16
`

export const TemplateForm = tw.form`
    flex 
    flex-col 
    w-full 
    gap-8
`