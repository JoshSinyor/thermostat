class Thermostat{

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE = 25;
    this.MAXIMUM_TEMPERATURE = 32;
    this.MAX_TEMPERATURE = false
    this.MIN_TEMPERATURE = false
  };

  _up() {
    if (this.MIN_TEMPERATURE = true) {this.MIN_TEMPERATURE = false};
    if (this.powerSavingMode === true && this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE)
      {this.MAX_TEMPERATURE = true; return;}
    else if (this.powerSavingMode === false && this.temperature === this.MAXIMUM_TEMPERATURE)
      {this.MAX_TEMPERATURE = true; return;};
    this.temperature ++;
  };

  _down() {
    if (this.MAX_TEMPERATURE = true) {this.MAX_TEMPERATURE = false};
    if (this.temperature === this.MINIMUM_TEMPERATURE)
      {this.MIN_TEMPERATURE = true; return;}
    else {this.temperature --;};
  };

  _changePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
    if (this.powerSavingMode === true && this.temperature > this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE )
     {this.temperature = this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE};
  };

  _reset() {
    this.temperature = 20;
  };

  _currentEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage"
    } else if (this.temperature <= 25) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  };

}
