import _Axios from "@/lib/axios"
import { NextResponse } from "next/server"

export async function POST() {
  console.log("Calling /authorize endpoint")

  if (process.env.STAGE !== "dev") {
    return NextResponse.json({ authorized: false })
  }

  const res = await _Axios.post("/authorize")

  console.log("Received response from judge0, with status:", res.status)

  const authorized = res.status === 200
  return NextResponse.json({ authorized })
}

