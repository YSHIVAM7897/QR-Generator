function generateQR() {
    var url = document.getElementById('urlInput').value;
    var color = document.getElementById('colorPicker').value;
    
    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    }

    // Clear previous QR code if it exists
    document.getElementById('qrcode').innerHTML = "";
    document.getElementById('downloadBtn').style.display = "none";

    // Generate QR code
    var qrCode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200,
        colorDark: color,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Add delay to ensure the QR code is rendered before download link is created
    setTimeout(function() {
        var qrCanvas = document.querySelector("#qrcode canvas");

        if (qrCanvas) {
            var qrImage = qrCanvas.toDataURL("image/png");
            var downloadBtn = document.getElementById('downloadBtn');
            downloadBtn.href = qrImage;
            downloadBtn.style.display = "inline-block";
        }
    }, 500);
}
