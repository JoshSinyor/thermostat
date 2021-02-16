$(document).ready(function() {
  let thermostat = new Thermostat();

  displayRefresh();

  $('#button-up').on('click', function() {
    thermostat._up();
    displayRefresh();
  });

  $('#button-down').on('click', function() {
    thermostat._down();
    displayRefresh();
  });

  $('#button-reset').on('click', function() {
    thermostat._reset();
    displayRefresh();
  });

  $('#button-powersavingmode').on('click', function() {
    thermostat._changePowerSavingMode();
    displayRefresh();
  });

  function displayRefresh() {
    $('#temperature-display').text(thermostat.temperature);

    $('.refresh').css("color","#808A87");

    if (thermostat.currentEnergyUsage === "low") {
      $('#currentenergyusage-low').css("color","black")
    } else if (thermostat.currentEnergyUsage === "medium") {
      $('#currentenergyusage-medium').css("color", "black")
    } else {
      $('#currentenergyusage-high').css("color","black")
    };

    if (thermostat.minOrMaxTemperature === "min") {
      $('#celsius-min').css("color", "black")
    } else if (thermostat.minOrMaxTemperature === "max") {
      $('#celsius-max').css("color", "black")
    };

    if (thermostat.powerSavingMode === true) {
      $('#powersavingmode').css("color","black")
    };
  };

})
