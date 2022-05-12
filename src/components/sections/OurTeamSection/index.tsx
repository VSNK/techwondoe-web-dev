import React from 'react';
import useGetData from '../../../hooks/useGetData';
import useSingleEntryData from '../../../hooks/useSingleEntryData';
import Button from '../../Button';
import Heading from '../../typography/Heading';
import {
    CardContainer,
    Container,
    ContentContainer,
    Image,
    RibbonImage,
    SmallPrimaryText,
    Text,
} from './index.styles';

const OurTeamSection = () => {
    const {
        title,
        description,
        miniTitle,
        buttonText,
        image,
        backgroundRibbonImage,
    }: any = useSingleEntryData('4d5gatMy600raX6BHaUDkx');

    return (
        <Container>
            <CardContainer>
                <RibbonImage
                    src={backgroundRibbonImage?.fields?.file.url ?? ''}
                    alt="ribbon image"
                />
                <div>
                    <Image src={image?.fields?.file.url ?? ''} alt="duo" />
                </div>
                <ContentContainer>
                    <SmallPrimaryText>{miniTitle}</SmallPrimaryText>
                    <Heading>{title}</Heading>
                    <Text>{description}</Text>
                    <Button>{buttonText}</Button>
                </ContentContainer>
            </CardContainer>
        </Container>
    );
};

export default OurTeamSection;
