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

     const handle = await window.showSaveFilePicker(options);
     const writable = await handle.createWritable();

     await writable.write(contents);
     await writable.close();

     return handle;
    };
});