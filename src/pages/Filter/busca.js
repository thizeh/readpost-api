import React from "react";
import { data } from "../../components/data";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./busca.css";

function busca() {
  return (
    <div>
      <HeaderMain />
      <div className="search">
        <div className="searchInputs">
          <SearchBar placeholder="digite o nome ou codigo" data={data} />
        </div>
      </div>
    </div>
  );
}

export default busca;
