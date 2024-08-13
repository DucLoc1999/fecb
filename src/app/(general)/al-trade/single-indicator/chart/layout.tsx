"use client";
import { RsiFilter } from "@/app/components/rsi-heatmap/filter";
import { TopOverBoughtDataItem } from "@/app/components/rsi-heatmap/top-over-bought";
import { TopOverSoldDataItem } from "@/app/components/rsi-heatmap/top-over-sold";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";
import { RsiType, TimeType } from "@/app/type/type";

import Link from "next/link";
import { useState } from "react";

export default function ChartPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [type, setType] = useState<RsiType>("RSI14");
  const [time, setTime] = useState<TimeType>("ONE_DAY");
  const [signal, setSignal] = useState<"sold" | "bought">("sold");
  const [recordActive, setRecordActive] = useState<
    TopOverSoldDataItem | TopOverBoughtDataItem
  >({} as TopOverSoldDataItem | TopOverBoughtDataItem);
  const [recordActiveIndex, setRecordActiveIndex] = useState(0);

  return (
    <div>
      <section className="mx-2 sm:mx-4 md:mx-10 xl:mx-20 2xl:mx-36 mt-7 mb-14">
        <div className="flex items-center justify-center text-center text-xs leading-5 font-medium bg-[#F0F7FF] h-11 rounded-lg mt-16 md:mt-24">
          <div>
            Bitcoin price drops 10% in the last 24 hours!
            <Link href="#" className="text-[#1A64F0] ml-1">
              SEE MORE!
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-8 mb-10 mx-auto max-w-[1380px]">
          <RsiFilter
            type={type}
            setType={setType}
            time={time}
            setTime={setTime}
            pair={recordActive.name}
          />
          <SingleIndicatorContext.Provider
            value={{
              time,
              type,
              recordActive,
              recordActiveIndex,
              signal,
              setRecordActive,
              setSignal,
              setRecordActiveIndex,
            }}
          >
            {children}
          </SingleIndicatorContext.Provider>
        </div>
      </section>
    </div>
  );
}
