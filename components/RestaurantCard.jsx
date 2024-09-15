import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId = 'default-image-id', // Default value
    name = 'Restaurant Name',
    avgRating = 'Rating not available',
    costForTwo = 'Cost information not available',
    cuisines = ['Cuisine not available'],
    aggregatedDiscountInfoV3 = { header: 'Discount not defined', subHeader: '' },
  } = resData?.info;

  return (
    <div className="m-4 p-3 w-56 bg-gray-100 object-cover rounded-lg hover:scale-95 transition-transform hover:z-10 mb-10 relative items-center flex flex-col justify-center">
      <div className="relative">
        <img
          className="rounded-lg w-full"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="flex">
        {aggregatedDiscountInfoV3.header && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
            {aggregatedDiscountInfoV3.header}
          </div>
        )}
        {aggregatedDiscountInfoV3.subHeader && (
          <div className="absolute top-2 left-20 bg-green-500 bg-opacity-60 text-white px-2 py-1 rounded-lg text-xs">
            {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
        </div>
      </div>
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4 className="font-light ">{cuisines.join(", ")}</h4>
      <h4 className="font-bold"> ⭐{avgRating}</h4>
      <h4 className="font-sans">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
