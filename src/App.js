import React, { useState, useEffect } from "react";
import Port from "./components/Port";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [builds, setBuilds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const filteredBuilds =
    selectedCategory === "todas"
      ? builds
      : builds.filter((build) => build.category.includes(selectedCategory));

  useEffect(() => {
    fetch("http://localhost:4000/building", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBuilds(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    const selected = event.target.textContent;
    setSelectedCategory(selected);
  };

  return (
    <main className="container">
      <section className="sections">
        <Header />
        <div className="filters">
          <div className="categories">
            <div className="categories-btn">
              {categories.length > 0 &&
                categories.map((category) => (
                  <Categories
                    key={category.id}
                    category={category.name}
                    handleChange={handleChange}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="galery-container">
          {filteredBuilds.length > 0 &&
            filteredBuilds.map((build) => (
              <Port
                id={build.id}
                title={build.title}
                location={build.location}
                category={build.category}
                size={build.size}
                thumbnail={build.thumbnail}
                img={build.img}
                key={build.id}
              />
            ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
