import React from 'react'

import { Container } from '@material-ui/core'
import { Item } from '../../components'
import useStyles from './styles'

const data = require('../../data/products.json')

const Items = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            {data.map( (item, index) => {
                return(
                    <Item key={index} item={item}/>
                )
            })}
          
        </Container>
    )
}

export default Items