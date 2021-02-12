$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#temperature-display').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat._up();
    $('#temperature-display').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function() {
    thermostat._down();
    $('#temperature-display').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function() {
    thermostat._reset();
    $('#temperature-display').text(thermostat.temperature);
  });

  $('#powersavingmode').on('click', function() {
    thermostat._changePowerSavingMode();
    if (thermostat.powerSavingMode === true) {
      $('#powersavingmode-display').css("color","black");
    } else {
      $('#powersavingmode-display').css("color","#808A87");
    }
  });
});
