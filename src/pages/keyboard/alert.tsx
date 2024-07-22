import React, { useEffect, useRef, useState } from "react";
interface AlertProps {}

const Alert = ({}: AlertProps) => {
  const [isModalOpen, setModalOpen] = useState<"focus" | "not-focus" | null>(
    null
  );

  return (
    <main className="p-10 flex flex-col gap-4">
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
        <Modal
          closeModal={() => setModalOpen(null)}
          initialFocus={isModalOpen === "focus"}
        />
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

  useEffect(() => {
    if (initialFocus) confirmButtonRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">
            확인하시겠습니까?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            예제 내용을 확인하시겠습니까?
          </p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => {
                alert("취소하기 버튼 클릭");
                closeModal();
              }}
              className=""
            >
              취소
            </button>
            <button
              onClick={() => {
                alert("확인하기 버튼 클릭");
                closeModal();
              }}
              className="bg-blue-600"
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
