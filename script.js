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

    // Create QR code with rounded edges and corner squares
    const qrCode = new QRCodeStyling({
        width: 250,
        height: 250,
        data: url,
        dotsOptions: {
            color: color,
            type: "rounded" // Rounded dots
        },
        cornersSquareOptions: {
            color: color,
            type: "rounded" // Rounded corner squares
        },
        cornersDotOptions: {
            color: color,
            type: "dot" // Rounded center dot inside corners
        },
        backgroundOptions: {
            color: "#ffffff"
        }
    });

    // Append QR code to div
    qrCode.append(document.getElementById("qrcode"));

    // Add delay to generate download link
    setTimeout(function () {
        qrCode.getRawData("png").then(function (blob) {
            var qrImageUrl = URL.createObjectURL(blob);
            var downloadBtn = document.getElementById("downloadBtn");
            downloadBtn.href = qrImageUrl;
            downloadBtn.style.display = "inline-block";
        });
    }, 500);
}
