import VocabularyCard from "@/components/list/VocabularyCard";
import hsk5Data from "@/data/hsk5-2.0.json";
import { hskOldLevel } from "@/data/vocabData";
import Link from "next/link";

const cards = hsk5Data;
const levels = hskOldLevel;

export default function ListPage() {
  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-4 border-b border-white/10 pb-5">
        {levels.map((level, index) => (
          <Link
            href={level.link}
            key={level.id}
            className={
              index === 4
                ? "rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white"
                : "px-6 py-3 text-sm text-slate-400 transition hover:text-white"
            }
          >
            {level.label}
          </Link>
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
    </>
  );
}
