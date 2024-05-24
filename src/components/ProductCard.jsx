import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="link">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md mb-8">
        <img
          src={product.imageUrl || "/images/1.jpg"}
          alt=""
          className="w-full h-1/2 object-cover rounded-t-lg "
        />
        <div className="p-5">
          <div className="flex items-center gap-4">
            <span>{product.name}</span>
          </div>
          <p className="text-base text-gray-700 mt-4 h-24 overflow-hidden overflow-ellipsis">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500 font-bold ">
              <p>Star</p>
            </span>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
        <div className="flex items-center justify-center p-5">
          <div className="text-center">
            <h2 className="text-lg text-gray-900 font-medium">
              {product.price}$
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
