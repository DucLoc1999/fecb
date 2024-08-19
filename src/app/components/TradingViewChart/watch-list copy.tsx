"use client";

import { Button, Table } from "antd";
import Image from "next/image";
import Link from "next/link";
import { symbols } from "./symbols";
import Column from "antd/es/table/Column";
import { Scrollbar } from "swiper/modules";


export const WatchList = () => {
  return (
    <div className="h-[550px]" >
      <div className="px-6 pt-6">
        {/* <div className="flex gap-x-3 items-center !h-16 overflow-scroll custom-scrollbar">
            <Button className="hover:!text-black !h-12 !px-4 !py-3 !rounded-[10px] !border-2 !border-[#1A64F0] !shadow-5">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/tether.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Tether</div>
                  <Link href="#" className="ml-1">
                    USD
                  </Link>
                </div>
              </div>
            </Button>
            
            <Button className="hover:!text-black !h-12 !px-4 !py-3 !rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/binance.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Binance USD</div>
                  <Link href="#" className="ml-1">
                    BUSD
                  </Link>
                </div>
              </div>
            </Button>
          </div> */}
        {/* <div className="text-[#CC0001] text-lg leading-7 font-bold text-center">
          Top Over Bought
        </div> */}
        {/* <Table
          dataSource={symbols}
          size="middle"
          pagination={false}
          scroll={{ y: 460 }}
          className="mt-4 header-color ant-table-custom"
          // onRow={(record) => ({
          //   onClick: () => onRowClick(record),
          // })}
          // rowClassName={rowClassName}
        >
          
          <Column
            title=""
            dataIndex="image"
            key="image"
            align="left"
            render={(url: string) => (
              <>
               <Image
                    src={url}
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
              </>
            )}
          />
          <Column
            title=""
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
        </Table> */}

        {/* {symbols.map((symbol) => (
          <>
            <Button className="hover:!text-black !h-12 !px-4 !py-3 custom-scrollbar mt-2 w-full">
              <div className="flex justify-between items-center">
                <div className="w-5 h-5 flex items-center">
                  <Image
                    src="/coin/tether.svg"
                    priority
                    width={20}
                    height={20}
                    alt="user"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium ml-2">
                  <div>Tether</div>
                  <Link href="#" className="ml-1">
                    USD
                  </Link>
                </div>
              </div>
            </Button>
          </>
        ))} */}
      </div>
    </div>
  );
};
