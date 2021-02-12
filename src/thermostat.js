class Thermostat{

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE = 25;
    this.MAXIMUM_TEMPERATURE = 32;
    this.minOrMaxTemperature = false
    this.currentEnergyUsage = "medium"
  };

  _up() {
    if (this.powerSavingMode === true && this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE)
      {return}
    else if (this.powerSavingMode === false && this.temperature === this.MAXIMUM_TEMPERATURE)
      {return}
    else
      {this.temperature ++;
       this._minOrMaxTemperature()};
  };

  _down() {
    if (this.temperature === this.MINIMUM_TEMPERATURE)
      {return}
    else
      {this.temperature --;
       this._minOrMaxTemperature()};
  };

  _changePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
    if (this.powerSavingMode === true && this.temperature > this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE)
      {this.temperature = this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE;
       this._minOrMaxTemperature()};
  };

  _reset() {
    this.temperature = 20;
    this._minOrMaxTemperature();
  };

  _minOrMaxTemperature() {
    if (this.temperature === this.MINIMUM_TEMPERATURE)
      {this.minOrMaxTemperature = "min"}
    else if (this.powerSavingMode === true && this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE)
      {this.minOrMaxTemperature = "max"}
    else if (this.powerSavingMode === false && this.temperature === this.MAXIMUM_TEMPERATURE)
      {this.minOrMaxTemperature = "max"}
    else
      {this.minOrMaxTemperature = false};
    this._currentEnergyUsage();
  };

  _currentEnergyUsage() {
    if (this.temperature < 18)
      {this.currentEnergyUsage = "low"}
    else if (this.temperature <= 25)
      {this.currentEnergyUsage = "medium"}
    else
      {this.currentEnergyUsage = "high"};
  };

}
