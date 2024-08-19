"use client";

import { Table } from "antd";
import classNames from "classnames";
import "@/app/css/rsi-heatmap/top-over-bought.css";
import { useCallback, useContext, useEffect, useState } from "react";
import api from "@/app/axios";
import { TradingChartContextContext } from "@/app/contexts/trading-chart-context";
const { Column } = Table;


interface watchListDataItem {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export const WatchList = ({ className }: any) => {
  const { widgetProps, setWidgetProps } = useContext(TradingChartContextContext);
  const [loading, setLoading] = useState(false);
  const [watchListData, setwatchListData] = useState();

  const fetchData = useCallback(
    async () => {
      try {
        setLoading(true);
        const { data: watchList } = await api.get(
          `https://www.binance.com/api/v3/ticker/24hr?symbols=`
          + `%5B%22BTCUSDT%22,`
          + `%22ETHUSDT%22,`
          + `%22BNBUSDT%22,`
          + `%22SOLUSDT%22,`
          + `%22XRPUSDT%22,`
          + `%22TONUSDT%22,`
          + `%22DOGEUSDT%22,`
          + `%22ADAUSDT%22,`
          + `%22TRXUSDT%22,`
          + `%22AVAXUSDT%22,`
          + `%22SHIBUSDT%22,`
          + `%22BCHUSDT%22,`
          + `%22LINKUSDT%22,`
          + `%22DOTUSDT%22%5D`
        );
        setwatchListData(watchList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRowClick = (record: watchListDataItem) => {
    if (record) {
      const { symbol } = record;
      setWidgetProps({
        ...widgetProps,
        symbol: symbol,
      });
    }
  };

  const rowClassName = (record: watchListDataItem) => {
    const curentSymbol = widgetProps.symbol ?? "";
    return record.symbol == curentSymbol
      ? "row-active"
      : "";
  };

  const watchListClassName = classNames("h-[604px]", className);

  return (
    <div className={watchListClassName}>
      <div className="p-6">
        <Table
          dataSource={watchListData}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          className="header-color ant-table-custom"
          loading={loading}
          onRow={(record) => ({
            onClick: () => onRowClick(record),
          })}
          rowClassName={rowClassName}
        >
          <Column
            title="Symbol"
            dataIndex="symbol"
            key="symbol"
            align="left"
            render={(data: string) => (
              <>
                <div key={data} className="leading-5 text-sm">
                  {data}
                </div>
              </>
            )}
          />
          <Column
            title="24 Change"
            dataIndex="priceChangePercent"
            key="priceChangePercent"
            align="left"
            render={(data: number) => (
              <>
                <div key={data} className={`leading-5 text-sm ${data > 0 ? `text-green-500` : `text-red-500`}`}>
                  {data} %
                </div>
              </>
            )}
          />
        </Table>
      </div>
    </div>
  );
};
