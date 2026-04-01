"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const devices: string[] = [
  // ===== APPLE =====
  "iPhone XS",
  "iPhone XS Max",
  "iPhone XR",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone SE (2020)",
  "iPhone 12 mini",
  "iPhone 12",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13 mini",
  "iPhone 13",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone SE (2022)",
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "iPhone 16e",
  "iPhone 17",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max",
  "iPhone Air",

  // ===== IPAD =====
  "iPad Pro 11-inch (1st generation)",
  "iPad Pro 11-inch (2nd generation)",
  "iPad Pro 11-inch (3rd generation)",
  "iPad Pro 11-inch (4th generation)",
  "iPad Air (3rd generation)",
  "iPad Air (4th generation)",
  "iPad Air (5th generation)",
  "iPad Air (6th generation)",
  "iPad mini (5th generation)",
  "iPad mini (6th generation)",
  "iPad Pro 12-inch (3rd generation)",
  "iPad Pro 12-inch (4th generation)",
  "iPad Pro 12-inch (5th generation)",
  "iPad Pro 12-inch (6th generation)",
  "iPad (7th generation)",
  "iPad (8th generation)",
  "iPad (9th generation)",
  "iPad (10th generation)",

  // ===== SAMSUNG =====
  "Samsung Galaxy S20",
  "Samsung Galaxy S20+",
  "Samsung Galaxy S20 Ultra",
  "Samsung Galaxy S21",
  "Samsung Galaxy S21+",
  "Samsung Galaxy S21 Ultra",
  "Samsung Galaxy S22",
  "Samsung Galaxy S22+",
  "Samsung Galaxy S22 Ultra",
  "Samsung Galaxy S23",
  "Samsung Galaxy S23+",
  "Samsung Galaxy S23 Ultra",
  "Samsung Galaxy S24",
  "Samsung Galaxy S24 Plus",
  "Samsung Galaxy S24 Ultra",
  "Samsung Galaxy S24 FE",
  "Samsung Galaxy S25",
  "Samsung Galaxy S25 Ultra",
  "Samsung Galaxy S25 Edge",
  "Samsung Galaxy S25 Slim",
  "Samsung Galaxy S23 FE",
  "Samsung Galaxy A54 5G",
  "Samsung Galaxy A55 5G",
  "Samsung Galaxy A35 5G",
  "Samsung Galaxy A23 5G",
  "Samsung Galaxy XCover 7",
  "Samsung Galaxy XCover 7 Pro",
  "Samsung Galaxy Note 20",
  "Samsung Galaxy Note 20 Ultra",
  "Samsung Galaxy Z Fold",
  "Samsung Galaxy Z Fold2",
  "Samsung Galaxy Z Fold3",
  "Samsung Galaxy Z Fold4",
  "Samsung Galaxy Z Fold5",
  "Samsung Galaxy Z Fold6",
  "Samsung Galaxy Z Fold7",
  "Samsung Galaxy Z Flip",
  "Samsung Galaxy Z Flip 5G",
  "Samsung Galaxy Z Flip3",
  "Samsung Galaxy Z Flip4",
  "Samsung Galaxy Z Flip5",
  "Samsung Galaxy Z Flip6",
  "Samsung Galaxy Z Flip7",
  "Samsung Galaxy Z Flip 7 FE",

  // ===== GOOGLE =====
  "Google Pixel 2",
  "Google Pixel 2 XL",
  "Google Pixel 3",
  "Google Pixel 3 XL",
  "Google Pixel 3a",
  "Google Pixel 3a XL",
  "Google Pixel 4",
  "Google Pixel 4 XL",
  "Google Pixel 4a 5G",
  "Google Pixel 5",
  "Google Pixel 5a",
  "Google Pixel 6",
  "Google Pixel 6 Pro",
  "Google Pixel 6a",
  "Google Pixel 7",
  "Google Pixel 7 Pro",
  "Google Pixel 7a",
  "Google Pixel 8",
  "Google Pixel 8 Pro",
  "Google Pixel 8a",
  "Google Pixel 9",
  "Google Pixel 9 Pro",
  "Google Pixel 9 Pro XL",
  "Google Pixel 9 Pro Fold",
  "Google Pixel Fold",
  "Pixel 10",
  "Pixel 10 Pro",
  "Pixel 10 Pro Fold",
  "Pixel Pro XL",

  // ===== (rest brands kept same but cleaned) =====
  "Huawei P40",
  "Huawei P40 Pro",
  "Huawei P50 Pro",
  "Huawei Mate 40 Pro",
  "Huawei Mate X2",
  "Huawei Mate Xs 2",
  "Huawei Pura 70 Pro",
  "Huawei 80 Pro",
  "Huawei Pro+",
  "Huawei Ultra",

  "Oppo Find X3",
  "Oppo Find X3 Pro",
  "Oppo Find X5",
  "Oppo Find X5 Pro",
  "Oppo Find X8",
  "Oppo Find X8 Pro",
  "Oppo Find N2 Flip",
  "Oppo Find N3",
  "Oppo Find N3 Flip",
  "Oppo Find N5",

  "OnePlus 11",
  "OnePlus 12",
  "OnePlus 12R",
  "OnePlus 13",
  "OnePlus 13R",
  "OnePlus 13T",
  "OnePlus 13s",
  "OnePlus Open",

  "Fairphone 4",
  "Fairphone 5",
  "Surface Pro X",
  "Surface Duo",
  "Gemini PDA",
];
const brands: string[] = [
  "iphone",
  "ipads",
  "Samsung",
  "Google Pixel",
  "Huawei",
  "Oppo",
  "Sony",
  "Xiaomi",
  "Motorola",
  "Other Android",
  "Samsung Watches",
  "Apple Watches",
  "Honor",
];

