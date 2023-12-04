$(function(){
// Display current information
    chrome.storage.sync.get(['legalNameSection_firstName'], function(store){
        $('#legalNameSection_firstName').val(store.legalNameSection_firstName);
    })

// Save functionality
    $('#save').click(function() {
        var firstName = $('#legalNameSection_firstName').val();
        if (firstName) {
            chrome.storage.sync.set({'legalNameSection_firstName': firstName}, function() {
                close();
            })
        }

    });

});