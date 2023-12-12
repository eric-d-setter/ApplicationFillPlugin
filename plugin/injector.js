const workdayMappings = {
    firstName: "legalNameSection_firstName",
    lastName: "legalNameSection_lastName",
    address1: "addressSection_addressLine1",
    city: "addressSection_city",
};

var inputevent = new Event('input', {
    bubbles: true,
    cancelable: true,
});

function changevalue(element, stringval) {
    element.value = stringval;
    element.dispatchEvent(inputevent);
}

var clickevent = new Event('dblclick');

var changeevent = new Event('change');

data.split(',').forEach(function(field) {
    const keyVal = field.split(':');
    //fillField(document.querySelector('input[data-automation-id=' + CSS.escape(workdayMappings[keyVal[0]]) + ']'), keyVal[1]);
    setReactInputValue('input[data-automation-id=' + CSS.escape(workdayMappings[keyVal[0]]) + ']', keyVal[1]);
});
document.ev

function fillField(selector, value) {
    var field = selector();
    fillField(field, value);
}

function fillField(field, value) {
    if (field) {
        field.dispatchEvent(new Event('focus'));
        field.value = value;
        field.dispatchEvent(new Event('input', {
            bubbles: true,
            cancelable: true,
        }));
        field.value = value;
        field.dispatchEvent(new Event('blur'));
    }  
}

function setReactInputValue(query, elevalue) {
    var ele = document.querySelector(query);
    if (ele) {
        console.log("Before Value: " + ele.value);
        changevalue(ele, elevalue)
        ele.dispatchEvent(new Event('blur'));
        console.log("After Value: " + ele.value);
    }
}