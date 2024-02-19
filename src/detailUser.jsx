import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

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
    <div>
      <h1>ชื่อวัว: {name}</h1>
      <h1>สายพันธุ์ : {specie}</h1>
      <h1>อายุ :{age}</h1>
      <h1>น้ำหนัก :{weight}</h1>
      <h1>ชื่อแม่วัว : {mon}</h1>
      <h1>ชื่อพ่อวัว : {dad}</h1>
      <h1>สถานที่เลี้ยง : {placeborn}</h1>
      <h1>ประวัติการเลี้ยง : {history}</h1>
      <h1>สุขภาพวัว : {health}</h1>
      <h1>วันเวลาที่รีดนมวัว : {date}</h1>
      <h1>คนรีดนม : {human}</h1>
      <h1>สถานที่ผลิต : {placefeed}</h1>
      <h1>จำนวนผลิต๓ัณฑ์ : {volume}</h1>
    </div>
  );
}
