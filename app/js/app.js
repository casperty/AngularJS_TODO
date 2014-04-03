    function TodoCtrl($scope) {
        /* default list */
        $scope.todoList = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}
        ];
        /* list used for the archive */ 
        $scope.todoListArchive = [];

        /* add item in the list */ 
        $scope.addTodo = function() {
            /* if the user typed anything in the form, display a message*/
            if(typeof $scope.todoText == 'undefined') {
                alert("You must type something. ;-)");
            }else{
                $scope.todoList.push({text:$scope.todoText, done:false});
                $scope.todoText = '';
            }
        };
        /* Number of tasks, etc*/
        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todoList, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };
        /* Archive */
        $scope.archive = function() {
            var oldTodoList = $scope.todoList;
            /* Erase the whole current list*/
            $scope.todoList = [];
            angular.forEach(oldTodoList, function(todo) {
                /* If the item has not been checked on the calls in the list 
                    Because we've deleted the list before */
                if (!todo.done){
                    $scope.todoList.push(todo);
                }
                else {
                    $scope.todoListArchive.push({text:todo.text, done:todo.done});
                }
            });
        };

        $scope.restore = function() {
            /* Use a while loop because when you've deleted it the second element of the array become the first */
            while($scope.todoListArchive[0]){
                /* scope(from which item we want to remove the elements from the array , how many elements we need to delete) */
                $scope.todoList.push($scope.todoListArchive[0]);
                $scope.todoListArchive.splice(0,1);
            }
            /* unchecks checkboxes */
            for (var i = 0; i < todoList.size; i++) {
                $scope.todoList[i].done="false";
            };

        };
        /* reset list */
        $scope.init=function(){
            $scope.todoList = [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}
            ];
        };
        /*TODO : store the list*/
        $scope.save=function(){
    		//$route.reload();
    		alert("Not implemented yet");
        };
    }