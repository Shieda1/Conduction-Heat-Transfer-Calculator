// https://calculator.swiftutors.com/conduction-heat-transfer-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const conductionHeatTransferRadio = document.getElementById('conductionHeatTransferRadio');
const materialsThermalConductivityRadio = document.getElementById('materialsThermalConductivityRadio');
const crossSectionalAreaRadio = document.getElementById('crossSectionalAreaRadio');
const higherTemperatureRadio = document.getElementById('higherTemperatureRadio');
const colderTemperatureRadio = document.getElementById('colderTemperatureRadio');
const materialThicknessRadio = document.getElementById('materialThicknessRadio');

let conductionHeatTransfer;
let materialsThermalConductivity = v1;
let crossSectionalArea = v2;
let higherTemperature = v3;
let colderTemperature = v4;
let materialThickness = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

conductionHeatTransferRadio.addEventListener('click', function() {
  variable1.textContent = '(k) Material\'s Thermal Conductivity (W/mK)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  variable5.textContent = '(d) Material Thickness (m)';
  materialsThermalConductivity = v1;
  crossSectionalArea = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  materialThickness = v5;
  result.textContent = '';
});

materialsThermalConductivityRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Conduction Heat Transfer (W)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  variable5.textContent = '(d) Material Thickness (m)';
  conductionHeatTransfer = v1;
  crossSectionalArea = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  materialThickness = v5;
  result.textContent = '';
});

crossSectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Conduction Heat Transfer (W)';
  variable2.textContent = '(k) Material\'s Thermal Conductivity (W/mK)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  variable5.textContent = '(d) Material Thickness (m)';
  conductionHeatTransfer = v1;
  materialsThermalConductivity = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  materialThickness = v5;
  result.textContent = '';
});

higherTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Conduction Heat Transfer (W)';
  variable2.textContent = '(k) Material\'s Thermal Conductivity (W/mK)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  variable5.textContent = '(d) Material Thickness (m)';
  conductionHeatTransfer = v1;
  materialsThermalConductivity = v2;
  crossSectionalArea = v3;
  colderTemperature = v4;
  materialThickness = v5;
  result.textContent = '';
});

colderTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Conduction Heat Transfer (W)';
  variable2.textContent = '(k) Material\'s Thermal Conductivity (W/mK)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  variable4.textContent = '(THot) Higher Temperature (°C)';
  variable5.textContent = '(d) Material Thickness (m)';
  conductionHeatTransfer = v1;
  materialsThermalConductivity = v2;
  crossSectionalArea = v3;
  higherTemperature = v4;
  materialThickness = v5;
  result.textContent = '';
});

materialThicknessRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Conduction Heat Transfer (W)';
  variable2.textContent = '(k) Material\'s Thermal Conductivity (W/mK)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  variable4.textContent = '(THot) Higher Temperature (°C)';
  variable5.textContent = '(TCold) Colder Temperature (°C)';
  conductionHeatTransfer = v1;
  materialsThermalConductivity = v2;
  crossSectionalArea = v3;
  higherTemperature = v4;
  colderTemperature = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(conductionHeatTransferRadio.checked)
    result.textContent = `Conduction Heat Transfer = ${computeConductionHeatTransfer().toFixed(2)} W`;

  else if(materialsThermalConductivityRadio.checked)
    result.textContent = `Material's Thermal Conductivity = ${computeMaterialsThermalConductivity().toFixed(2)} W/mK`;

  else if(crossSectionalAreaRadio.checked)
    result.textContent = `Cross Sectional Area = ${computeCrossSectionalArea().toFixed(2)} m²`;

  else if(higherTemperatureRadio.checked)
    result.textContent = `Higher Temperature = ${computeHigherTemperature().toFixed(2)} °C`;

  else if(colderTemperatureRadio.checked)
    result.textContent = `Colder Temperature = ${computeColderTemperature().toFixed(2)} °C`;

  else if(materialThicknessRadio.checked)
    result.textContent = `Material Thickness = ${computeMaterialThickness().toFixed(2)} m`;
})

// calculation

function computeConductionHeatTransfer() {
  return (Number(materialsThermalConductivity.value) * Number(crossSectionalArea.value) * (Number(higherTemperature.value) - Number(colderTemperature.value))) / Number(materialThickness.value);
}

function computeMaterialsThermalConductivity() {
  return (Number(conductionHeatTransfer.value) * Number(materialThickness.value)) / (Number(crossSectionalArea.value) * (Number(higherTemperature.value) - Number(colderTemperature.value)));
}

function computeCrossSectionalArea() {
  return (Number(conductionHeatTransfer.value) * Number(materialThickness.value)) / (Number(materialsThermalConductivity.value) * (Number(higherTemperature.value) - Number(colderTemperature.value)));
}

function computeHigherTemperature() {
  return ((Number(conductionHeatTransfer.value) * Number(materialThickness.value)) + (Number(crossSectionalArea.value) * Number(colderTemperature.value))) / (Number(materialsThermalConductivity.value) * Number(crossSectionalArea.value));
}

function computeColderTemperature() {
  return (Number(materialsThermalConductivity.value) * Number(crossSectionalArea.value) * Number(higherTemperature.value) - (Number(conductionHeatTransfer.value) * Number(materialThickness.value))) / Number(crossSectionalArea.value);
}

function computeMaterialThickness() {
  return (Number(materialsThermalConductivity.value) * Number(crossSectionalArea.value) * (Number(higherTemperature.value) - Number(colderTemperature.value))) / Number(conductionHeatTransfer.value);
}