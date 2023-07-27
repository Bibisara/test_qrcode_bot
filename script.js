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

function scanOrderQrCode() {
    Telegram.WebApp.showScanQrPopup({}, function (qrCode) {
        // Process the scanned QR code for order
        // For this example, we assume the QR code contains the order ID
        showOrderInfo(qrCode);
    });
}

function scanProductQrCode() {
    Telegram.WebApp.showScanQrPopup({}, function (qrCode) {
        // Process the scanned QR code for product
        // For this example, we assume the QR code contains the product ID
        selectProduct(qrCode);
    });
}

function showOrderInfo(orderId) {
    document.getElementById("main_btn").style.display = "none";
    document.getElementById("product_btn").style.display = "block";
    document.getElementById("order_info").classList.remove("hidden");
    document.getElementById("order_id").innerText = "Order ID: " + orderId;
}

function selectProduct(productId) {
    document.getElementById("product_selected").innerText = "Selected Product: " + productId;
}

