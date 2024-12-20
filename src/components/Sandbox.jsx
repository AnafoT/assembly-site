"use client"
import { CodeOutput } from "@/components/CodeOutput"
import { CodeEditor } from "@/components/CodeEditor"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export const SandBox = () => {
  const [output, setOutput] = useState("")
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* 
        justify start
      */}
      <div className="flex gap-4 items-start w-full ">
        <CodeEditor setOutput={setOutput} />
        <CodeOutput output={output} />
      </div>
    </QueryClientProvider>
  )
}
