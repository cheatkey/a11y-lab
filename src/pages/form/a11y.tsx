import React, { useState } from "react";

type FormValues = {
  inquiryType: string;
  name: string;
  phoneNumber: string;
  title: string;
  password: string;
  message: string;
};

const AccessibleInquiryForm: React.FC = () => {
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
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-white text-2xl font-bold">고객 문의 폼</h1>
      <form
        onSubmit={handleSubmit}
        aria-live="assertive"
        className="flex flex-col gap-12"
      >
        <fieldset
          role="group"
          aria-labelledby="basic-info-group"
          className="flex flex-col gap-4"
        >
          <legend
            id="basic-info-group"
            className="block text-white text-lg font-semibold"
          >
            문의 유형 및 고객 정보
          </legend>
          <div className="flex flex-row gap-4">
            {/* 문의 유형 선택 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="inquiryType"
                className="block text-gray-400 text-sm"
              >
                문의 유형 <span aria-hidden="true">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formValues.inquiryType}
                onChange={handleChange}
                className={`bg-black w-full p-[13px] ${
                  errors.inquiryType ? "border-red-500" : ""
                }`}
                aria-invalid={errors.inquiryType ? "true" : "false"}
                aria-describedby="inquiryType-desc inquiryType-error"
                aria-required="true"
              >
                <option value="">옵션을 선택해주세요</option>
                <option value="product">제품 문의</option>
                <option value="service">서비스 문의</option>
                <option value="other">기타</option>
              </select>
              <p id="inquiryType-desc" className="text-gray-400 text-sm">
                문의 유형을 선택해주세요.
              </p>
              {errors.inquiryType && (
                <p id="inquiryType-error" className="text-red-500 text-sm">
                  {errors.inquiryType}
                </p>
              )}
            </div>

            {/* 고객 이름 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="name" className="block text-gray-400 text-sm">
                이름 <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className={`w-full ${errors.name ? "border-red-500" : ""}`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby="name-desc name-error"
                aria-required="true"
              />
              <p id="name-desc" className="text-gray-400 text-sm">
                이름을 입력해주세요.
              </p>
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm">
                  {errors.name}
                </p>
              )}
            </div>

            {/* 전화번호 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-400 text-sm"
              >
                전화번호 <span aria-hidden="true">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                className={`w-full ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
                aria-describedby="phoneNumber-desc phoneNumber-error"
                aria-required="true"
              />
              <p id="phoneNumber-desc" className="text-gray-400 text-sm">
                전화번호를 입력해주세요.
              </p>
              {errors.phoneNumber && (
                <p id="phoneNumber-error" className="text-red-500 text-sm">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset
          role="group"
          aria-labelledby="additional-info-group"
          className="flex flex-col gap-4"
        >
          <legend
            id="additional-info-group"
            className="block text-white text-lg font-semibold"
          >
            문의글 정보
          </legend>
          <div className="flex flex-row gap-4">
            {/* 제목 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="title" className="block text-gray-400 text-sm">
                제목 <span aria-hidden="true">*</span>
              </label>
              <input
                id="title"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                className={`w-full ${errors.title ? "border-red-500" : ""}`}
                aria-invalid={errors.title ? "true" : "false"}
                aria-describedby="title-desc title-error"
                aria-required="true"
              />
              <p id="title-desc" className="text-gray-400 text-sm">
                문의 제목을 입력해주세요.
              </p>
              {errors.title && (
                <p id="title-error" className="text-red-500 text-sm">
                  {errors.title}
                </p>
              )}
            </div>

            {/* 비밀번호 필드 */}
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="password" className="block text-gray-400 text-sm">
                비밀번호 <span aria-hidden="true">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                className={`w-full ${errors.password ? "border-red-500" : ""}`}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-desc password-error"
                aria-required="true"
              />
              <p id="password-desc" className="text-gray-400 text-sm">
                문의를 보호할 비밀번호를 입력해주세요.
              </p>
              {errors.password && (
                <p id="password-error" className="text-red-500 text-sm">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* 문의 내용 필드 */}
        <fieldset
          role="group"
          aria-labelledby="message-group"
          className="flex flex-col gap-4"
        >
          <legend
            id="message-group"
            className="block text-white text-lg font-semibold"
          >
            문의 내용
          </legend>
          <label htmlFor="message" className="block text-gray-400 text-sm">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className="w-full min-h-52"
            aria-describedby="message-desc"
          ></textarea>
          <p id="message-desc" className="text-gray-400 text-sm">
            문의 내용을 입력해주세요.
          </p>
        </fieldset>

        {/* 제출 버튼 */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default AccessibleInquiryForm;
