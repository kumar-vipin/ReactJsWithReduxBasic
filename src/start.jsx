import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from 'redux';

import allReducers from '../app/reducers/reducers.js';
import MainController from "../app/components/main-controller.jsx";

const store = createStore(allReducers);


render(
	<Provider store={store}>
		<MainController/>
	</Provider>,
	document.getElementById('app')
);