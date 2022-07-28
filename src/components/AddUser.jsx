import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React, {useState} from "react";
import { addUser } from "../service/api";


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const AddUser = () =>
{
    const defaultValue = {
        name: "",
        username: "",
        email: "",
        phone: ""
    }

    const [user , setUser] = useState(defaultValue);

    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.warn(user);
    }

    const addUserDetails = async () =>{
        await addUser(user);
    }
    return(
            <Container>
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone"></Input>
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>
            </Container>
    )
}

export default AddUser;