$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#temperature-display').text(thermostat.temperature);

  $('#temperature-up').on('click', function() {
    thermostat._up();
    $('#temperature-display').text(thermostat.temperature);
  })
})
