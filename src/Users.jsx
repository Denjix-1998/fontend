import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://rmutlnewproject.vercel.app/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://rmutlnewproject.vercel.app/deleteUser/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Link to="/create" className="btn btn-success">
        Add +
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ชื่อวัว</th>
            <th scope="col">ชื่อแม่วัว</th>
            <th scope="col">ราคา</th>
            <th scope="col">จำนวนการซื้อ</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.mon}</td>
              <td>{user.price}</td>
              <td>{user.score}</td>
              <td>
                <Link to={`detail/${user._id}`} className="btn btn-primary">
                  Detail
                </Link>
                <Link to={`update/${user._id}`} className="btn btn-success">
                  Update
                </Link>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
