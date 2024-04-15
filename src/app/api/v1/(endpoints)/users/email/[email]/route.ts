import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/app/api/v1/lib/userORM';

export async function GET(request: Request, context: any){
  const email = context.params.email;
  const user = await getUserByEmail(email);
  if ('error' in user) {
    return NextResponse.json(user, { status: user.status });
  }
  return NextResponse.json(user);
}