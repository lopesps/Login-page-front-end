import React, { useState } from "react";
import Menu from "../components/Menu";

const Cats = () => {
  const [catCode, setCatCode] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCatCode(e.target.httpCode.value ? e.target.httpCode.value : 404);
  };
  return (
    <>
      <Menu />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>HTTP.cat</h1>
          <div className="alignInputs">
            <input
              type="text"
              placeholder="Type any HTTP code..."
              name="httpCode"
            />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      <img src={"https://http.cat/" + catCode} />
    </>
  );
};
export default Cats;
