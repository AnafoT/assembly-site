import {
  getCalleeSavedRegistersSuggestions,
  getCallerSavedRegistersSuggestions,
  getDirectivesSuggestions,
  getOperandSuggestions,
  LANGUAGE_KEYWORDS,
} from "@/lib/completion"
import { Button } from "@/components/ui/button"
import { Editor, useMonaco } from "@monaco-editor/react"
import Axios from "axios"
import { useEffect, useState } from "react"
import { getExampleProgram } from "@/lib/utils"


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

    monaco.languages.register({ id: "customLang" })

    // Define the token rules for syntax highlighting
    monaco.languages.setMonarchTokensProvider("customLang", {
      defaultToken: "",
      tokenizer: {
        root: [
          // Operands (instructions)
          [
            new RegExp("\\b(" + LANGUAGE_KEYWORDS.operands.join("|") + ")\\b"),
            "instruction"
          ],
          // Caller-saved registers
          [
            new RegExp("\\b(" + LANGUAGE_KEYWORDS.caller_saved_registers.join("|") + ")\\b"),
            "caller-register"
          ],
          // Callee-saved registers
          [
            new RegExp("\\b(" + LANGUAGE_KEYWORDS.callee_saved_registers.join("|") + ")\\b"),
            "callee-register"
          ],
          // Directives
          [
            new RegExp("\\b(" + LANGUAGE_KEYWORDS.directives.join("|") + ")\\b"),
            "directive"
          ],
          // Numbers (decimal and hexadecimal)
          [/\b\d+\b/, "number"],
          [/\b0x[0-9a-fA-F]+\b/, "number"],
          // Comments
          // Comments start with a semicolon or a hash
          [/[;#].*/, "comment"],
          // String literals
          [/"([^"\\]|\\.)*$/, "string.invalid"],  // Bad string
          [/"/, "string", "@string"],
          // Labels
          [/[a-zA-Z_][a-zA-Z0-9_]*:/, "label"],
        ],
        string: [
          [/[^\\"]+/, "string"],
          [/"/, "string", "@pop"],
        ],
      }
    });


    // Define the theme colors
    monaco.editor.defineTheme("assemblyTheme", {
      base: "vs-dark",
      rules: [
        { token: "instruction", foreground: "C586C0", fontStyle: "bold" },      // Purple for instructions
        { token: "caller-register", foreground: "4FC1FF" },                     // Light blue for caller-saved registers
        { token: "callee-register", foreground: "9CDCFE" },                     // Slightly darker blue for callee-saved registers
        { token: "directive", foreground: "4EC9B0", fontStyle: "italic" },      // Teal for directives
        { token: "number", foreground: "B5CEA8" },                              // Light green for numbers
        { token: "comment", foreground: "6A9955", fontStyle: "italic" },        // Green for comments
        { token: "string", foreground: "CE9178" },                              // Orange for strings
        { token: "string.invalid", foreground: "F44747" },                      // Red for invalid strings
        { token: "label", foreground: "DCDCAA" },                               // Light yellow for labels
      ],
      colors: {
        "editor.foreground": "FFFFFF",
      }
    });

    monaco.editor.setTheme("assemblyTheme") // TODO: This should be set in the options of the Editor component, but only works when typing in the editor

    monaco.languages.registerCompletionItemProvider("customLang", {
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

    monaco.languages.registerCompletionItemProvider("customLang", {
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

    const all_keywords = LANGUAGE_KEYWORDS
  }, [monaco])

  const handleSubmit = async () => {
    const res = await Axios.post("/api/judge0/submissions", { source_code: text })
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
        options={{
          minimap: { enabled: false },
        }}
      />
      <div className="flex flex-row gap-2">

        <Button onClick={handleSubmit} className="mt-2">
          Submit program
        </Button>

        <Button onClick={() => setText(getExampleProgram())} className="mt-2">
          Load example code
        </Button>

        {process.env.STAGE === "dev" ?
          (<>
            <Button onClick={async () => {
              const res = await Axios.post("/api/judge0/authorize")
              console.info("Is authorized:", res.data.authorized)
            }} className="mt-2">
              Authorize
            </Button>

            <Button onClick={async () => {
              const submissions = await Axios.get("/api/judge0/submissions")
              console.info("Submissions:", submissions.data)
            }}>
              Get submissions
            </Button>

            <Button onClick={async () => {
              await Axios.delete("/api/judge0/submissions")
            }}>

            </Button>
          </>) : null}

      </div>
    </div>
  )
}
