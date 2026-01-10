interface SessionItemProps {
    title: string;
    iterations: number;
    time?: string | null;
    thumbnail: string;
    isActive?: boolean;
}

export const SessionItem = ({
    title,
    iterations,
    time,
    thumbnail,
    isActive = false,
}: SessionItemProps): JSX.Element => {
    return (
        <button
            className={`flex items-start gap-3 p-3 rounded-lg transition-colors text-left w-full ${isActive
                    ? "bg-[#6366f11a] border border-[#6366f133]"
                    : "hover:bg-gray-50"
                }`}
        >
            <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate [font-family:'Inter',Helvetica]">
                    {title}
                </h3>
                <p className="text-xs font-normal text-gray-500 [font-family:'Inter',Helvetica]">
                    {iterations} iterations {time ? `• ${time}` : ""}
                </p>
            </div>
        </button>
    );
};
