import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import CarService from './Cars/CarService';
import CarView from './Cars/CarView';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">

        <Header>

          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Create">Create</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={CarService} />
            <Route exact path="/Create" component={CarView} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>
    </Router>


  );
}

export default App;
