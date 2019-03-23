import { Component, Prop, State } from '@stencil/core';

const changeTimezone = (date, timezone) => {
    return new Date(date.toLocaleString('en-US', {
        timeZone: timezone
    }));
};

@Component({
    tag: 'wc-digital-clock',
    styleUrl: 'digital-clock.css'
})
export class DigitalClock {

    private timer: number;

    @State() localTime: Date = new Date();

    @Prop() timezone: string;

    componentDidLoad() {
        this.timer = setInterval(() => {
            this.localTime = new Date();
        }, 1000);
    }

    componentDidUnload() {
        clearInterval(this.timer);
    }

    render() {
        const time = changeTimezone(this.localTime, this.timezone);
        return (
            <div class="container">
                <h3>Timezone: {this.timezone}</h3>
                <div class="clock">
                    <div class="hour">{time.getHours()}</div>
                    <div class="minute">{time.getMinutes()}</div>
                    <div class="second">{time.getSeconds()}</div>
                </div>
            </div>
        )
    }
}