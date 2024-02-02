import React from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { useAuthContext } from "../../store/AuthCtx";

export default function Header() {
  const { isUserLoggedIn, userEmail } = useAuthContext();
  return (
    <header className="my-4">
      <div className="container flex justify-between ">
        <a className="text-2xl" href="">
          Logo
        </a>
        <ul>
          <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/"}>
            Pagrindinis
          </NavLink>

          {!isUserLoggedIn && (
            <>
              <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/login"}>
                Prisijungimas
              </NavLink>
              <NavLink className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} to={"/register"}>
                Reagistracija
              </NavLink>
            </>
          )}
          {isUserLoggedIn && (
            <>
              <a className={"px-4 py-2 hover:bg-slate-500 hover:text-white "} href="">
                {userEmail}
              </a>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
