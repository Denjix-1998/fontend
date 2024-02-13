import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

export default function DetailUser() {
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
  }, [id]);
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>ราคา : {price}</h1>
      <h1>จำนวนการซื้อ :{volume}</h1>
      <h1>ชื่อแม่วัว : {mon}</h1>
      <h1>ชื่อพ่อวัว : {dad}</h1>
      <h1>คะแนนรีวิว:{score}</h1>
    </div>
  );
}
