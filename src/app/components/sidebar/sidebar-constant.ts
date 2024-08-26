/**
 * Interface defining the structure of a menu item.
 */
export interface MenuItem {
  name: string;
  icon: string;
}

/**
 * List of menu items to be displayed in the sidebar.
 */
export const MENU_ITEMS: MenuItem[] = [
  { name: 'Contratos', icon: '/assets/img/hoja1.svg' },
  { name: 'Acciones', icon: '/assets/img/Tool.svg' },
  { name: 'Objetivos', icon: '/assets/img/star.svg' },
  { name: 'Herramientas', icon: '/assets/img/money.svg' },
  { name: 'Servicio al cliente', icon: '/assets/img/talk2.svg' },
];
