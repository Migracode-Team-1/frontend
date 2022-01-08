import React from "react";

export default function Input({placeHolder,setValue,typeInput="text"}) {

  


  return (
    <div className="input-group mb-3">
      <input
        type={typeInput}
        className="form-control"
        placeholder= {placeHolder}
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
}
