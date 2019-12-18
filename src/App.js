import React from 'react';
import './App.css';
import Map from './Map';
import {Redirect} from "react-router";
import {renderRoutes} from "react-router-config";
import {Grid} from "@material-ui/core";
import {BrowserRouter, Link} from "react-router-dom";

const routes = [
    {
        path: "/map",
        exact: true,
        component: Map
    },
    {
        path: "/empty",
        component: Empty,
    },
    {
        path: "/",
        component: () => <Redirect to={'/map'} />
    }
];

function Empty() {
    return <p>This is an empty page!</p>;
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div style={{height: '50px', width: '100%', display: 'block'}}>
                    <Grid container alignItems={"space-around"} spacing={5} direction={'row'}>
                        <Grid item>
                            <Link to={'/map'}>Map</Link>
                        </Grid>
                        <Grid item>
                            <Link to={'/empty'}>Empty</Link>
                        </Grid>
                    </Grid>
                </div>
                <div style={{height: '100%', width: '100%'}}>
                    {renderRoutes(routes)}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
