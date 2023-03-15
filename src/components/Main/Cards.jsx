import React, { useState } from "react";
import "./Card.css";
const Cards = () => {
  //data라는 배열을 하나 만들고, key값을 가진 오브젝트 형태로 담아준다.
  const data = [
    {
      title: "1",
      txt: "텍스트1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci?",
    },
    {
      title: "2",
      txt: "텍스트2 Lorem ipsum dolor sit amet.",
    },
    {
      title: "3",
      txt: "텍스트3 Lorem ipsum, dolor sit ametr adipisicing elit. Animi sin.",
    },
  ];

  // const [copyItem, Maplist] = useState(Array);

  return (
    <section className="post-box">
      {data.map((item, i) => {
        return (
          <Card key={i} title={item.title} isSpecial={false} txt={item.txt} />
        );
      })}
    </section>
  );
};

function Card({ title, txt, isSpecial }) {
  // props 내부의 값을 조회 할 때마다 props. 를 입력하고 있는데,
  // 함수의 파라미터에서 비구조화 할당 문법을 사용하면 조금 더 코드를 간결하게 작성 할 수 있습니다.
  return (
    <div className="post-card">
      <h2>{title}</h2>
      {isSpecial && <b>isSpecial이 true일때 출력된다</b>}
      <p className="post-card-txt">{txt}</p>
    </div>
  );
}

export default Cards;
