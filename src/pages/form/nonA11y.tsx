import React, { useState } from "react";

type FormValues = {
  inquiryType: string;
  name: string;
  phoneNumber: string;
  title: string;
  password: string;
  message: string;
};

const NonAccessibleInquiryForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    inquiryType: "",
    name: "",
    phoneNumber: "",
    title: "",
    password: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.inquiryType)
      newErrors.inquiryType = "문의 유형을 선택해주세요";
    if (!formValues.name) newErrors.name = "이름을 입력해주세요";
    if (!formValues.phoneNumber)
      newErrors.phoneNumber = "전화번호를 입력해주세요";
    else if (!/^[0-9]{10,11}$/.test(formValues.phoneNumber))
      newErrors.phoneNumber = "전화번호는 10~11자리 숫자로 입력해주세요";
    if (!formValues.title) newErrors.title = "제목을 입력해주세요";
    if (!formValues.password) newErrors.password = "비밀번호를 입력해주세요";
    else if (formValues.password.length < 6)
      newErrors.password = "비밀번호는 최소 6자 이상이어야 합니다";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log(formValues);
      // 폼 제출 처리 로직 추가
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-white text-2xl font-bold">고객 문의 폼</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="block text-white text-lg font-semibold">
            문의 유형 및 고객 정보
          </div>
          <div className="flex flex-row gap-4">
            {/* 문의 유형 선택 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="block text-gray-400 text-sm">
                문의 유형 <span>*</span>
              </span>
              <select
                name="inquiryType"
                value={formValues.inquiryType}
                onChange={handleChange}
                className={`bg-black w-full p-[13px] ${
                  errors.inquiryType ? "border-red-500" : ""
                }`}
              >
                <option value="">옵션을 선택해주세요</option>
                <option value="product">제품 문의</option>
                <option value="service">서비스 문의</option>
                <option value="other">기타</option>
              </select>
              <p className="text-gray-400 text-sm">문의 유형을 선택해주세요.</p>
              {errors.inquiryType && (
                <p className="text-red-500 text-sm">{errors.inquiryType}</p>
              )}
            </div>

            {/* 고객 이름 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="block text-gray-400 text-sm">
                이름 <span>*</span>
              </span>
              <input
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className={`w-full ${errors.name ? "border-red-500" : ""}`}
              />
              <p className="text-gray-400 text-sm">이름을 입력해주세요.</p>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* 전화번호 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="block text-gray-400 text-sm">
                전화번호 <span>*</span>
              </span>
              <input
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                className={`w-full ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              <p className="text-gray-400 text-sm">전화번호를 입력해주세요.</p>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="block text-white text-lg font-semibold">
            문의글 정보
          </div>
          <div className="flex flex-row gap-4">
            {/* 제목 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="block text-gray-400 text-sm">
                제목 <span>*</span>
              </span>
              <input
                name="title"
                value={formValues.title}
                onChange={handleChange}
                className={`w-full ${errors.title ? "border-red-500" : ""}`}
              />
              <p className="text-gray-400 text-sm">문의 제목을 입력해주세요.</p>
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            {/* 비밀번호 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="block text-gray-400 text-sm">
                비밀번호 <span>*</span>
              </span>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className={`w-full ${errors.password ? "border-red-500" : ""}`}
              />
              <p className="text-gray-400 text-sm">
                문의를 보호할 비밀번호를 입력해주세요.
              </p>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
        </div>

        {/* 문의 내용 필드 */}
        <div className="flex flex-col gap-4">
          <div className="block text-white text-lg font-semibold">
            문의 내용
          </div>
          <span className="block text-gray-400 text-sm">문의 내용</span>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className="w-full min-h-52"
          ></textarea>
          <p className="text-gray-400 text-sm">문의 내용을 입력해주세요.</p>
        </div>

        {/* 제출 버튼 */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default NonAccessibleInquiryForm;
