import React, { useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";

import Navbar from "../Navbar";


const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload=async(e)=>{
    setSelectedFile(e.target.files[0]);
    const imgPath = document.querySelector('input[type=file]').files[0];
     const reader= new FileReader();

     reader.addEventListener("load",()=>{
      localStorage.setItem("imgData", reader.result);
     }, false);

     if (imgPath) {
      reader.readAsDataURL(imgPath);
  }
}
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData={
      name: name,
      email:email,
      gender:gender,
      about:about,
      img: selectedFile
    };

    console.log(formData);
   

    axios
      .post("http://localhost:5000/api/userprofile", formData)
      .then((res) => {
        alert("Data Upload success");
      })
      .catch((err) => alert("Data Upload Error"));
    };


  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Typography variant="h3" component="h2">
            User Profile
          </Typography>
          <br />
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                row
              >
                <FormControlLabel
                  key="male"
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
                <FormControlLabel
                  key="female"
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
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
          <br />
          <Grid item>
            <TextField
              id="about-input"
              name="about"
              label="About"
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </Grid>
          <br />
          <input type="file" id='profileImg' onChange={handleUpload}/>
          <br/>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default UserProfile;
