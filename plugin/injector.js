const workdayMappings = {
    firstName: "legalNameSection_firstName",
    lastName: "legalNameSection_lastName",
    address1: "addressSection_addressLine1",
    city: "addressSection_city",
};

data.split(',').forEach(function(field) {
    const keyVal = field.split(':');
    fillFields(document.querySelector('input[data-automation-id=' + CSS.escape(workdayMappings[keyVal[0]]) + ']'), keyVal[1]);
    //setReactInputValue('input[data-automation-id=' + CSS.escape(workdayMappings[keyVal[0]]) + ']', keyVal[1]);
});

function fillFields(selector, value) {
    var field = selector;
    field.addEventListener("change", fillField(field, value));
}

function fillField(field, value) {
    if (field) {
        field.focus();
        field.value = value;
        field.dispatchEvent(new Event('input', {
            bubbles: true,
            cancelable: true,
        }));
        field.value = value;
        field.blur();
    }  
}