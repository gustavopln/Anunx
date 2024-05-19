import {     
    Typography,
    Box,
    IconButton,
} from '@material-ui/core'

import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const classes = useStyles()

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => { /*A função que é executada toda fez que selecionar ou arrastar uma imagem*/
            /*Cria uma nova referência de objeto para criar um preview das imagens que foram selecionadas*/
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file) /* método do próprio javaScript*/
                })
            })

            /*Para injetar esses arquivos no formulário setFiedValue('nome', valor)*/
            setFieldValue('files', [
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = filePath => {
        const newFileState = files.filter(file => file.path !== filePath)
        setFieldValue('files', newFileState)
    }

    return (
        <>
            <Typography component="h6" variant="h6" color={errors && touched ? "error" : "textPrimary"}>
                Imagens
            </Typography>
            <Typography component="div" variant="body2" color={errors && touched ? "error" : "textPrimary"}>
                A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
                errors && touched
                    ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography> /*gutterBottom, para ter um espaço maior em relação ao próximo box */
                    : null
            }

            <Box className={classes.thumbsContainer}>
                <Box className={classes.dropzone} {...getRootProps()}>
                    <input name="files" {...getInputProps()} />
                    <Typography variant="body2" color={errors && touched ? "error" : "textPrimary"}>
                        Clique aqui para adicionar ou arraste a imagem para cá
                    </Typography>
                </Box>

                {
                    files.map((file, index) => (
                        <Box
                            key={file.name} 
                            className={classes.thumb}
                            style={{ backgroundImage: `url(${file.preview})` }}
                        >
                            {
                                index === 0 ?
                                <Box className={classes.mainImage}>
                                    <Typography variant='body2' color='secondary'>
                                        Principal
                                    </Typography>
                                </Box>
                                : null
                            }                                
                            <Box className={classes.mask}>
                                <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                                    <DeleteForever fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                }
                
            </Box>
        </>
    )
}

export default FileUpload