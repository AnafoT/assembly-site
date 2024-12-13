export const getOperandSuggestions = (monaco, range) => {
  const suggestions = [
    {
      label: "mov",
      insertText: 'mov ${1:src}, ${2:dest}',
      documentation: "Move data from src to dest",
    },
    {
      label: "movz",
      insertText: 'movz ${1:src}, ${2:dest}',
      documentation: "Move zero-extended data from src to dest",
    },
    {
      label: "push",
      insertText: 'push ${1:reg}',
      documentation: "Push register onto the stack",
    },
    {
      label: "pop",
      insertText: 'pop ${1:reg}',
      documentation: "Pop register from the stack",
    },
    {
      label: "lea",
      insertText: 'lea ${1:src}, ${2:dest}',
      documentation: "Load effective address of src into dest",
    },
    {
      label: "call",
      insertText: 'call ${1:label}',
      documentation: "Call a function",
    },
    {
      label: "syscall",
      insertText: 'syscall',
      documentation: "Make a system call",
    },
    {
      label: "ret",
      insertText: 'ret',
      documentation: "Return from a function",
    },
    {
      label: "jmp",
      insertText: 'jmp ${1:label}',
      documentation: "Jump to a label",
    },
    {
      label: "je",
      insertText: 'je ${1:label}',
      documentation: "Jump if equal",
    },
    {
      label: "jne",
      insertText: 'jne ${1:label}',
      documentation: "Jump if not equal",
    },
    {
      label: "leave",
      insertText: 'leave',
      documentation: "Restore the stack frame, equivalent to mov rsp, rbp; pop rbp",
    },
    {
      label: "add",
      insertText: 'add ${1:src}, ${2:dest}',
      documentation: "Add src to dest",
    },
    {
      label: "sub",
      insertText: 'sub ${1:src}, ${2:dest}',
      documentation: "Subtract src from dest",
    },
    {
      label: "inc",
      insertText: 'inc ${1:reg}',
      documentation: "Increment register",
    },
    {
      label: "mul",
      insertText: 'mul ${1:reg}',
      documentation: "Multiply register",
    },
    {
      label: "div",
      insertText: 'div ${1:reg}',
      documentation: "Divide register",
    },
    {
      label: "cmp",
      insertText: 'cmp ${1:src}, ${2:dest}',
      documentation: "Compare src with dest",
    },
    {
      label: "xor",
      insertText: 'xor ${1:src}, ${2:dest}',
      documentation: "XOR src with dest",
    },
    {
      label: "or",
      insertText: 'or ${1:src}, ${2:dest}',
      documentation: "OR src with dest",
    },
    {
      label: "and",
      insertText: 'and ${1:src}, ${2:dest}',
      documentation: "AND src with dest",
    },
  ]


  return suggestions.map(suggestion => ({
    label: suggestion.label,
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: suggestion.insertText,
    documentation: suggestion.documentation,
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
  }))

}

export const getCallerSavedRegistersSuggestions = (monaco, range) => {
  const suggestions = [
    {
      label: "rax",
      insertText: '%rax',
      documentation: "Return value",
    },
    {
      label: "rdi",
      insertText: '%rdi',
      documentation: "Argument 1",
    },
    {
      label: "rsi",
      insertText: '%rsi',
      documentation: "Argument 2",
    },
    {
      label: "rdx",
      insertText: '%rdx',
      documentation: "Argument 3",
    },
    {
      label: "rcx",
      insertText: '%rcx',
      documentation: "Argument 4, commonly used as a counter",
    },
    {
      label: "r8",
      insertText: '%r8',
      documentation: "Argument 5",

    },
    {
      label: "r9",
      insertText: '%r9',
      documentation: "Argument 6",

    },
    {
      label: "r10",
      insertText: '%r10',
      documentation: "???",

    },
    {
      label: "r11",
      insertText: '%r11',
      documentation: "???",
    }
  ]
  return suggestions.map(suggestion => ({
    label: suggestion.label,
    kind: monaco.languages.CompletionItemKind.Variable,
    insertText: suggestion.insertText,
    documentation: suggestion.documentation,
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
  }))
}

export const getCalleeSavedRegistersSuggestions = (monaco, range) => {

  const suggestions = [
    {
      label: "rbp",
      insertText: '%rbp',
      documentation: "Base pointer",
    },
    {
      label: "rsp",
      insertText: '%rsp',
      documentation: "Stack pointer",
    },
    {
      label: "rbx",
      insertText: '%rbx',
      documentation: "General purpose register",
    },
    {
      label: "r12",
      insertText: '%r12',
      documentation: "General purpose register",
    },
    {
      label: "r13",
      insertText: '%r13',
      documentation: "General purpose register",
    },
    {
      label: "r14",
      insertText: '%r14',
      documentation: "General purpose register",
    },
    {
      label: "r15",
      insertText: '%r15',
      documentation: "General purpose register",
    }
  ]
  return suggestions.map(suggestion => ({
    label: suggestion.label,
    kind: monaco.languages.CompletionItemKind.Property,
    insertText: suggestion.insertText,
    documentation: suggestion.documentation,
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
  }))
}

export const getDirectivesSuggestions = (monaco, range) => {
  
  const suggestions = [
    {
      label: ".bss",
      insertText: '.bss',
      documentation: "Declare uninitialized data",
    },
    {
      label: ".data",
      insertText: '.data',
      documentation: "Declare initialized data",
    },
    {
      label: ".text",
      insertText: '.text',
      documentation: "Declare code",
    },
    {
      label: ".global",
      insertText: '.global',
      documentation: "Declare a global symbol",
    },
    {
      label: ".byte",
      insertText: '.byte',
      documentation: "Declare a byte",
    },
    {
      label: ".word",
      insertText: '.word',
      documentation: "Declare a word",
    },
    {
      label: ".long",
      insertText: '.long',
      documentation: "Declare a long",
    },
    {
      label: ".quad",
      insertText: '.quad',
      documentation: "Declare a quad",
    },
    {
      label: ".ascii",
      insertText: '.ascii',
      documentation: "Declare an ascii string",
    },
    {
      label: ".asciz",
      insertText: '.asciz',
      documentation: "Declare an ascii string with null terminator",
    },
    {
      label: ".fill",
      insertText: '.fill',
      documentation: "Fill space with a value",
    },
    {
      label: ".zero",
      insertText: '.zero',
      documentation: "Fill space with zeros",
    },
    {
      label: ".skip",
      insertText: '.skip',
      documentation: "Skip space",
    },
    {
      label: ".equ",
      insertText: '.equ',
      documentation: "Define a constant",
    },
  ]
  return suggestions.map(suggestion => ({
    label: suggestion.label,
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: suggestion.insertText,
    documentation: suggestion.documentation,
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
  }))
}