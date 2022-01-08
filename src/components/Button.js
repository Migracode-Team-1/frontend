import React from "react";

export default function Button({
  toggle,
  classBtn = "btn-primary",
  actionBtn,
}) {
  return (
    <div>
      <button
        type="button"
        className={`btn ${classBtn} btn-lg`}
        onClick={actionBtn}
      >
        {toggle}
      </button>
    </div>
  );
}
