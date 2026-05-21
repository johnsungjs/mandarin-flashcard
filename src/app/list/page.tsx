import VocabularyCard from "@/components/list/VocabularyCard";
import hsk1Data from '@/data/hsk1-2.0.json';
import Link from "next/link";

const cards = hsk1Data

const levels = ["HSK 1", "HSK 2", "HSK 3"];

export default function ListPage() {
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

        <div className="mt-10 flex items-center gap-4 border-b border-white/10 pb-5">
          {levels.map((level, index) => (
            <button
              key={level}
              className={
                index === 0
                  ? "rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white"
                  : "px-4 py-3 text-sm text-slate-400 transition hover:text-white"
              }
            >
              {level}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {cards.map((card) => (
            <VocabularyCard
              key={card.hanzi}
              hanzi={card.hanzi}
              pinyin={card.pinyin}
              meaning={card.meaning}
            />
          ))}
        </div>

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
