import requests

bot_token = "6504257620:AAH4_RxmRPAWuIlQlpwwFirf6IziGssdKGQ"
url = f"https://api.telegram.org/bot{bot_token}/getUpdates"


const DemoApp = {
        initData: Telegram.WebApp.initData || '',
        initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
        MainButton: Telegram.WebApp.MainButton,

        init(options) {
            document.body.style.visibility = '';
            Telegram.WebApp.ready();
            Telegram.WebApp.MainButton.setParams({
                text: 'CLOSE WEBVIEW',
                is_visible: true
            }).onClick(DemoApp.close);
        },
        close() {
            Telegram.WebApp.close();
        },

        scanQrCode() {

            document.querySelectorAll('button').forEach((btn) => btn.disabled = true);

            response = requests.get(url)
            data = response.json()

            if data.get("ok"):
                updates = data.get("result", [])

                if updates:
                    chatId = updates[-1].chat.id
                    print("Newest update:", chatId)
                else:
                    print("No updates received.")
            else:
                print("Request failed:", data.get("description"))

            Telegram.WebApp.showScanQrPopup({text: 'with any link'}, function (qrCode) {
                // Process the scanned QR code for order
                // For this example, we assume the QR code contains the order ID
                Telegram.WebApp.sendMessage({
                  chat_id: chatId,
                  text: qrCode,
                  token: bot_token,
                });

                DemoApp.close();
                return true;
            });
        }
}
