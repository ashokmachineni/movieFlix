import React from "react";
import useFetch from "../hooks/useFetch";
import { Row, Col } from "antd";
import SliderMovies from "../components/SliderMovies/SliderMovies";
import { URL_API, API_KEY } from "../utils/contants";
import MovieList from "../components/MovieList";
import ModalVideo from "../components/ModalVideo";
import Footer from "../components/Footer";

function Home(props) {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Popular Movies" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Rated Movies" movies={topRatedMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Home;
