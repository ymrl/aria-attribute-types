import { Element } from "./components/Element";
import { Link } from "./components/Link";

function App() {
  return (
    <>
      <Element
        role="banner"
        className="w-full p-2 mx-auto absolute top-0 left-0 border-b-indigo-400 border-solid border-b-2 bg-indigo-100"
      >
        <Element className="w-full max-w-2xl flex flex-row items-center justify-between mx-auto">
          <Element
            role="heading"
            ariaLevel={1}
            className="text-2xl font-normal text-indigo-800"
          >
            aria-attribute-types
          </Element>
          <Element role="navigation" className="flex flex-row items-center">
            <Element role="list" className="flex flex-row items-center">
              <Element role="listitem" className="mr-4">
                <Link
                  className="underline text-indigo-800 hover:text-indigo-900 hover:decoration-wavy"
                  href="https://github.com/ymrl/aria-attribute-types"
                >
                  GitHub
                </Link>
              </Element>
              <Element role="listitem" className="mr-4">
                <Link
                  className="underline text-indigo-800 hover:text-indigo-900 hover:decoration-wavy"
                  href="https://www.npmjs.com/package/aria-attribute-types"
                >
                  NPM
                </Link>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>

      <Element className="flex items-center justify-center min-h-screen">
        <Element
          role="main"
          className="flex flex-col items-start justify-center w-full max-w-2xl p-4 mx-auto text-left"
        >
          <Element role="heading" ariaLevel={2} className="text-2xl font-bold">
            This is a demo page for{" "}
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
              className="underline text-rose-800 hover:text-rose-900 hover:decoration-wavy"
            >
              WAI-ARIA 1.2
            </Link>{" "}
            attributes and roles, available in both kebab-case and camelCase.
          </Element>
          <Element role="paragraph" className="mt-4">
            Except for links, this page is entirely composed of{" "}
            <Element
              role="code"
              className="inline font-mono bg-slate-100 text-slate-800 rounded p-0.5"
            >
              &lt;div&gt;
            </Element>{" "}
            elements. By using{" "}
            <Element
              role="code"
              className="inline font-mono bg-slate-100 text-slate-800 rounded p-0.5"
            >
              &lt;Elements&gt;
            </Element>{" "}
            component — which applies ARIA attributes via the type-safe
            definitions from this package and renders as a{" "}
            <Element
              role="code"
              className="inline font-mono bg-slate-100 text-slate-800 rounded p-0.5"
            >
              &lt;div&gt;
            </Element>{" "}
            element — the page correctly conveys its accessibility semantics.
          </Element>
          <Element role="paragraph" className="mt-4">
            <Link
              href="https://github.com/ymrl/aria-attribute-types/tree/main/apps/react_web"
              className="underline text-rose-800 hover:text-rose-900 hover:decoration-wavy"
            >
              Source code of this page
            </Link>
          </Element>
        </Element>
        <Element
          role="contentinfo"
          className="w-full p-2 mx-auto absolute bottom-0 left-0"
        >
          <Element className="w-full max-w-2xl flex flex-row items-center justify-between mx-auto">
            <Element
              role="paragraph"
              className="text-sm font-normal text-slate-600"
            >
              © 2025 ymrl{" "}
              <Link
                className="underline text-indigo-800 hover:text-indigo-900 hover:decoration-wavy"
                href="https://github.com/ymrl/aria-attribute-types/blob/main/LICENSE.txt"
              >
                ISC License
              </Link>
            </Element>
          </Element>
        </Element>
      </Element>
    </>
  );
}

export default App;
