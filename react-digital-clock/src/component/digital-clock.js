import React from 'react'
import ReactWebComponent from 'react-web-component'
import { string } from 'prop-types'

import './digital-clock.css';

const changeTimezone = (date, timezone) => {
    return new Date(date.toLocaleString('en-US', {
        timeZone: timezone
    }));
};

export default class DigitalClock extends React.Component {
    static propTypes = {
        timezone: string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            localTime: new Date()
        };
    }

    /**
     * props is updated parsed by react-web-component just before invoking this
     * method but react doesn't detect this change to props so copy it to
     * state and use state instead.
     */
    webComponentConstructed() {
        this.setState(this.props)
    }

    webComponentConnected() {
        this.timer = setInterval(() => {
            this.setState({ localTime: new Date() });
        }, 1000);
    }

    webComponentDisconnected() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ localTime: new Date() });
        }, 1000);
    }

    render() {
        const { localTime } = this.state;
        const { timezone } = this.props;
        const time = changeTimezone(localTime, timezone);

        return (
            <div className="container">
                <h3>Timezone: {timezone}</h3>
                <div className="clock">
                    <div className="hour">{time.getHours()}</div>
                    <div className="minute">{time.getMinutes()}</div>
                    <div className="second">{time.getSeconds()}</div>
                </div>
            </div>
        )
    }
}

ReactWebComponent.create(<DigitalClock />, 'wc-digital-clock')