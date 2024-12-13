import { getCalleeSavedRegistersSuggestions, getCallerSavedRegistersSuggestions, getDirectivesSuggestions, getOperandSuggestions } from "@/app/lsp/completion"
import { Button } from "@/components/ui/button"
import { Editor, useMonaco } from "@monaco-editor/react"
import Axios from "axios"
import { useEffect, useState } from "react"




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
    getDirectivesSuggestions(monaco, range)
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
        console.log(position, word)
        const range = {
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: word.startColumn,
          endColumn: word.endColumn,
        };
        return {
          suggestions: getSuggestions(monaco, range)
        }
      }
    })
  }, [monaco])



  const handleSubmit = async () => {
    const res = await Axios.post("/api/judge0", { source_code: text })
    setOutput(res.data)
  }







  return (
    // <div className="flex flex-col items-center gap-4">
    //   <h1 className="text-4xl sm:text-5xl font-bold text-center">Welcome to Iosup's playground!</h1>
    //   <p className="text-lg text-center">Get started by entering your assembly program below</p>
    //   <div>
    //     <textarea
    //       className="w-full h-96 p-4 bg-[#f2f2f2] dark:bg-[#1a1a1a] text-black dark:text-white rounded-lg resize-none"
    //       defaultValue={text}
    //       onChange={(e) => setText(e.target.value)}
    //     ></textarea>
    //   </div>
    //   <Button onClick={handleSubmit}>Submit program</Button>
    // </div>

    <div>
      <Editor
        height="90vh"
        width="50vw"
        defaultLanguage="customLang"
        defaultValue={text}
        onChange={(value) => setText(value)}
        theme="vs-dark"

      />
    </div>
  )
}
