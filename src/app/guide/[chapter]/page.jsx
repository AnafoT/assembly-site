import { Card } from "@/components/ui/card"
import { ChapterCodeEditor } from "./_components/ChapterCodeEditor"
import { ChapterNavigation } from "./_components/ChapterNavigation"
import { ChapterHeader } from "./_components/ChapterHeader"
import dynamic from "next/dynamic"
import { getRegularChapters } from "@/lib/utils"

export default async function ChapterPage({ params }) {

    const { chapter } = await params

    const ChapterComponent = chapter
        ? dynamic(() => import(`../../../content/chapter${chapter}.md`))
        : null;

    if (!ChapterComponent) return <div>Chapter not found</div> // TODO: Check why nextjs errors out instead of showing this message
    const showCodeEditor = !getRegularChapters().includes(parseInt(chapter));
    console.log("Chapter", chapter);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-6">
                <ChapterHeader chapter={chapter} />
                <ChapterNavigation chapter={chapter} />
                <Content ChapterComponent={ChapterComponent} showCodeEditor={showCodeEditor} />
            </div>
        </div>
    )
}


const Content = ({ ChapterComponent, showCodeEditor }) => {

    const contentWidthStyles = showCodeEditor ? "grid gap-6 grid-cols-2" : ""
    return (
        <div className={contentWidthStyles}>
            <Card className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                    <ChapterComponent />
                </div>
            </Card>

            {showCodeEditor && <ChapterCodeEditor />}

        </div>
    )
}
