type MenuIndicatorProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  onClick: () => void;
};

const MenuIndicator: React.FC<MenuIndicatorProps> = ({
  imageSrc,
  imageAlt,
  title,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center mr-6 cursor-pointer"
    >
      <img src={imageSrc} alt={imageAlt} className="w-8 h-8 mr-2" />
      <span className="text-light">{title}</span>
    </div>
  );
};

export default MenuIndicator;
