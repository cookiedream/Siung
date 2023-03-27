import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
// import produce from './pages/produce';
import news from './pages/new'
import AI from './pages/ai'
import AR from './pages/ar'
import VR from './pages/vr'
import Web from './pages/web'
import IoT from './pages/IoT';
import Privary from './pages/privary'
import Rehab from './pages/rehiab';
import index from './components/back/Formm'
import AIP from './components/back/AIP'
import ARP from './components/back/ARP'
import VRP from './components/back/VRP'
import IoTP from './components/back/IoTP'
import WebP from './components/back/WebP'
import RehP from './components/back/RehP'
import Edit from "./components/back/Edit";
import Success from './pages/success'
import Editor from './pages/Editor';
import News from './components/back/News'
import Suc from './components/back/Case'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/produce' component={produce} exact /> */}
        <Route path='/IoT' component={IoT} exact />
        <Route path='/AI' component={AI} exact />
        <Route path='/AR' component={AR} exact />
        <Route path='/VR' component={VR} exact />
        <Route path='/Web' component={Web} exact />
        <Route path='/news' component={news} exact />
        <Route path='/privary' component={Privary} exact />
        <Route path='/rehab' component={Rehab} exact />
        <Route path='/back' component={index} exact />
        <Route path='/back/ai' component={AIP} exact />
        <Route path='/back/ar' component={ARP} exact />
        <Route path='/back/iot' component={IoTP} exact />
        <Route path='/back/vr' component={VRP} exact />
        <Route path='/back/web' component={WebP} exact />
        <Route path='/back/reh' component={RehP} exact />
        <Route path="/edit/:id" component={Edit} exact />
        <Route path="/suc" component={Success} exact />
        <Route path="/back/Editor" component={Editor} exact />
        <Route path="/back/Suc" component={Suc} exact />
        <Route path="/back/News" component={News} exact />
        <Route path="/Login" component={Login} exact />
      </Switch>
    </Router>
  );
}
export default App;
