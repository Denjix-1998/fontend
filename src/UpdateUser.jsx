import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

import "./DetailUser.css"; // Import CSS file for farm theme

export default function UpdateUser() {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`https://rmutlnewproject.vercel.app/getUser/${id}`)
      .then((result) => {
        setName(result.data.name);
        setVolume(result.data.volume);
        setHistory(result.data.history);
        setWeight(result.data.weight);
        setDate(result.data.date);
        setHuman(result.data.human);
        setSpecie(result.data.specie);
        setPlaceborn(result.data.placeborn);
        setPlaceFeed(result.data.placefeed);
        setHealth(result.data.health);
        setAge(result.data.age);
        setMon(result.data.mon);
        setDad(result.data.dad);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`https://rmutlnewproject.vercel.app/updateUser/${id}`, {
        name,
        volume,
        history,
        weight,
        date,
        human,
        specie,
        placeborn,
        placefeed,
        health,
        age,
        mon,
        dad,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container farm-theme">
      <h1 className="mt-5 mb-4">Update User</h1>
      <form onSubmit={Update}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">ชื่อวัว</label>
              <input
                type="text"
                className="form-control"
                id="name"
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
                value={health}
                onChange={(e) => setHealth(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
}
