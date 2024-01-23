// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the 
// list to show that its order has changed.
// List of places
let places = ["Kyoto", "Machu Picchu", "Sydney", "Santorini", "Bora Bora"];

// Printing the original order
console.log("Original order:", places);

// Printing alphabetical order without modifying the original list
console.log("Alphabetical order:", [...places].sort());

// Showing the original order is unchanged
console.log("Original order:", places);

// Printing reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Showing the original order is still unchanged
console.log("Original order:", places);

// Reversing the order of the list
places.reverse();
console.log("Reversed order:", places);

// Reversing the order of the list again to get back to the original order
places.reverse();
console.log("Back to original order:", places);

// Sorting the list in alphabetical order
places.sort();
console.log("Sorted in alphabetical order:", places);

// Sorting the list in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);

