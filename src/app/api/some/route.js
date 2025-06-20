import { NextRequest, NextResponse } from "next/server";

export default function GET(){
    return NextResponse.json("Hello from the API route!");
}