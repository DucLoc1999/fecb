import styles from "./index.module.css";
import { useEffect, useRef } from "react";
import { ChartingLibraryWidgetOptions, LanguageCode, ResolutionString, widget } from "@/public/static/charting_library";

export const TVChartContainer = (props: Partial<ChartingLibraryWidgetOptions>) => {
	const chartContainerRef =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		const widgetOptions: ChartingLibraryWidgetOptions = {
			symbol: props.symbol,
			datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
				"https://udf.tidvn.net",
				undefined,
				{
					maxResponseLength: 1000,
					expectedOrder: "latestFirst",
				}
			),
			interval: props.interval as ResolutionString,
			container: chartContainerRef.current,
			library_path: props.library_path,
			locale: props.locale as LanguageCode,
			disabled_features: [
				"timeframes_toolbar",
				"header_compare",
				"header_symbol_search",
				"popup_hints"
			],
			enabled_features: [
				"hide_left_toolbar_by_default",
				"use_localstorage_for_settings"
			],
			charts_storage_url: props.charts_storage_url,
			charts_storage_api_version: props.charts_storage_api_version,
			client_id: props.client_id,
			user_id: props.user_id,
			fullscreen: props.fullscreen,
			autosize: props.autosize,
			theme: "light", 
			toolbar_bg: "#FFFFFF",
			overrides: {
				"paneProperties.background": "#FFFFFF", // Màu nền của biểu đồ
				"paneProperties.vertGridProperties.color": "#E6E6E6", // Màu lưới dọc
				"paneProperties.horzGridProperties.color": "#E6E6E6", // Màu lưới ngang
				"scalesProperties.textColor": "#000", // Màu văn bản của các thang đo
				// "mainSeriesProperties.candleStyle.upColor": "#4CAF50", // Màu nến tăng
				// "mainSeriesProperties.candleStyle.downColor": "#E91E63", // Màu nến giảm
				// "mainSeriesProperties.candleStyle.borderUpColor": "#4CAF50", // Màu viền nến tăng
				// "mainSeriesProperties.candleStyle.borderDownColor": "#E91E63", // Màu viền nến giảm
				// "mainSeriesProperties.candleStyle.wickUpColor": "#4CAF50", // Màu bấc nến tăng
				// "mainSeriesProperties.candleStyle.wickDownColor": "#E91E63" // Màu bấc nến giảm
			},
			studies_access: {
				type: "black",
				tools: [
					{
						name: "RSI",
						grayed: true,
					},
				],
			},
		};
		
		

		const tvWidget = new widget(widgetOptions);

		// tvWidget.onChartReady(() => {
		// 	tvWidget.headerReady().then(() => {
		// 		const button = tvWidget.createButton();
		// 		button.setAttribute("title", "Click to show a notification popup");
		// 		button.classList.add("apply-common-tooltip");
		// 		button.addEventListener("click", () =>
		// 			tvWidget.showNoticeDialog({
		// 				title: "Notification",
		// 				body: "TradingView Charting Library API works correctly",
		// 				callback: () => {
		// 					console.log("Noticed!");
		// 				},
		// 			})
		// 		);

		// 		button.innerHTML = "Check API";
		// 	});
		// });

		return () => {
			tvWidget.remove();
		};
	}, [props]);

	return (
		<>
			<div ref={chartContainerRef} className="w-full h-[550px]" />
		</>
	);
};
