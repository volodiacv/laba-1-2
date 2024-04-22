function convert() {
  const fromValue = parseFloat(document.getElementById('fromValue').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  const conversionRates = {
      "bytes": {
          "kilobytes": 0.001,
          "megabytes": 0.000001,
          "gigabytes": 0.000000001,
          "terabytes": 0.0000000000001
      },
      "kilobytes": {
          "megabytes": 0.001,
          "gigabytes": 0.000001,
          "terabytes": 0.000000001
      },
      "megabytes": {
          "gigabytes": 0.001,
          "terabytes": 0.000001
      },
      "gigabytes": {
          "terabytes": 0.001
      }
  };

  if (fromUnit === toUnit) {
      document.getElementById('toValue').value = fromValue;
      return;
  }

  const rate = conversionRates[fromUnit][toUnit];
  const toValue = fromValue * rate;
  document.getElementById('toValue').value = toValue.toFixed(8);
}



