import React from "react";
interface UseCasesProps {}

const UseCases = ({}: UseCasesProps) => {
  return (
    <div>
      <button>X</button>

      <h2 id="section1">프로젝트 소개</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <button>정보</button>
      <p id="description">
        이 버튼을 클릭하면 프로젝트에 대한 자세한 정보를 볼 수 있습니다.
      </p>

      <div>
        <p>장식용 내용</p>
      </div>
    </div>
  );
};

export default UseCases;
