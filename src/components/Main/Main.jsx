import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Ipsum layout="background" name="front-txt" />
      <Ipsum layout="top" name="second-txt" />
    </main>
  );
};

function Ipsum(props) {
  const showBtn = props.name === "front-txt" ? true : false;

  return (
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint
          aperiam tempora ratione sunt beatae alias nulla
          <br />
          unde expedita suscipit quisquam natus dolores aliquam, placeat ea
          iusto, nesciunt, incidunt minima.
        </p>
        {
          // showBtn 이 true일 경우에만 button을 렌더링
          // 단축평가조건식
          // 둘 다 true일 경우에만 버튼을 렌더링하고 좌항이 false일 경우 바로 false를 반환한다.

          // 이벤트 핸들러에 함수가 아닌 표현식이나 값을 바로 전달할 경우
          // 컴포넌트가 재렌더링 될 때 마다 해당 값이 실행된다.
          // 클릭했을 때 만 실행되게 하려면, onClick =" " 이벤트 핸들러에 값을 함수로 전달해야한다.
          showBtn && (
            <button
              type="button"
              onClick={() => alert("안녕하세요!")}
              className="front-btn"
            >
              버튼
            </button>
          )
        }
        {
          // 굳이 변수로 선언하지 않고 태그안에 조건문을 넣어도 상관은 없음
          /* {props.name == "front-txt" ? (
          <button onClick={click_alert} className="front-btn">
            버튼
          </button>
        ) : null} */
        }
      </div>
    </section>
  );
}

function click_alert() {
  alert("리액트 할거많아..");
}

export default Main;
