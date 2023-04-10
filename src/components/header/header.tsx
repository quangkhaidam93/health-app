import { useState } from "react";
import {
  iconChallenge,
  iconClose,
  iconInfo,
  iconMemo,
  iconMenu,
  logo,
} from "../../assets/images";
import MenuIndicator from "./components/menu_indicator";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const gotoMyRecord = () => {
    navigate("/my-record");
    toggleMenu(false);
  };

  const gotoHome = () => {
    navigate("/");
  };

  const gotoColumnPage = () => {
    navigate("/column-page");
    toggleMenu(false);
  };

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (show: boolean) => {
    setShowMenu(show);
  };

  return (
    <div className="bg-dark-500 h-16 flex flex-row px-40">
      <div className="flex flex-1 cursor-pointer" onClick={gotoHome}>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex-1 flex flex-row items-center justify-end">
        <MenuIndicator
          imageSrc={iconMemo}
          imageAlt="icon-memo"
          title="自分の記録"
          onClick={gotoMyRecord}
        />
        <MenuIndicator
          imageSrc={iconChallenge}
          imageAlt="icon-challenge"
          title="チャレンジ"
          onClick={gotoMyRecord}
        />
        <MenuIndicator
          imageSrc={iconInfo}
          imageAlt="icon-info"
          title="お知らせ"
          onClick={gotoMyRecord}
        />

        <div className="relative inline-block">
          <img
            src={iconMenu}
            alt="icon-menu"
            className="w-8 h-8"
            onClick={() => toggleMenu(true)}
          />
          {showMenu && (
            <div className="absolute z-10 whitespace-nowrap right-0 cursor-pointer">
              <div
                className="bg-dark-500 text-primary-400 w-8 h-8 grid place-content-center ml-auto"
                onClick={() => toggleMenu(false)}
              >
                <img src={iconClose} alt="icon-close" className="w-6 h-6" />
              </div>
              <div className="bg-gray-400 text-light" style={{ width: 280 }}>
                <div
                  className="py-6 px-8 border-b border-b-gray-500"
                  onClick={gotoMyRecord}
                >
                  自分の記録
                </div>
                <div className="py-6 px-8 border-b border-b-gray-500">
                  体重グラフ
                </div>
                <div className="py-6 px-8 border-b border-b-gray-500">目標</div>
                <div className="py-6 px-8 border-b border-b-gray-500">
                  選択中のコース
                </div>
                <div
                  className="py-6 px-8 border-b border-b-gray-500"
                  onClick={gotoColumnPage}
                >
                  コラム一覧
                </div>
                <div className="py-6 px-8 border-b border-b-gray-500">設定</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
