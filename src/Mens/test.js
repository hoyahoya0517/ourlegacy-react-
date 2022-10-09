import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Mens() {
  const [json2, setJson2] = useState("");
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const submitId = () => {
    const post = {
      plzid: data,
      ddsdsds: "ff",
    };
    fetch("http://localhost:3001/idplz", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0].price);
      });
  };
  function test2() {
    console.log("Test2");
    fetch("http://localhost:3001/mens/3")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <div>
      <input onChange={handleChange} name="id" />
      <button onClick={submitId}>Submit</button>
      <h1>{data}</h1>
      <button onClick={test2}>test2</button>
    </div>
  );
}
