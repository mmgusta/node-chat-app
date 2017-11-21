class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {

        var userToRemove = this.getUser(id);

        if (userToRemove) {
            this.users = this.users.filter((user) => {
                return user.id !== id;
            });
        }

        return userToRemove;
    }
    getUser (id) {
        var userSelected = this.users.filter((user) => {
            return user.id === id;
        })[0];

        return userSelected;
    }
    getUserList (room) {
        var users = this.users.filter((user) => {
            return user.room === room;
        });
        var namesArray = users.map((user) => {
            return user.name;
        });

        return namesArray;
    }
}

module.exports = {Users}

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('gustavo', 30);
// var description = me.getUserDescription();
// console.log(description);