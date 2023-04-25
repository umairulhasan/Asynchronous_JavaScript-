import React from 'react';

export default function LocalVariablePrac() {



// Setting a cookie with JavaScript
document.cookie = "username=John Doe; expires=Thu, 30 Apr 2023 12:00:00 UTC; path=/";

// Getting a cookie with JavaScript
const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('username='))
  .split('=')[1];
console.log(cookieValue); // John Doe



// Setting a variable in Local Storage in React
localStorage.setItem('username', 'John Doe');

// Getting a variable from Local Storage in React
const username = localStorage.getItem('username');
console.log(username); // John Doe



// Setting a variable in Session Storage in JavaScript
sessionStorage.setItem('username', 'John Doe');

// Getting a variable from Session Storage in JavaScript
const username = sessionStorage.getItem('username');
console.log(username); // John Doe


// Creating an IndexedDB database in React
const dbName = 'myDatabase';
const request = indexedDB.open(dbName, 1);
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('users', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

// Adding data to the IndexedDB database in React
const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
const transaction = db.transaction(['users'], 'readwrite');
const objectStore = transaction.objectStore('users');
const request = objectStore.add(user);
request.onsuccess = function(event) {
  console.log('Data added to the database');
};

// Querying data from the IndexedDB database in React
const transaction = db.transaction(['users'], 'readonly');
const objectStore = transaction.objectStore('users');
const index = objectStore.index('name');
const request = index.get('John Doe');
request.onsuccess = function(event) {
  const user = event.target.result;
  console.log(user); // { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
};


  return (
    <div>
      
    </div>
  );
}
