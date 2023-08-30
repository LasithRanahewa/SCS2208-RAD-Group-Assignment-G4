import React from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import { useState } from "react";
import StoreMini from "../components/StoreMini";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  searchInput: {
    margin: theme.spacing(1),
    width: "40ch",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#18B1C8",
      },
      "&:hover fieldset": {
        borderColor: "#18B1C8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#18B1C8",
      },
    },
    "& .MuiFormLabel-root": {
      color: "#DAE1E7",
    },
    "& .MuiInputBase-input": {
      color: "#DAE1E7",
    },
  },
  btn: {
    margin: theme.spacing(1),
    width: "14ch",
    alignSelf: "center",
    backgroundColor: "#18B1C8",
    "&:hover": {
      backgroundColor: "#18B1C8",
    },
  },
}));

const VendorsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.searchContainer}>
        <TextField
          label="Find a book"
          variant="outlined"
          size="small"
          sx={{ mr: 1, borderRadius: "100%" }}
          className={classes.searchInput}
        />
        <Button variant="contained" color="primary" className={classes.btn}>
          Search
        </Button>
      </div>

      <div style={{ height: "2rem" }}></div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StoreMini />
        </Grid>
      </Grid>
    </div>
  );
};

export default VendorsPage;