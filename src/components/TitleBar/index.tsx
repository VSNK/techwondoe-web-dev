import React, { useEffect, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import TitleBarItem from '../TitleBarItem';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import useGetData from '../../hooks/useGetData';
import { Container, IconContainer, InnerContainer } from './index.styles';

const markSize = 885;

const TitleBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBigScreen, setIsBigScreen] = useState(
        window.screen.width > markSize
    );
    useEffect(() => {
        window.addEventListener('resize', () =>
            setIsBigScreen(window.screen.width > markSize)
        );
    }, []);

    const menus = useGetData('menubar', 'order');
    const theme: any = useTheme();

    return (
        <Container>
            {!isBigScreen && (
                <IconContainer>
                    {!isMenuOpen ? (
                        <HiOutlineMenu
                            onClick={() => setIsMenuOpen(true)}
                            size={35}
                            color={theme?.primary ?? '#000'}
                        />
                    ) : (
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            size={35}
                            color={theme?.primary ?? '#000'}
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
