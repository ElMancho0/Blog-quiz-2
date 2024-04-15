import { NextResponse } from "next/server";
import { getUsers, saveUser } from "@/app/api/v1/controller/userController";
import { ErrorResponse } from "@/app/api/v1/model/ErrorResponse";
import { User } from "@prisma/client";

export async function GET(request: Request, context: any): Promise<NextResponse> {
  const response = await getUsers();
  if ("error" in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}

export async function POST(
  request: Request,
  context: any
): Promise<NextResponse> {
  const user = (await request.json()) as User;
  const response = await saveUser(user);
  if ("error" in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}
