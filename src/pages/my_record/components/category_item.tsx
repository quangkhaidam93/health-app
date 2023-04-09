type CategoryItemProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

const ITEM_WIDTH = (window.innerWidth - 320 - 48 * 2) / 3;

const CategoryItem: React.FC<CategoryItemProps> = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`p-6 bg-primary-300 relative cursor-pointer ${className}`}
      style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }}
    >
      <img src={image} alt="body-record" className="w-full h-full" />
      <div className="absolute top-6 left-6 right-6 bottom-6 flex flex-col justify-center items-center bg-opacity-60 bg-black">
        <div className="text-primary-300 text-2xl">{title}</div>
        <div className="bg-primary-400 w-40 h-6 text-center text-light mt-3">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
