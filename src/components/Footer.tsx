"use client";
import { Copyright, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Submit Report",
    href: "/submit-report",
  },
  {
    name: "Track Report",
    href: "/track-report",
  },
  {
    name: "Nearby Support",
    href: "/nearby-support",
  },
  {
    name: "How it works",
    href: "/how-it-works",
  },
];

export default function Footer() {
  return (
    <div className="w-full py-10 border-t border-white/10 h-fit items-start flex px-20 justify-between z-50 max-md:p-6 max-md:gap-5 max-md:flex-col">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 mb-2 max-md:mb-1">
          <Link href={"/"} className="text-xl font-extrabold">
            Report<span className="text-red-500"> Now</span>
          </Link>
        </div>
        <p className="text-base text-white/50 mb-1 max-md:leading-tight max-md:text-xs max-md:mb-0">
          <Copyright
            className="mr-1 text-white/50 inline max-md:w-3 max-md:m-0 max-md:mr-0.5"
            size={15}
          />
          2025 E-Report.
        </p>
        <p className="text-white/50 text-base max-md:text-xs">
          All rights reserved.
        </p>
      </div>
      <div className="flex gap-20 max-md:gap-11">
        <div>
          <p className="font-bold max-md:text-sm">PAGES</p>
          <div className="flex flex-col text-white/50 max-md:w-24">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-[11px]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold max-md:text-sm">LEGAL</p>
          <div className="flex flex-col text-white/50">
            <Link
              href={"/privacy-policy"}
              className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-[11px]"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/terms&conditions"}
              className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-[11px] max-md:leading-tight"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
        <div className="">
          <p className="font-bold max-md:text-sm">CONNECT</p>
          <div className="flex flex-col text-white/50">
            <Link
              href={"https://github.com/Sellesta"}
              target="_blank"
              className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-xs"
            >
              <Github size={20} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/moses-wanjema-a43253133/"}
              target="_blank"
              className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-xs"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={"https://x.com/chege_wanjema"}
              target="_blank"
              className="text-sm hover:text-zinc-300 transition-colors duration-200 max-md:text-xs"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold max-md:text-sm">SUBSCRIBE TO OUR NEWSLETTER</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-2 p-2 border border-white/10 rounded"
        />
        <button className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
}
