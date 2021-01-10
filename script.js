


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
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add event"></textarea>`);

        //make third column 
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

        // adds the column to the row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // puts the row with columns into the container in the html
        $(".container").append(row);

        
    }

    
});