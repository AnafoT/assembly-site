import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

    return (
        <div className="grid items-center justify-items-center gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <div className="grid gap-4">



                <Button asChild>
                    <Link href="/playground">
                        Playground
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/guide">
                        Guide
                    </Link>
                </Button>
            </div>
        </div>
    );
}
