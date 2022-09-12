export interface Tab {
  class: string;
  source: string;
  alternative: string;
}

export const tabs: Tab[] = [
  {
    class: "tab tab__cryptopunk",
    source: "../../../assets/images/Cryptopunk.svg",
    alternative: "Cryptopunk tab"
  },
  {
    class: "tab tab__popular-design",
    source: "../../../assets/images/Popular-Design.svg",
    alternative: "Popular design tab"
  },
  {
    class: "tab tab__product-design",
    source: "../../../assets/images/Product-Design.svg",
    alternative: "Product design tab"
  },
  {
    class: "tab tab__elon-musk",
    source: "../../../assets/images/Elon-Musk.svg",
    alternative: "Elon Musk tab"
  }
]