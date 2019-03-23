import React from 'react';
import ReactDOM from 'react-dom';
import './component/digital-clock';
import DigitalClock from "./component/digital-clock";

const App = () => (
    <div>
        <DigitalClock timezone="America/New_York"/>
        <wc-digital-clock timezone="Asia/Shanghai" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));