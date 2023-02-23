import { useAppDispatch, useAppSelector } from "./hooks";
import { Pallete, lockColor, selectPalette } from "./store/paletteSlice";
import { ColorData } from "./store/paletteSlice";
import { useState } from "react";

interface SingleColorProps {
  color: string;
  order: ColorData | keyof Pallete;
}

function getContrastYIQ(hexcolor: string): string {
  let r: number = parseInt(hexcolor.slice(1, 3), 16);
  let g: number = parseInt(hexcolor.slice(3, 5), 16);
  let b: number = parseInt(hexcolor.slice(5, 7), 16);

  let yiq: number = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

///////////////////////////////////////////////////////////

const SingleColor = () => {
  const dispatch = useAppDispatch();

  const [isLocked, setIsLocked] = useState(false);

  function toggleLock(order: string): void {
    dispatch(lockColor(order));
  }

  const currentPalette = useAppSelector(selectPalette);
  console.log(currentPalette);

  return (
    <>
      <div className="mx-auto grid h-96 max-w-7xl grid-cols-5 overflow-hidden rounded-sm">
        {Object.keys(currentPalette).map((paletteOrder) => {
          const orderData = currentPalette[paletteOrder as keyof Pallete];

          return (
            <>
              <div
                className="relative flex h-full justify-center "
                style={{
                  backgroundColor: orderData.hexColor,
                }}
              >
                <button
                  onClick={() => {
                    toggleLock(paletteOrder);
                    setIsLocked((prev) => !prev);
                  }}
                  className="self-center rounded border-2 border-black px-2 py-1"
                  style={{
                    color: getContrastYIQ(orderData.hexColor),
                    borderColor: getContrastYIQ(orderData.hexColor),
                  }}
                >
                  {orderData.locked ? "Locked" : "Lock"}
                </button>
                <h1
                  className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center"
                  style={{
                    color: getContrastYIQ(orderData.hexColor),
                  }}
                >
                  Hex: {orderData.hexColor}
                </h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SingleColor;
