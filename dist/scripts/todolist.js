var userAnswer = $(".enter-input").val();
var todoList = ['poo','bum'];
var todolist = $('.todolist');



    function renderItems() {      
        todoList.forEach(function(item) {
            todolist.append('<li class="todo-item">' + item + '</li>')
        });
    }

    function removeItems() {
        $('.todo-item').remove();
    }

    renderItems();


    $(".addButton").click(function(event){
        event.preventDefault();        
        var newTodo = $(".enter-input").val();
        todoList.push(newTodo);
        removeItems();
        renderItems();  
    });
