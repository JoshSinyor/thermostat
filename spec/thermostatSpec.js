describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20˚C', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('rises 1˚C whenever up is called', function(){
    thermostat._up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('drops 1˚C whenever down is called', function(){
    thermostat._down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('raises an error when taking temperature below 10˚C', function(){
    for (i = 0; i < 10; i++) {thermostat._down()};
    expect(function() {
      thermostat._down()}).toThrow(new Error ('minimum temperature is 10˚C'));
  });

  it('raises an error when taking temperature above 25˚C in power saving mode', function(){
    for (i = 0; i < 5; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature in power saving mode is 25˚C'));
  });

  it('raises an error when taking temperature above 32˚C', function(){
    thermostat._changePowerSavingMode();
    for (i = 0; i < 12; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature is 32˚C'));
  });

  it('switches power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
    thermostat._changePowerSavingMode()
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('lowers the temperature to 25˚C when switched to power saving mode if temperature exceeds 25˚C', function() {
    thermostat._changePowerSavingMode();
    for (i = 0; i < 10; i++) {thermostat._up()};
    thermostat._changePowerSavingMode();
    expect(thermostat.temperature).toEqual(25);
  });

  it('resets the temperature to 20˚C when reset is called', function() {
    thermostat._reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns the current energy usage', function() {
    for (i = 0; i < 3; i++) {thermostat._down()};
      expect(thermostat._currentEnergyUsage()).toEqual('low-usage')
    for (i = 0; i < 8; i++) {thermostat._up()};
      expect(thermostat._currentEnergyUsage()).toEqual('medium-usage')
    thermostat._changePowerSavingMode();
    thermostat._up();
    expect(thermostat._currentEnergyUsage()).toEqual('high-usage')
  });

});
