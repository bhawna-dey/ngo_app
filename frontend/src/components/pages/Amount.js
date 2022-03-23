import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@mui/material/Typography';
import Button from "@material-ui/core/Button";
import InputLabel from '@mui/material/InputLabel';
import Navbar from '../Navbar';



const Amount = () => {
  const [formValues, setFormValues] = useState({
	name:"",
	email: "",
	amount:0,
	status:""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
	axios.post('http://localhost:5000/api/donateamount', formValues)
	.then((res) => {
		console.log(res.data)
    navigate('/');
	}).catch((error) => {
		console.log(error)
	});
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
	  <Typography variant="h3" component="h2">
		  Donate Amount
  		</Typography>
		  <br/>
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}         
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <TextField
            id="amount-input"
            name="amount"
            label="Amount"
            type="number"
            value={formValues.amount}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <FormControl>
			  <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
            >
              <MenuItem key="donated" value="donated">
                Donated
              </MenuItem>
              <MenuItem key="delivered" value="delivered">
                Delivered
              </MenuItem>
              <MenuItem key="selected " value="selected">
                Selected
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
		<br/>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </>
  );
};
export default Amount;