import _Axios from "@/lib/axios";
import { NextResponse } from 'next/server';
import { JUDGE0_CONSTANTS } from "@/lib/utils";

export async function GET() {
  console.info("Calling endpint GET /submissions")

  if (process.env.STAGE !== "dev") {
    return NextResponse.json({ authorized: false });
  }

  const res = await _Axios.get("/submissions")

  if (res.status !== 200) {
    console.error('Received error response from judge0', res.status);
    return NextResponse.json(res.data);
  }

  console.info('Received succesful response from judge0, with status:', res.status);

  return NextResponse.json(res.data.submissions);
}

export async function POST(request) {
  console.info("Calling endpoint POST /submissions")

  const body = await request.json()
  const source_body = {
    source_code: body.source_code,
    language_id: JUDGE0_CONSTANTS.assembly_language_id
  }
  const res = await _Axios.post(
    "/submissions" + JUDGE0_CONSTANTS.submission_params,
    source_body,
  )

  if (res.status >= 200 && res.status < 300) {
    console.info("Received succesful response from judge0, with status:", res.status)
    console.info("Response data: ", res.data)
    return NextResponse.json(res.data)
  }

  console.error("Received error response from judge0", res)
  return NextResponse.json(res.data)
}

export async function DELETE() {
  console.info("Calling endpoint DELETE /submissions")

  if (process.env.STAGE !== "dev") {
    return NextResponse.json({ success: false })
  }

  const res = await _Axios.get("/submissions")

  if (res.status !== 200) {
    console.error("Error getting submissions", submissions.status)
    return NextResponse.json(submissions.data)
  }

  console.info(`Deleting ${res.data.submissions.length} submissions`)
  res.data.submissions.forEach(async (submission) => {
    const res = await _Axios.delete("/submissions/" + submission.token, { headers: JUDGE0_CONSTANTS.headers })

    if (res.status !== 200) {
      console.error("Error deleting submission", submission.token)
      return NextResponse.json({ error: "Error deleting submission", success: false })
    }
  })

  console.info("All submissions deleted")

  return NextResponse.json({ success: true })
}
