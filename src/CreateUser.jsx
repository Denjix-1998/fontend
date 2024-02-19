import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [volume, setVolume] = useState("");
  const [age, setAge] = useState("");
  const [dad, setDad] = useState("");
  const [mon, setMon] = useState("");
  const [history, setHistory] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [human, setHuman] = useState("");
  const [placeborn, setPlaceborn] = useState("");
  const [placefeed, setPlaceFeed] = useState("");
  const [health, setHealth] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://rmutlnewproject.vercel.app/createUser", {
        name,
        specie,
        volume,
        age,
        dad,
        mon,
        history,
        weight,
        date,
        human,
        placeborn,
        placefeed,
        health,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container farm-theme">
      <h1 className="mt-5 mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
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
              <label htmlFor="specie">สายพันธุ์</label>
              <input
                type="text"
                className="form-control"
                id="specie"
                placeholder="กรอกสายพันธุ์"
                value={specie}
                onChange={(e) => setSpecie(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">อายุ</label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="กรอกอายุ"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">น้ำหนัก</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="กรอกน้ำหนัก"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="mon">ชื่อแม่วัว</label>
              <input
                type="text"
                className="form-control"
                id="mon"
                placeholder="กรอกชื่อแม่วัว"
                value={mon}
                onChange={(e) => setMon(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dad">ชื่อพ่อวัว</label>
              <input
                type="text"
                className="form-control"
                id="dad"
                placeholder="กรอกชื่อพ่อวัว"
                value={dad}
                onChange={(e) => setDad(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="history">ประวัติการเลี้ยง</label>
              <input
                type="text"
                className="form-control"
                id="history"
                placeholder="กรอกประวัติการเลี้ยง"
                value={history}
                onChange={(e) => setHistory(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="volume">จำนวนผลิตภัณฑ์</label>
              <input
                type="text"
                className="form-control"
                id="volume"
                placeholder="กรอกจำนวนที่ซื้อ"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="placeborn">สถานที่เกิด</label>
              <input
                type="text"
                className="form-control"
                id="placeborn"
                placeholder="กรอกสถานที่เกิด"
                value={placeborn}
                onChange={(e) => setPlaceborn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="placefeed">สถานที่เลี้ยง</label>
              <input
                type="text"
                className="form-control"
                id="placefeed"
                placeholder="กรอกสถานที่เลี้ยง"
                value={placefeed}
                onChange={(e) => setPlaceFeed(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="date">วันที่เกิด</label>
              <input
                type="text"
                className="form-control"
                id="date"
                placeholder="กรอกวันที่เกิด"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="human">คนที่เลี้ยง</label>
              <input
                type="text"
                className="form-control"
                id="human"
                placeholder="กรอกคนที่เลี้ยง"
                value={human}
                onChange={(e) => setHuman(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="health">สุขภาพ</label>
              <input
                type="text"
                className="form-control"
                id="health"
                placeholder="กรอกสุขภาพ"
                value={health}
                onChange={(e) => setHealth(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
