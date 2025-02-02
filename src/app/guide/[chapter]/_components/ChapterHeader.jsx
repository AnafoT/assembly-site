import { getChapters } from '@/lib/utils'

export const ChapterHeader = ({ chapter }) => {

  const all_chapters = getChapters()
  const title = all_chapters[chapter]
  const totalChapters = all_chapters.length

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Chapter {chapter}: {title}
        </h1>

      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(chapter / totalChapters) * 100}%` }}
        />
      </div>
    </header>
  )
}
