import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import "./categories.scss";

function Categories() {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.idMeal}>
          <img src={category.strCategoryThumb} alt="" />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  );
}

export default Categories;
