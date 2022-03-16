import React, { useState, useEffect } from "react";
import axios from "axios";

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
    (async () => {
      const apiBuild = await axios.get("http://alexcamposwd/building_gallery/building");
      const apiCategory = await axios.get("http://alexcamposwd/building_gallery/categories");
      setBuilds(apiBuild.data);
      setCategories(apiCategory.data);
    })();
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
