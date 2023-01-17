import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [cards, setCards] = React.useState("");

  const handleChange = (event) => {
    setCards(event.target.value);
  };

  return (
    <Box sx={{ width: "100px", height: "55px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cards}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={60}>60</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
