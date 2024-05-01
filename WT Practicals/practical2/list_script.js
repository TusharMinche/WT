document.addEventListener('DOMContentLoaded', function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var userListElement = document.getElementById('userList');
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        userListElement.innerHTML += '<div><strong>Username:</strong> ' + user.username + ', <strong>Email:</strong> ' + user.email + '</div>';
    }
});