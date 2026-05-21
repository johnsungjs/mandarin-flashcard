"use client";

import { useState } from "react";

type VocabularyCardProps = {
  hanzi: string;
  pinyin: string;
  meaning: string;
};

export default function VocabularyCard({
  hanzi,
  pinyin,
  meaning,
}: VocabularyCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      onClick={() => setRevealed((prev) => !prev)}
      className="group relative aspect-[1.4/1] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/12 p-2 transition-all duration-200 hover:bg-white/5 active:scale-[0.98]"
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className={`${revealed ? 'text-2xl' : 'text-3xl'} font-normal leading-none -translate-y-0.5 text-white text-center`}>
          {hanzi}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            revealed
              ? "mt-2 max-h-32 opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-0 text-center leading-tight">
            <div className="text-sm text-slate-200">
              {pinyin}
            </div>

            <div className="text-sm text-slate-200">
              {meaning}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}