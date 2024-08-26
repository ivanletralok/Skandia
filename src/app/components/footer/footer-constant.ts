/**
 * Interface that defines the text for the footer sections.
 */
export interface FooterText {
  copyright: string;
  pbx: string;
  nationalLine: string;
  corporateLine: string;
  address: string;
  city: string;
  offices: string;
  terms: string;
}

/**
 * Texts for the footer sections.
 */
export const FOOTER_TEXT: FooterText = {
  copyright: '© 2019 Skandia.',
  pbx: '658 4000 / 484 1300',
  nationalLine: '01 8000 517 526',
  corporateLine: 'Línea Corporativa 658 4123',
  address: 'Av. 19 # 109A - 30',
  city: 'Bogotá D.C., Colombia',
  offices: 'Oficinas a nivel nacional',
  terms: 'Términos y Condiciones Canales de Servicio Defensoría del Consumidor Financiero Protección de Datos Definiciones Generales – Auto declaración FATCA y CRS Recomendaciones de Seguridad Ley de Transparencia Mapa del sitio',
};
