import React from "react";
import { Link } from "react-router-dom";

function CatCard({ img, title }) {
  return (
    <Link to={`/products/${title}`}>
      <div className="catCard bg-gray-800 text-white rounded-lg relative cursor-pointer w-64 h-72 overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <span className="title font-semibold absolute bottom-0 left-0 text-xl px-2 py-1 bg-gray-900 rounded">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default CatCard;
