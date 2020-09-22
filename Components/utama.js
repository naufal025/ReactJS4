import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './beranda';
import Protokol from './protokol';
import Data from './data';


const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/protokol" component={Protokol} />
        <Route path="/data" component={Data} />
       
    </Switch>
)

export default Utama;