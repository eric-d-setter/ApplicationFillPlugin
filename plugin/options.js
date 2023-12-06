$(function(){

    document.querySelector(".save-file").onclick = async () => {
     const options = {
       types: [
         {
           description: "Test files",
           accept: {
             "text/plain": [".txt"],
           },
         },
       ],
     };

    var contents = "";
    var firstName = $('#firstName').val();
    if (firstName) {
        contents += "firstName:" + firstName + ",";
    }
    var lastName = $('#lastName').val();
    if (lastName) {
        contents += "lastName:" + lastName + ",";
    }
    var address1 = $('#address1').val();
    if (address1) {
        contents += "address1:" + address1 + ",";
    }
    var city = $('#city').val();
    if (city) {
        contents += "city:" + city + ",";
    }

     const handle = await window.showSaveFilePicker(options);
     const writable = await handle.createWritable();

     await writable.write(contents);
     await writable.close();

     return handle;
    };
});