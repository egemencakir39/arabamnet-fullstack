"use client";
import React, { useEffect, useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { logoutUser, setUser } from "@/redux/authSlice";
import { BiSolidLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    window.location.href = "/";
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "#273c4d",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    color: "white",
  };
  return (
    <div className="bg-[#273c4d]">
      <div className="flex px-25 py-5 container justify-between items-center">
        <Link href="/">
          <div className="w-70">
            <img src="/logo3.png" alt="logo" className="cursor-pointer" />
          </div>
        </Link>
        <nav>
          <ul className="md:flex hidden text-white hover:cursor-pointer text-base lg:text-lg">
            <Link href="/about">
              <li className="mx-2 hover:text-yellow-300 hover:underline">
                Hakkında
              </li>
            </Link>

            <li className="mx-2 hover:text-yellow-300 hover:underline">
              <a href="#vehicles">Satıştaki Araçlar</a>
            </li>
            <Link href="/contact">
              <li className="mx-2 hover:text-yellow-300 hover:underline">
                Bize Ulaş
              </li>
            </Link>
          </ul>
        </nav>
        <div>
          {!user && (
            <Link href="/login">
              <button className="bg-yellow-400 md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
                Giriş Yap
                <BiSolidLogIn className="text-2xl mx-2" />
              </button>
            </Link>
          )}

          {user && user.isAdmin && (
            <div className="flex">
              <Link href={`/admin/${user._id}`}>
                <button className="bg-yellow-400 md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
                  Admin Panel
                  <CgProfile className="text-2xl mx-2" />
                </button>
              </Link>
              <div className="bg-yellow-400 ml-2 md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
                <BiSolidLogOut
                  onClick={handleLogout}
                  className="text-2xl mx-2"
                />
              </div>
            </div>
          )}

          {user && !user.isAdmin && (
            <div className="flex">
              <Link href={`/profile/${user._id}`}>
                <button className="bg-yellow-400 md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
                  Profilim
                  <CgProfile className="text-2xl mx-2" />
                </button>
              </Link>
              <div className="bg-yellow-400 ml-2  md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
                <BiSolidLogOut
                  onClick={handleLogout}
                  className="text-2xl mx-2"
                />
              </div>
            </div>
          )}
        </div>
        {/* Hamburger Menü */}

        <div className="md:hidden flex">
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-yellow-400 text-2xl"
          />
        </div>

        {/* Modal */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ul className="flex flex-col gap-3 text-lg text-amber-400">
              <Link href="/about" onClick={handleClose}>
                Hakkında
              </Link>
              <Link href="/contact" onClick={handleClose}>
                Bize Ulaş
              </Link>
              {!user && (
                <Link href="/login" onClick={handleClose}>
                  Giriş Yap
                </Link>
              )}
              {user && !user.isAdmin && (
                <Link href={`/profile/${user._id}`} onClick={handleClose}>
                  Profilim
                </Link>
              )}
              {user && user.isAdmin && (
                <Link href={`/admin/${user._id}`} onClick={handleClose}>
                  Admin Panel
                </Link>
              )}
            </ul>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Header;
