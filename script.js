

//grabs local storage
function getLocalStorage(key) {

    let value = localStorage.getItem(key);
    //if there is something there in the key
    if (value) {
        $(`#text${key}`).text(value);
    }
}
//what will happen when the page loads
$(document).ready(function () {

    //added in the day of the week, month, and day(could have added exact clock time but it would not have update unless the page was reloading)
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //create for 9-5 since 1 2 3 4 5 is actually 13 14 15 16 17
    for (let i = 9; i < 18; i++) {

        // creates the 9 rows and names them their time 9-17
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // make first column
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + amPmCorrect(i) + '</p>');

        //make second column and make the text id the same as what i is when it is being created
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

        //make third column 
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

        // adds the column to the row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // puts the row with columns into the container in the html
        $(".container").append(row);

        getLocalStorage(i);
    }

    function amPmCorrect(hours) {

        //if more than 11 put pm after
        var ampm = hours >= 12 ? 'pm' : 'am';

        //sets the remainder of being divided by 12 to being the new hour
        hours = hours % 12;

        //if hours equals hours display, if not put 12
        hours = hours ? hours : 12;

        return hours + ampm;
    }



});