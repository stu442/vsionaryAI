import { Button } from "../../../../components/ui/button";
import { Logo } from "../../../../components/Logo";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "API", href: "#" },
  { label: "Gallery", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Community", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Status", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Privacy", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start relative w-full bg-white border-t border-gray-200">
      <div className="flex flex-col max-w-screen-xl mx-auto items-start gap-8 px-6 py-12 w-full">
        <div className="grid grid-cols-4 gap-8 w-full">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="font-normal text-gray-600 text-sm leading-[22.8px] [font-family:'Inter',Helvetica]">
              The most advanced AI image generation
              <br />
              platform for creators, designers,
              <br />
              and innovators.
            </p>
          </div>

          <nav className="flex flex-col items-start gap-4">
            <h3 className="font-normal text-gray-900 text-base leading-6 [font-family:'Inter',Helvetica]">
              Product
            </h3>
            <ul className="flex flex-col items-start gap-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="h-auto p-0 font-normal text-gray-600 text-sm leading-5 [font-family:'Inter',Helvetica] hover:text-gray-900 transition-colors"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col items-start gap-4">
            <h3 className="font-normal text-gray-900 text-base leading-6 [font-family:'Inter',Helvetica]">
              Support
            </h3>
            <ul className="flex flex-col items-start gap-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="h-auto p-0 font-normal text-gray-600 text-sm leading-5 [font-family:'Inter',Helvetica] hover:text-gray-900 transition-colors"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col items-start gap-4">
            <h3 className="font-normal text-gray-900 text-base leading-6 [font-family:'Inter',Helvetica]">
              Company
            </h3>
            <ul className="flex flex-col items-start gap-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className="h-auto p-0 font-normal text-gray-600 text-sm leading-5 [font-family:'Inter',Helvetica] hover:text-gray-900 transition-colors"
                    asChild
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between pt-8 w-full border-t border-gray-200">
          <p className="font-normal text-gray-600 text-sm leading-5 [font-family:'Inter',Helvetica]">
            © 2026 Visionary AI. All rights reserved.
          </p>
          <img
            className="h-5"
            alt="Social media icons"
            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/container-7.svg"
          />
        </div>
      </div>
    </footer>
  );
};
