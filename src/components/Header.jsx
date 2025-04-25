import React, { useContext } from "react";
import logo from "/logo.svg";
import MyDropDown from "../utilities/MyDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@heroui/react";
import {  useNavigate } from "react-router";
import { UsersListContext } from "../contexts/UsersListContext";

export default function Header({wishList,cartList}) {
  const navigate = useNavigate();
  const [UsersList,setUsersList] = useContext(UsersListContext)
  
  return (
    <header className=" px-4 md:px-8 py-4 h-[72px] bg-white flex justify-between shadow-md rounded-sm items-center mb-2 sticky top-0 z-10">
      <div className="flex items-center gap-4 cursor-pointer " onClick={()=>navigate('/')}>
        <img src={logo} className="w-12" alt="Logo" />
        <div className="hidden md:block text-2xl">
          My Ecommerce
        </div>
      </div>
      <div className="flex gap-4 md:gap-12">
        <div className="flex gap-4 items-center mt-1">
          <Badge color="success" content={cartList.reduce((acc,{quantity})=>acc+quantity,0)}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="fa-2xl text-blue-400 cursor-pointer"
              onClick={() => navigate("/cartlist")}
            />
          </Badge>

          <Badge color="success" content={wishList.reduce((acc)=>acc+1,0)} variant="shadow">
            <FontAwesomeIcon icon={faHeart} className="fa-2xl text-red-800 cursor-pointer" onClick={() => navigate("/wishlist")} />
          </Badge>
        </div>
        <MyDropDown />
      </div>
    </header>
  );
}
