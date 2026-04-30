import { useState, useCallback } from "react";
import { Copy, Check, Shuffle, RotateCcw, Heart, X, ChevronRight } from "lucide-react";
import {
  KAOMOJI_CATEGORIES,
  buildKaomoji,
  randomSelection,
  DEFAULT_SELECTION,
  type Selection,
} from "@/data/kaomoji-parts";
import { PRESETS, PRESET_CATEGORIES, CATEGORY_LABELS } from "@/data/presets";
import { TRANSLATIONS, LANGUAGE_NAMES, type Language } from "@/i18n/translations";

function PartSelector({
  label,
  parts,
  selectedIndex,
  onSelect,
}: {
  label: string;
  parts: { label: string; value: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mb-4">
      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {parts.map((part, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`
              min-w-[44px] h-10 px-2 rounded-lg text-sm font-mono border transition-all duration-150 flex items-center justify-center
              ${i === selectedIndex
                ? "bg-blue-600 text-white border-blue-700 shadow-md scale-105"
                : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
              }
            `}
          >
            {part.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function KaomojiCreator() {
  const [lang, setLang] = useState<Language>("zh-TW");
  const [selection, setSelection] = useState<Selection>(DEFAULT_SELECTION);
  const [copied, setCopied] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"creator" | "presets" | "favorites">("creator");
  const [activeCategory, setActiveCategory] = useState<string>("happy");

  const t = TRANSLATIONS[lang];
  const kaomoji = buildKaomoji(selection);

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }, []);

  const handleRandomize = useCallback(() => {
    setSelection(randomSelection());
  }, []);

  const handleReset = useCallback(() => {
    setSelection(DEFAULT_SELECTION);
  }, []);

  const toggleFavorite = useCallback((k: string) => {
    setFavorites((prev) =>
      prev.includes(k) ? prev.filter((f) => f !== k) : [...prev, k]
    );
  }, []);

  const isFavorite = (k: string) => favorites.includes(k);

  return (
    <div className="min-h-screen bg-[#3340c0] flex flex-col">
      {/* Header */}
      <div className="px-5 pt-8 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-white leading-tight">
              {t.appTitle}
            </h1>
            <p className="text-blue-200 text-lg font-mono mt-1">{"(^ ᵕ ^) ノ"}</p>
          </div>
          {/* Language Selector */}
          <div className="flex flex-col gap-1 mt-1">
            {(Object.keys(LANGUAGE_NAMES) as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all ${
                  lang === l
                    ? "bg-white text-blue-700 font-bold shadow"
                    : "bg-blue-700/40 text-blue-100 hover:bg-blue-600/60"
                }`}
              >
                {LANGUAGE_NAMES[l]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 pb-2">
        <div className="flex gap-1 bg-blue-700/30 rounded-xl p-1">
          {(["creator", "presets", "favorites"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              {tab === "creator" ? t.creator : tab === "presets" ? t.presets : t.favorites}
            </button>
          ))}
        </div>
      </div>

      {/* Main Card */}
      <div className="flex-1 mx-3 mb-4 bg-gray-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Preview */}
        <div className="bg-white mx-4 mt-4 rounded-2xl px-5 py-5 shadow-sm relative min-h-[80px] flex items-center justify-center">
          <span className="text-2xl sm:text-3xl font-mono text-gray-800 text-center leading-relaxed break-all">
            {kaomoji}
          </span>
          <button
            onClick={() => toggleFavorite(kaomoji)}
            className="absolute top-3 right-3 p-1.5 rounded-full transition-all"
          >
            <Heart
              size={18}
              className={isFavorite(kaomoji) ? "fill-red-500 text-red-500" : "text-gray-300 hover:text-red-400"}
            />
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "creator" && (
            <div className="px-4 pt-4 pb-2">
              {KAOMOJI_CATEGORIES.map((cat, catIdx) => (
                <PartSelector
                  key={cat.id}
                  label={
                    cat.id === "base" ? t.base :
                    cat.id === "eyes" ? t.eyes :
                    cat.id === "mouth" ? t.mouthNose :
                    cat.id === "arms" ? t.arms :
                    t.accessory
                  }
                  parts={cat.parts}
                  selectedIndex={
                    catIdx === 0 ? selection.baseIndex :
                    catIdx === 1 ? selection.eyesIndex :
                    catIdx === 2 ? selection.mouthIndex :
                    catIdx === 3 ? selection.armsIndex :
                    selection.accessoryIndex
                  }
                  onSelect={(i) => {
                    setSelection((prev) => ({
                      ...prev,
                      ...(catIdx === 0 ? { baseIndex: i } :
                         catIdx === 1 ? { eyesIndex: i } :
                         catIdx === 2 ? { mouthIndex: i } :
                         catIdx === 3 ? { armsIndex: i } :
                         { accessoryIndex: i }),
                    }));
                  }}
                />
              ))}
            </div>
          )}

          {activeTab === "presets" && (
            <div className="px-4 pt-4 pb-2">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {PRESET_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400"
                    }`}
                  >
                    {CATEGORY_LABELS[lang][cat]}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {PRESETS.filter((p) => p.category === activeCategory).map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopy(preset.kaomoji)}
                    className="bg-white rounded-xl p-3 text-center font-mono text-sm text-gray-800 hover:bg-blue-50 hover:shadow-md transition-all border border-gray-100 relative group"
                  >
                    <span className="block break-all leading-relaxed">{preset.kaomoji}</span>
                    <span className="absolute inset-0 flex items-center justify-center bg-blue-600/90 text-white text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.copy}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(preset.kaomoji); }}
                      className="absolute top-1.5 right-1.5"
                    >
                      <Heart
                        size={12}
                        className={isFavorite(preset.kaomoji) ? "fill-red-500 text-red-500" : "text-gray-300 hover:text-red-400"}
                      />
                    </button>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "favorites" && (
            <div className="px-4 pt-4 pb-2">
              {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <Heart size={40} className="mb-3 text-gray-200" />
                  <p className="text-sm text-center">{t.noFavorites}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {favorites.map((fav, i) => (
                    <div key={i} className="bg-white rounded-xl p-3 text-center font-mono text-sm text-gray-800 border border-gray-100 relative group">
                      <button
                        onClick={() => handleCopy(fav)}
                        className="block w-full break-all leading-relaxed hover:text-blue-600 transition-colors"
                      >
                        {fav}
                      </button>
                      <button
                        onClick={() => toggleFavorite(fav)}
                        className="absolute top-1.5 right-1.5"
                      >
                        <X size={12} className="text-gray-300 hover:text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-4 pb-4 pt-2 space-y-2">
          <button
            onClick={() => handleCopy(kaomoji)}
            className={`w-full py-3.5 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md ${
              copied
                ? "bg-green-500 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? t.copied : t.copy}
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleRandomize}
              className="flex-1 py-3 rounded-2xl font-semibold text-sm bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Shuffle size={16} />
              {t.randomize}
            </button>
            <button
              onClick={handleReset}
              className="flex-1 py-3 rounded-2xl font-semibold text-sm bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw size={16} />
              {t.reset}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
