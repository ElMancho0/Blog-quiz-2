import { NextResponse } from 'next/server';
import { deleteUser, getUser } from '@/app/api/v1/controller/userController';

export async function GET(request: Request, context: any): Promise<NextResponse> {
  const { id } = context.params;
  const response = await getUser(id);
  if ('error' in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}

export async function DELETE(request: Request, context: any): Promise<NextResponse> {
  const { id } = context.params;
  const response = await deleteUser(id);
  if ('error' in response) {
    return NextResponse.json(response, { status: response.status });
  }
  return NextResponse.json(response);
}