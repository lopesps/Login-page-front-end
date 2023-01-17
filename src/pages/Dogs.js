import axios from "axios";
import React, { useState } from "react";
import Menu from "../components/Menu";

const Login = () => {
  const [dogCode, setDogCode] = useState(
    "ad522efc-ce31-4f1b-a77c-81a8a68c7a24.jpg"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get("https://random.dog/woof")
      .then((response) => {
        setDogCode(response.data);
      })
      .catch((err) => console.log(err));
  };
  console.log("dogCode ", dogCode);
  const mp4 = dogCode.split(".");

  return (
    <>
      <Menu />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Show Dog</h1>
          <input type="submit" value="Refresh" />
        </form>
      </div>
      {mp4[1] === "mp4" ? (
        <img
          className="imageDog"
          src={"https://random.dog/ad522efc-ce31-4f1b-a77c-81a8a68c7a24.jpg"}
        />
      ) : (
        <img className="imageDog" src={"https://random.dog/" + dogCode} />
      )}
    </>
  );
};

export default Login;
