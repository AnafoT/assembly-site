## Understanding Assembly Language

Assembly language is a low-level programming language that provides a direct mapping to machine code instructions. Unlike high-level languages, assembly gives you precise control over the hardware but requires more detailed understanding of the computer's architecture.


### Assembly program
Lets look at the "Hello World" program on the right. We'll ignore some things as they're not relevant for now, but pay attention to the following parts:

- The `.text` directive stores global constants of your program. In here we have a global string called "program_output" which contains the "Hello World" in ascii letters(which means the computer has to interpret the string as regular characters).
    - Within the `.text` directive, we can declare strings in a couple of ways, mainly `.ascii` and `.asciz`. Just use `.asciz` as this will serve your purpose most of the time. Just use `.asciz`.
    - **Longer explanation:** The difference between them is that `.asciz` appends a null(`\0`) byte at the end of the string, which is important for printf to know how many characters it has to print, while `.ascii` doesn't.
- The `.global` directive allows us to mark certain function accessible by different files. In this case we can access the main function from different places. If we do not do this, we cannot run the program as we would not know where the `main` function starts.
- We set the `rdi` register to the memory location of our string, so `printf` *knows* what we want to print as our output.
- We call `printf`.
- We set the `rdi` register to 0 and call exit. A higher level equivalant of this would be:
    ```
    return 0;
    ```
### Exercise

Try modifying the code on the right to change the output message. Click "Submit Program" to see your changes in action.

> Feel free to use `.ascii` instead of `.asciz` and see what happens!
