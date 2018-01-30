// THIS CODE LOGS THE JSON OBJECT TO THE CONSOLE
// Sets xlsm file source as the test file in our GitHub repo
var url = "https://raw.githubusercontent.com/ChaseC99/ICS33-Grade-Viewer/master/gradesTestFile.xlsm";

/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

// Tell request what to do with code once the request loads
req.onload = function(e) {
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, {type:"array"});

    /* DO SOMETHING WITH workbook HERE */
    // The first sheet is the one with the grades
    // This gets its name
    var grades_sheet_name = workbook.SheetNames[0];

    // Get the grades sheet
    var grades_sheet = workbook.Sheets[grades_sheet_name];

    // Convert sheet to JSON and log it to console
    console.log(XLSX.utils.sheet_to_json(grades_sheet, {header:1}));
}

// Send request
req.send();
