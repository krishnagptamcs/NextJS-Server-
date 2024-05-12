// to write a backend in next js , you should write inside the api folder , and the folder structure define the route
// in next js there is no any express js
// like here
//api-->user-->route.ts , this will be api/users/logic

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// initiating the prisma client
const client = new PrismaClient();

// creating a get  request
export function GET() {
  // database logic
  return Response.json({
    name: "krishna naam hai mera  ",
    email: "gupta@krishna.com",
  });
}

// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   return NextResponse.json({
//     username: body.username,
//     password: body.password,
//   });
// }

// Post Method
export async function POST(req: NextRequest) {
  const body = await req.json();

  // entering the filed in user table
  const addedUser = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log("user id is ,", addedUser.id);

  return NextResponse.json({ sucess: true, message: "Login Succesfully" });
}
