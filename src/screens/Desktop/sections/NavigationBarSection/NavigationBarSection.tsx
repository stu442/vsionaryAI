import { Button } from "../../../../components/ui/button";
import { Logo } from "../../../../components/Logo";

const navigationLinks = [
  { label: "Features" },
  { label: "Pricing" },
  { label: "Gallery" },
  { label: "Help" },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-start px-[104px] py-4 w-full bg-white border-b opacity-0 animate-fade-in">
      <nav className="flex items-center justify-between w-full">
        <Logo />

        <ul className="inline-flex items-center gap-8">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="font-medium text-base leading-6 [font-family:'Inter',Helvetica] text-gray-600 whitespace-nowrap transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-4">
          <Button
            variant="ghost"
            className="font-medium text-gray-600 text-base leading-6 [font-family:'Inter',Helvetica] whitespace-nowrap h-auto px-0 hover:text-gray-900 transition-colors"
          >
            Sign In
          </Button>
          <Button className="font-medium text-white text-base leading-6 [font-family:'Inter',Helvetica] whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 transition-colors h-auto px-4 py-2 rounded-lg">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};
