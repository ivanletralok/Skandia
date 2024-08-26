/**
 * Interface defining the structure of the texts for the first section of the component.
 */
export interface FirstSectionText {
  successMessage: string;
  emailNotification: string;
}

/**
 * Interface defining the structure of the texts for the second section of the component.
 */
export interface SecondSectionText {
  goalMessage: string;
  amount: string;
  goal: string;
  encouragementMessage: string;
  actionMessage: string;
  actionPrompt: string;
}

/**
 * Texts for the first section of the component.
 */
export const FIRST_SECTION_TEXT: FirstSectionText = {
  successMessage: '¡Tu objetivo ha sido agregado exitosamente!',
  emailNotification: '¡Te hemos enviado un correo con la notificación!',
};

/**
 * Texts for the second section of the component.
 */
export const SECOND_SECTION_TEXT: SecondSectionText = {
  goalMessage: '¡Vamos por esos',
  amount: '$6.000.000',
  goal: 'Conocer mi sobrino',
  encouragementMessage: 'para',
  actionMessage:
    '¡A través de tus productos y nuestros rendimientos podremos lograrlo!',
  actionPrompt: 'Asocia tus productos o adquiere uno nuevo.',
};
