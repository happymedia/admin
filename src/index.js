import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import AdminApp from './adminApp';
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider} from 'antd';
import './index.css';

ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<AdminApp />
	</LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
