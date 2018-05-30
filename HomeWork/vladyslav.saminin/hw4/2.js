const User = (function () {
    class User {
        constructor() {
            this.name = "";
            this.secondName = "";
            this.age = 0;
        }
    }

    return new Proxy(new User(), {
        get(target, prop) {
            if (prop == 'name') {
                return target[prop] + " " + target.secondName;
            }

            return target[prop];
        },
        set(target, prop, value) {
            if (prop == 'age' && (!Number.isInteger(value) || value <= 0 || value > 100)) {
                console.log("Age validation is failed.");
                return false;
            }

            if (prop == 'name' && ((!typeof value === 'string') || value.length <= 1 || value.length > 50)) {
                console.log("Name validation is failed.");
                return false;
            }

            target[prop] = value;
            return true;
        }
    })
})

var user = User();
user.name = "Bruce";
user.secondName = "Wayne";
user.age = 20;

user.age = -1;
user.name = "a";

console.log(user.name);
console.log(user.age);