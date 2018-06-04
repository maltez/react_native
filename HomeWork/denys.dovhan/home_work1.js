// 1 Add private property

const User = (function() {
    const userIdSymbol = Symbol('user_id');

    function _User(name, id) {
        this.name = name;
        this[userIdSymbol] = id;
    }

    _User.prototype.getId = function() {
        return this[userIdSymbol];
    }

    return _User;
})();

const user = new User("Roger", 5);
console.log(`User ${user.name} has id=${user.getId()}`); // User Roger has id=5