function CompatibilityModal() {
  const [allItems, setAllItems] = useState<string[]>([]);
  useEffect(() => {
    setAllItems(devices);
  }, []);

  function itemSerch(char: string) {
    let filterDevice = devices.filter((item1, index) => {
      let matchedChr = item1
        .split("")
        .slice(0, char.length)
        .join()
        .replaceAll(",", "")
        .toLowerCase();

      if (matchedChr === char.toLowerCase()) {
        return item1;
      }
    });
    if (filterDevice.length < 1) {
      setAllItems(devices);
    } else {
      setAllItems(filterDevice);
    }
  }
  return (
    <div className="w-82 md:w-full h-[90vh] md:h-full overflow-auto max-w-6xl  mx-auto rounded-xl bg-background p-8 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">
          Check Your Device Compatibility
        </h1>
        <p className="text-sm text-gray-500">
          You have two easy options to check your device
        </p>
      </div>

      {/* Content */}
      <div className="flex md:flex-row flex-col gap-8 ">
        {/* LEFT SIDE */}
        <div className="md:w-[120%]">
          <div className="flex flex-col items-center mb-4">
            <Image src="/findDevice.svg" alt="find" width={60} height={60} />
            <h3 className="mt-2 font-semibold text-lg">Find your Device</h3>
          </div>

          {/* Inputs */}
          <div className="flex md:flex-row flex-col h-18 gap-2 mb-3">
            <input
              onChange={(e) => itemSerch(e.target.value)}
              className="flex-1 md:h-10 h-[50%] rounded-md border px-3 text-sm"
              placeholder="Search device name..."
            />
            <select
              onChange={(e) => itemSerch(e.target.value)}
              className="text-[15px] border rounded-md h-[50%] "
            >
              <option value="">Select Brand</option>
              <option value="iphone">iphone</option>
              <option value="ipads">ipads</option>
              <option value="Samsung">Samsung</option>
              <option value="Google Pixel">Google Pixel</option>
              <option value="Huawei">Huawei</option>
              <option value="Oppo">Oppo</option>
              <option value="Sony">Sony</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Motorola">Motorola</option>
              <option value="Other Android">Other Android</option>
              <option value="Samsung Watches">Samsung Watches</option>
              <option value="Apple Watches">Apple Watches</option>
              <option value="Honor">Honor</option>
            </select>
          </div>

          {/* Device List */}
          <div className="border rounded-md max-h-52 overflow-y-auto bg-white">
            {allItems?.map((device) => (
              <div
                key={device}
                className="px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
              >
                {device}
              </div>
            ))}
          </div>
        </div>
        <div></div>
        {/* OR */}
        <div className="flex justify-center items-center">
          <span className="text-3xl font-semibold text-(--btn-pink)">OR</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="block">
          <div className="flex flex-col items-center mb-4 ">
            <Image src="/imei.svg" alt="imei" width={60} height={60} />
            <h3 className="mt-2 font-semibold text-lg">
              Enter your IMEI Number
            </h3>
            <p className="text-xs  text-center mt-1">
              Dial *#06# to get your phone’s IMEI number or find it in device
              settings.
            </p>
          </div>

          {/* IMEI Input */}
          <div className="flex gap-2">
            <input
              className="flex-1 h-11 rounded-md border px-3 text-sm bg-background"
              placeholder="Enter your IMEI number"
            />
            <button className="bg-(--btn-pink)  text-white px-6 rounded-md font-medium">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompatibilityModal;
