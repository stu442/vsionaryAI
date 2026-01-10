import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

interface ImageResultCardProps {
    imageSrc: string;
    alt: string;
    dimensions: string;
}

export const ImageResultCard = ({
    imageSrc,
    alt,
    dimensions,
}: ImageResultCardProps): JSX.Element => {
    return (
        <Card className="border border-gray-200 shadow-[0px_1px_2px_#0000000d] [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <CardContent className="p-4">
                <div className="relative w-full h-[680px] bg-gray-50 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        alt={alt}
                        src={imageSrc}
                    />
                    <Badge
                        variant="secondary"
                        className="absolute top-4 right-4 bg-[#00000066] text-white backdrop-blur-[2px] hover:bg-[#00000066] rounded-full px-3 py-1.5"
                    >
                        {dimensions}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
};
