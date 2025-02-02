"use client"
import { TextEditor } from "@/common/TextEditor"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export const ChapterCodeEditor = () => {
  const [output, setOutput] = useState("")
  const code_output = output.stdout || output.compile_output || "Program output will appear here..."

  return (
    <div className="space-y-4">

      <Card className="min-h-[500px] min-w-[500px] bg-zinc-800 text-white font-mono">
        <TextEditor width="100%" setOutput={setOutput} />
      </Card>
      <Card className="p-4 bg-muted">
        <h3 className="font-semibold mb-2">Output</h3>
        <div className="font-mono text-sm">{code_output}</div>
      </Card>
    </div>
  )
}
