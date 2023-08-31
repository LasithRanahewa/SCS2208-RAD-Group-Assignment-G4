import React from "react";
import Navbar from "../components/Navbar";
import { TextField, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import BookMini from "../components/BookMini";

const BooksPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar />

      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Button
          color="primary"
          variant="contained"
          sx={{
            margin: 1,
            width: "14ch",
            alignSelf: "center",
            backgroundColor: "#18B1C8",
            "&:hover": {
              backgroundColor: "#18B1C8",
            },
          }}
          onClick={handleClick}
        >
          All
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Category 1</MenuItem>
          <MenuItem onClick={handleClose}>Category 2</MenuItem>
          <MenuItem onClick={handleClose}>Category 3</MenuItem>
        </Menu>
        <TextField
          label="Find a book"
          variant="outlined"
          size="small"
          sx={{
            mr: 1,
            borderRadius: "100%",
            margin: 1,
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
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: 1,
            width: "14ch",
            alignSelf: "center",
            backgroundColor: "#18B1C8",
            "&:hover": {
              backgroundColor: "#18B1C8",
            },
          }}
        >
          Search
        </Button>
      </div>

      <div style={{ height: "2rem" }}></div>
      <div className="booklist">
        <BookMini />
        <BookMini />
        <BookMini />
      </div>
    </>
  );
};

export default BooksPage;
