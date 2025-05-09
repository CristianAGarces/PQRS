import React from "react";
import "./icon.css";

export default function Icons({ link, name, img }) {
  return (
    <a href={link} target="_blank" className="marco" rel="noopener noreferrer">
      <div alt={name} className="icon">
        {img}
      </div>
    </a>
  );
}
