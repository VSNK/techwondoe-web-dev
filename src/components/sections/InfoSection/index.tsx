import React, { useMemo } from 'react';
import useGetData from '../../../hooks/useGetData';
import useSingleEntryData from '../../../hooks/useSingleEntryData';
import InfoCard from '../../InfoCard';
import { CardContainer, Container, RibbonImage } from './index.styles';

const InfoSection = () => {
    const cards = useGetData('infoCard', 'order');
    const { backgroundRibbonImage }: any = useSingleEntryData(
        '7FXYF4VxDbeYQDycBB8O4Q'
    );

    return (
        <Container>
            <RibbonImage
                src={backgroundRibbonImage?.fields.file.url ?? ''}
                alt="ribbon image"
            />
            <CardContainer>
                {cards.map(
                    ({ title, description, iconType, linkText, order }) => (
                        <InfoCard
                            title={title}
                            description={description}
                            iconType={iconType}
                            linkText={linkText}
                            key={order}
                        />
                    )
                )}
            </CardContainer>
        </Container>
    );
};

export default InfoSection;
