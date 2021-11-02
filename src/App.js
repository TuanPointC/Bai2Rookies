import './App.css';
import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Home from './Home/Home';
import PostDetail from './Posts/PostDetail';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout App">
      <Router>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Nav />
        </Header>

        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch style={{ padding: 24, minHeight: 380 }}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts">
              <Posts />
            </Route>
            <Route path="/posts/:id" >
              <PostDetail />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

          </Switch>
        </Content>
      </Router>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
