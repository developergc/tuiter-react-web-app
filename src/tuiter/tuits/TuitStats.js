import React, {useState} from "react";
import {BiMessageRounded} from "react-icons/bi";
import {AiFillHeart, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {useDispatch} from "react-redux";
import {tuitFlipLike} from "../reducers/tuits-reducer";
import {updateTuitThunk} from "../services/tuits-thunks";
import {HiThumbDown} from "react-icons/hi";



const TuitStats=({tuit})=>{

  const dispatch = useDispatch();
  // const likeFlip=(tuit)=>{
  //   dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
  // }

  return (
      <div className="row">
          <div className="col-2">
            <BiMessageRounded/>
            <span>{tuit.replies}</span>
          </div>

        <div className="col-3">
          <AiOutlineRetweet/>
          <span>{tuit.retuits}</span>
        </div>

        <div className="col-3">
          {/*{tuit.liked?<AiFillHeart className="text-danger"  onClick={()=>dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}/>:<AiOutlineHeart  onClick={()=>likeFlip(tuit)}/>}*/
            <AiFillHeart className="text-danger"  onClick={()=>dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}/>
          }
          <span>{tuit.likes}</span>
        </div>

        <div className="col-3">
          {
            <HiThumbDown onClick={()=>dispatch(updateTuitThunk({ ...tuit, dislike: tuit.dislike + 1 }))}/>
          }
          <span>{tuit.dislike?tuit.dislike:0}</span>
        </div>

        <div className="col-1">
          <FiShare/>
        </div>
      </div>
  )
}

export default TuitStats;