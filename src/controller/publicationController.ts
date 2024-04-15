'use server'
import { Publication } from "@prisma/client";
import { ErrorResponse } from "@/model/ErrorResponse";
import { getError, validateObject, validateResponse } from "@/utils/utils";

export async function getPublications(): Promise<Publication[] | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/publications`);

    validateResponse(res);

    const publications: Publication[] | ErrorResponse = await res.json();
    validateObject(publications);
    return publications;
  } catch (error: any) {
    return getError(error);
  }
}

export async function deletePublication(id: string): Promise<Publication | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/publications/${id}`, { method: "DELETE" });
    validateResponse(res);

    const publication: Publication | ErrorResponse = await res.json();
    validateObject(publication);
    return publication;
  } catch (error: any) {
    return getError(error);
  }
}

export async function savePublication(publication: Publication): Promise<Publication | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/publications`, { 
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(publication),
    });

    validateResponse(res);

    const newPublication: Publication | ErrorResponse = await res.json();
    validateObject(newPublication);
    return newPublication;
  } catch (error: any) {
    return getError(error);
  }
}

export async function getPublication(id: string): Promise<Publication | ErrorResponse> {
  try {
    const res: Response = await fetch(`api/v1/publications/${id}`);
    validateResponse(res);

    const publication: Publication | ErrorResponse = await res.json();
    validateObject(publication);
    return publication;
  } catch (error: any) {
    return getError(error);
  }
}
