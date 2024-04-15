"use client";
import React, { useState } from "react";
import Field from "@/app/components/Field";
import Button from "@/app/components/Button";
import { savePublication } from "@/controller/publicationController";
import { useUserContext } from "@/provider/authProvider";
import { Publication } from "@prisma/client";
const ComponentHeader = () => {
  const { user } = useUserContext()!;
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    if (user.isLoggedUser) {
      const publication = {user.user.username, title, body};
      const post = {user.user.username, user.user.id, title, body} as Publication;
      if (await savePublication(post)) {
        alert("Publicación exitosa");
      }
    } else {
      alert("La publicación no se pudo");
    }
  };

  return (
    <div className="bg-darkBlue rounded-3xl py-5 drop-shadow-lg m-11 flex flex-col items-center pr-7 pl-7 w-max">
      <div className="flex flex-col items-center my-4 lg:grid-cols-6 space-y-8">
        <Field
          text_Field={title}
          setText_Field={setTitle}
          titule={"Titulo"}
          type={"text"}
          name={"user"}
        />
        <Field
          text_Field={body}
          setText_Field={setBody}
          titule={"Descripción"}
          type={"text"}
          name={"user"}
        />
        <Button width={"350px"} title={"Publicar"} purpose={handleSubmit} />
        <a
          href="/"
          className="font-medium text-lg text-white cursor-pointer hover:text-orange-400"
        >
          Volver
        </a>
      </div>
    </div>
  );
};

export default ComponentHeader;
