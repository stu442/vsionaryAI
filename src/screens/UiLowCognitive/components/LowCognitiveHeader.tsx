import { Logo } from "../../../components/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

const navigationLinks = [
    { label: "Gallery", href: "#" },
    { label: "History", href: "#" },
    { label: "Settings", href: "#" },
];

export const LowCognitiveHeader = (): JSX.Element => {
    return (
        <header className="w-full bg-white border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
                <Logo />

                <nav className="flex items-center gap-6">
                    {navigationLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-sm leading-5 hover:text-gray-900 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Avatar className="w-9 h-9 border-2 border-gray-200">
                        <AvatarImage
                            src="https://c.animaapp.com/mk80hrbdo2FHxK/img/user.png"
                            alt="User avatar"
                        />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </nav>
            </div>
        </header>
    );
};
