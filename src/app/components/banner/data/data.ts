import { CardText, RecommendationText } from '../banner-interface';

export const RECOMMENDATION_TEXT: RecommendationText = {
  line1: '¡Te recomendamos estos',
  line2: 'productos para',
  highlight: 'Conocer',
  closing: 'sobrino!',
};

export const CARD_TEXT: CardText = {
  img: '/assets/img/Mask_Group27.png',
  imageAlt: 'Imagen de la tarjeta de inversión',
  category: 'Ahorro e inversión',
  content: {
    line1: '¡Fondo de inversión Colectiva,',
    line2: 'la acción para potenciar tu capital y hacer real tu objetivo!',
    linkText: 'Conoce más',
  },
  footer: {
    line1: {
      text: 'Rentabilidades mínimas del',
      boldText: '3% anuales',
    },
    line2: {
      text: 'confían en este producto',
      boldText: '4.000 clientes',
    },
  },
};
