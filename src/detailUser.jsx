import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

import "./DetailUser.css"; // Import CSS file for farm theme

export default function DetailUser() {
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

  useEffect(() => {
    axios
      .get(`https://rmutlnewproject.vercel.app/getUser/${id}`) // Use template literals to insert id
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
  return (
    <div className="container farm-theme">
      <h1 className="mt-5 mb-4">รายละเอียด น้องวัว</h1>
      <div className="row">
        <div className="col-md-6">
          <h5>ชื่อวัว: {name}</h5>
          <h5>สายพันธุ์: {specie}</h5>
          <h5>อายุ: {age}</h5>
          <h5>น้ำหนัก: {weight}</h5>
          <h5>ชื่อแม่วัว: {mon}</h5>
          <h5>ชื่อพ่อวัว: {dad}</h5>
        </div>
        <div className="col-md-6">
          <h5>สถานที่เลี้ยง: {placeborn}</h5>
          <h5>ประวัติการเลี้ยง: {history}</h5>
          <h5>สุขภาพวัว: {health}</h5>
          <h5>วันเวลาที่รีดนมวัว: {date}</h5>
          <h5>คนรีดนม: {human}</h5>
          <h5>สถานที่ผลิต: {placefeed}</h5>
          <h5>จำนวนผลิตภัณฑ์: {volume}</h5>
        </div>
      </div>
    </div>
  );
}
