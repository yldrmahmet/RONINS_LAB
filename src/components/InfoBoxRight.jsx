// InfoBoxRight.jsx
const InfoBoxRight = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center lg:flex-col lg:items-start lg:text-left w-full lg:w-56">
            <img src={image} alt={title} className="h-12 w-12 mb-3 lg:mb-0 lg:mr-3" />
            <div>
                <h4 className="text-black font-semibold text-lg mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default InfoBoxRight;