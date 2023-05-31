import { BiPhoneCall } from "react-icons/bi";
import { MdEmail, MdShoppingCart } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  return (
    <main className="shadow">
      <div>
        <div className="top flex justify-between h-10 items-center max-w-[1440px] mx-auto">
          <div className="left flex text-xs leading-normal text-text-gray tracking-wide font-medium">
            <div className="flex mt-0 ">
              <span className="mr-2">Холбоо барих</span>
              <BiPhoneCall className="me-1" />
              <span className="me-1">+(976)7728-2222</span>
            </div>
            <div className="flex">
              <MdEmail className="me-1" />
              <span className="mr-2"> info@meborny.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="border-r border-[#f1f1f3] px-1">
              <button className="bg-blue-500 text-white rounded-md p-1.5 my-0.5 w-full">
                Нэвтрэх
              </button>
            </div>
            <div className="border-r border-[#f1f1f3] px-5 h-10 flex items-center">
              <Link href={"https://www.facebook.com/MEBORNY"} target="_blank">
                <BsFacebook className="text-lg text-gray-400" />
              </Link>
            </div>
            <div className="border-r border-[#f1f1f3] px-5 h-10 flex items-center">
              <Link href={"https://www.instagram.com/meborny/"} target="_blank">
                <AiFillInstagram className="text-xl text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#151847]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="py-5">
            <Link href={"/"} className="text-4xl">
              <img src="https://meborny.mn/static/black.png" alt="meborny" />
            </Link>
          </div>
          <div>
            <ul className="text-white font-thin flex">
              <li className="px-4">
                <Link href="/" className="uppercase ">
                  Нүүр
                </Link>
              </li>
              <li className="px-4">
                <Link href="/" className="uppercase ">
                  Бидний тухай
                </Link>
              </li>
              <li className="px-4">
                <Link href="/" className="uppercase ">
                  Хичээлүүд
                </Link>
              </li>
              <li className="px-4">
                <Link href="/" className="uppercase ">
                  Холбоо барих
                </Link>
              </li>
              <li className="px-4">
                <Link href="/">
                  <MdShoppingCart className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
