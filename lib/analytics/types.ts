export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export interface PageViewEvent extends AnalyticsEvent {
  page_path: string;
  time_spent?: number;
  referrer?: string;
}

export interface ProductEvent extends AnalyticsEvent {
  product_id: string;
  product_name: string;
  product_brand: string;
  product_category: string;
  product_price: number;
}

export interface CartEvent extends ProductEvent {
  quantity: number;
  total_value: number;
}

export interface ConversionEvent extends CartEvent {
  transaction_id: string;
  is_first_purchase: boolean;
}
