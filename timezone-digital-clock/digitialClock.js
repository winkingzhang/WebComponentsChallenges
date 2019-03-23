const changeTimezone = (date, timezone) => {
    return new Date(date.toLocaleString('en-US', {
        timeZone: timezone
    }));
};

class DigitalClock extends HTMLElement {
    constructor() {
        super();
        //TODO: attach shadow DOM here
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <link rel="stylesheet" href="digitalClock.css">
            <div class="container">
                <h3>Timezone: <span id="timezone"></span></h3>
                <div class="clock">
                    <div class="hour">HH</div>
                    <div class="minute">MM</div>
                    <div class="second">SS</div>
                </div>
            </div>
        `;
    }

    static get observedAttributes() {
        return [ 'timezone' ]
    }

    connectedCallback() {
        const hourElement = this.shadowRoot.querySelector('.hour'),
            minuteElement = this.shadowRoot.querySelector('.minute'),
            secondElement = this.shadowRoot.querySelector('.second'),
            timezoneElement = this.shadowRoot.querySelector('#timezone'),
            timezone = this.getAttribute('timezone');

        timezoneElement.innerText = timezone;

        setInterval(() => {
            const date = changeTimezone(new Date(), timezone);
            hourElement.innerText = date.getHours();
            minuteElement.innerText = date.getMinutes();
            secondElement.innerText = date.getSeconds();
        }, 1000);
    }
}

window.customElements.define("wc-digital-clock", DigitalClock);