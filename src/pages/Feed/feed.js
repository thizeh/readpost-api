import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./feed.css";

import More from "../../assets/img/more.svg";

import HeaderMain from "../../components/HeaderMain/HeaderMain";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((response) => {
        setPosts(response.data);
      })

      .catch(() => {
        console.log("Deu errrado");
      });
  }, []);

  function deletePost(id) {
    axios.delete(`https://parallelum.com.br/fipe/api/v1/carros/marcas${id}`);

    setPosts(posts.filter((post) => post._id !== id));
  }

  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.codigo}</h2>
                  <h2>{post.nome}</h2>
                  <img src={More} alt="ver mais" />
                </header>

                <div className="line"></div>

                <p>{post.description}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Feed;
