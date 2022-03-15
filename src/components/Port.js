import React from "react";

const Menu = ({ id, title, location, category, size, thumbnail, img }) => {
  return (
    <div className="galery-card">
      <img src={thumbnail} alt={title} className="card-photo" />
      <div className="card-info">
        <div className="card-info_items">
          <h4 className="card-info_title">{title}</h4>
          <h4 className="card-info_size">{size}</h4>
        </div>
        <div className="card-local_items">
          <p className="card-local_cat">{category}</p>
          <p className="card-local_loc">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
