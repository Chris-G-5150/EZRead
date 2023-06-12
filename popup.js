function sendColourScheme() {
    let scheme = document.getElementById('scheme').value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { colourScheme: scheme });
    });
}

document.getElementById("change_colour_scheme").addEventListener("click", sendColourScheme);




