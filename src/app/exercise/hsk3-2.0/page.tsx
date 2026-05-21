"use client";

import { useMemo, useState } from "react";

import {
    Check,
    ChevronLeft,
    ChevronRight,
    RotateCcw,
    Shuffle,
    Undo,
} from "lucide-react";

import ExerciseCard from "@/components/flashcard/ExerciseCard";
import hsk3Data from "@/data/hsk3-2.0.json";
import { hskOldLevel } from "@/data/vocabData";
import Link from "next/link";

const levels = hskOldLevel;

const initialCards = hsk3Data;

export default function ExercisePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [completed, setCompleted] = useState(false);
  // const [masteredIds, setMasteredIds] = useState<string[]>([]);

  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const saved = localStorage.getItem("mandarin-mastered");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const activeCards = cards.filter((card) => !masteredIds.includes(card.id));

  const saveMastered = (ids: string[]) => {
    setMasteredIds(ids);

    localStorage.setItem("mandarin-mastered", JSON.stringify(ids));
  };

  const resetMastered = () => {
    localStorage.removeItem("mandarin-mastered");

    setMasteredIds([]);
    setCompleted(false);
    setCurrentIndex(0);
    setCards(initialCards);
  };

  const currentCard = activeCards[currentIndex];

  const progress = useMemo(() => {
    return ((currentIndex + 1) / activeCards.length) * 100;
  }, [currentIndex, activeCards]);

  const restartSession = () => {
    setCompleted(false);
    setCurrentIndex(0);
    setRevealed(false);
  };

  const nextCard = () => {
    // setRevealed(true);

    if (currentIndex === activeCards.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const previousCard = () => {
    // setRevealed(true);

    setCurrentIndex((prev) => (prev === 0 ? activeCards.length - 1 : prev - 1));
  };

  const shuffleCards = () => {
    const shuffled = [...activeCards].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setCurrentIndex(0);
    setRevealed(false);
  };

  const markMastered = () => {
    const updated = [...masteredIds, currentCard.id];

    saveMastered(updated);

    if (currentIndex >= activeCards.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const getStoredMastered = (): string[] => {
    const saved = localStorage.getItem("mandarin-mastered");

    return saved ? JSON.parse(saved) : [];
  };

  const undoLastMastered = () => {
    const stored = getStoredMastered();

    if (stored.length === 0) {
      return;
    }

    const updated = stored.slice(0, -1);

    saveMastered(updated);

    setCompleted(false);
  };

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-4 border-b border-white/10 pb-5">
        {levels.map((level, index) => (
          <Link
            href={level.link}
            key={level.id}
            className={
              index === 2
                ? "rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white"
                : "px-6 py-3 text-sm text-slate-400 transition hover:text-white"
            }
          >
            {level.label}
          </Link>
        ))}
      </div>
      <div>
        {/* Progress */}
        <div className="mt-2">
          <div className="mb-3 text-sm text-slate-500">
            {currentIndex + 1} / {activeCards.length}
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

      {/* Shuffle Icon */}
      <div className="mt-4 flex items-center justify-center gap-8">
        <button
          onClick={undoLastMastered}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-slate-300 transition hover:bg-white/5"
        >
          <Undo size={18} />
        </button>

        <button
          onClick={resetMastered}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-slate-300 transition hover:bg-white/5"
        >
          <RotateCcw size={18} />
        </button>
        <button
          onClick={shuffleCards}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-slate-300 transition hover:bg-white/5"
        >
          <Shuffle size={18} />
        </button>
      </div>

      {/* Card */}
      {/* <div className="flex flex-1 items-center justify-center pt-4 pb-10">
          <ExerciseCard
            hanzi={currentCard.hanzi}
            pinyin={currentCard.pinyin}
            meaning={currentCard.meaning}
            revealed={revealed}
            onReveal={() => setRevealed(!revealed)}
          />
        </div> */}
      <div className="flex flex-1 items-center justify-center pt-6 pb-10">
        {completed ? (
          <div className="w-full max-w-md rounded-4xl border border-white/10 bg-white/12 p-10 text-center">
            <div className="text-5xl">🎉</div>

            <div className="mt-6 text-3xl font-semibold text-white">
              Session Completed
            </div>

            <p className="mt-3 text-slate-400">
              Great job reviewing this vocabulary set.
            </p>

            <button
              onClick={restartSession}
              className="mt-8 w-full rounded-2xl bg-indigo-600 px-5 py-4 font-medium text-white transition hover:bg-indigo-500"
            >
              Restart Session
            </button>
          </div>
        ) : (
          <ExerciseCard
            hanzi={currentCard.hanzi}
            pinyin={currentCard.pinyin}
            meaning={currentCard.meaning}
            revealed={revealed}
            onReveal={() => setRevealed(!revealed)}
          />
        )}
      </div>

      {/* Bottom Actions */}
      {completed ? (
        <>
          <div className="pb-36" />
        </>
      ) : (
        <div className="pb-16 grid grid-cols-3 gap-3">
          <button
            disabled={currentIndex === 0}
            onClick={previousCard}
            className="flex items-center justify-center gap-2 disabled:opacity-50 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-slate-200 transition hover:bg-white/5"
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
      )}
    </>
  );
}
