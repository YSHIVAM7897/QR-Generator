function generateQR() {
    var url = document.getElementById('urlInput').value;
    var color = document.getElementById('colorPicker').value;

    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    }

    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = "";
    document.getElementById('downloadBtn').style.display = "none";

    // Create QR code with higher resolution and rounded corners
    const qrCode = new QRCodeStyling({
        width: 500, // Increased width for HD clarity
        height: 500, // Increased height for HD clarity
        data: url,
        margin: 5, // Add margin for spacing
        dotsOptions: {
            color: color,
            type: "rounded" // Rounded dots
        },
        cornersSquareOptions: {
            color: color,
            type: "rounded" // Moderately rounded corners
        },
        cornersDotOptions: {
            color: color,
            type: "dot" // Rounded center dots in corners
        },
        backgroundOptions: {
            color: "#ffffff"
        }
    });

    // Append QR code to div
    qrCode.append(document.getElementById("qrcode"));

    // Add delay to generate and download the HD QR code
    setTimeout(function () {
        qrCode.getRawData("png").then(function (blob) {
            var qrImageUrl = URL.createObjectURL(blob);
            var downloadBtn = document.getElementById("downloadBtn");
            downloadBtn.href = qrImageUrl;
            downloadBtn.download = "qr-code-hd.png"; // High-quality file name
            downloadBtn.style.display = "inline-block";
        });
    }, 500);
}
