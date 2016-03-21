/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var andrew: ToDoList.IPerson = {
    name: "Andrew WK",
    email: "atelleria@gmail.com"
  }

  var dustin: ToDoList.IPerson = {
    name: "Dustin D",
    email: "hiitsdustindavis@gmail.com"
  }

  var grandma: ToDoList.IPerson = {
    name: "Grandma",
    email: "grandma@geocities.com"
  }

  export var people = {
    "andrew": andrew,
    "dustin": dustin,
    "grandma": grandma
  };
}
