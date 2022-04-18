import "./App.css";
import BasicTabs from "./components/tabs";
import { useState } from "react";
import { Typography } from "@mui/material";

const TypographyStyle = {
  padding: 0,
  display: "flex",
};

function App() {
  const [birds, setBirds] = useState([
    { argument: 0, value: 5 },
    { argument: 1, value: 20 },
    { argument: 2, value: 14 },
  ]);

  return (
    <div className="App">
      <Typography variant="h6" gutterBottom component="div" sx={TypographyStyle}>
        D4 Birdwatcher
      </Typography>
      <BasicTabs setBirds={setBirds} birds={birds} />
    </div>
  );
}

export default App;
