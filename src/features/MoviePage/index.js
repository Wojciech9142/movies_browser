import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from '../../common/Wrapper';
import { BigPoster, Description, Genre, Genres, Header, Image, Infos, Name, Rate, Rating, Rule, Star, Title, Value, Votes, Year } from './styled';
import { Tile } from '../../common/Tile';
import userImage from '../../images/Picture.png';

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({
    status: "loading",
    movie: []
  });
  const [credits, setCredits] = useState({
    status: "loading",
    credits: []
  });

  const svg = (w) => {
    return (<svg width={w} height={w} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M38.5752 14.2348L26.7736 12.5198L21.5019 1.8331C21.3486 1.57286 21.1301 1.35714 20.8679 1.20726C20.6057 1.05739 20.3089 0.978554 20.0069 0.978554C19.7049 0.978554 19.4081 1.05739 19.1459 1.20726C18.8837 1.35714 18.6652 1.57286 18.5119 1.8331L13.2302 12.5198L1.42856 14.2348C1.1208 14.2792 0.831598 14.4088 0.593658 14.609C0.355718 14.8092 0.178529 15.072 0.082123 15.3676C-0.014283 15.6633 -0.026061 15.98 0.0481206 16.2819C0.122302 16.5839 0.279485 16.8591 0.501898 17.0764L9.04356 25.3998L7.02856 37.1548C6.97605 37.4613 7.01033 37.7764 7.12753 38.0644C7.24473 38.3524 7.44018 38.6019 7.69178 38.7847C7.94338 38.9674 8.24109 39.0762 8.55125 39.0986C8.86141 39.121 9.17165 39.0561 9.4469 38.9114L20.0019 33.3631L30.5569 38.9114C30.8321 39.0561 31.1424 39.121 31.4525 39.0986C31.7627 39.0762 32.0604 38.9674 32.312 38.7847C32.5636 38.6019 32.7591 38.3524 32.8763 38.0644C32.9935 37.7764 33.0277 37.4613 32.9752 37.1548L30.9602 25.3998L39.5019 17.0764C39.7243 16.8593 39.8815 16.5844 39.9558 16.2827C40.0302 15.9809 40.0187 15.6644 39.9227 15.3689C39.8266 15.0733 39.6499 14.8105 39.4124 14.6101C39.1749 14.4097 38.8861 14.2797 38.5786 14.2348H38.5752Z" fill="#FCD420" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>);
  };

  const API_KEY = "9fa8df50ae92cd1be9d2b9ae814b33c6";
  const IMAGE_LINK = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${API_KEY}`);

        setCredits({
          status: "success",
          credits: response.data,
        })
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params.id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`);
        setMovie({
          status: "success",
          movie: response.data,
        })
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params.id]);

  if (movie.status === "success") {
    console.log(credits);
    const bigPoster = (`https://image.tmdb.org/t/p/w1280${movie.movie.backdrop_path}`);

    return (
      <>
        <Wrapper moviePage>
          {BigPoster !== "" ?
            <BigPoster image={bigPoster}>
              <Title>{movie.movie.title}</Title>
              <Rating>
                <Star>
                  {svg(40)}
                </Star>
                <Rate>{movie.movie.vote_average}</Rate>
              </Rating>
              <Votes>{movie.movie.vote_count} votes</Votes>
            </BigPoster>
            : ""}

          <Tile movieDetail>
            <Image poster src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`} alt="poster image" />
            <Infos>
              <Header>{movie.movie.title}</Header>
              <Year>{movie.movie.release_date.slice(0, 4)}</Year>
              <Name>Production: <Value>
                {movie.movie.production_countries.map(country => <span key={country.iso_3166_1}>{country.name}, </span>)}
              </Value></Name>
              <Name>Release date: <Value>{movie.movie.release_date}</Value></Name>
              <Genres>
                {movie.movie.genres.map((props) =>
                  <Genre key={props.id}>{props.name}</Genre>
                )}
              </Genres>
              <Rating details>
                <Star>
                  {svg(20)}
                </Star>
                <Rate details>{movie.movie.vote_average}</Rate>
                <Votes detail>{movie.movie.vote_count} votes</Votes>
              </Rating>
              <Description>{movie.movie.overview}</Description>
            </Infos>
          </Tile>

          <Wrapper>
            <Header>Cast</Header>

            <Wrapper personsList>
              {credits.status === "success" ?
                credits.credits.cast.map(person =>
                  <Tile
                    people
                    key={person.id}
                  >
                    <Image src={person.profile_path !== null ? `${IMAGE_LINK}${person.profile_path}` : userImage} alt={`Zdjęcie ${person.name}`} />
                    <Title people>{person.name}</Title>
                    <Rule>{person.character}</Rule>
                  </Tile>
                )
                : ("")
              }
            </Wrapper>

            <Header credits>Crew</Header>

            <Wrapper personsList>
              {credits.status === "success" ?
                credits.credits.crew.map(person =>
                  <Tile
                    people
                    key={person.credit_id}
                  >
                    <Image src={person.profile_path !== null ? `${IMAGE_LINK}${person.profile_path}` : userImage} alt={`Zdjęcie ${person.name}`} />
                    <Title people>{person.name}</Title>
                    <Rule>{person.department}</Rule>
                  </Tile>
                )
                : ("")
              }
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </>
    )
  } else {
    return (
      <p>Błąd</p>
    )
  }


}

export default MoviePage;