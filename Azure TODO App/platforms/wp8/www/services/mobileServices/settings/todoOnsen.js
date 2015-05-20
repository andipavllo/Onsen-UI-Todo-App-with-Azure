// http://go.microsoft.com/fwlink/?LinkID=290993&clcid=0x409
var todoOnsenClient;
document.addEventListener("deviceready", function () {
    todoOnsenClient = new WindowsAzure.MobileServiceClient(
                    "https://todoonsenui.azure-mobile.net/",
                    "JXvzpDZdhmttAJHHzYBVxJoCNCXhQe85");
});
