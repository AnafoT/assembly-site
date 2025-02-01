export const CodeOutput = ({ output }) => {

  const code_message = output.stdout && "Your program has been executed successfully!"
    
  const code_output = output.stdout || output.compile_output

  return (
    <div className="flex flex-col gap-4 items-center w-1/2 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Output</h2>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-sm">{code_message}</h3>
        <pre className="text-sm text-left whitespace-pre-wrap">{code_output}</pre>
      </div>
    </div>
  )
}
