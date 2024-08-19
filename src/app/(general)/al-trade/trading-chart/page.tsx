"use client";
import { ManagePortfolio } from "@/app/components/rsi-heatmap/manage-portfolio";
import { OderInfomation } from "@/app/components/rsi-heatmap/order-info";
import { TradeWithCandleStick } from "@/app/components/rsi-heatmap/trade-with-candle-stick";
import { TradingStrategy } from "@/app/components/rsi-heatmap/trading-strategy";
import TradingViewChart from "@/app/components/TradingViewChart/TradingView";
import { WatchList } from "@/app/components/TradingViewChart/watch-list";
import { TradingChartContextContext } from "@/app/contexts/trading-chart-context";
import { useContext } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function ChartPage() {
  const handle = useFullScreenHandle();
  const { widgetProps } = useContext(TradingChartContextContext);
  return (
    <div className="max-w-8xl">
      <div className="grid  grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-3 order-1 lg:order-2 border border-[#E7E7E7] rounded-xl relative">
          <FullScreen
            handle={handle}
            className="flex items-center justify-around h-full"
          >
            <TradingViewChart widgetProps={widgetProps} />
          </FullScreen>
        </div>
        <div className="col-span-3 lg:col-span-1 order-3 border border-[#E7E7E7] rounded-xl">
          <WatchList />
        </div>
      </div>
      {/* <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 mt-6">
        <div className="col-span-3 lg:col-span-1 border border-[#E7E7E7] rounded-xl">
          <OderInfomation />
        </div>
        <div className="col-span-3 lg:col-span-2 border border-[#E7E7E7] rounded-xl">
          <TradingStrategy />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="flex flex-col justify-between gap-4 h-full">
            <div className="border border-[#E7E7E7] rounded-xl">
              <TradeWithCandleStick />
            </div>
            <div className="grow border border-[#E7E7E7] rounded-xl">
              <ManagePortfolio />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
