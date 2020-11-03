import React, { useEffect, useState } from 'react';
import Pagination from '../../common/Pagination';
import { Image, SectionHeader, Title } from './styled';
import { Wrapper } from '../../common/Wrapper';
import { Tile } from '../../common/Tile';
import axios from 'axios';

const PopularPeople = () => {
    const [people, setPeople] = useState({
        state: "loading",
        people: [],
    });
    const [currentPage, setCurrentPage] = useState(1);

    const API_KEY = "9fa8df50ae92cd1be9d2b9ae814b33c6";
    const IMAGE_LINK = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`)
                setPeople({
                    state: "success",
                    people: response.data,
                });
            } catch (error) {
                console.log(error);
            }
        })();

    }, [currentPage]);

    return (
        <Wrapper>
            <SectionHeader>Popular People</SectionHeader>
            <Wrapper personsList>
                {people.state === "success" ?
                    people.people.results.map((item) =>
                        <Tile
                            key={item.id}
                        >
                            <Image src={`${IMAGE_LINK}${item.profile_path}`} alt="" />
                            <Title>{item.name}</Title>


                        </Tile>
                    ) :
                    <p>Ładowanie danych</p>
                }



            </Wrapper>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} page={people.people.page} totalPages={people.people.total_pages}>

            </Pagination>
        </Wrapper>
    );
}

export default PopularPeople;