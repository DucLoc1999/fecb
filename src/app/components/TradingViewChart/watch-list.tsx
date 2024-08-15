"use client";

import { Table } from "antd";
import classNames from "classnames";
import "@/app/css/rsi-heatmap/top-over-sold.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { RsiType, TimeType } from "@/app/type/type";
import { SingleIndicatorContext } from "@/app/contexts/single-indicator";
import api from "@/app/axios";
const { Column } = Table;

export type TopOverBoughtData = {
  symbol: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  dateCreated: string;
};

export type TopOverBoughtDataItem = {
  key: number;
  name: string;
  rsi: number;
  close: number;
  high: number;
  low: number;
  discoveredOn: string;
};
type TopOverBoughtProps = {
  className?: string;
};

export const WatchList = ({ className }: TopOverBoughtProps) => {
  const [loading, setLoading] = useState(false);
  const [topOverBoughtData, setTopOverBoughtData] = useState<
    TopOverBoughtDataItem[]
  >([]);
  const singleIndicatorFilter = useContext(SingleIndicatorContext);

  const fetchData = useCallback(
    async (heatMapType: RsiType, time: TimeType) => {
      try {
        setLoading(true);
        const { data: topOverBought } = await api.get(
          "/heatmap/top-over-bought",
          {
            params: { heatMapType, timeType: time },
          }
        );
        setTopOverBoughtData(topOverBought);

        const newData = topOverBought?.map((item: any, index: number) => {
          return {
            key: index,
            name: item.symbol,
            rsi: item.rsi,
            close: item.close,
            high: item.high,
            low: item.low,
            discoveredOn: item.dateCreated,
          };
        });
        setTopOverBoughtData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [
      singleIndicatorFilter.setSignal,
      singleIndicatorFilter.setRecordActiveIndex,
    ]
  );
  useEffect(() => {
    fetchData(singleIndicatorFilter.type, singleIndicatorFilter.time);
  }, [fetchData, singleIndicatorFilter.type, singleIndicatorFilter.time]);

  const topOverSoldClassName = classNames("h-[604px]", className);

  const onRowClick = (record: TopOverBoughtDataItem) => {
    if (record) {
      singleIndicatorFilter.setSignal("bought");
      singleIndicatorFilter.setRecordActiveIndex(record.key);
      singleIndicatorFilter.setRecordActive(record);
    }
  };

  const rowClassName = (record: TopOverBoughtDataItem) => {
    const selectedRowKey = singleIndicatorFilter.recordActiveIndex ?? "";
    return record.key === selectedRowKey &&
      singleIndicatorFilter.signal === "bought"
      ? "row-active"
      : "";
  };

  return (
    <div className={topOverSoldClassName}>
      <div className="px-6 pt-6">
        <div className="text-[#CC0001] text-lg leading-7 font-bold text-center">
          Top Over Bought
        </div>
        <Table
          dataSource={topOverBoughtData}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          loading={loading}
          className="mt-4 header-color ant-table-custom"
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
          rowClassName={rowClassName}
        >
          <Column
            title="Name"
            dataIndex="name"
            key="name"
            align="left"
            render={(name: string) => (
              <>
                <div key={name} className="leading-5 text-sm text-[#CC0001]">
                  {name}
                </div>
              </>
            )}
          />
          <Column
            title="Discovered on"
            dataIndex="discoveredOn"
            key="discoveredOn"
            align="right"
          />
        </Table>
      </div>
    </div>
  );
};
