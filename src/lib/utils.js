import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const JUDGE0_CONSTANTS = {
  assembly_language_id: 100,
  submission_params: "?base64_encoded=false&fields=status,stdout,stderr,language_id,compile_output&wait=true"
}

export function getExampleProgram() {

  const text = `# Hello World in x86_64 Assembly
.text 
str1: .asciz "Hello World!"

.global main

main:
    pushq   %rbp
    movq    %rsp, %rbp

    movq    $0, %rax
    leaq    str1(%rip), %rdi
    call    printf

    movq    $0, %rdi
    call    exit
`
  return text
}

export function getChapters() {
  const chapterTitles = [
    "Prerequisites",
    "(Optional): Local Development Setup",
    "Introduction to Assembly",
    "Input/Output",
    "Registers & Calling Convention",
    "Loops & If statments",
    "Recursion",
    "Instruction Set I",
    "Instruction Set II",
  ]
  return chapterTitles
}

export function getRegularChapters() {
  return [0, 1]
}
