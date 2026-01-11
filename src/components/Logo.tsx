import { Link } from "react-router-dom";

interface LogoProps {
    className?: string;
    imgClassName?: string;
    textClassName?: string;
}

export const Logo = ({ className = "", imgClassName = "w-8 h-8", textClassName = "" }: LogoProps): JSX.Element => {
    return (
        <Link to="/" className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${className}`}>
            <img
                className={imgClassName}
                alt="Visionary AI Logo"
                src="https://c.animaapp.com/mk80hrbdo2FHxK/img/background.svg"
            />
            <span className={`[font-family:'Inter',Helvetica] font-normal text-gray-900 text-xl leading-7 ${textClassName}`}>
                Visionary AI
            </span>
        </Link>
    );
};
