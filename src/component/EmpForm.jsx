import { Button, TextField, Typography, Stack } from '@mui/material';
import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function EmpForm() {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:8080/addEmployeeData", { ...data })
            .then((response) => {
                console.log(response.data);
            })
        reset();
        navigate("/")
    }
    return (
            <Paper elevation={12} sx={{ marginTop: "4px", height: "50vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h4' sx={{ fontFamily: "Sans serif", m: 3 }}>Add Employee</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <TextField variant="outlined" size="small" label='firstName' {...register("firstName", { required: true })} />
                        <TextField variant="outlined" size="small" label='lastName' {...register("lastName", { required: true })} />
                        <TextField variant="outlined" size="small" label='email' {...register("email", { required: true })} />
                        <Button variant="contained" size="small" sx={{ m: 2 }} type="submit">Add</Button>
                    </Stack>
                </form>
            </Paper>
    );
}
export default EmpForm;