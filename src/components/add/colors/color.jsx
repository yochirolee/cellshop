import React from "react";
import "./color.css";

export default function Color({ item, ChangeActive }) {
  const HandleActive = () => {
    ChangeActive(item.id);
  };

  return (
    <div className="color">
      <div
        className={` ${item.isActive ? "colornav-active" : "colornav-outside"}`}
        onClick={(e) => HandleActive(e)}
      >
        <button className={`colornav-link ${item.color}`}></button>
      </div>

      <label
        className={` ${
          item.isActive ? "colornav-caption" : "colornav-caption-none"
        }`}
      >
        {item.caption}
      </label>
    </div>
  );
}
