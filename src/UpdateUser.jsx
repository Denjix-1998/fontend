import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [volume, setVolume] = useState("");
  const [price, setPrice] = useState("");
  const [dad, setDad] = useState("");
  const [mon, setMon] = useState("");
  const [score, setScore] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rmutlnewproject.vercel.app/getUser/${id}`) // Use template literals to insert id
      .then((result) => {
        setName(result.data.name);
        setVolume(result.data.volume);
        setPrice(result.data.price);
        setMon(result.data.mon);
        setDad(result.data.dad);
        setScore(result.data.score);
      })
      .catch((err) => console.log(err));
  }, [id]); // Add id as a dependency

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`https://rmutlnewproject.vercel.app/updateUser/${id}`, {
        name,
        price,
        volume,
        mon,
        dad,
        score,
      }) // Send data to update
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={Update}>
      <h2>Update User</h2>
      <div className="form-group">
        <label htmlFor="name">ชื่อวัว</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="กรอกชื่อวัว"
          value={name}
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
          value={price}
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
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">ชื่อแม่วัว</label>
        <input
          type="text"
          className="form-control"
          id="mon"
          value={mon}
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
          value={dad}
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
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Update
      </button>
    </form>
  );
}
