import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    card: {
        height: '100%',
    },
    cardMedia: {
        paddingTop: '56%',
    }
}))

const Product = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible
                                navButtonsProps={{
                                    style: {
                                        color: 'white',
                                    }
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}                                     
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Títudo da imagem"
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}                                     
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Títudo da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado 16 junho de 2021</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label="categoria" />
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum mollis cubilia sit etiam feugiat convallis id convallis, etiam tellus phasellus suscipit mattis purus velit leo lorem nullam, aliquet proin mi malesuada hac dui ligula praesent. nunc in himenaeos per fringilla posuere pretium phasellus primis ad, erat habitasse quam accumsan ad porta platea lorem, felis ut adipiscing augue vitae phasellus curae magna. taciti cubilia dictumst quis nisl aenean arcu purus magna, posuere blandit torquent inceptos bibendum dictumst class nostra, imperdiet conubia quis magna pharetra per class. litora interdum curae sollicitudin auctor ante scelerisque, dui odio imperdiet ornare scelerisque at, morbi ad est purus ultricies.     
                            </Typography>                            
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        {/* Elevation = 0 para tirar o sombreamento padrão e ficar mais parecido com o box */}
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>G</Avatar>
                                }
                                title="Gustavo Paulino"
                                subheader="gustavo@gmail.com"
                            />
                            <CardMedia 
                                image="https://source.unsplash.com/random"
                                title="Gustavo Paulino"
                            />
                        </Card>

                        <Box className={classes.box}>
                            <Typography component="h6" variant="h6">Localização</Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product