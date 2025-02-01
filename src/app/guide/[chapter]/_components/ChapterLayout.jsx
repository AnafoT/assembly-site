"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CodeEditor } from "@/app/playground/_components/CodeEditor"
import { getChapters } from "@/lib/utils"



export function ChapterLayout({ children, title, chapterNumber }) {
  const [isVerticalLayout, setIsVerticalLayout] = useState(false)
  const [output, setOutput] = useState("")

  const code_output = output.stdout || output.compile_output
  const totalChapters = getChapters().length


  useEffect(() => {
    const handleResize = () => {
      setIsVerticalLayout(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Chapter {chapterNumber}: {title}
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVerticalLayout(!isVerticalLayout)}
              className="lg:hidden"
            >
              {isVerticalLayout ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(chapterNumber / totalChapters) * 100}%` }}
            />
          </div>
        </header>

        <div className={`grid gap-6 ${isVerticalLayout ? "grid-cols-1" : "lg:grid-cols-[1fr_600px]"}`}>
          <Card className="p-6">
            <div className="prose dark:prose-invert max-w-none">{children}</div>
          </Card>

          <div className="space-y-4">
            <Card className="min-h-[500px] min-w-[500px] bg-zinc-800 text-white font-mono">
              {/* Your existing code editor component would go here */}
              <CodeEditor setOutput={setOutput} />

            </Card>
            <Card className="p-4 bg-muted">
              <h3 className="font-semibold mb-2">Output</h3>
              <div className="font-mono text-sm">{code_output}</div>
            </Card>
          </div>
        </div>

        <footer className="mt-8 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href={`/chapter/${chapterNumber - 1}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Chapter
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/chapter/${chapterNumber + 1}`}>
              Next Chapter
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}


