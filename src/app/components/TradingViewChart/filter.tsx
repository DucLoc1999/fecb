"use client";
import { ChartingLibraryWidgetOptions, ResolutionString } from "@/public/static/charting_library/charting_library";
import { Button } from "antd";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface TradingViewFilterProps {
  className?: string;
  widgetProps: Partial<ChartingLibraryWidgetOptions>;
  setWidgetProps: (widgetProps: Partial<ChartingLibraryWidgetOptions>) => void;
}

export const TradingViewFilter = ({
  className,
  widgetProps,
  setWidgetProps
}: TradingViewFilterProps) => {
  const filterClassName = classNames(className);
  const { symbol, interval } = widgetProps;
  const setTime = (time: string) => {
    const interval = time as ResolutionString;
    setWidgetProps({
      ...widgetProps,
      interval: interval,
    });
  }
  const getActiveTimeClassName = (t: string) =>
    classNames("hover:!text-black !h-12 !px-8 !py-3 !rounded-[10px]", {
      "!text-[#1A64F0] !border-2 !border-[#1A64F0] !shadow-5": t == interval,
    });

  return (
    <div className={filterClassName}>
      <div className="lg:flex items-center justify-between mt-3">
        <div className="lg:flex lg:gap-x-3">
          <div className="flex items-center mt-4 lg:mt-0 gap-x-3 overflow-scroll custom-scrollbar">
            <div>
              <Button
                className={getActiveTimeClassName("5")}
                onClick={() => setTime("5")}
              >
                <div className="flex items-center">5m</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("30")}
                onClick={() => setTime("30")}
              >
                <div className="flex items-center">30m</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("60")}
                onClick={() => setTime("60")}
              >
                <div className="flex items-center">1H</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("1D")}
                onClick={() => setTime("1D")}
              >
                <div className="flex items-center">1D</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("3D")}
                onClick={() => setTime("3D")}
              >
                <div className="flex items-center">3D</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("1W")}
                onClick={() => setTime("1W")}
              >
                <div className="flex items-center">1W</div>
              </Button>
            </div>
            <div>
              <Button
                className={getActiveTimeClassName("1M")}
                onClick={() => setTime("1M")}
              >
                <div className="flex items-center">1M</div>
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex xl:flex-col items-center px-32">
          <div className="text-sm font-medium leading-5 text-[#7D7D7D]">
            Tradding Pair:
          </div>
          <div className="text-xl font-semibold leading-8 mt-2">
            {symbol}
          </div>
        </div>
      </div>
    </div>
  );
};
