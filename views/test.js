Trello.authorize({
    type: 'popup',
    name: 'trello-app',
    scope: {
        read: 'true',
        write: 'true'
    },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
});

function authenticationFailure() {
    alert("fail")
}

function authenticationSuccess() {
    alert("success")
}

function addCard() {
    // Set the destination list for the new card
    var data = document.getElementById('test').value;
    var destinationList = "57a9d56d5a3668dc01b05162";

    var success = function(successMsg) {
        asyncOutput(successMsg);
    };

    var error = function(errorMsg) {
        asyncOutput("error: " + errorMsg);
    };

    var newCard = {
        name: "I just created a new card!",
        desc: data,
        pos: "top",
        due: null,
        idList: destinationList
    };

    Trello.post('/cards/', newCard, success, error);

    function success() {
        alert("worked!")
    }
}
