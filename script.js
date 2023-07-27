//function setThemeClass() {
//    document.documentElement.className = Telegram.WebApp.colorScheme;
//}
//Telegram.WebApp.onEvent('themeChanged', setThemeClass);
//setThemeClass();
//
//function scanQrCode() {
//    Telegram.WebApp.showScanQrPopup({
//        text: 'with any link'
//    }, function(text) {
//        // Show alert if the scanned content is not a link
//        Telegram.WebApp.showAlert(text);
//        return true;
//    });
//}

function scanQrCode(button) {
    Telegram.WebApp.showScanQrPopup({qrCode: 'with any link'}, function (qrCode) {
        // Process the scanned QR code for order
        // For this example, we assume the QR code contains the order ID
        if button == "order" {
            showOrderInfo(qrCode);
            Telegram.WebApp.showAlert(text);
            return true;
        } else {
            selectProduct(qrCode);
        }
    });
}

//function scanProductQrCode() {
//    Telegram.WebApp.showScanQrPopup({}, function (qrCode) {
//        // Process the scanned QR code for product
//        // For this example, we assume the QR code contains the product ID
//    });
//}

function showOrderInfo(orderId) {
    document.getElementById("main_btn").style.display = "none";
    document.getElementById("product_btn").style.display = "block";
    document.getElementById("order_info").classList.remove("hidden");
    document.getElementById("order_id").innerText = "Order ID: " + orderId;
    return true;
}

function selectProduct(productId) {
    document.getElementById("product_selected").innerText = "Selected Product: " + productId;
    return true;
}
