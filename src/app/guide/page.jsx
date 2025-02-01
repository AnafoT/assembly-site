import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getChapters } from "@/lib/utils"

export default function GuidePage() {
    const chapters = getChapters()

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <Card className="w-full max-w-3xl p-8">
                <h1 className="text-4xl font-bold mb-6 text-center">Assembly Language Guide</h1>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                    Dive into the world of low-level programming with our comprehensive Assembly Language guide. Learn the
                    fundamentals, master advanced concepts, and build efficient programs from the ground up.
                </p>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{"What you'll learn:"}</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Understanding computer architecture</li>
                        <li>Working with registers and memory</li>
                        <li>Writing and optimizing assembly code</li>
                        <li>Interfacing assembly with high-level languages</li>
                        <li>Real-world applications and examples</li>
                    </ul>
                </div>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/guide/1">Get Started</Link>
                    </Button>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Chapter Overview:</h3>
                    <ul className="space-y-2">
                        {chapters.map((chapter, index) => (
                            <li key={index}>
                                <Link href={`/guide/${index}`} className="text-primary hover:underline">
                                    Chapter {index}: {chapter}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </div>
    )
}


