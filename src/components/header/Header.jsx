import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../store/AuthCtx";
import logo from "../../assets/img/logo.svg";
import { createPortal } from "react-dom";
import Cart from "./Cart";

export default function Header() {
  const { isUserLoggedIn, userEmail, logout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function logoutUser() {
    logout();
  }

  function openMenuHnadler() {
    setIsMenuOpen((prev) => !prev);
  }
  function openCartHnadler() {
    setIsCartOpen((prev) => !prev);
  }

  return (
    <header className="my-4">
      {isMenuOpen && createPortal(<div onClick={openMenuHnadler} className="overlay"></div>, document.body)}
      {isCartOpen && createPortal(<div onClick={openCartHnadler} className="overlay"></div>, document.body)}
      <div className="container flex justify-between items-center">
        <a className="text-2xl" href="">
          <img src={logo} alt="" />
        </a>

        <div className="flex gap-4">
          <ul>
            <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/"}>
              Pagrindinis
            </NavLink>
            <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/"}>
              Kategorijos
            </NavLink>
            <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/"}>
              Apie mus
            </NavLink>
            <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/"}>
              Kontaktai
            </NavLink>
          </ul>

          <div className="flex gap-4">
            <i className="fa-regular fa-heart text-xl cursor-pointer text-gray-500 "></i>
            <div className="relative">
              <i onClick={openMenuHnadler} className="fa-regular fa-user text-xl cursor-pointer text-gray-500 "></i>
              {isMenuOpen && (
                <ul className="absolute right-0 top-full flex flex-col bg-gray-100 z-20 w-[220px]">
                  {!isUserLoggedIn && (
                    <>
                      <Link className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/login"}>
                        <i className="fa-solid fa-user mr-2"></i> Prisijungimas
                      </Link>
                      <Link className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/register"}>
                        <i className="fa-solid fa-user-plus mr-2"></i> Reagistracija
                      </Link>
                    </>
                  )}
                  {isUserLoggedIn && (
                    <>
                      <li className={"px-4 py-2 "} href="">
                        <i className="fa-solid fa-user mr-2"></i> {userEmail}
                      </li>
                      <Link className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/addProduct"}>
                        <i className="fa-solid fa-plus mr-2"></i> Pridėti produktą
                      </Link>
                      <button onClick={logoutUser} type="button" className={"px-4 py-2 text-left hover:bg-slate-500 hover:text-white "}>
                        <i className="fa-solid fa-arrow-left mr-2"></i> Atsjungti
                      </button>
                    </>
                  )}
                </ul>
              )}
            </div>
            <div className="relative">
              <i onClick={openCartHnadler} className="fa-solid fa-cart-shopping text-xl cursor-pointer text-gray-500 "></i>
              {isCartOpen && <Cart />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
