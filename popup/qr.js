
chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    new QRCode("qrcode", tabs[0].url);
}).catch((e) => {
    console.log(e)
})