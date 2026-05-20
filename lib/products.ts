export type Product = {
  id: string;
  name: string;
  tagline: string;
  gsm: 220 | 240;
  price: number;
  compareAt: number;
  primary: string;
  secondary: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "burn-fuel",
    name: "Built To Burn Fuel",
    tagline: "Engineered for the open road.",
    gsm: 240,
    price: 699,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/burn_fuel.png?v=1777025982&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_25_2026_04_56_51_PM.png?v=1777270697&width=1200",
    badge: "Best Seller",
  },
  {
    id: "unstoppable",
    name: "Unstoppable",
    tagline: "Move with purpose.",
    gsm: 220,
    price: 599,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/2_e2b912cb-7af2-42fc-9510-41022a9fd1f6.png?v=1777469735&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/4_4335efd0-12f2-43d0-9bf3-98fcaf89717a.png?v=1777469223&width=1200",
  },
  {
    id: "focus",
    name: "Focus",
    tagline: "Minimal cut. Maximum signal.",
    gsm: 220,
    price: 599,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/focus.png?v=1777025982&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/2_8040f6d9-342d-4f28-a3b2-ab1c7b46348f.png?v=1777466034&width=1200",
    badge: "New",
  },
  {
    id: "built-from-struggle",
    name: "Built From Struggle",
    tagline: "Forged, not found.",
    gsm: 220,
    price: 599,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/6_d3dfc0d1-d138-445a-a41c-267f5b409239.png?v=1777550332&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/1_051c49be-0143-4b7b-9077-ada954ecb1af.png?v=1777550332&width=1200",
  },
  {
    id: "less-wheels",
    name: "Less Wheels More Fun",
    tagline: "Two wheels, one mood.",
    gsm: 240,
    price: 699,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/LessWheels_1_blk.png?v=1777291909&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/lessWheels_2.png?v=1777291909&width=1200",
  },
  {
    id: "who-needs-roads",
    name: "Who Needs Roads",
    tagline: "Where we're going we don't need them.",
    gsm: 240,
    price: 699,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/WhoNeedRoads_1.png?v=1777282143&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/WhoNeedRoads_5.png?v=1777287114&width=1200",
    badge: "Limited",
  },
  {
    id: "back-again",
    name: "Back Again Let's See",
    tagline: "Round two. Sharper edges.",
    gsm: 220,
    price: 599,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/back_again.png?v=1777025982&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/2_2d09ca11-7af4-4e17-93ab-51afb907cd3f.png?v=1777464989&width=1200",
  },
  {
    id: "first-coffee",
    name: "First I Drink Coffee",
    tagline: "Morning protocol.",
    gsm: 220,
    price: 599,
    compareAt: 1099,
    primary:
      "https://modrn.in/cdn/shop/files/first_I_drink_coffee.png?v=1777025982&width=1200",
    secondary:
      "https://modrn.in/cdn/shop/files/first_I_drink_coffee.png?v=1777025982&width=1200",
  },
];

export const collections = [
  {
    name: "Machine Mode",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_02_11_09_PM.png?v=1776075534&width=2000",
  },
  {
    name: "Minimal Vibe",
    image:
      "https://modrn.in/cdn/shop/files/MinimalVibe_collection_img.png?v=1777443353&width=2000",
  },
  {
    name: "High Standards",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_03_07_34_PM.png?v=1776066628&width=2000",
  },
  {
    name: "Cricket Mode",
    image:
      "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_04_49_17_PM.png?v=1776067779&width=2000",
  },
];

export const heroImages = {
  primary:
    "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_02_11_09_PM.png?v=1776075534&width=2000",
  secondary:
    "https://modrn.in/cdn/shop/files/ChatGPT_Image_Apr_10_2026_04_49_17_PM.png?v=1776067779&width=2000",
};

export const heroVideos = {
  primary:
    "https://cdn.shopify.com/videos/c/o/v/7caf3a8202b8481286c09cf06eb0bac8.mp4",
  secondary:
    "https://cdn.shopify.com/videos/c/o/v/bed432bde5ea48aa9c39b84742dbe3d8.mp4",
};
