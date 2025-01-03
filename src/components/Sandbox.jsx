"use client"
import { CodeOutput } from "@/components/CodeOutput"
import { CodeEditor } from "@/components/CodeEditor"
import { useState } from "react"

export const SandBox = () => {
  const [output, setOutput] = useState("")

  return (
    <div className="flex gap-4 items-start w-full ">
      <CodeEditor setOutput={setOutput} />
      <CodeOutput output={output} />
    </div>
  )
}
