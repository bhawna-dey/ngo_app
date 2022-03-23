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



const Books = () => {
  const [formValues, setFormValues] = useState({
	bookname: "",
	author: "",
	genre: "",
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
	axios.post('http://localhost:5000/api/donatebook', formValues)
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
		  Donate Book
  		</Typography>
		  <br/>
        <Grid item>
          <TextField
            id="bname-input"
            name="bookname"
            label="Book Name"
            type="text"
            value={formValues.bookname}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <TextField
            id="author-input"
            name="author"
            label="Author"
            type="text"
            value={formValues.author}
            onChange={handleInputChange}
          />
        </Grid>
		<br/>
        <Grid item>
          <FormControl>
            <FormLabel>Genres</FormLabel>
            <RadioGroup
              name="genre"
              value={formValues.type}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="study"
                value="study"
                control={<Radio size="small" />}
                label="Study"
              />
			  <FormControlLabel
                key="novel"
                value="novel"
                control={<Radio size="small" />}
                label="Novel"
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
export default Books;