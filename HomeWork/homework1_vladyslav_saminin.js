class Person {
 symbolName = Symbol("name");

constructor Person(name){
this[symbolName] = name;
}

}