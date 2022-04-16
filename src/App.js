import { Box, Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Sidebar />
        <Sidebar />
      </Stack>
    </Box>
  );
}

export default App;
