import React, {useState} from "react";
import {BiMessageRounded} from "react-icons/bi";
import {AiFillHeart, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {useDispatch} from "react-redux";
import {tuitFlipLike} from "../reducers/tuits-reducer";



const TuitStats=({tuit,liked,likes})=>{

  const dispatch = useDispatch();
  const likeFlip=(tuit)=>{
    dispatch(tuitFlipLike(tuit));
  }

  return (
      <div className="row">
          <div className="col-3">
            <BiMessageRounded/>
            <span>{tuit.replies}</span>
          </div>

        <div className="col-3">
          <AiOutlineRetweet/>
          <span>{tuit.retuits}</span>
        </div>

        <div className="col-3">
          {tuit.liked?<AiFillHeart className="text-danger"  onClick={()=>likeFlip(tuit)}/>:<AiOutlineHeart  onClick={()=>likeFlip(tuit)}/>}
          <span>{tuit.likes}</span>
        </div>

        <div className="col-3">
          <FiShare/>
        </div>
      </div>
  )
}

export default TuitStats;