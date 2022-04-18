import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const InputBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const BirdsInput = ({ setBirds, birds }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setBirds([...birds, { argument: Number(birds.length), value: Number(value) }]);
    setValue("");
    event.preventDefault();
  };

  return (
    <div>
      <Typography>Birds on lake</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        id="birds-form"
        onSubmit={handleSubmit}
      >
        <Box sx={InputBox}>
          <TextField
            required
            type="number"
            id="outlined-required"
            label="Birds"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" form="birds-form" variant="contained">
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default BirdsInput;
