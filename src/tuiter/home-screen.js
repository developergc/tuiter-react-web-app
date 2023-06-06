import React from "react";
import WhatsHappening from "./whats-happening";
import {useSelector} from "react-redux";
import TuitItem from "./tuits/tuit-item";

const HomeScreen = () => {
  const allTuits = useSelector(state => state.tuits);
  return(
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <ul className="list-group">
          {allTuits.map((post) => <TuitItem key={post._id} tuit={post}/>)}
        </ul>
      </>
  );
};
export default HomeScreen;
