"use client"
import { CodeOutput } from "./CodeOutput"
import { CodeEditor } from "./CodeEditor"
import { useState } from "react"

export const Playground = () => {
  const [output, setOutput] = useState("")

  return (
    <div className="flex gap-4 items-start w-full ">
      <CodeEditor setOutput={setOutput} />
      <CodeOutput output={output} />
    </div>
  )
}
