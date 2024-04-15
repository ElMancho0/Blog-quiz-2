"use client";
import React, { useState } from "react";
import Field from "@/app/components/Field";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useUserContext, UserLogged } from "@/provider/authProvider";
import { useRouter } from "next/navigation";
import { getUser, getUserByEmail } from "@/controller/userController";
import { User } from "@prisma/client";

const ComponentHeader = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, updateTask } = useUserContext()!;
  const [isSignUp, setIsSignUp] = useState(user.isLoggedUser);

  const handleSubmit = async () => {
    const userDB = await getUserByEmail(email) as User;
    if (userDB.password === password) {
      alert("Sesión Iniciada");
      updateTask(userDB, true);
      router.push("/");
    } else {
      alert("Porfavor intente de nuevo");
    }
  };

  const handleSignUpClick = () => {
    router.push("/register");
  };
  const endSesion = () => {
    updateTask(user.user, false);
    router.push("/");
  };

  return (
    <div className="bg-darkBlue rounded-3xl py-5 drop-shadow-lg m-11 flex flex-col items-center pr-7 pl-7">
      <div className="flex justify-center bg-gray-100 rounded-full mb-5">
        <Image
          className="m-2"
          src="/login/user.png"
          alt="Screenshots of the dashboard"
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-center text-3xl font-semibold text-orange">
        {isSignUp ? user.user.name : "Inicio de sesión"}
      </h2>
      <div className="flex justify-center w-full">
        {isSignUp ? (
          <>
            <div className="flex flex-col items-center my-4 mx-2">
              <Button
                width={"350px"}
                title={"Cerrar Sesión"}
                purpose={endSesion}
              />
              <div
                color="black"
                className="mt-4 text-center font-normal text-black"
              >
                <a
                  href="/"
                  className="font-medium text-gray-900 text-lg text-white"
                >
                  Volver
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center my-4 w-full lg:grid-cols-6 space-y-8">
            <Field
              text_Field={email}
              setText_Field={setEmail}
              titule={"Email:"}
              type={"text"}
              name={"email"}
            />
            <Field
              text_Field={password}
              setText_Field={setPassword}
              titule={"Password:"}
              type={"password"}
              name={"password"}
            />
            <Button
              width={"350px"}
              title={"Iniciar Sesión"}
              purpose={handleSubmit}
            />
            <div
              color="black"
              className="mt-4 text-center font-normal text-black"
            >
              No tiene una cuenta?{" "}
              <button
                className="font-medium text-gray-900 text-lg text-white"
                onClick={handleSignUpClick}
              >
                Registrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentHeader;
