// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState("");
  const [price, setPrice] = useState("");
  const [dad, setDad] = useState("");
  const [mon, setMon] = useState("");
  const [score, setScore] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://rmutlnewproject.vercel.app/createUser", {
        name,
        price,
        volume,
        mon,
        dad,
        score,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div className="form-group">
        <label htmlFor="name">ชื่อวัว</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="กรอกชื่อวัว"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">ราคา</label>
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="กรุณา กรอกราคา"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">จำนวนที่ซื้อ</label>
        <input
          type="text"
          className="form-control"
          id="volume"
          placeholder="Enter Age"
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">ชื่อแม่วัว</label>
        <input
          type="text"
          className="form-control"
          id="mon"
          placeholder="ชื่อแม่วัว"
          onChange={(e) => setMon(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">ชื่อพ่อวัว</label>
        <input
          type="text"
          className="form-control"
          id="dad"
          placeholder="ชื่อพ่อวัว"
          onChange={(e) => setDad(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">คะแนนรีวิว</label>
        <input
          type="text"
          className="form-control"
          id="score"
          placeholder="คะแนนรีวิว"
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}

export default CreateUser;
