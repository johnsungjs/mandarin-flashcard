"use client";

type ExerciseCardProps = {
  hanzi: string;
  pinyin: string;
  meaning: string;
  revealed: boolean;
  onReveal: () => void;
};

export default function ExerciseCard({
  hanzi,
  pinyin,
  meaning,
  revealed,
  onReveal,
}: ExerciseCardProps) {
  return (
    <button
      onClick={onReveal}
      className="group relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-white/12 p-8 transition-all duration-200 hover:bg-white/5 active:scale-[0.99]"
    >
      <div className="text-center">
        <div className="text-6xl tracking-[0.2em] text-white font-normal leading-none">
          {hanzi}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            revealed
              ? "mt-6 max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2">
            <div className="text-xl text-slate-400">
              {pinyin}
            </div>

            <div className="text-2xl text-slate-200">
              {meaning}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}