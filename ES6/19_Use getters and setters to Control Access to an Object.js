class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    //getter
    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }
    //setter
    set temperature(updated_temp) {
        this.fahrenheit = (updated_temp * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius