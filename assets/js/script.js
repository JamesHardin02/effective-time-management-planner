schedule = {};

var createTask = function(taskText, taskList) {
    $("#" + taskList).each(function(index, child){
        for(const property in child.children){
            console.log(child.children[property].id)
            if (child.children[property].id === "task"){
                console.log("hi")
                child.children[property].textContent = taskText;
                console.log(child.children)
            }
        }
    });
};

var loadTasks = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    console.log(schedule)
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!schedule) {
        schedule = {
            nineAm: {},
            tenAm: {},
            elevenAm: {},
            twelveAm: {},
            onePm: {},
            twoPm: {},
            threePm: {},
            fourPm: {},
            fivePm: {}
    };
    }

    // loop over object properties
    $.each(schedule, function(list, object) {
        console.log(list, object);
        // then loop over sub-array
        for(const property in object){
            console.log(object[property])
            createTask(object[property], list);
        }
    });
};

function saveTasks(){
    // localStorage.schedule = Object.values(schedule).map(x=>x.text).join(',')
    console.log(schedule)
    localStorage.setItem("schedule", JSON.stringify(schedule));
};


$("#hour-schedule").on('click', "#task", function(){
    var text = $(this).text().trim();
    var textInput = $("<textarea>")
    .addClass("form-control col 6")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$("#hour-schedule").on("blur", "textarea", function(){
    // get the textarea's current value/text
    var text = $(this).val().trim();
    console.log(text)

    // get the parent ul's id attribute
    var status = $(this)
        .closest(".li")
        .attr("id");
    console.log(status)
    console.log(schedule)
    // update schedule object and save to local storage
    schedule[status].text = text;
    saveTasks(); 
    // convert textarea back to p
    var taskP = $("<p>").addClass("col 6").text(text);
    taskP.attr("id", "task")

    // replace textarea with p element
    $(this).replaceWith(taskP);
});

loadTasks();