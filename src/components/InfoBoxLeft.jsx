// InfoBoxLeft.jsx
const InfoBoxLeft = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center md:items-center md:text-center xl:items-end xl:text-right w-full xl:w-56">
            <img
                src={image}
                alt={title}
                className="h-6 w-6 mb-4 md:mb-3 xl:mb-1 xl:mr-3"
            />
            <div className="max-w-sm md:max-w-md xl:max-w-none">
                <h4 className="text-black font-semibold text-lg mb-2">
                    {title}
                </h4>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default InfoBoxLeft;