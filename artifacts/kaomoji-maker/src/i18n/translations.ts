export type Language = "zh-TW" | "zh-CN" | "en";

export type Translations = {
  appTitle: string;
  appSubtitle: string;
  base: string;
  eyes: string;
  mouth: string;
  arms: string;
  accessory: string;
  copy: string;
  copied: string;
  randomize: string;
  reset: string;
  favorites: string;
  addFavorite: string;
  removeFavorite: string;
  noFavorites: string;
  tapToCopy: string;
  presets: string;
  creator: string;
  langLabel: string;
  mouthNose: string;
  armsDecor: string;
  eyeSpacing: string;
};

export const TRANSLATIONS: Record<Language, Translations> = {
  "zh-TW": {
    appTitle: "顏文字製作器",
    appSubtitle: "製作你的顏文字",
    base: "外框",
    eyes: "眼睛",
    mouth: "嘴巴",
    arms: "手臂",
    accessory: "裝飾",
    copy: "複製",
    copied: "已複製！",
    randomize: "隨機",
    reset: "重置",
    favorites: "我的最愛",
    addFavorite: "加入最愛",
    removeFavorite: "移除最愛",
    noFavorites: "還沒有最愛，快來新增吧！",
    tapToCopy: "點擊複製",
    presets: "預設範本",
    creator: "自訂創作",
    langLabel: "語言",
    mouthNose: "嘴巴/鼻子",
    armsDecor: "手臂/裝飾",
    eyeSpacing: "眼距",
  },
  "zh-CN": {
    appTitle: "颜文字制作器",
    appSubtitle: "制作你的颜文字",
    base: "外框",
    eyes: "眼睛",
    mouth: "嘴巴",
    arms: "手臂",
    accessory: "装饰",
    copy: "复制",
    copied: "已复制！",
    randomize: "随机",
    reset: "重置",
    favorites: "我的收藏",
    addFavorite: "加入收藏",
    removeFavorite: "移除收藏",
    noFavorites: "还没有收藏，快来添加吧！",
    tapToCopy: "点击复制",
    presets: "预设模板",
    creator: "自定义创作",
    langLabel: "语言",
    mouthNose: "嘴巴/鼻子",
    armsDecor: "手臂/装饰",
    eyeSpacing: "眼距",
  },
  "en": {
    appTitle: "Kaomoji Maker",
    appSubtitle: "Make your own Kaomoji",
    base: "Base",
    eyes: "Eyes",
    mouth: "Mouth/Nose",
    arms: "Arms",
    accessory: "Accessory",
    copy: "Copy",
    copied: "Copied!",
    randomize: "Randomize",
    reset: "Reset",
    favorites: "Favorites",
    addFavorite: "Add to Favorites",
    removeFavorite: "Remove from Favorites",
    noFavorites: "No favorites yet. Add some!",
    tapToCopy: "Tap to copy",
    presets: "Presets",
    creator: "Creator",
    langLabel: "Language",
    mouthNose: "Mouth/Nose",
    armsDecor: "Arms/Decor",
    eyeSpacing: "Eye Spacing",
  },
};

export const LANGUAGE_NAMES: Record<Language, string> = {
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
  "en": "English",
};
