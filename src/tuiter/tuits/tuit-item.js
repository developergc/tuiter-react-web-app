import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AiFillCheckCircle, AiOutlineClose} from "react-icons/ai";
import {deleteTuitThunk} from "../services/tuits-thunks";
import TuitStats from "./TuitStats";

const TuitItem = ({tuit}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50}
                 className="float-end rounded-circle"
                 src={`/images/${tuit.image}`}/>
          </div>

          <div className="col-10">
            <AiOutlineClose className="float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}/>
            <span className="font-weight-bold">{tuit.username}  </span>
            <AiFillCheckCircle className="text-primary"/>
            <span className="text-muted">  {tuit.handle} · {tuit.time}</span>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit}/>
          </div>

        </div>
      </li>
  );

}

export default TuitItem;