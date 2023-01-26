import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BabyImg from "../../../assets/images/MainImg/baby.png";
import NavBar from "../Bar/NavBar";
import "../../styles/Main/MainPage.css";
import SideBar from "../Bar/SideBar";

const MainPage = () => {
  const navigate = useNavigate();

  const onMomDiaryBtnClick = useCallback(() => {
    navigate("/MomDiary");
  }, [navigate]);

  const onBabyDiaryBtnClick = useCallback(() => {
    navigate("/BabyDiary");
  }, [navigate]);
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

  return (
    <div className="mainpage">
      <NavBar />
      <SideBar />
      <div className="week-div">
        <span className="span8">{`임신 `}</span>
        <span className="span9" id="Week_cnt">
          40
        </span>
        <span className="span10">주</span>
        <span className="span11" id="WeekCnt_day">
          01
        </span>
        <span className="span12">일째</span>
        <span className="span13" id="BabyNameTitle">
          000
        </span>
      </div>
      <img
        className="babyimg-div-icon"
        alt=""
        src={BabyImg}
        data-animate-on-scroll
      />
      <div className="d-day-div">
        <span className="span4">만나기 까지</span>
        <span className="span5" id="DayCnt">
          150
        </span>
        <span className="span6">일</span>
        <span className="span7" id="BabyNameTitle2">
          000
        </span>
      </div>
      <button className="baby-diary" data-animate-on-scroll>
        <div className="baby-diary1" />
        <div className="baby-diary-name-div" />
        <span className="span" id="BabyName">
          ㅁㅁㅁ
        </span>
        <div className="baby-diary-div" />
        <span className="span1">아기 수첩</span>
      </button>
      <span className="babydiarytext" data-animate-on-scroll>
        <div className="div">
          산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩
        </div>
      </span>
      <button className="mom-diary" data-animate-on-scroll>
        <div className="mom-diary1" />
        <div className="mom-diary-name-div" />
        <span className="span" id="MomName">
          ㅁㅁㅁ
        </span>
        <div className="mom-diary-div" />
        <span className="span1">산모 수첩</span>
      </button>
      <span className="momdiarytext" data-animate-on-scroll>
        <div className="div">{`산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩설명산모수첩 `}</div>
      </span>
      <div className="calendar-div" />
      <div className="mainbottom">
        <div className="company-div">
          <b className="b" id="Company">
            회사 소개
          </b>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
