"use client";
import React, { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal, Box, Typography } from "@mui/material";

const header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

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
          <Link href="/login">
            <button className="bg-yellow-400 md:flex hidden p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500">
              Giriş Yap
              <BiSolidLogIn className="text-2xl mx-2" />
            </button>
          </Link>
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
            
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className="flex flex-col gap-3 text-lg text-amber-400">
                <Link href="/about" onClick={handleClose}>
                  Hakkında
                </Link>
                <Link href="/contact" onClick={handleClose}>
                  Bize Ulaş
                </Link>
                <Link href="/login" onClick={handleClose}>
                  Giriş Yap
                </Link>
              </ul>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default header;
