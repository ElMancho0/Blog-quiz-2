"use client";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function UserNavBar() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-darkBlue w-full">
      <Navbar fluid rounded className=" bg-transparent">
        <Navbar.Brand href="/">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
            <div className="text-black items-center mx-8">
              <h1 className=" text-5xl font-semibold text-orange">Blog</h1>
            </div>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 m-5">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:absolute md:right-10">
          <Navbar.Brand href="/login">
            <div className="relative">
              <button
                className="flex p-3 items-center justify-center w-full py-2 px-3 text-orange rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                onClick={handleClick}
              >
                <h3>Iniciar Sesión</h3>
              </button>
            </div>
          </Navbar.Brand>
          <Navbar.Brand
            href="/publications"
            className="hover:bg-transparent hover:text-black"
          >
            <div className="relative hover:text-black">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-orange rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Crear publicación
              </button>
            </div>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
