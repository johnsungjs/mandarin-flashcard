import { hskOldLevel } from "@/data/vocabData";
import Link from "next/link";
import { ReactNode } from "react";

const levels = hskOldLevel

export default function ListLayout({children}: {children: ReactNode}) {
  return (
    <main className="min-h-screen bg-[#020817] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Mandarin Vocabulary List
          </h1>

          <p className="text-lg text-slate-400">
            Tap a card to reveal pinyin and meaning.
          </p>
          <Link href={"/exercise"} className="text-md text-indigo-400">
            Go Though Flash Card Exercise.
          </Link>
        </div>

        {children}

        <div className="flex pt-8 justify-center">
          <Link
            href={"/exercise"}
            className="rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white"
          >
            Go to Exercise
          </Link>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          Tip: Tap any card to see pinyin and meaning
        </div>
      </div>
    </main>
  );
}
