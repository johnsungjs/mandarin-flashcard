"use client";

import { useMemo, useState } from "react";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";

import ExerciseCard from "@/components/flashcard/ExerciseCard";
import Link from "next/link";

const levels = ["HSK 1", "HSK 2", "HSK 3"];

const cards = [
  {
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "hello",
  },
  {
    hanzi: "谢谢",
    pinyin: "xiè xie",
    meaning: "thank you",
  },
  {
    hanzi: "学习",
    pinyin: "xué xí",
    meaning: "study / learn",
  },
  {
    hanzi: "中国",
    pinyin: "zhōng guó",
    meaning: "china",
  },
  {
    hanzi: "再见",
    pinyin: "zài jiàn",
    meaning: "goodbye",
  },
];

export default function ExercisePage() {
  const [selectedLevel, setSelectedLevel] = useState("HSK 1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const currentCard = cards[currentIndex];

  const progress = useMemo(() => {
    return ((currentIndex + 1) / cards.length) * 100;
  }, [currentIndex]);

  const nextCard = () => {
    // setRevealed(true);

    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const previousCard = () => {
    // setRevealed(true);

    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const shuffleCards = () => {
    console.log("shuffle");
  };

  const markMastered = () => {
    console.log("mastered");
  };

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
          <Link href={"/list"} className="text-md text-indigo-400">See Vocabulary List.</Link>
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
        <div>
          {/* <div className="mb-6 flex items-center justify-between">
            <button
              onClick={shuffleCards}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:bg-white/[0.05]"
            >
              <Shuffle size={18} />
            </button>
          </div> */}

          {/* Progress */}
          <div className="mt-6">
            <div className="mb-3 text-sm text-slate-500">
              {currentIndex + 1} / {cards.length}
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all duration-300"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="flex flex-1 items-center justify-center py-10">
          <ExerciseCard
            hanzi={currentCard.hanzi}
            pinyin={currentCard.pinyin}
            meaning={currentCard.meaning}
            revealed={revealed}
            onReveal={() => setRevealed(!revealed)}
          />
        </div>

        {/* Bottom Actions */}
        <div className="pb-16 grid grid-cols-3 gap-3">
          <button
            onClick={previousCard}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-200 transition hover:bg-white/[0.05]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={markMastered}
            className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-emerald-300 transition hover:bg-emerald-500/20"
          >
            <Check size={18} />
          </button>

          <button
            onClick={nextCard}
            className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-4 text-white transition hover:bg-indigo-500"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}
