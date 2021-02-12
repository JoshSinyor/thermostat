$(document).ready(function() {
  let thermostat = new Thermostat();

  $('#temperature-display').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat._up();
    displayRefresh();
  });

  $('#temperature-down').on('click', function() {
    thermostat._down();
    displayRefresh();
  });

  $('#temperature-reset').on('click', function() {
    thermostat._reset();
    displayRefresh();
  });

  $('#powersavingmode').on('click', function() {
    thermostat._changePowerSavingMode();
    displayRefresh();
  });

  function displayRefresh() {
    $('#temperature-display').text(thermostat.temperature);

    if (thermostat.minOrMaxTemperature == "min") {
      $('#celsius-min-display').css("color", "black");
      $('#celsius-max-display').css("color","#808A87")}
    else if (thermostat.minOrMaxTemperature == "max") {
      $('#celsius-min-display').css("color", "#808A87");
      $('#celsius-max-display').css("color","black")}
    else {
      $('#celsius-min-display').css("color","#808A87");
      $('#celsius-max-display').css("color","#808A87")
    };

    if (thermostat.powerSavingMode === true) {
      $('#powersavingmode-display').css("color","black")}
    else {
      $('#powersavingmode-display').css("color","#808A87");
    };
  };

})
