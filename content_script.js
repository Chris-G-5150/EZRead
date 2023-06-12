chrome.runtime.onMessage.addListener((request) => {
    if (request.colourScheme) {
        applyColourScheme(request.colourScheme);
    }
});

function applyColourScheme(scheme) {
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        if (scheme == "Black & White") {
            paragraphs[i].style.color = '#000000';
            paragraphs[i].style.backgroundColor = '#FFFFFF';
            paragraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Blue & White") {
            paragraphs[i].style.color = '#000000';
            paragraphs[i].style.backgroundColor = '#FFFFE5';
            paragraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Dark Brown & Light Green") {
            paragraphs[i].style.color = '#1E1E00';
            paragraphs[i].style.backgroundColor = '#B9B900';
            paragraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Brown & Dark Green") {
            paragraphs[i].style.color = '#282800';
            paragraphs[i].style.backgroundColor = '#A0A000';
            paragraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Blue & Yellow") {
            paragraphs[i].style.color = '#00007D';
            paragraphs[i].style.backgroundColor = '#FFFF00';
            pparagraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Off Black & Off White") {
            paragraphs[i].style.color = '#0A0A0A';
            paragraphs[i].style.backgroundColor = '#FFFFE5';
            paragraphs[i].style.fontFamily = "Arial";
        }

        else if (scheme == "Black & Yellow") {
            paragraphs[i].style.color = '#000000';
            paragraphs[i].style.backgroundColor = '#FFFF00';
            paragraphs[i].style.fontFamily = "Arial";
        }



    }
}