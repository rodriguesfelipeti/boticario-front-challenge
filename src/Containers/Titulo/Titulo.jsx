import React from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'

const Titulo = () => {

    const classes = useStyles()

    return(
        <Container>
            <Typography className={classes.container}>
                Ultimos Produtos
            </Typography>
        </Container>
    )
}

export default Titulo