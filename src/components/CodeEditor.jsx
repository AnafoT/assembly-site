import {
  getCalleeSavedRegistersSuggestions,
  getCallerSavedRegistersSuggestions,
  getDirectivesSuggestions,
  getOperandSuggestions,
} from "@/lib/completion"
import { Button } from "@/components/ui/button"
import { Editor, useMonaco } from "@monaco-editor/react"
import Axios from "axios"
import { useEffect, useState } from "react"
import { getExampleProgram } from "@/lib/utils"




// registers callee-saved
/*
  rbx
  rbp
  rsp
  r12
  r13
  r14
  r15
  */

// Assembler directives
/*
    .bss
    .data
    .text
    .global
    .byte .word .long .quad 
    .ascii .asciz
    .fill .zero .skip
    .equ
  */

export const getSuggestions = (monaco, range) => {
  const allSuggestions = [
    getOperandSuggestions(monaco, range),
    getCallerSavedRegistersSuggestions(monaco, range),
    getCalleeSavedRegistersSuggestions(monaco, range),
  ]

  return allSuggestions.flat()
}

export const CodeEditor = ({ setOutput }) => {
  const [text, setText] = useState("")

  const monaco = useMonaco()

  useEffect(() => {
    // Register a new language
    if (!monaco) return
    monaco?.languages.register({ id: "customLang" })

    monaco?.languages.registerCompletionItemProvider("customLang", {
      provideCompletionItems: (model, position) => {
        var word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        return {
          suggestions: getSuggestions(monaco, range),
        }
      },
    })

    monaco?.languages.registerCompletionItemProvider("customLang", {
      triggerCharacters: ["."],
      provideCompletionItems: (model, position) => {
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        })

        if (!textUntilPosition.endsWith(".")) {
          return {
            suggestions: [],
          }
        }

      
        var word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        return {
          suggestions: getDirectivesSuggestions(monaco, range),
        }
      },
    })
  }, [monaco])

  const handleSubmit = async () => {
    const res = await Axios.post("/api/judge0", { source_code: text })
    setOutput(res.data)
  }

  return (
    <div>
      <Editor
        height="80vh"
        width="40vw"
        defaultLanguage="customLang"
        value={text}
        onChange={(value) => setText(value)}
        theme="vs-dark"
      />
      <div className="flex flex-row gap-2">
      <Button onClick={handleSubmit} className="mt-2">
        Submit program
      </Button>
      <Button onClick={() => setText(getExampleProgram())} className="mt-2">
        Load example code
      </Button>
      </div>
    </div>
  )
}
