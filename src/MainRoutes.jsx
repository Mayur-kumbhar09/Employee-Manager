import React from 'react'
import { Container, Button , Typography , Paper } from "@mui/material";
import { Link } from 'react-router-dom';
function MainRoutes() {
    return(
        <Container maxWidth="md">
        <Paper elevation={12}>
          <Link to="/addEmployee">
            <Button variant='contained' sx={{ padding: "7px", m: 3 }}>
              <Typography variant='h6'>Add Employee</Typography></Button>
          </Link>
        </Paper>
      </Container>
    )
}
export default MainRoutes;