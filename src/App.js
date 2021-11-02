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
import { useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
  const [user,setUser]=useState({userId:localStorage.getItem('ID'),email:localStorage.getItem('EMAIL')})
  return (
    <Layout className="layout App">
      <Router>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Nav user={user}/>
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
            <Route path="/profile" >
              <Profile user={user} setUser={setUser}/>
            </Route>
            <Route path="/login" >
              <Login user={user} setUser={setUser}/>
            </Route>

          </Switch>
        </Content>
      </Router>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
