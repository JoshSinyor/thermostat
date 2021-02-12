$(document).ready(function() {
  let thermostat = new Thermostat();

  displayRefresh();

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

    $('#currentenergyusage-low-display').css("color","#808A87");
    $('#currentenergyusage-medium-display').css("color", "#808A87");
    $('#currentenergyusage-high-display').css("color","#808A87");
    $('#celsius-min-display').css("color","#808A87");
    $('#celsius-max-display').css("color","#808A87");
    $('#powersavingmode-display').css("color","#808A87");

    if (thermostat.currentEnergyUsage === "low") {
      $('#currentenergyusage-low-display').css("color","black")
    } else if (thermostat.currentEnergyUsage === "medium") {
      $('#currentenergyusage-medium-display').css("color", "black")
    } else {
      $('#currentenergyusage-high-display').css("color","black")
    };

    if (thermostat.minOrMaxTemperature === "min") {
      $('#celsius-min-display').css("color", "black")
    } else if (thermostat.minOrMaxTemperature === "max") {
      $('#celsius-max-display').css("color", "black")
    };

    if (thermostat.powerSavingMode === true) {
      $('#powersavingmode-display').css("color","black")
    };

  };

})
