import { Button, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function HomeComp() {
  const navigate = useNavigate()
  const [row, setRow] = useState([])
  const [state, setState] = useState(true)
  //Update Form Data.......................................................
  // const updateForm = (id) => {
  //   setId(id)
  //   navigate("/updateEmployee/${id}")
  // }
  //Delete Form Data via there id..........................................
  const deleteForm = (id) => {
    axios.post("http://localhost:8080/deleteEmployee/" + id)
      .then((response) => {
        console.log(response.data);
      })
    setState(false)
    // console.log("The Delete function Called......");
  }

  //Axios Method To Fetch The Data.......................................

  useEffect(() => {

    console.log("the use Effect is called....");
    axios.get("http://localhost:8080/getEmployeeData")
      .then((response) => {
        setRow(response.data)
      })

  }, [state])
  return (
      <Paper elevation={0} sx={{ mt: 2 }}>
        <TableContainer component={Paper} >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                // row.length === 0 ? (
                //   <StyledTableRow scope="row">
                //     <Typography variant="h4" sx={{ margin:"4px"}}>No Records found. Add some...!</Typography>
                //   </StyledTableRow>
                // ) :
                row.map((data) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell component="th" scope="row">
                      {data.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{data.firstName}</StyledTableCell>
                    <StyledTableCell align="center">{data.lastName}</StyledTableCell>
                    <StyledTableCell align="center">{data.email}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button onClick={() => { navigate(`/updateEmployee/${data?.id}`) }}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => { deleteForm(data.id) }}>
                        <DeleteIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  )
}

export default HomeComp