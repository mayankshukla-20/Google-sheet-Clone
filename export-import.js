const fileInput = document.querySelector("input");

fileInput.addEventListener("change", (event) => {
    let file = event.target.files[0];

    let fileReader = new FileReader();


    fileReader.onload = function (e) {
        // this function will be triggered when the file is completely loaded on to the browser
        let extractedData = e.target.result
        console.log(extractedData);
        console.log(JSON.parse(extractedData));
    }
    fileReader.readAsText(file); // reads the data inside the file object

})