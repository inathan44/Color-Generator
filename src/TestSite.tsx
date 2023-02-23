// import "../public/test.css";

const TestSite = () => {
  return (
    <div>
      <main className="overflow-scroll border-2 border-solid border-red-600 bg-orange-50 ">
        <div className="">
          <section className="my-6 border-2  border-blue-600">
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
