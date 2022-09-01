# json-findbykey

Finds and exports all values of given key from an unknown structured json object, array or array of objects.

从未知结构的json里面获取指定key的所有值

- Recursive lookup
- No aditional dependency
- Small size(4kb)

## Install

```
npm i json-findbykey@latest
```

## Basic Usage

```javascript
const jsonfinder = require("json-findbykey");

// example json object
let sample = [
  { author: { name: "Jack London",avatar: "1.png" }, book: "The Call of the Wild", year: 1903 },
  { author: { name: "Tolstoy",avatar: "2.png" }, book: "War and Peace" },
  { author: { name: "Dostoevsky",avatar: "3.png" }, book: "The Brothers Karamazov" },
  {
    nested: {
      another: [{ author: { name: "M.Kemal Atatürk",avatar: "4.png" }, book: "Nutuk", year: 1927 }]
    }
  }
];

console.log(jsonfinder.All(sample, "author"));
// [{ name: 'Jack London', avatar: '1.png' }, { name: 'Tolstoy', avatar: '2.png' }, { name: 'Dostoevsky', avatar: '3.png' }, { name: 'M.Kemal Atatürk', avatar: '4.png' }]

console.log(jsonfinder.All(sample, "year"));
// [ 1903, 1927 ]
```
