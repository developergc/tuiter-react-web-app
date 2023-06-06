import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";


function HomeTuits() {
  const allTuits = useSelector(state => state.tuits);
  return (
      <ul className="list-group">
        {allTuits.map((post) =><TuitItem key={post._id} tuit={post}/>) }
      </ul>
  );
}

export default HomeTuits;