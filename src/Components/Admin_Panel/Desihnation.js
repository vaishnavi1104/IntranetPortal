import React, { useState, useEffect } from "react";

import {
  Box,
  Stack,
  Table,
  TableBody,
  TextField,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Typography,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // npm i react-toastify
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";

// min 22:00
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(1),
  textAlign: "center",
}));

const Designation = () => {
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // New Department
  const [designationName, setName] = useState("");
  //const [age, setAge] = useState("");
  //const [isActive, setIsActive] = useState(0);
  //const [checked, setChecked] = useState(false);

  {/*const handleChange = (event) => {
    setChecked(event.target.checked);
    checked === false ? setIsActive(1) : setIsActive(0);
  }; */}

  // Edit Employee //////////////// 19:41
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  //const [editAge, setEditAge] = useState("");
  //const [editIsActive, setEditIsActive] = useState(0); // 0 0
  //const [ischecked, setIsChecked] = useState(false);

  {/*const handleisChange = (e) => {
    console.log("ischecked " + e.target.checked);
    setIsChecked(e.target.checked);
  };*/}

  {/*const empdata = [
    {
      id: 1,
      name: "Mario",
      age: 29,
      isActive: 1,
    },
    {
      id: 2,
      name: "Vicky",
      age: 30,
      isActive: 1,
    },
    {
      id: 3,
      name: "Ronald",
      age: 34,
      isActive: 0,
    },
  ];*/}
  const [data, setData] = useState([]);

  useEffect(() => {
     //setData(empdata);
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("https://localhost:7274/api/Designation");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Save current state
  const handleEdit = async (id) => {
    handleOpen();
    const result = await axios.get(`https://localhost:7274/api/Designation/${id}`);
    setEditName(result.data.designationName);
    //setEditAge(result.data.age);
    //setEditIsActive(result.data.isActive); 
    //console.log(editIsActive);
    //editIsActive === 0 ? setIsChecked(false) : setIsChecked(true);
    setEditId(id);
  };

  // Update Employee
  const handleUpdate = async () => {
    const url = `https://localhost:7274/api/Designation/${editId}`;
    const updateData = {
      id: editId,
      designationName: editName,
      //age: editAge,
      //isActive: ischecked ? 1 : 0,
    };
    // console.log(updateData.isActive);
    try {
      const result = await axios.put(url, updateData);
      console.log(result.data);
      handleClose();
      getData();
      clear();
      toast.success("Designation has been updated");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Department
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this Designation") === true) {
      const url = `https://localhost:7274/api/Designation/${id}`;
      try {
        const result = await axios.delete(url);

        if (result.status === 200) {
            toast.error("Delete operation has fail");
          
        } else {
            toast.success("Designation has been deleted");
            getData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Add new Employee
  const handleSave = async () => {
    const url = "https://localhost:7274/api/Designation";
    const data = {
        designationName : designationName,

    };
    try {
      const result = await axios.post(url, data);
      // reload the table from db
      getData();
      clear();
      toast.success("Designation has been added");
    } catch (error) {
      console.log(error);
    }
  };

  // Clear submit
  const clear = () => {
    setName("");
   // setAge("");
    // setIsActive(0);
   // setEditName("");
   // setEditAge("");
    // setEditIsActive(0);
    // setEditId("");
    // setChecked(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <ToastContainer />
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        marginTop={"40px"}
        spacing={3}
      >
        <Grid item>
          <Item>
            <TextField
              id="name-input"
              label="designation Name"
              name="designationName"
              value={designationName}
              onChange={(e) => setName(e.target.value)}
            />
          </Item>
        </Grid>
       {/* <Grid item>
          <Item>
            <TextField
              id="age-input"
              label="age"
              name="email"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Item>
        </Grid>
        <Grid item mt={1}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label="IsActive"
          />
        </Grid>*/}
        <Grid item mt={2}>
          <Button variant="contained" onClick={() => handleSave()}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <TableContainer component={Paper} sx={{ width: 500 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Designation Name 
                </TableCell>
                {/*<TableCell align="right" sx={{ fontWeight: "bold" }}>
                  age
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  IsActive
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Actions
                </TableCell>*/}
              </TableRow>
            </TableHead>
            {
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{item.designationName}</TableCell>
                    {/*<TableCell align="right">{item.age}</TableCell>
                    <TableCell align="center">{item.isActive}</TableCell>*/}
                    <TableCell align="center">
                      <Stack spacing={3} direction="row">
                        {/*<Button
                          variant="contained"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>{" "}*/}
                        &nbsp;
                        <Button
                          variant="contained"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
        </TableContainer>
      </Box>

    {/*  <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modify / Update the Department
          </Typography>
          <br />
          <Grid
            container
            direction={"row"}
            justifyContent="left"
            // columnSpacing={{ xs: 1 }}
          />
            <Grid item md={5}>
              <TextField
                id="name-input"
                label="Department Name"
                name="departmentName"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </Grid>
            {/*<Grid item md={5}>
              <TextField
                id="age-input"
                label="age"
                name="age"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
            </Grid>
            <Grid item mt={1}>
              <FormControlLabel
                control={
                  <Checkbox checked={ischecked} onChange={handleisChange} />
                }
                label="isActive"
              />
            </Grid>
          </Grid>
          <br />
          <Button variant="contained" onClick={handleClose}>
            close
          </Button>{" "}
          &nbsp;
          <Button variant="contained" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Box>
      </Modal>*/}
    </div>
  );
};

export default Designation;
