import React from "react";

const Categories = ({ category, handleChange }) => {

  return <div className="btn-category" onClick={handleChange}>{category}</div>;
};

export default Categories;
