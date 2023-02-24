// import "../public/test.css";
import { useAppSelector } from "./hooks";
import SelectPalette from "./SelectPalette";
import { selectPalette } from "./store/paletteSlice";

const TestSite = () => {
  function getContrastYIQ(hexcolor: string): string {
    let r: number = parseInt(hexcolor.slice(1, 3), 16);
    let g: number = parseInt(hexcolor.slice(3, 5), 16);
    let b: number = parseInt(hexcolor.slice(5, 7), 16);

    let yiq: number = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }

  const currentPalette = useAppSelector(selectPalette);
  const main = currentPalette.main;

  return (
    <div className="overflow-scroll border-2 border-solid border-red-600 bg-orange-50 ">
      <nav className="">
        <ul className="mr-6 flex items-center justify-end gap-12 py-6">
          <li>
            <a className="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a
              className="inline-block rounded-md bg-orange-400 px-6 py-3 text-white"
              style={{
                backgroundColor: main.hexColor,
                color: getContrastYIQ(main.hexColor),
              }}
              href="#cta"
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>
      <main /*className="overflow-scroll border-2 border-solid border-red-600 bg-orange-50 "*/
      >
        <div className="">
          <section className="">
            <div className="mx-2 flex gap-6">
              <div className="w-1/2">
                <h1 className="mb-4 text-4xl font-bold">
                  A healthy meal delivered to your door, every single day
                </h1>
                <p className="mb-4 text-sm">
                  The smart 365-days-per-year food subscription that will make
                  you eat healthy again. Tailored to your personal tastes and
                  nutritional needs.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-md bg-orange-400 px-6 py-3 text-white"
                  style={{ backgroundColor: currentPalette.main.hexColor }}
                >
                  Start eating well
                </a>
                <a
                  href="#"
                  className="ml-4 mb-4 inline-block rounded-md bg-white px-6 py-3"
                >
                  Learn more &darr;
                </a>
              </div>
              <div className="w-1/2">
                <img
                  src="#"
                  className="hero-img"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TestSite;
