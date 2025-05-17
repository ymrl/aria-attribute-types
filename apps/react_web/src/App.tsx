import { Element } from "./components/Element";
import { Link } from "./components/Link";

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
          aria-attribute-types demo
        </Element>
        <Element role="paragraph" className="mt-4">
          This site is demo page for{" "}
          <Element
            role="code"
            className="inline font-mono bg-indigo-100 text-indigo-800 rounded p-0.5"
          >
            aria-attribute-types
          </Element>
          .
        </Element>
        <Element role="paragraph" className="mt-4">
          <Element
            role="code"
            className="inline font-mono bg-indigo-100 text-indigo-800 rounded p-0.5"
          >
            aria-attribute-types
          </Element>{" "}
          provides a set of TypeScript types for{" "}
          <Link
            href="https://www.w3.org/TR/wai-aria-1.2/"
            target="_blank"
            className="underline text-rose-800 hover:text-rose-900"
          >
            WAI-ARIA 1.2
          </Link>{" "}
          attributes and roles in kebab-case and CamelCase.
        </Element>
      </Element>
    </Element>
  );
}

export default App;
