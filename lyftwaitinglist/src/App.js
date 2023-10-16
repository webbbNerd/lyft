import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/HigerComp/Navbar";
import Form from "./components/UserComp/Form";
import WaitingList from "./components/UserComp/WaitingList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/form" />} />
        <Route path="/form" element={<Form />} />
        <Route path="/waitinglist" element={<WaitingList />} />
      </Routes>
    </Router>
  );
}

export default App;
