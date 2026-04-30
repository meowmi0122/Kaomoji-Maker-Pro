export type KaomojiPart = {
  label: string;
  value: string;
};

export type KaomojiCategory = {
  id: string;
  labelKey: string;
  parts: KaomojiPart[];
};

export const KAOMOJI_CATEGORIES: KaomojiCategory[] = [
  {
    id: "base",
    labelKey: "base",
    parts: [
      { label: "∅", value: "" },
      { label: "( )", value: "( {eyes} {mouth} )" },
      { label: "{ }", value: "{ {eyes} {mouth} }" },
      { label: "[ ]", value: "[ {eyes} {mouth} ]" },
      { label: "[ ]", value: "[{eyes} {mouth}]" },
      { label: "‹( )›", value: "‹( {eyes} {mouth} )›" },
      { label: "‹( )›", value: "‹({eyes} {mouth})›" },
      { label: "← →", value: "← {eyes} {mouth} →" },
      { label: "{ }", value: "{  {eyes} {mouth}  }" },
      { label: "( )", value: "({eyes} {mouth})" },
      { label: "< >", value: "<{eyes} {mouth}>" },
      { label: "〈 〉", value: "〈{eyes} {mouth}〉" },
      { label: "〔 〕", value: "〔{eyes} {mouth}〕" },
      { label: "【 】", value: "【{eyes} {mouth}】" },
      { label: "（ ）", value: "（{eyes} {mouth}）" },
    ],
  },
  {
    id: "eyes",
    labelKey: "eyes",
    parts: [
      { label: "∅", value: "  " },
      { label: "• •", value: "• •" },
      { label: "^ ^", value: "^ ^" },
      { label: "ó ó", value: "ó ó" },
      { label: "◉ ◉", value: "◉ ◉" },
      { label: ". .", value: ". ." },
      { label: "x x", value: "x x" },
      { label: "X X", value: "X X" },
      { label: "* *", value: "* *" },
      { label: "˘ ˘", value: "˘ ˘" },
      { label: "r r", value: "r r" },
      { label: "¯° ¯°", value: "¯° ¯°" },
      { label: "ம ம", value: "ம ம" },
      { label: "o o", value: "o o" },
      { label: "O O", value: "O O" },
      { label: "T T", value: "T T" },
      { label: "u u", value: "u u" },
      { label: "- -", value: "- -" },
      { label: "= =", value: "= =" },
      { label: "> <", value: "> <" },
      { label: "@ @", value: "@ @" },
      { label: "≧ ≦", value: "≧ ≦" },
      { label: "♥ ♥", value: "♥ ♥" },
      { label: "☆ ☆", value: "☆ ☆" },
      { label: "★ ★", value: "★ ★" },
      { label: "◕ ◕", value: "◕ ◕" },
      { label: "✿ ✿", value: "✿ ✿" },
      { label: "ᴗ ᴗ", value: "ᴗ ᴗ" },
      { label: "눈 눈", value: "눈 눈" },
      { label: "ʘ ʘ", value: "ʘ ʘ" },
      { label: "⊙ ⊙", value: "⊙ ⊙" },
    ],
  },
  {
    id: "mouth",
    labelKey: "mouth",
    parts: [
      { label: "∅", value: "" },
      { label: "ᵕ", value: "ᵕ" },
      { label: "ᴗ", value: "ᴗ" },
      { label: "◡", value: "◡" },
      { label: "∩", value: "∩" },
      { label: "_", value: "_" },
      { label: ".", value: "." },
      { label: "ω", value: "ω" },
      { label: "³", value: "³" },
      { label: "∇", value: "∇" },
      { label: "▽", value: "▽" },
      { label: "△", value: "△" },
      { label: "口", value: "口" },
      { label: "〜", value: "〜" },
      { label: "皿", value: "皿" },
      { label: "︿", value: "︿" },
      { label: "益", value: "益" },
      { label: "д", value: "д" },
      { label: "o", value: "o" },
      { label: "O", value: "O" },
      { label: "v", value: "v" },
      { label: "w", value: "w" },
      { label: "U", value: "U" },
      { label: "~", value: "~" },
      { label: "ε", value: "ε" },
      { label: "з", value: "з" },
      { label: "c", value: "c" },
      { label: "Д", value: "Д" },
      { label: "Ω", value: "Ω" },
    ],
  },
  {
    id: "arms",
    labelKey: "arms",
    parts: [
      { label: "∅", value: "" },
      { label: "ノ", value: " ノ" },
      { label: "ヽ(　)", value: "ヽ( {body} )ノ" },
      { label: "╲(　)╱", value: "╲( {body} )╱" },
      { label: "-\\_/¯-", value: " -\\_{body}_/¯" },
      { label: "∠(　)∠", value: "∠( {body} )∠" },
      { label: "(ง　)ง", value: "(ง {body} )ง" },
      { label: "(ﾉ　)ﾉ", value: "(ﾉ {body} )ﾉ" },
      { label: "（ง　)ว", value: "（ง {body} )ว" },
      { label: "ψ（　）ψ", value: "ψ（ {body} ）ψ" },
      { label: "٩(　)۶", value: "٩( {body} )۶" },
      { label: "♩（　）♩", value: "♩（ {body} ）♩" },
      { label: "ƪ（　）ʃ", value: "ƪ（ {body} ）ʃ" },
      { label: "┌(　)┘", value: "┌( {body} )┘" },
      { label: "└(　)┐", value: "└( {body} )┐" },
      { label: "/（　）\\", value: "/（ {body} ）\\" },
      { label: "（（　））", value: "（（ {body} ））" },
      { label: "〜（　）〜", value: "〜（ {body} ）〜" },
    ],
  },
  {
    id: "accessory",
    labelKey: "accessory",
    parts: [
      { label: "∅", value: "" },
      { label: ")", value: ")" },
      { label: "]", value: "]" },
      { label: "}", value: "}" },
      { label: "}", value: " }" },
      { label: "›", value: "›" },
      { label: ">", value: ">" },
      { label: "→", value: "→" },
      { label: "〉", value: "〉" },
      { label: "」", value: "」" },
      { label: "》", value: "》" },
      { label: "✧", value: "✧" },
      { label: "★", value: "★" },
      { label: "♪", value: "♪" },
      { label: "♫", value: "♫" },
      { label: "☆", value: "☆" },
      { label: "✦", value: "✦" },
      { label: "ﾉ", value: "ﾉ" },
      { label: "/", value: "/" },
      { label: "~", value: "~" },
      { label: "っ", value: "っ" },
    ],
  },
];

