import {
  iconChallenge,
  iconInfo,
  iconMemo,
  iconMenu,
  logo,
} from "../../assets/images";
import MenuIndicator from "./components/menu_indicator";

const Header = () => {
  return (
    <div className="bg-dark-500 h-16 flex flex-row px-40">
      <div className="flex flex-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 flex flex-row items-center justify-end">
        <MenuIndicator
          imageSrc={iconMemo}
          imageAlt="icon-memo"
          title="自分の記録"
        />
        <MenuIndicator
          imageSrc={iconChallenge}
          imageAlt="icon-challenge"
          title="チャレンジ"
        />
        <MenuIndicator
          imageSrc={iconInfo}
          imageAlt="icon-info"
          title="お知らせ"
        />

        <img src={iconMenu} alt="icon-menu" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;
