import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import emergency_div from "../../../assets/svg/emergency_div.svg";
import labor_div from "../../../assets/svg/labor_div.svg";
import top from "../../../assets/svg/top.svg";
import vector from "../../../assets/svg/vector.svg";
import "../../styles/Bar/SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();

  const onLaborBtnClick = useCallback(() => {
    navigate("/LaborPage");
  }, [navigate]);

  const onEmergencyBtnClick = useCallback(() => {
    navigate("/EmergencyPage");
  }, [navigate]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="sidebar_left">
        <button className="emergency-btn" onClick={onEmergencyBtnClick}>
          <img className="labor-div-icon" alt="" src={emergency_div} />
          <div className="emergency">Emergency</div>
        </button>
        <button className="labor-btn" onClick={onLaborBtnClick}>
          <img className="labor-div-icon" alt="" src={labor_div} />
          <div className="labor">Labor</div>
        </button>
      </div>
      <div className="sidebar_right">
        <div className="banneradd-div" />
        <button className="top" onClick={goToTop}>
          <img className="top-icon" alt="" src={top} />
          <img className="vector-icon" alt="" src={vector} />
        </button>
      </div>
    </>
  );
};

export default SideBar;
