// # Below is a person object, follow the directions to complete the lesson
const person = {
    name: "Lebron",
    age: 35,
    team: "Lakers",
    occupation: "basketball player"
};

// # Get all keys from the object and assign it to the variable
const object_keys = person.keys;

// # Get all values from the object and assign it to the variable
const object_values = person.values;

// # in the variable below, add new key value pairs using the object_values and object_keys variables
const new_object = Object.freeze({
    object_keys, object_values,
});

new_object.fst = object_keys;
new_object.snd = object_values;

console.log(`The complete object is: ${new_object}`);
console.log(new_object);
console.log(Object.keys(new_object));
console.log(Object.values(new_object));