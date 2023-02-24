// Palette
// Main box = #015239
// Background = #e4faee

const ExampleSite = () => {
  return (
    <div>
      <nav className="flex justify-end">
        <h1 className="mr-auto">Kernel</h1>
        <ul className="flex">
          <li>About</li>
          <li>Careers</li>
          <li>Blogs</li>
          <li>Follow</li>
          <li>Try for free</li>
        </ul>
      </nav>
      <main>
        <section>
          <div className="flex flex-col items-center">
            <h1>Your content</h1>
            <h1>copilot</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              dolore ut
            </p>
            <button>Try for free</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExampleSite;
