import React from 'react';
import { Tile } from '../../common/Tile';
import { Wrapper } from '../../common/Wrapper';
import { SectionHeader } from './styled';

const PopularPeople = () => {
    return(
        <Wrapper>
            <SectionHeader>Popular People</SectionHeader>
            <Wrapper itemList>
                <Tile image />
                <Tile image />
                <Tile image />
                <Tile image />
                <Tile image />
                <Tile image />
                <Tile image />
                <Tile image />
            </Wrapper>
        </Wrapper>
    );
}

export default PopularPeople;