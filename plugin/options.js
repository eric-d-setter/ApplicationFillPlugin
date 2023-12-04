$(function(){
// Display current information
    chrome.storage.sync.get(['example'], function(store){
        $('#example').val(store.example);
    })

// Save functionality
    $('#save').click(function() {
        var example = $('#example').val();
        if (example) {
            chrome.storage.sync.set({'example': example}, function() {
                close();
            })
        }

    });

});