import React from 'react';
import { Button, TextField, Typography, Stack } from '@mui/material';
import {  Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



function UpdateForm() {
    const navigate = useNavigate()
    let { id } = useParams();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: async () => {
            const response = await fetch("http://localhost:8080/getEmployeeById/"+id)
            const data = await response.json();
            console.log("resp Data is: ",data);
            return {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            }
        }
    });
    const onSubmit = (data) => {
        // console.log(">>>",data);
        axios.put(`http://localhost:8080/updateEmployee/${id}`,{...data})
        .then((response)=>{
            console.log("responsed Data is: ",response.data);
        })
        reset();
        navigate("/")
    }
    return (
            <Paper elevation={12} sx={{ marginTop: "4px", height: "50vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant='h4' sx={{ fontFamily: "Sans serif", m: 3 }}>Update Employee</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <TextField variant="outlined" size="small"   {...register("firstName", { required: true })} />
                        <TextField variant="outlined" size="small"   {...register("lastName", { required: true })} />
                        <TextField variant="outlined" size="small"   {...register("email", { required: true })} />
                        <Button variant="contained" size="small" sx={{ m: 2 }} type="submit">Update</Button>
                    </Stack>
                </form>
            </Paper>
    )
}
export default UpdateForm;