export type Selection = {
  baseIndex: number;
  eyesIndex: number;
  mouthIndex: number;
  armsIndex: number;
  accessoryIndex: number;
};

export function buildKaomoji(selection: Selection): string {
  const base = KAOMOJI_CATEGORIES[0].parts[selection.baseIndex];
  const eyes = KAOMOJI_CATEGORIES[1].parts[selection.eyesIndex];
  const mouth = KAOMOJI_CATEGORIES[2].parts[selection.mouthIndex];
  const arms = KAOMOJI_CATEGORIES[3].parts[selection.armsIndex];
  const accessory = KAOMOJI_CATEGORIES[4].parts[selection.accessoryIndex];

  const eyeVal = eyes.value;
  const mouthVal = mouth.value;

  let faceContent = `${eyeVal} ${mouthVal}`.trim();
  if (eyeVal && mouthVal) {
    faceContent = `${eyeVal} ${mouthVal}`;
  } else if (eyeVal) {
    faceContent = eyeVal;
  } else if (mouthVal) {
    faceContent = mouthVal;
  } else {
    faceContent = "  ";
  }

  let result = "";
  const armsVal = arms.value;

  if (armsVal && armsVal.includes("{body}")) {
    let face = base.value;
    if (!face || !face.includes("{eyes}")) {
      face = `( {eyes} {mouth} )`;
    }
    face = face.replace("{eyes}", eyeVal || "  ").replace("{mouth}", mouthVal || "");
    result = armsVal.replace("{body}", face);
  } else {
    let face = base.value;
    if (!face) {
      result = `${faceContent}${armsVal}${accessory.value}`;
    } else {
      face = face.replace("{eyes}", eyeVal || "  ").replace("{mouth}", mouthVal || "");
      result = `${face}${armsVal}${accessory.value}`;
    }
  }

  return result.trim() || "(^ ^)";
}

export function randomSelection(): Selection {
  return {
    baseIndex: Math.floor(Math.random() * KAOMOJI_CATEGORIES[0].parts.length),
    eyesIndex: Math.floor(Math.random() * KAOMOJI_CATEGORIES[1].parts.length),
    mouthIndex: Math.floor(Math.random() * KAOMOJI_CATEGORIES[2].parts.length),
    armsIndex: Math.floor(Math.random() * KAOMOJI_CATEGORIES[3].parts.length),
    accessoryIndex: Math.floor(Math.random() * KAOMOJI_CATEGORIES[4].parts.length),
  };
}

export const DEFAULT_SELECTION: Selection = {
  baseIndex: 1,
  eyesIndex: 3,
  mouthIndex: 3,
  armsIndex: 4,
  accessoryIndex: 0,
};
