import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import home_btn_div from "../../../assets/svg/home_btn_div.svg";
import rectangle_44 from "../../../assets/svg/rectangle_44.svg";
import stork from "../../../assets/svg/stork.svg";
import "../../styles/Bar/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onPolicyBtnClick = useCallback(() => {
    navigate("/PolicyPage");
  }, [navigate]);

  const onTipBtnClick = useCallback(() => {
    navigate("/TipPage");
  }, [navigate]);

  const onComBtnClick = useCallback(() => {
    navigate("/ComPage");
  }, [navigate]);

  const onMyBtnClick = useCallback(() => {
    navigate("/MyPage");
  }, [navigate]);

  const onHomeBtnClick = useCallback(() => {
    navigate("/MainPage");
  }, [navigate]);

  return (
    <div className="navbar">
      <div className="navbar1">
        <img className="navbar-child" alt="" src={rectangle_44} />
        <div className="nav-btns">
          <button className="policy-btn" onClick={onPolicyBtnClick}>
            <div className="policy-btn-div" />
            <div className="policy">Policy</div>
          </button>
          <button className="policy-btn" onClick={onTipBtnClick}>
            <div className="policy-btn-div" />
            <div className="tip">Tip</div>
          </button>
          <button className="policy-btn" onClick={onComBtnClick}>
            <div className="policy-btn-div" />
            <div className="com">Com</div>
          </button>
          <button className="policy-btn" onClick={onMyBtnClick}>
            <div className="policy-btn-div" />
            <div className="my">My</div>
          </button>
        </div>
        <button className="home-btn" onClick={onHomeBtnClick}>
          <img className="home-btn-div-icon" alt="" src={home_btn_div} />
          <img className="stork-icon" alt="" src={stork} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
