import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";

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
      <h1>ระบบจัดการน้องวัว</h1>
      <Link
        to="/create"
        className="btn btn-primary btn-add"
        style={{ float: "left", marginTop: "10px", marginLeft: "10px" }}
      >
        เพิ่มข้อมูล
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ชื่อวัว</th>
            <th scope="col">ชื่อแม่วัว</th>
            <th scope="col">ชื่อพ่อวัว</th>
            <th scope="col">สายพันธุ๋</th>
            <th scope="col">อายุ</th>
            <th scope="col">ชื่อคนให้นมวัว</th>
            <th scope="col">เวลาที่ให้นมวัว</th>
            <th scope="col">ปุ่มการทำงาน</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.mon}</td>
              <td>{user.dad}</td>
              <td>{user.specie}</td>
              <td>{user.age}</td>

              <td>{user.human}</td>
              <td>{user.date}</td>
              <td>
                <Link to={`detail/${user._id}`} className="btn btn-primary">
                  รายละเอียด
                </Link>
                <Link to={`update/${user._id}`} className="btn btn-success">
                  แก้ไขข้อมูล
                </Link>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(user._id)}
                >
                  ลบข้อมูล
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
