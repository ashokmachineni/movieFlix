import React from "react";
import { List, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { RightOutlined } from "@ant-design/icons";
import "./MovieList.scss";

export default function MovieList(props) {
  const { title, movies } = props;
  if (movies.loading || !movies.result) {
    return <Loading />;
  }
  return (
    <List
      size="default"
      className="movie-list"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={movie => <RenderMovie movie={movie} />}
    />
  );
}
function RenderMovie(props) {
  const {
    movie: { id, title, overview, poster_path }
  } = props;
  const posterPath = `http://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  );
}
