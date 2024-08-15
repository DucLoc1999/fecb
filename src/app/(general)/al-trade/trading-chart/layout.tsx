"use client";
import { TradingChartContextContext } from "@/app/contexts/trading-chart-context";
import { ChartingLibraryWidgetOptions, ResolutionString } from "@/public/static/charting_library/charting_library";
import { useState } from "react";
import { TradingViewFilter } from "../../../components/TradingViewChart/filter";


export default function ChartPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [widgetProps, setWidgetProps] = useState<Partial<ChartingLibraryWidgetOptions>>({
    symbol: "BTCUSDT",
    interval: "1H" as ResolutionString,
    library_path: "/static/charting_library/",
    locale: "en",
    charts_storage_url: "https://saveload.tradingview.com",
    charts_storage_api_version: "1.1",
    client_id: "tradingview.com",
    user_id: "public_user_id",
    fullscreen: false,
    autosize: true,
  });
  return (
    <div>
      <section className="mx-2 sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-36 mt-7 mb-14">
        <div className="flex items-center justify-center text-center text-xs leading-5 font-medium h-11 rounded-lg mt-16 md:mt-24">
        </div>
        <div className="mt-6 mb-10 mx-auto max-w-[1380px]">
        <TradingViewFilter
        widgetProps={widgetProps}
        setWidgetProps={setWidgetProps}
        />
          <TradingChartContextContext.Provider
            value={{ widgetProps: widgetProps, setWidgetProps: setWidgetProps }}
          >
            {children}
          </TradingChartContextContext.Provider>
        </div>
      </section>
    </div>
  );
}
