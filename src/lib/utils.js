import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
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