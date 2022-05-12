import React, { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  backgroundColor?: "primary" | "secondary";
}>`
  background-color: ${(props) =>
    props?.backgroundColor === "secondary"
      ? props.theme.secondary
      : props.theme.primary};
  /* background-color: ${(props) => props.theme.primary}; */
  border-width: 0px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  line-height: 27px;
  height: 45px;
  min-width: 130px;
  cursor: pointer;
`;

interface ButtonProps {
  backgroundColor?: "primary" | "secondary";
  children: string;
}

const Button: FC<ButtonProps> = ({
  backgroundColor = "primary",
  children,
  ...restProps
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
