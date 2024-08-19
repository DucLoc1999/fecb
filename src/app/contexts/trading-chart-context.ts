import { createContext } from "react";
import { ChartingLibraryWidgetOptions } from "@/public/static/charting_library/charting_library";

interface TradingChartContextType {
    widgetProps: Partial<ChartingLibraryWidgetOptions>;
    setWidgetProps(widgetProps: Partial<ChartingLibraryWidgetOptions>): void;
}

export const TradingChartContextContext = createContext<TradingChartContextType>({
    widgetProps: {},
    setWidgetProps: (widgetProps:Partial<ChartingLibraryWidgetOptions>) => {},
});
