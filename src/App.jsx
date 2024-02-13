import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DetailUser from "./detailUser";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/create" element={<CreateUser />}></Route>
            <Route path="/update/:id" element={<UpdateUser />}></Route>
            <Route path="/detail/:id" element={<DetailUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
