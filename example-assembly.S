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

