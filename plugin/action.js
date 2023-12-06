document.getElementById('fillForm').onclick = async () => {
    //grab the text filed value from my tool
    var piFile = await document.getElementById("file-selector").files[0];
    var contents = await piFile.text() ;
    console.log(contents);

    chrome.tabs.executeScript({
        //send the value to be used by our script
        code: `var data = \"${contents}\" ;`
    }, function() {
        //run the script in the file injector.js
        chrome.tabs.executeScript({
            file: 'injector.js'
        });
    });
  };