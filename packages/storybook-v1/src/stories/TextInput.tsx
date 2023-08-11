import { Dispatch, SetStateAction } from "react";

interface TextInputProps {
  // value: string;
  // setValue: Dispatch<SetStateAction<string>>;
  value?: string;
  error?: boolean;
  placeholder?: string;
  inputStyle?: React.CSSProperties;
}

export const TextInput = ({
  value,
  error,
  placeholder,
  inputStyle,
}: TextInputProps) => {
  if (error) {
    return (
      <div className="w-56">
        <input
          value={value}
          type="text"
          className="p-1 w-full rounded-md border focus:outline-none text-base border-red-600"
          style={inputStyle}
          placeholder={placeholder}
        />
        <p className="text-xs text-wrap w-full text-red-600">
          아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신
          내용을 다시 확인해주세요.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <input
          value={value}
          type="text"
          className="p-1 rounded-md border-gray-200 border focus:outline-none text-base"
          style={inputStyle}
          placeholder={placeholder}
        />
      </div>
    );
  }
};
