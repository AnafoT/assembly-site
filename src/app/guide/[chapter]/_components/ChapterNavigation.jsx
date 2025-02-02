import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const ChapterNavigation = ({ chapter }) => {

  const chapter_number = parseInt(chapter)
  return (
    <div className="p-2 flex items-center justify-between">
      <Button variant="outline" asChild>
        <Link href={`/guide/${chapter_number - 1}`}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous Chapter
        </Link>
      </Button>
      <Button asChild>
        <Link href={`/guide/${chapter_number + 1}`}>
          Next Chapter
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
