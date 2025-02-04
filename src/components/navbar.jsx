"use client";

import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan URL saat ini

  const isActive = (href) => pathname === href; // Cek apakah URL saat ini sama dengan href

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-black">Datasistem</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className={`py-2 ${isActive("/home") ? "border-b-2 border-black" : "hover:text-gray-300"}`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`py-2 ${isActive("/product") ? "border-b-2 border-black" : "hover:text-gray-300"}`}
            >
              Product
            </Link>
            <Link
              href="/services"
              className={`py-2 ${isActive("/services") ? "border-b-2 border-black" : "hover:text-gray-300"}`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`py-2 ${isActive("/blog") ? "border-b-2 border-black" : "hover:text-gray-300"}`}
            >
              Blog
            </Link>
            <Link
              href="/dashboard-user/home"
              className={`py-2 ${isActive("/contact") ? "border-b-2 border-black" : "hover:text-gray-300"}`}
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-gray-300">
              <User size={20} />
            </button>
            <Link
              href="/login"
              className="text-white py-2 px-4 hover:bg-[#2f4b40] rounded"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-white py-2 px-4 hover:bg-[#2f4b40] rounded"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-[#2f4b40]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Smooth slide-in/out animation */}
        <div
          className={`md:hidden transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {isOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/home"
                className={`block px-3 py-2 ${isActive("/home") ? "border-l-4 border-yellow-500" : "hover:bg-[#2f4b40]"}`}
              >
                Home
              </Link>
              <Link
                href="/product"
                className={`block px-3 py-2 ${isActive("/product") ? "border-l-4 border-yellow-500" : "hover:bg-[#2f4b40]"}`}
              >
                Product
              </Link>
              <Link
                href="/blog"
                className={`block px-3 py-2 ${isActive("/blog") ? "border-l-4 border-yellow-500" : "hover:bg-[#2f4b40]"}`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 ${isActive("/contact") ? "border-l-4 border-yellow-500" : "hover:bg-[#2f4b40]"}`}
              >
                Contact us
              </Link>
              <div className="flex space-x-4 px-3 py-2">
                <button className="hover:text-gray-300">
                  <User size={20} />
                </button>
                <Link
                  href="/login"
                  className="block py-2 px-4 text-white hover:bg-[#2f4b40] rounded"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 px-4 text-white hover:bg-[#2f4b40] rounded"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
