import { ChapterLayout } from "./_components/ChapterLayout"
import dynamic from "next/dynamic"
import { getChapters } from "@/lib/utils";

export default async function ChapterPage({ params }) {

    const { chapter } = await params

    const ChapterComponent = chapter
        ? dynamic(() => import(`../../../content/chapter${chapter}.mdx`))
        : null;

    if (!ChapterComponent) return <div>Chapter not found</div>

    const chapter_title = getChapters()[chapter]

    return (
        <ChapterLayout title={chapter_title} chapterNumber={chapter}>
            <ChapterComponent />
        </ChapterLayout>
    )
}


