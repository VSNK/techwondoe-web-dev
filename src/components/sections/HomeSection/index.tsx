import { FC, useEffect, useState } from 'react';
import useSingleEntryData from '../../../hooks/useSingleEntryData';
import TitleBar from '../../TitleBar';
import {
    Container,
    ImageContainer,
    BackgroundImage,
    ImageText,
    RibbonImage,
} from './index.styles';

const markSize = 500;

const HomeSection: FC = () => {
    const { title, backgroundImage, backgroundRibbonImage }: any =
        useSingleEntryData('5NG1tgyacOjZ8dvxVpyOqO');
    const [isBigScreen, setIsBigScreen] = useState(
        window.screen.width > markSize
    );
    useEffect(() => {
        window.addEventListener('resize', () =>
            setIsBigScreen(window.screen.width > markSize)
        );
    }, []);
    return (
        <Container>
            <TitleBar />
            <ImageContainer>
                <BackgroundImage
                    src={backgroundImage?.fields.file.url ?? ''}
                    alt="background image"
                />
                <RibbonImage
                    src={backgroundRibbonImage?.fields.file.url ?? ''}
                    alt="ribbon image"
                />
                {!isBigScreen && <ImageText>{title}</ImageText>}
            </ImageContainer>
        </Container>
    );
};

export default HomeSection;
