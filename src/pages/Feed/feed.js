import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./feed.css";

import HeaderMain from "../../components/HeaderMain/HeaderMain";
import SearchBar from "../../components/SearchBar/SearchBar";

import { data } from "../../components/data";

function Feed() {
  const [posts, setPosts] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;

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

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <div className="user">
          <h3>{post.codigo}</h3>
          <h3>{post.nome}</h3>
        </div>
      );
    });

  const postsCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <HeaderMain />

      <div className="App">
        {displayPosts}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={postsCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default Feed;
