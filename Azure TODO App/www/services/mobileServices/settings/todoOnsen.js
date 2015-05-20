// http://go.microsoft.com/fwlink/?LinkID=290993&clcid=0x409

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/)) {
    document.addEventListener("deviceready", function () {
        todoOnsenClient = new WindowsAzure.MobileServiceClient(
                    "https://todoonsenui.azure-mobile.net/",
                    "JXvzpDZdhmttAJHHzYBVxJoCNCXhQe85");
    });
} else {
    todoOnsenClient = new WindowsAzure.MobileServiceClient(
                    "https://todoonsenui.azure-mobile.net/",
                    "JXvzpDZdhmttAJHHzYBVxJoCNCXhQe85");
};