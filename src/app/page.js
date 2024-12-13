import { SandBox } from "@/components/Sandbox";

export default function Home() {
  
  return (
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <SandBox />

        </main>
      </div>
  );
}