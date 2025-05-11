import { Element } from "./components/Element";

function App() {
  return (
    <Element className="flex items-center justify-center min-h-screen">
      <Element
        role="main"
        className="flex flex-col items-center justify-center w-full max-w-2xl p-4 mx-auto text-center"
      >
        <Element
          role="heading"
          ariaLevel={1}
          className="text-4xl font-bold block"
        >
          aria-types demo
        </Element>
        <Element role="paragraph" className="mt-4">
          This site is demo page for{" "}
          <Element
            role="code"
            className="inline font-mono bg-indigo-100 text-indigo-800 rounded p-0.5"
          >
            aria-types
          </Element>
          .
        </Element>
      </Element>
    </Element>
  );
}

export default App;
