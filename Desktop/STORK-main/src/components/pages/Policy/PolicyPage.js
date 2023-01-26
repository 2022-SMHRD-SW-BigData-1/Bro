import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../../assets/images/map.png";
import mdilightchevrondoubleright from "../../../assets/svg/mdilightchevrondoubleright.svg";
import "../../styles/Policy/PolicyPage.css";
import NavBar from "../Bar/NavBar";
import SideBar from "../Bar/SideBar";

const PolicyPage = () => {
  const navigate = useNavigate();

  const onChoice1DivClick = useCallback(() => {
    navigate("/Choice1_Page");
  }, [navigate]);

  const onChoice2DivClick = useCallback(() => {
    navigate("/Choice2_Page");
  }, [navigate]);

  const onKyungkiDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSeoulDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChungnamDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onJunbukDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onJunnamDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onJejuDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onKyungnamDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onKyungbukDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChungbukDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onKangwonDivClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='choiceDiv']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="policy-page">
      <NavBar />
      <SideBar />
      <div className="policy-title-div">
        <div className="div">임산부 관련 정책 / 지원금 알아 보기!</div>
      </div>
      <img className="map-icon" alt="" src={Map} />
      <button className="kangwon-div" onClick={onKangwonDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">강원</div>
      </button>
      <button className="kyungki-div" onClick={onKyungkiDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">경기</div>
      </button>
      <button className="seoul-div" onClick={onSeoulDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">서울</div>
      </button>
      <button className="chungnam-div" onClick={onChungnamDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">충남</div>
      </button>
      <button className="chungbuk-div" onClick={onChungbukDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">충북</div>
      </button>
      <button className="kyungbuk-div" onClick={onKyungbukDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">경북</div>
      </button>
      <button className="junbuk-div" onClick={onJunbukDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">전북</div>
      </button>
      <button className="kyungnam-div" onClick={onKyungnamDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">경남</div>
      </button>
      <button className="junnam-div" onClick={onJunnamDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">전남</div>
      </button>
      <button className="jeju-div" onClick={onJejuDivClick}>
        <div className="chungnam-div-child" />
        <div className="div1">제주</div>
      </button>
      <div className="choice-div" data-scroll-to="choiceDiv" />
      <button className="choice1-div" onClick={onChoice1DivClick}>
        <div className="choice1-div1" />
        <b className="b">출산 지원금</b>
        <img
          className="mdi-lightchevron-double-right-icon"
          alt=""
          src={mdilightchevrondoubleright}
        />
      </button>
      <button className="choice2-div" onClick={onChoice2DivClick}>
        <div className="choice1-div1" />
        <b className="b">임산부 정책</b>
        <img
          className="mdi-lightchevron-double-right-icon"
          alt=""
          src={mdilightchevrondoubleright}
        />
      </button>
    </div>
  );
};

export default PolicyPage;
