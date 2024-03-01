import { LogoApp } from "../icons/LogoApp"

export const Header = () => (
  <header className="flex items-center justify-center bg-transparent py-4">
    <div className="flex w-full container flex-col md:flex-row">
      <div className="justify-center items-center pr-0 md:pr-8 flex">
        <a href="/" aria-label="streamestrenos">
          <LogoApp />
        </a>
      </div>
    </div>
  </header>
)
