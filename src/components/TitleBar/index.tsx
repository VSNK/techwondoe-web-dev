import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import TitleBarItem from "../TitleBarItem";
import { useMenuData } from "./index.apis";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Container = styled.div``;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  @media screen and (min-width: 376px) {
    width: 95%;
    flex-direction: row;
  }
`;

const IconContainer = styled.div`
  display: flex;
  padding: 12px;
  justify-content: flex-end;
`;

const MenuIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const screenWidth = window.screen.width;
const isBigScreen = screenWidth > 375;

const TitleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = useMenuData();
  const theme: any = useTheme();

  return (
    <Container>
      {!isBigScreen && (
        <IconContainer>
          {!isMenuOpen ? (
            <HiOutlineMenu
              onClick={() => setIsMenuOpen(true)}
              size={35}
              color={theme?.primary ?? "#000"}
            />
          ) : (
            <AiOutlineClose
              onClick={() => setIsMenuOpen(false)}
              size={35}
              color={theme?.primary ?? "#000"}
            />
          )}
        </IconContainer>
      )}
      {(isBigScreen || (!isBigScreen && isMenuOpen)) && (
        <InnerContainer>
          {menus.map(({ menuName, isExpandable, order }) => (
            <TitleBarItem
              title={menuName}
              key={order}
              isExpandable={isExpandable}
            />
          ))}
        </InnerContainer>
      )}
    </Container>
  );
};

export default TitleBar;
