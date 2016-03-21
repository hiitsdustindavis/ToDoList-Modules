/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />


var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "Low"));
tasks.push(new ToDoList.HomeTask("Sharpen all the pencils", "Medium"));
tasks.push(new ToDoList.HomeTask("Water garden.", "Extreme"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Whale watching"));
tasks.push(new ToDoList.HobbyTask("Watch bedtime alien videos."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update resume.", "High", people.andrew));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to tech meet up", "Medium", people.dustin));
tasks.push(new ToDoList.WorkTask(tomorrow, "Grab ass", "Medium", people.dustin));
tasks.push(new ToDoList.WorkTask(tomorrow, "More grab ass", "High", people.dustin));
tasks.push(new ToDoList.WorkTask(tomorrow, "Mow grass", "Medium", people.dustin));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean desk", "Low", people.grandma));

// console.log(tasks);
var dustinTasks = ToDoList.describeTasksForPerson(people.dustin, tasks);
console.log("Here are Dustin's tasks: ");
for(var task of dustinTasks) {
  console.log(task);
}

var workTasks = ToDoList.listWorkTasks(tasks);
console.log(workTasks)
var homeTasks = ToDoList.listHomeTasks(tasks);
var hobbyTasks = ToDoList.listHobbyTasks(tasks);

$(document).ready(function() {
  $("#taskList").submit(function(event){
    event.preventDefault();
    var selected = $('select.selected').val();

    tasks.forEach(function(i){
      if(i.constructor.name === selected){
        // $("#workTasks").text("");
        $("#workTasks").append("<li>" + i.constructor.name + "</ul><ul><li>" + i.description + "<ul><li> Priority: " + i.priority "</li></ul></li>")
      }
    });
    // if() {
    //   for (var hobby of hobbyTasks) {
    //     $("#hobbyTasks").append("<li>" + hobby + "</li>");
    //   } else if (WorkTask) {
    //
    //   }
    // }
  });


  // for (var work of workTasks) {
  //   $("#workTasks").append("<li>" + work + "</li>");
  // }
  // for (var home of homeTasks) {
  //   $("#homeTasks").append("<li>" + home + "</li>");
  // }



});
