// App.js
import React from 'react';
import {
	HashRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store';

// -- antd
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css'
export default () => {
	return (
		<Provider store={store}>
			<ConfigProvider locale={zhCN}>
				<Router>
					<Routes>
						REACT_ROUTERS
					</Routes>
				</Router>
			</ConfigProvider>
		</Provider>
	)
}