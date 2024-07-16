function generateBarcode() {
  console.log('generateBarcode function called');
  const value = document.getElementById('barcodeValue').value.trim();
  console.log('Value:', value);
  const format = document.getElementById('barcodeFormat').value;
  console.log('Format:', format);
  const width = parseInt(document.getElementById('barcodeWidth').value);
  console.log('Width:', width);
  const height = parseInt(document.getElementById('barcodeHeight').value);
  console.log('Height:', height);

  if (value === '') {
    alert('Please enter a value for the barcode.');
    return;
  }

  // Validate input based on selected format
  if (!isValidInput(value, format)) {
    alert(`Invalid input (${value}) for selected barcode format (${format}).`);
    return;
  }

  // Clear previous barcode if exists
  document.getElementById('barcodeOutput').innerHTML = '';

  // Generate barcode using JsBarcode library
  JsBarcode("#barcodeOutput", value, {
    format: format,
    width: width,
    height: height
  });
}

function isValidInput(value, format) {
  // Perform input validation based on selected format
  switch (format) {
    case 'upc':
      // Validate UPC-A format (numbers only, length 12)
      return /^\d{12}$/.test(value);
    case 'upce':
      // Validate UPC-E format (numbers only, length 6)
      return /^\d{6}$/.test(value);
    case 'ean8':
      // Validate EAN-8 format (numbers only, length 8)
      return /^\d{8}$/.test(value);
    case 'ean13':
      // Validate EAN-13 format (numbers only, length 13)
      return /^\d{13}$/.test(value);
    case 'code39':
      // Validate Code 39 format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'code93':
      // Validate Code 93 format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'code128':
      // Validate Code 128 format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'itf':
      // Validate ITF format (numbers only, length varies)
      return /^\d+$/.test(value);
    case 'codabar':
      // Validate Codabar format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'msi':
      // Validate MSI Plessey format (numbers only, length varies)
      return /^\d+$/.test(value);
    case 'qrcode':
      // Validate QR Code format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'datamatrix':
      // Validate Data Matrix format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'pdf417':
      // Validate PDF417 format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    case 'aztec':
      // Validate Aztec Code format (alphanumeric and special characters, length varies)
      return /^[A-Za-z0-9\s$%*+\-./]*$/.test(value);
    default:
      return false;
  }
}

function resetForm() {
  document.getElementById('barcodeValue').value = '';
  document.getElementById('barcodeFormat').value = 'upc';
  document.getElementById('barcodeWidth').value = 2;
  document.getElementById('barcodeHeight').value = 100;
  document.getElementById('barcodeOutput').innerHTML = '';
}

function downloadBarcode() {
  const barcodeCanvas = document.getElementById('barcodeOutput').getElementsByTagName('canvas')[0];
  const link = document.createElement('a');
  link.href = barcodeCanvas.toDataURL();
  link.download = 'barcode.png';
  link.click();
}