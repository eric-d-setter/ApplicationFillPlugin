const workdayMappings = {
    firstName: "legalNameSection_firstName",
};

data.split(',').forEach(function(field) {
    const keyVal = field.split(':');
    fillField(document.querySelector('input[data-automation-id=' + CSS.escape(workdayMappings[keyVal[0]]) + ']'), keyVal[1]);
});

function fillField(selector, value) {
    var field = selector();
    fillField(field, value);
}

function fillField(field, value) {
    if (field) {
        field.value = value;
    }  
}