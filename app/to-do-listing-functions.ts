/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  export var describeTasksForPerson = function(assignee: IPerson, tasksCollection: Task[]): String[] {
    var description: String[] = [];
    for (var task of tasksCollection){
      if(task.assignedTo === assignee) {
        description.push(task.description);
      }
    }
    return description;
  }

  export var listWorkTasks = function (tasksCollection: Task[]): String[] {
    var workTasks: String[] = [];
    for (var task of tasksCollection){
      if(task.constructor === WorkTask) {
        (workTasks.push(task.description));
      }
    }
    return workTasks;
  }

  export var listHomeTasks = function (tasksCollection: Task[]): String[] {
    var homeTasks: String[] = [];
    for (var task of tasksCollection){
      if(task.constructor === HomeTask) {
        (homeTasks.push(task.description));
      }
    }
    return homeTasks;
  }

  export var listHobbyTasks = function (tasksCollection: Task[]): String[] {
    var hobbyTasks: String[] = [];
    for (var task of tasksCollection){
      if(task.constructor === HobbyTask) {
        (hobbyTasks.push(task.description));
      }
    }
    return hobbyTasks;
  }

}
