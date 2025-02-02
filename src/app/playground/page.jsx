"use client"

import Split from "react-split"
import { ChapterCodeEditor } from "@/app/guide/[chapter]/_components/ChapterCodeEditor"
import { useState } from "react"
import { TextEditor } from "@/common/TextEditor"
import { Card } from "@/components/ui/card"

export default function CodePlayground() {
  const [output, setOutput] = useState("")
  const code_message = output.stdout || output.compile_output || "Program output will appear here..."
  return (
    <div className="h-screen w-screen bg-zinc-900 p-1">
      <Split
        className="split flex h-full"
        sizes={[60, 40]}
        minSize={300}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Card className="min-h-[500px] min-w-[500px] bg-zinc-800 text-white font-mono">
          <TextEditor setOutput={setOutput} width="100%" height="85vh" />
        </Card>
        <div className="h-full overflow-auto bg-zinc-800 p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Output</h2>
          <div className="font-mono text-sm text-zinc-300">{code_message}</div>
        </div>
      </Split>
    </div>
  )
}
