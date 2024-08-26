/**
 * Interface defining the structure of the header text object.
 */
export interface HeaderText {
  mainTitle: string;
  category: string;
  reviewGoal: string;
}

/**
 * Interface defining the structure of the data section text object.
 */
export interface DataSectionText {
  firstBox: {
    label: string;
    date: string;
  };
  secondBox: {
    label: string;
    amount: string;
  };
  thirdBox: {
    label: string;
    amount: string;
  };
  associateProducts: string;
}

/**
 * Texts for the header section of the ReviewObjetive component.
 */
export const HEADER_TEXT: HeaderText = {
  mainTitle: 'Conocer mi sobrino',
  category: 'Categoría: Bienestar',
  reviewGoal: 'Revisar objetivo',
};

/**
 * Texts for the data section of the ReviewObjetive component.
 */
export const DATA_SECTION_TEXT: DataSectionText = {
  firstBox: {
    label: 'En esta fecha:',
    date: 'Diciembre/2022',
  },
  secondBox: {
    label: 'Lograrás:',
    amount: '$6.000.000',
  },
  thirdBox: {
    label: 'Ya cuentas con:',
    amount: '$0',
  },
  associateProducts: '¡Asocia productos para monitorear su progreso!',
};
