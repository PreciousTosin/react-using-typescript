import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../../../styles/blocks/AuthLayout";
import { Form as FormEl, InputGroup, InputContainer } from "./style";
import FormInput from "../../../../styles/blocks/FormInput";
interface CodeObject {
  [key: string]: { [key: string]: string };
}
type CodeInputRef = React.MutableRefObject<HTMLInputElement | null>;
const Form: React.FC = () => {
  const initialCodObject: CodeObject = {
    first: { 0: "", 1: "", 2: "" },
    second: { 0: "", 1: "", 2: "" }
  };
  const [codeObject, setCodeObject] = useState(initialCodObject);
  const inputRefs: CodeInputRef[] = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];
  const onInputChange = (section: string, key: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (codeObject[section][key]) return;
    const value = e.target.value;
    setCodeObject(_codeObject => ({
      ..._codeObject,
      [section]: { ..._codeObject[section], [key]: value }
    }));
  };
  const gotoNextInput = (index: number) => {
    const nextInput = inputRefs[index + 1];
    if (nextInput) {
      nextInput.current?.focus();
    }
  };
  const gotoPrevInput = (index: number) => {
    const prevInput = inputRefs[index - 1];
    if (prevInput) {
      prevInput.current?.focus();
    }
  };
  const onKeyDown = (section: string, key: string, index: number) => (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.stopPropagation();
    if (codeObject[section][key].length === 1) {
      // console.log("has value");
      if (e.key === "Backspace") {
        // console.log("backspace");
        setCodeObject(_codeObject => ({
          ..._codeObject,
          [section]: { ..._codeObject[section], [key]: "" }
        }));
      } else {
        // console.log("goto next input");
        gotoNextInput(index);
      }
    } else {
      if (e.key === "Enter" || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
        return;
      if (e.key !== "Backspace") gotoNextInput(index);
      else gotoPrevInput(index);
    }
  };
  const getCode = () => {
    return `${Object.values(codeObject.first).join("")}${Object.values(
      codeObject.second
    ).join("")}`;
  };
  const logCode = () => {
    console.log(getCode());
  };
  return (
    <FormEl>
      <InputContainer>
        <InputGroup>
          {Object.keys(codeObject.first).map((key, index) => (
            <FormInput.Input
              key={index}
              value={codeObject.first[key]}
              onChange={onInputChange("first", key)}
              onKeyUp={onKeyDown("first", key, index)}
              ref={inputRefs[index]}
            />
          ))}
        </InputGroup>
        <div className="divider" />
        <InputGroup>
          {Object.keys(codeObject.second).map((key, index) => (
            <FormInput.Input
              key={index}
              value={codeObject.second[key]}
              onChange={onInputChange("second", key)}
              onKeyUp={onKeyDown("second", key, index + 3)}
              ref={inputRefs[index + 3]}
            />
          ))}
        </InputGroup>
      </InputContainer>
      <AuthLayout.ActionText onClick={logCode}>
        Entered wrong email , <Link to="/register">Resend code</Link>
      </AuthLayout.ActionText>
    </FormEl>
  );
};
export default Form;