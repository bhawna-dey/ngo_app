import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@mui/material/Typography';
import Button from "@material-ui/core/Button";
import InputLabel from '@mui/material/InputLabel';
import Navbar from '../Navbar';



const Medicine = () => {
  const [formValues, setFormValues] = useState({
	medicine_name: "",
	usage: "",
	group: "",
	category: "",
	price: 0,
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
	axios.post('http://localhost:5000/api/donatemedicine', formValues)
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
		  Donate Medicine
  		</Typography>
		  <br/>
        <Grid item>
          <TextField
            id="mname-input"
            name="medicine_name"
            label="Medicine Name"
            type="text"
            value={formValues.medicine_name}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <TextField
            id="usage-input"
            name="usage"
            label="Usage"
            type="text"
            value={formValues.usage}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <FormControl>
            <FormLabel>Groups</FormLabel>
            <RadioGroup
              name="group"
              value={formValues.type}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="children"
                value="children"
                control={<Radio size="small" />}
                label="Children"
              />
			  <FormControlLabel
                key="adult"
                value="adult"
                control={<Radio size="small" />}
                label="Adult"
              />
              <FormControlLabel
                key="other"
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
		<br/>
        <Grid item>
          <TextField
            id="category-input"
            name="category"
            label="Category"
            type="text"
            value={formValues.category}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
		<Grid item>
          <TextField
            id="price-input"
            name="price"
            label="Price"
            type="number"
            value={formValues.price}
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
export default Medicine;