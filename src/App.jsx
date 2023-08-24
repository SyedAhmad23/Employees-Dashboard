import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
