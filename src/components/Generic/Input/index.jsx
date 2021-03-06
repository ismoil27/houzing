import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  name,
  defaultValue,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
      <Icon>{children}</Icon>
      <Container
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        name={name}
        defaultValue={defaultValue}
      />
    </Wrapper>
  );
};

export default Input;
