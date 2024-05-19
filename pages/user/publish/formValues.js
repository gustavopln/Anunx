import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    phone: '',
    name: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um título maior')
        .max(100, 'Titulo ultrapassou limite de 100 caracteres')
        .required('Campo obrigatório'),
    category: yup.string().required('Campo Obrigatório'),
    description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')        
        .required('Campo obrigatório'),
    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório')
})

export {
    initialValues,
    validationSchema,
}