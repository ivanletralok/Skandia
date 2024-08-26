/**
 * Represents the structure of a product item from the API.
 */
export interface SliderData {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
  icon?: string;
}

/**
 * Represents the structure of the API response.
 */
export interface SliderResponse {
  listCard: SliderData[];
}
