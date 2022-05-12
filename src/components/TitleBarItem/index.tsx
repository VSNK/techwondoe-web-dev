import React, { FC, useState } from "react";
import styled from "styled-components";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface TitleBarItemProps {
  title: string;
  isExpandable: boolean;
}

const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 376px) {
    width: auto;
    position: relative;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 376px) {
    /* width: 115px; */
    padding: 10px 25px;
  }
`;

const DownArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 3px;
`;

const UpArrowIcon = styled(DownArrowIcon)`
  transform: rotate(180deg);
`;

const DropDown = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  @media screen and (min-width: 376px) {
    position: absolute;
    width: 300px;
  }
`;

const TitleBarItem: FC<TitleBarItemProps> = ({ title, isExpandable }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Container>
      <Link onClick={() => setIsSelected((prev) => !prev)}>
        <Paragraph>{title}</Paragraph>
        {isExpandable &&
          (isSelected ? (
            <FiChevronUp size={24} />
          ) : (
            <FiChevronDown size={24} />
          ))}
      </Link>
      {isExpandable && isSelected && (
        <DropDown>
          <Paragraph>{title}</Paragraph>
        </DropDown>
      )}
    </Container>
  );
};

export default TitleBarItem;
