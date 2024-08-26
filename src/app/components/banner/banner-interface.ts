export interface RecommendationText {
  line1: string;
  line2: string;
  highlight: string;
  closing: string;
}

export interface CardContentText {
  line1: string;
  line2: string;
  linkText: string;
}

export interface CardFooterText {
  text: string;
  boldText: string;
}

export interface CardText {
  img: string;
  imageAlt: string;
  category: string;
  content: CardContentText;
  footer: {
    line1: CardFooterText;
    line2: CardFooterText;
  };
}
