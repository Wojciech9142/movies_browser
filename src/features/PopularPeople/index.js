import React, { useEffect, useState } from 'react';
import Pagination from '../../common/Pagination';
import { Image, SectionHeader, Title } from './styled';
import { Wrapper } from '../../common/Wrapper';
import { Tile } from '../../common/Tile';
import axios from 'axios';
import userImage from '../../images/Picture.png';
import { Link } from 'react-router-dom';

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
                console.log(people)
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
                        <Link
                            to={`/people/${item.id}`}
                            key={item.id}
                        >
                            <Tile>
                                <Image src={item.profile_path !== null ? `${IMAGE_LINK}${item.profile_path}` : userImage} alt={`Zdjęcie ${item.name}`} />
                                <Title>{item.name}</Title>
                            </Tile>
                        </Link>
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