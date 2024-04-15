import { Publication } from "@prisma/client";
import { ErrorResponse } from "@/app/api/v1/model/ErrorResponse";
import {
  createPublicationInPrisma,
  deletePublicationInPrisma,
  getPublicationFromPrisma,
  getPublicationsFromPrisma,
  updatePublicationInPrisma,
} from "@/app/api/v1/lib/publicationORM";

export function getPublications(): Promise<Publication[] | ErrorResponse> {
  return getPublicationsFromPrisma();
}

export function getPublication(id: string): Promise<Publication | ErrorResponse> {
  return getPublicationFromPrisma(id);
}

export function savePublication(publication: Publication): Promise<Publication | ErrorResponse> {
  if (publication.id === undefined) {
    return createPublicationInPrisma(publication);
  } else {
    return updatePublicationInPrisma(publication);
  }
}

export function deletePublication(id: string): Promise<Publication | ErrorResponse> {
  return deletePublicationInPrisma(id);
}


