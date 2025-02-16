### What is assembly?

Assembly comes in many different flavours, but to keep it short, it is the intermediate languages higher programming languages get compiled to before getting transformed into 0s and 1s, aka byte code.
Because Assembly is the "lowest" level language we can write that is as close to the computer hardware as possible, the language/instruction set will differ per computer architechture.
### Assembly family/syntax

For this guide we'll be using x86 assembly with the AT&T syntax. Note that the Intel syntax is more widely known/used, so when looking for online resources the syntax will differ slightly.
This shouldn't cause any major problems, since the language has a very tiny instruction set, compared to more modern languages like: C/C++, Python, Java etc.
### Differences with higher programming languages

For a language to be **high** is dependant on the perspective, however since assembly is the *lowest* you can go in terms of being close to the hardware, every other language will be considered *high*.

See the main differences below:

- You will run into segfaults alot :D. // TODO add link
- Barebones instructions. I.e. if statements have to be more explcitly handled.
- The need to allocate memory on the *stack* to store data/variables.
- The usage of non-named stack/named registers(storage locations in the CPU) for storing data instead of typical (named) variables:
    ```
        mov $10, %rax // Register use
        mov $5, -8(%rbp) // Stack use

        instead of ...

        int a = 10;
        int b = 5;
    ```
- Labels instead of function params/signatures (see: calling convention):
    ```
    main:
        mov $2, %rax
        call func1
    func1:
        incq %rdi // Increment variable passed to function 
        mov %rdi, %rax // Move variable to rax as a return value
        ret // return from the function

    instead of...

    int main() {
        int result = func1(a);
    }
    int func1(int a) {
        return a + 1;
    }
    ```
- Floating points arithmetic needs some special registers/instructions which is very annoying, try to avoid this.
- "Lacking" IDE support, i.e. debugging/documentation. See *setup local development* for my recommended setup. //TODO add link
- And many other things that you'll find out.
