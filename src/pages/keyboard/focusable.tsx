import React from "react";
import arrow from "../../assets/arrow.svg";

interface TabIndexProps {}

const TabIndex = ({}: TabIndexProps) => {
  return (
    <main className="p-10 flex flex-col gap-14">
      <h1 className="text-3xl font-bold">Tabindex를 사용한 키보드 포커싱</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">
          1. 기본적으로 포커싱 가능한 요소
        </h2>

        <button>버튼</button>
        <input placeholder="input" />
        <textarea placeholder="textarea" />
        <a href="https://www.google.com">google.com</a>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">
          2. 기본적으로 포커싱이 안되는 요소
        </h2>

        <div>div</div>
        <span>span</span>
        <p>p</p>
        <img
          onClick={() => {
            alert("icon clicked");
          }}
          src={arrow}
          className="w-10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">3. 포커싱 설정하기</h2>
        <div tabIndex={0}>포커스를 받을 수 있는 div</div>
        <img tabIndex={0} src={arrow} className="w-10" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Focus outline</h1>
        <button>여기를 포커스 해주세요.</button>
      </div>
    </main>
  );
};

export default TabIndex;
