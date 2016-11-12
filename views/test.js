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
    alert("Auth failed")
}

function authenticationSuccess() {
    console.log("authed")
}

function getBoards() {
    var bid = '4jIhcQXG';
    var test = [{
        "id": "57ed09e2bcc0accfbd0f55a8",
        "name": "Shopping",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 32767.5,
        "subscribed": false
    }, {
        "id": "57ed09f01ef1a3fd2f0af865",
        "name": "Meal planning",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 49151.25,
        "subscribed": false
    }, {
        "id": "57ed0af1f8b2a235ffab9c10",
        "name": "Chores",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 114687.25,
        "subscribed": false
    }, {
        "id": "57ed0b6aee490caf79985947",
        "name": "Sleep",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 180223.25,
        "subscribed": false
    }];
    var success = function(successMsg) {
        console.log(JSON.stringify(successMsg));
    };

    var error = function(errorMsg) {
        alert(errorMsg);
    };

    Trello.get('/boards/4jIhcQXG/cards', success, error);
}

function getList(lid) {

    var test = [{
        "id": "57ed0a03672b2b1ea735704f",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-31T13:45:48.059Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09e2bcc0accfbd0f55a8",
        "idMembersVoted": [],
        "idShort": 1,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Groceries",
        "pos": 65535,
        "shortLink": "m5CU7gqw",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": ["58174b0d92276ba357f3eff8"],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/m5CU7gqw",
        "subscribed": false,
        "url": "https://trello.com/c/m5CU7gqw/1-groceries"
    }, {
        "id": "57ed0a9de342ed4b095196c6",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-09-29T12:36:28.060Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09e2bcc0accfbd0f55a8",
        "idMembersVoted": [],
        "idShort": 3,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Stuff",
        "pos": 131071,
        "shortLink": "V0fKRwDn",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 1,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": ["57ed0aa5951d83282597cee8"],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/V0fKRwDn",
        "subscribed": false,
        "url": "https://trello.com/c/V0fKRwDn/3-stuff"
    }, {
        "id": "57ed0a746393a3251de6e120",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-09-29T12:35:14.014Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 2,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Lasagna",
        "pos": 65535,
        "shortLink": "XSRn8o2k",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": "2016-09-30T00:00:00.000Z"
        },
        "due": "2016-09-30T00:00:00.000Z",
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/XSRn8o2k",
        "subscribed": false,
        "url": "https://trello.com/c/XSRn8o2k/2-lasagna"
    }, {
        "id": "57ed0b01057a144930a34733",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-09-29T12:37:21.318Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 6,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Pizza",
        "pos": 131071,
        "shortLink": "hgUDv02r",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/hgUDv02r",
        "subscribed": false,
        "url": "https://trello.com/c/hgUDv02r/6-pizza"
    }, {
        "id": "57ed0b047d4ae8ac6ae64ea3",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-09-29T12:37:24.893Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 7,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Pasta",
        "pos": 196607,
        "shortLink": "5FgIMeYY",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/5FgIMeYY",
        "subscribed": false,
        "url": "https://trello.com/c/5FgIMeYY/7-pasta"
    }, {
        "id": "57fab64a3b71dc5013bb10fc",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:30:25.865Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 8,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Southwestern Salad",
        "pos": 262143,
        "shortLink": "izDkd8wl",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/izDkd8wl",
        "subscribed": false,
        "url": "https://trello.com/c/izDkd8wl/8-southwestern-salad"
    }, {
        "id": "57fab65356f55c92e76954d5",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:27:47.266Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 9,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Tortellini Soup",
        "pos": 327679,
        "shortLink": "YdDQvtSh",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/YdDQvtSh",
        "subscribed": false,
        "url": "https://trello.com/c/YdDQvtSh/9-tortellini-soup"
    }, {
        "id": "57fab65d71daab3ecaea05d7",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:27:57.759Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 10,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Chili",
        "pos": 393215,
        "shortLink": "XYTmhx7O",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/XYTmhx7O",
        "subscribed": false,
        "url": "https://trello.com/c/XYTmhx7O/10-chili"
    }, {
        "id": "57fab66bf5bdb288e79dde1a",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:28:11.049Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 11,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Mashed Potatoes & Gravy",
        "pos": 458751,
        "shortLink": "i66uRfX9",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/i66uRfX9",
        "subscribed": false,
        "url": "https://trello.com/c/i66uRfX9/11-mashed-potatoes-gravy"
    }, {
        "id": "57fab6e5dc7d1092cf41b44e",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:30:13.732Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 12,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Fajitas",
        "pos": 524287,
        "shortLink": "psqassmH",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/psqassmH",
        "subscribed": false,
        "url": "https://trello.com/c/psqassmH/12-fajitas"
    }, {
        "id": "57fab6e8056915a5cf36a03c",
        "checkItemStates": null,
        "closed": false,
        "dateLastActivity": "2016-10-09T21:30:16.904Z",
        "desc": "",
        "descData": null,
        "idBoard": "57ed09890cea69d5191974fc",
        "idList": "57ed09f01ef1a3fd2f0af865",
        "idMembersVoted": [],
        "idShort": 13,
        "idAttachmentCover": null,
        "manualCoverAttachment": false,
        "idLabels": [],
        "name": "Pierogis",
        "pos": 589823,
        "shortLink": "K97qud5W",
        "badges": {
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null
        },
        "due": null,
        "idChecklists": [],
        "idMembers": [],
        "labels": [],
        "shortUrl": "https://trello.com/c/K97qud5W",
        "subscribed": false,
        "url": "https://trello.com/c/K97qud5W/13-pierogis"
    }];
    lid = '57ed09890cea69d5191974fc';
    var test = [{
        "id": "57ed09e2bcc0accfbd0f55a8",
        "name": "Shopping",
        "closed": false,
        "idBoard": "",
        "pos": 32767.5,
        "subscribed": false
    }, {
        "id": "57ed09f01ef1a3fd2f0af865",
        "name": "Meal planning",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 49151.25,
        "subscribed": false
    }, {
        "id": "57ed0af1f8b2a235ffab9c10",
        "name": "Chores",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 114687.25,
        "subscribed": false
    }, {
        "id": "57ed0b6aee490caf79985947",
        "name": "Sleep",
        "closed": false,
        "idBoard": "57ed09890cea69d5191974fc",
        "pos": 180223.25,
        "subscribed": false
    }];
    var success = function(successMsg) {
        console.log(JSON.stringify(successMsg));
    };

    var error = function(errorMsg) {
        alert(errorMsg);
    };

    Trello.get('/boards/4jIhcQXG/lists', success, error);
}


function addCard(lid) {
    // Set the destination list for the new card
    var data = document.getElementById('test').value;
    var destinationList = lid;

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
