"use client"
import { Button } from "@/components/ui/button"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { getExampleProgram } from "@/lib/utils"
import { useCustomMonaco } from "@/hooks/useCustomMonaco"
import _Axios from "@/lib/axios"

export const CodeEditor = ({ width = "500px", height = "500px", setOutput }) => {

  const [text, setText] = useState("")
  const monaco = useCustomMonaco() // Initializes custom editor settings

  const handleSubmit = async () => {
    const res = await _Axios.post("/api/judge0/submissions", { source_code: text })
    setOutput(res.data)
  }



  return (
    <div>

      <Editor
        width={width}
        height={height}
        defaultLanguage="customLang"
        value={text}
        onChange={(value) => setText(value)}
        options={{
          minimap: { enabled: false },
        }}
      />

      <div className="flex flex-row gap-2 items-center p-4">
        <Button onClick={handleSubmit}>
          Submit program
        </Button>
        <Button onClick={() => setText(getExampleProgram())}>
          Load example code
        </Button>
      </div>

    </div>
  )
}
