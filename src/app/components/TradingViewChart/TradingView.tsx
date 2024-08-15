"use client"
import dynamic from "next/dynamic";
import { useState } from "react";
import Script from "next/script";

import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "@/public/static/charting_library/charting_library";

import { isNil } from "lodash";

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
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
};

const TVChartContainer = dynamic(
  () =>
    import("@/app/components/TradingViewChart/TVChartContainer").then((mod) => mod.TVChartContainer),
  { ssr: false }
);

export default function TradingViewChart({ widgetProps }: { widgetProps: Partial<ChartingLibraryWidgetOptions> }) {
  if (isNil(widgetProps)) {
    widgetProps = defaultWidgetProps;
  }
  const [isScriptReady, setIsScriptReady] = useState(false);
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />
      {isScriptReady && <TVChartContainer {...widgetProps} />}
    </>
  );
}
