// This is a JavaScript file

angular.module('app', ['onsen'])
.controller('MyController', function ($scope) {
    $scope.items = [];
    $scope.data = {};
    var items = new Array();

    $scope.deleteMemo = function (index) {
        ons.notification.confirm({
            message: 'Are you sure you want to delete this memo?',
            callback: function (idx) {
                switch (idx) {
                    case 0:
                        break;
                    case 1:

                        console.log("item", $scope.items[index]);
                        $scope.todoItemTable.del($scope.items[index]).then(function () {
                            console.log("success", index, $scope.items);
                            $scope.items.splice(index, 1);
                            console.log("ba");
                            
                            ons.notification.alert({
                                message: 'The memo has been deleted'
                            });

                            console.log("babab");
                            $scope.$apply();

                        }, function (err) {
                            console.log("error", err);
                            alert("Error: " + err);
                        });
                        break;
                }
            }
        });
    };

    $scope.toggleCompleted = function (index) {
        $scope.todoItemTable.update({
            id: $scope.items[index].id,
            completed: $scope.items[index].completed
        }).done(function (result) {
            $scope.$apply;
        }, function (err) {
            console.log("Error: " + err);
        });
    };

    ons.ready(function () {
        //Loading data from Azure
        $scope.todoItemTable = todoOnsenClient.getTable("TodoItem");
        var query = $scope.todoItemTable.read().done(function (results) {
            $scope.items = results;
            $scope.$apply();
        }, function (err) {
            alert("Error: " + err);
        })
    });

    $scope.addMemo = function () {
        //Create a memo object
        var memo = {
            title: $scope.data.itemTitle,
            content: $scope.data.itemContent,
            completed: false

        };

        $scope.todoItemTable.insert(memo).then(function (memo) {
            //Add memo into the local memo object array
            $scope.items.push(memo);

            //Clean the input filds
            $scope.data.itemTitle = "";
            $scope.data.itemContent = "";

            //Go back to the main page
            $scope.$apply();
            $scope.myNavigator.popPage();
            
        }, function (err) {
            alert("Error: " + err);
        })
    };
});