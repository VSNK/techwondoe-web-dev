import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Container, DropDown, Link } from './index.styles';

interface TitleBarItemProps {
    title: string;
    isExpandable: boolean;
}

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
