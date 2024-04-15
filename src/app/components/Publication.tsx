import { Publication } from "@prisma/client";
import React from "react";

export default function PublicationCard({ id,title,body,author}:  Publication) {

    return (
      <div key={id} className="m-5 p-5 bg-slate-100 flex items-center flex-col rounded-xl shadow-2xl backdrop-blur-sm">
        <h3 className="text-black font-medium text-lg">Titulo: </h3>
        <h3 className="text-black justify-center">{title}</h3>
        <h3 className="text-black font-medium text-lg">Descripción: </h3>
        <p className="text-black justify-center">{body}</p>
        <h3 className="text-black font-medium text-lg">Autor: </h3>
        <p className="text-black justify-center">{author}</p>
      </div>
    );
  }