var today = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today)

var container = $(".container")

var arrTime = ["9am", "10am", "11am",];

for (i = 0; i < arrTime.length; i++) {
    var newRow = $("<div>").attr("class", "row")
    var newDiv = $("<div>").attr("class", "col-2")
    var newP = $("<p>").text(arrTime[i])

    newDiv.append(newP)
    var newTextA = $("<textarea>").attr("class", "col-8 past").attr("rows", "4")
    var newBtn = $("<button>").attr("class", "col-2 saveBtn").text("Save")

    newRow.append(newDiv)
    newRow.append(newTextA)
    newRow.append(newBtn)

    container.append(newRow)
}

var arrTime = ["12pm"];

for (i = 0; i < arrTime.length; i++) {
    var newRow = $("<div>").attr("class", "row")
    var newDiv = $("<div>").attr("class", "col-2")
    var newP = $("<p>").text(arrTime[i])

    newDiv.append(newP)
    var newTextA = $("<textarea>").attr("class", "col-8 present").attr("rows", "4")
    var newBtn = $("<button>").attr("class", "col-2 saveBtn").text("Save")

    newRow.append(newDiv)
    newRow.append(newTextA)
    newRow.append(newBtn)

    container.append(newRow)
}

var arrTime = ["1pm", "2pm", "3pm", "4pm", "5pm"];

for (i = 0; i < arrTime.length; i++) {
    var newRow = $("<div>").attr("class", "row")
    var newDiv = $("<div>").attr("class", "col-2")
    var newP = $("<p>").text(arrTime[i])

    newDiv.append(newP)
    var newTextA = $("<textarea>").attr("class", "col-8 future").attr("rows", "4")
    var newBtn = $("<button>").attr("class", "col-2 saveBtn").text("Save")

    newRow.append(newDiv)
    newRow.append(newTextA)
    newRow.append(newBtn)

    container.append(newRow)
}

// var = document.querySelector("#");
// var = localStorage.getItem("");
// .val = ;
    

// if () {

//         localStorage.setItem("", )
// }