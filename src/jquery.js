$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#temperature-display').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat._up();
    $('#temperature-display').text(thermostat.temperature);
    if (thermostat.max_temperature === true) {
      $('#celsius-max-display').css("color","black");
    } else {
      $('#celsius-max-display').css("color","#808A87");
    };
  });

  $('#temperature-down').on('click', function() {
    thermostat._down();
    $('#temperature-display').text(thermostat.temperature);
    if (thermostat.min_temperature === true) {
      $('#celsius-min-display').css("color","black");
    } else {
      $('#celsius-min-display').css("color","#808A87");
    };
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
    };
  });
});
