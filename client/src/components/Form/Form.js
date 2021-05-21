import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"

import { getAllContacts } from "../../redux/contacts/contacts-selectors";
import * as ContactOperations from "../../redux/contacts/contacts-operations";



import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';


function Form() {


    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch(ContactOperations.fetchContacts());
        console.log(3)

    })

    const classes = useStyles();

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;

            case "message":
                setMessage(value);
                break;

            default:
                return;
        }
    };

    const checkEmptyQuery = (name, message) => {
        return name.trim() === '' || message.trim() === '';
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkEmptyQuery(name, message)) {
            toast.info(' Enter the correct name and number!');
        } else if (message != "" && message.length < 5) {
            toast.info(' Minimal message lenth is 5 characters!')
        } else {
            dispatch(ContactOperations.addContact(name, message));
            resetInput();
        }

    };

    const resetInput = () => {
        setName("");
        setMessage("");
    };


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} id="contact" onSubmit={handleSubmit}>
                <Typography variant="h6" >Add your message</Typography>
                <TextField

                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    variant="outlined"
                    fullWidth
                />



                <TextField


                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}

                    label="Message"
                    variant="outlined"
                    multiline
                    fullWidth
                // rowsMax={4}

                />



                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

            </form>
        </Paper>
    )

}


export default Form;