// # Below is an object. Follow the directions to update the object

const obj = {
    location: "Liverpool",
    delete_function : function(){},
};

// # Add a key of "practice" with a value of "Objects" to the object.
obj.practice = "Objects";

// # Add a key of "my_name" with a value of your name to the object.
obj.my_name = "Tia";

// # Update the value of "location" to your location.
obj.location = "Austin, TX"

// # delete the key "delete_function" from the object.
delete obj.delete_function;

console.log(`The completed object is now : ${obj}`);

// Displays the content 
console.log(`The completed object is now :`, obj);
console.log(obj);