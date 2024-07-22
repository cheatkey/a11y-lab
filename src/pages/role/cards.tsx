import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  isSelected: boolean;
  handleSelect: () => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " ") {
      event.preventDefault(); // 스페이스 키의 기본 동작을 막음
      onClick();
    }
  };

  return (
    <div
      role="presentation"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="w-full bg-blue-500 text-white p-2 rounded-lg text-center cursor-pointer"
      style={{ userSelect: "none" }} // 사용자가 텍스트를 선택하지 못하게 함
    >
      {label}
    </div>
  );
};
const Card = ({ title, description, isSelected, handleSelect }: CardProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " ") {
      event.preventDefault();
      handleSelect();
    }
  };

  return (
    <div
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-checked={isSelected}
      role={"radio"}
      className={`w-full bg-gray-50 p-4 rounded-lg shadow-sm ${
        isSelected && "bg-gray-300"
      }`}
    >
      <div className="tracking-wide text-sm text-gray-900 font-semibold">
        {title}
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

interface CardsProps {}

const Cards = ({}: CardsProps) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">야식 메뉴 1개 고르기</h2>
        <Button
          label="dddd"
          onClick={() => {
            alert("1");
          }}
        >
          dd
        </Button>
        {[
          {
            menu: "피자",
            description:
              "바삭한 도우와 진한 치즈가 어우러진 이탈리아 전통 음식",
          },
          {
            menu: "치킨",
            description: "바삭한 튀김옷과 촉촉한 속살이 매력적인 최고의 간식",
          },
          {
            menu: "족발",
            description: "야들야들한 고기와 향긋한 소스의 조화",
          },
        ].map(({ menu, description }) => (
          <Card
            key={menu}
            isSelected={selectedMenu === menu}
            title={menu}
            description={description}
            handleSelect={() => setSelectedMenu(menu)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
