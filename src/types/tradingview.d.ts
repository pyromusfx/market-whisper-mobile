
interface TradingViewWidget {
  new (options: {
    autosize?: boolean;
    symbol: string;
    interval?: string;
    timezone?: string;
    theme?: 'light' | 'dark';
    style?: string;
    locale?: string;
    toolbar_bg?: string;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id: string;
    hide_top_toolbar?: boolean;
    hide_legend?: boolean;
    save_image?: boolean;
    studies?: string[];
    show_popup_button?: boolean;
    popup_width?: string;
    popup_height?: string;
  }): any;
}

declare global {
  interface Window {
    TradingView: {
      widget: TradingViewWidget;
    };
  }
}

export {};
