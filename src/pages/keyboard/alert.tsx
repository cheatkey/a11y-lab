import React, { useEffect, useRef, useState } from "react";
import FocusTrap from "./components/FocusTrap";
interface AlertProps {}

const Alert = ({}: AlertProps) => {
  const [isModalOpen, setModalOpen] = useState<"focus" | "not-focus" | null>(
    null
  );

  return (
    <main className="p-10 flex flex-col gap-4">
      <input placeholder="input이 가능한 요소" />

      <button
        onClick={() => {
          setModalOpen("focus");
        }}
      >
        open modal (keyboard focus)
      </button>

      <button
        onClick={() => {
          setModalOpen("not-focus");
        }}
      >
        open modal
      </button>
      {isModalOpen && (
        <FocusTrap>
          <Modal
            closeModal={() => setModalOpen(null)}
            initialFocus={isModalOpen === "focus"}
          />
        </FocusTrap>
      )}
    </main>
  );
};

export default Alert;

interface ModalProps {
  closeModal: () => void;
  initialFocus: boolean;
}

const Modal = ({ closeModal, initialFocus }: ModalProps) => {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-lg font-medium text-gray-900">모달 예시</h2>
          <input className="bg-gray-800" placeholder="focus 가능한 요소 1" />
          <input className="bg-gray-800" placeholder="focus 가능한 요소 2" />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => {
                alert("취소하기 버튼 클릭");
                closeModal();
              }}
              className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:gray-violet-300"
            >
              취소
            </button>
            <button
              onClick={() => {
                alert("확인하기 버튼 클릭");
                closeModal();
              }}
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              ref={confirmButtonRef}
            >
              확인하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
