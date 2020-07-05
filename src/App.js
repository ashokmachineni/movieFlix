import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import NewMovies from "./pages/newMovies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/Movie";
import Error404 from "./pages/error404";
import MenuTop from "./components/menuTop/MenuTop";
function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/newmovies" exact>
              <NewMovies />
            </Route>
            <Route path="/popular" exact>
              <Popular />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/movie/:id">
              <Movie />
            </Route>
            <Route exact path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
