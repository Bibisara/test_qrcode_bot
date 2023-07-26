<script type="application/javascript">

    /*
     * This is a demo code for Telegram WebApp for Bots
     * It contains basic examples of how to use the API
     * Note: all requests to backend are disabled in this demo, you should use your own backend
     */

    const DemoApp = {
        showScanQrPopup: function(linksOnly) {
            Telegram.WebApp.showScanQrPopup({
                text: linksOnly ? 'with any link' : 'for test purposes'
            }, function(text) {
                if (linksOnly) {
                    const lowerText = text.toString().toLowerCase();
                    if (lowerText.substring(0, 7) === 'http://' ||
                        lowerText.substring(0, 8) === 'https://'
                    ) {
                        setTimeout(function() {
                            Telegram.WebApp.openLink(text);
                        }, 50);

                        return true;
                    }
                } else {
                    DemoApp.showAlert(text);

                    return true;
                }
            });
        }
    }
</script>

<script type="application/javascript">
    /*
     * This part of code is used to initialize the demo app and set up the event handlers we need.
     */

    Telegram.WebApp.onEvent('themeChanged', function() {
        document.getElementById('theme_data').innerHTML = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
    });

    if (DemoApp.initDataUnsafe.query_id) {
        document.getElementById('main_btn').style.display = 'block';
    }

    let prevBgColorVal = document.getElementById('bg_color_sel').value;
    const bgColorInput = document.getElementById('bg_color_input');
    const headerColorSel = document.getElementById('header_color_sel');

    bgColorInput.value = Telegram.WebApp.backgroundColor;
    document.body.setAttribute('style', '--bg-color:' + Telegram.WebApp.backgroundColor);
    headerColorSel.value = 'secondary_bg_color';
    headerColorSel.addEventListener('change', function(e) {
        const colorKey = e.target.value;
        document.getElementById('top_sect').classList.toggle('second', colorKey === 'secondary_bg_color');
        Telegram.WebApp.setHeaderColor(colorKey);
        document.body.setAttribute('style', '--bg-color:' + Telegram.WebApp.backgroundColor);
    });


    Telegram.WebApp.onEvent('themeChanged', function() {
        bgColorInput.value = Telegram.WebApp.backgroundColor;
        document.body.setAttribute('style', '--bg-color:' + Telegram.WebApp.backgroundColor);
    });

</script>