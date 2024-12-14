import CONSTANTS from "@/lib/constants"
import Axios from "axios"
import { NextResponse } from "next/server"

export async function POST(request) {
  const body = await request.json()
  console.log("Calling judge0 Submission API with the following source code", body.source_code)
  const res = await Axios.post(CONSTANTS.SUBMISSION_ENDPOINT, {
    source_code: body.source_code,
    language_id: CONSTANTS.ASSEMBLY_LANGUAGE_ID,
  })
  console.log("Received response from judge0", res)
  return NextResponse.json(res.data)
}