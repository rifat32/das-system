interface AdSlotProps {
    position: 'sidebar' | 'bottom';
}

export default function AdSlot({ position }: AdSlotProps) {
    if (position === 'sidebar') {
        return (
            <div className="sticky top-20 bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                <p className="text-gray-500 text-sm mb-2">Advertisement</p>
                <div className="bg-gray-200 h-[600px] w-[300px] flex items-center justify-center text-gray-400">
                    300 x 600
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center my-8">
            <p className="text-gray-500 text-sm mb-2">Advertisement</p>
            <div className="bg-gray-200 h-[90px] w-full max-w-[728px] mx-auto flex items-center justify-center text-gray-400">
                728 x 90
            </div>
        </div>
    );
}
