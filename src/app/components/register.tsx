import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Field from "@/app/components/Field";
import Button from "@/app/components/Button";
import { useUserContext } from "@/provider/authProvider";
import { saveUser } from "@/controller/userController";
import { User } from "@prisma/client";
const ComponentHeader = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user, setUser }: any = useUserContext();
  const [isSignUp, setIsSignUp] = useState(user.isLoggedUser);
  const { updateTask }: any = useUserContext();

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      const user = {name, email, username, password} as User;
      if (await saveUser(user)) {
        alert("Usuario registrado, Inicie Sesión");
        router.push("/login");
      } else {
        alert("Error de registro");
      }
    } else {
      alert("Contraseñas no cinciden");
    }
  };

  const handleBackToLoginClick = () => {
    setIsSignUp(false);
    router.push("/login");
  };
  const endSesion = () => {
    updateTask(user.user, false);
    router.push("/");
  };
  return (
    <div className="bg-darkBlue rounded-3xl py-10 drop-shadow-lg m-11 stack md:m-5 md:flex md:flex-col md:items-center md:pr-7 md:pl-7">
      <div className="justify-center flex items-center rounded-full mb-4">
        <Image
          className="m-3 w-18 h-18 md:w-30 md:h-30"
          src="/login/user.png"
          alt="Screenshots of the dashboard"
          width={100}
          height={100}
        />
      </div>
      <h2 className="text-center text-3xl font-semibold text-orange">
        {isSignUp ? user.user.name : "Registro"}
      </h2>
      <div className="justify-center w-full md:flex">
        {!isSignUp ? (
          <>
            <div className="flex flex-col items-center my-4 mx-2">
              <Field
                text_Field={email}
                setText_Field={setEmail}
                titule={"Email:"}
                type={"text"}
                name={"email"}
              />
              <Field
                text_Field={name}
                setText_Field={setFullName}
                titule={"Full Name:"}
                type={"text"}
                name={"full-name"}
              />
              <Field
                text_Field={username}
                setText_Field={setUsername}
                titule={"Username:"}
                type={"text"}
                name={"username"}
              />
            </div>
            <div className="flex flex-col items-center my-4 mx-2">
              <Field
                text_Field={password}
                setText_Field={setPassword}
                titule={"Password:"}
                type={"password"}
                name={"password"}
              />
              <Field
                text_Field={confirmPassword}
                setText_Field={setConfirmPassword}
                titule={"Confirm Password:"}
                type={"password"}
                name={"confirm-password"}
              />
              <Button
                width={"350px"}
                title={"Registrarse"}
                purpose={handleSubmit}
              />
              <div
                color="black"
                className="mt-4 text-center font-normal text-black"
              >
                Tiene una cuenta?{" "}
                <button
                  className="font-medium text-gray-900 text-lg text-white"
                  onClick={handleBackToLoginClick}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};
export default ComponentHeader;
