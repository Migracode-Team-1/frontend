import React from "react";

export default function Image({ picture }) {
  return (
    <div>
      <img src={picture} alt="" width="714" height="477" className="float-end img-fluid"></img>
    </div>
  );
}
