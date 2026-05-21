import { ReactNode } from "react";


import Link from "next/link";



export default function ExerciseLayout({children}: {children: ReactNode}) {


  return (
    <main className="min-h-screen bg-[#020817] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col">
        {/* Top Section */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Mandarin Flashcard
          </h1>

          <p className="text-lg text-slate-400">
            Tap a card to reveal pinyin and meaning.
          </p>
          <Link href={"/list"} className="text-md text-indigo-400">
            Browse Vocabulary
          </Link>
        </div>

        
        {children}
      </div>
    </main>
  );
}
