import React from 'react';

import { useSelector, useDispatch } from "react-redux";

import * as ContactOperations from "../../operations/contacts";
import { getContacts } from "../../selectors/contacts";
import { Grid } from '@material-ui/core';

import useStyles from './styles'



function List() {


    const contacts = useSelector(getContacts);

    const classes = useStyles();


    return (
        < Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {contacts.map(({ id, name, message }) => (

                <Grid key={id} item xs={12} sm={6} md={6}>
                    <p>
                        <b>{name} </b>

                        <em>{message}</em>
                    </p>



                </Grid>
            ))
            }
        </Grid >
    );
}


export default List