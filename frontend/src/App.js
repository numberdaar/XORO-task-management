
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { TaskManager } from "./components/TaskManager/TaskManager";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;
