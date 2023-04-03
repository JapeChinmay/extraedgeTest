import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, DeleteUser, LikedUser } from "../actions/userActions";
import axios from "axios";
//import Loader from "react-loader-spinner";
import "./Spinner.css";
import Modal from "./Modal";
import ReactModal from "react-modal";

/////////////////////icons //////////////////

import { FaTrashAlt, FaEdit, FaHeart } from "react-icons/fa";

const Users = () => {
  ///////////////////////base urls///////////////////////

  const AVATAR = " https://avatars.dicebear.com/api/avataaars/";

  const FETCH_URL = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);

  //////////////////////////
  const [showModal, setShowModal] = useState(false);
  const [UserData, setUserData] = useState(null);

  const editUser = (data) => {
    setShowModal(true);
    setUserData(data);
  };

  const closeModal = () => {
    setShowModal(false);
    setUserData(null);
  };

  useEffect(() => {
    const Token = axios.CancelToken.source();

    const fetchUsersDataOnRerender = async () => {
      try {
        const response = await axios.get(`${FETCH_URL}`, {
          cancelToken: Token.token,
          timeout: 10000,
        });
        dispatch(fetchUsers(response.data));
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("cancelled:", err.message);
        } else {
          console.log(" error:", err);
        }
      }
    };

    fetchUsersDataOnRerender();
    // call

    return () => {
      Token.cancel("User request cancelled.");
    };
  }, [dispatch]);

  ///////////////////////////////////////////////handlers //////////////////

  const deleteUser = (id) => {
    dispatch(DeleteUser(id));
  };

  const isUserLiked = (id) => {
    dispatch(LikedUser(id));
  };

  if (users.length === 0) {
    return (
      //   <div className="flex justify-center items-center h-screen">
      //     <Loader type="ThreeDots" height={30} width={30} />
      //   </div>
      <div class="spinner"></div>
    );
  }

  ////////////////////////////////////modal handler

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 m-5 p-5  ">
        {users.map((user) => (
          <div key={user.id} className="  shadow-xl">
            <div className=" bg-gradient-to-t from-emerald-300  to-green-400  h-48 flex items-center justify-center">
              <img
                src={`${AVATAR}${user.username}.svg`} /// avtars call
                alt={user.name}
                className="h-full w-auto object-cover "
              />
            </div>
            <div className="p-4  bg-emerald-200">
              <h3 className="text-lg font-bold mb-3">{user.name}</h3>
              <p className="text-slate-500 mb-2  text-semibold p-2">
                📨 {user.email}
              </p>
              <p className="text-slate-500 mb-2 p-2 text-semibold">
                📞 {user.phone}
              </p>

              <p className=" text-slate-500 mb-2 p-2 text-semibold">
                🏡{user.address.street}, {user.address.suite},
                {user.address.city}
              </p>
              <p className="text-gray-700 mb-2">🌐: {user.website}</p>
              <p className="text-gray-700">🏢: {user.company.name}</p>
            </div>
            <div className="bg-green-200 p-4 flex items-center justify-between  animate-pulse duration-100 transition transform hover:translate-y-3  hover:translate-x-2  cursor-pointer">
              <p>
                <FaTrashAlt onClick={() => deleteUser(user.id)} />
              </p>
              <p>
                <FaEdit onClick={() => editUser(user)} />
              </p>

              <p>
                <FaHeart
                  onClick={() => isUserLiked(user.id)}
                  className={`text-xl ${
                    user.liked ? "text-red-500" : "text-slate-400"
                  }`}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <Modal user={UserData} closeModal={closeModal} />
        </ReactModal>
      )}
    </Fragment>
  );
};

export default Users;
