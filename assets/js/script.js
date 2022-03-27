schedule = {};

// ------- AUDIT TIME ------- //
var auditTime = function(taskLi){
    var taskId = taskLi.id;
    var m = moment().hour();
    switch (m){
        case 9: 
        if(taskId === "nineAm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
        }
        break;
        case 10: 
        if(taskId === "tenAm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 1){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
            console.log(parent);

        }
        break;
        case 11: 
        if(taskId === "elevenAm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 2){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 12: 
        if(taskId === "twelveAm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 3){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 13: 
        if(taskId === "onePm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 4){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 14: 
        if(taskId === "twoPm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 5){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 15: 
        if(taskId === "threePm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 6){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 16: 
        if(taskId === "fourPm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 7){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case 17: 
        if(taskId === "fivePm"){
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 8){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
        }
        break;
        case w >= 18:
            taskLi.querySelector('#task').classList.remove('futureTime');
            taskLi.querySelector('#task').classList.add('currentTime');
            var parent = document.querySelector("#hour-schedule");
            var childLi = parent.getElementsByTagName('li');
            for(var i = 0; i < childLi.length; i++){
                if (i < 9){
                    childLi[i].querySelector('#task').classList.remove('futureTime');
                    childLi[i].querySelector('#task').classList.add("pastTime");
                }
            };
            break;
    };
};
// ------- END OF AUDIT TIME ------- //

var createTask = function(taskText, taskList) {
    $("#" + taskList).each(function(index, child){
        for(const property in child.children){
            if (child.children[property].id === "task"){
                child.children[property].textContent = taskText;
            }
        }
    });
};

var loadTasks = function() {
    $("#hour-schedule .li").each(function(index, el) {
        console.log(el)
        auditTime(el);
    });
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

setInterval(function () {
    $("#hour-schedule .li").each(function(index, el) {
        console.log(el)
        auditTime(el);
    });
},((1000 * 60) * 30));

