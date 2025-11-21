// 1. length
const str = "Hello";
console.log(str.length); // 5

// 2. toUpperCase()
console.log("hello".toUpperCase()); // "HELLO"

// 3. trim()
console.log("  hello  ".trim()); // "hello"

// 4. trimStart()
console.log("  hello".trimStart()); // "hello"

// 5. trimEnd()
console.log("hello  ".trimEnd()); // "hello"

// 6. charAt()
console.log("Hello".charAt(1)); // "e"

// 7. charCodeAt()
console.log("Hello".charCodeAt(1)); // 101

// 8. concat()
console.log("Hello".concat(" World")); // "Hello World"

// 9. raw()
console.log(String.raw`Hello\nWorld`); // "Hello\\nWorld"

// 10. codePointAt()
console.log("😀".codePointAt(0)); // 128512

// 11. fromCharCode()
console.log(String.fromCharCode(65)); // "A"

// 12. fromCodePoint()
console.log(String.fromCodePoint(128512)); // "😀"

// 13. big()
console.log("Hello".big()); // "<big>Hello</big>"

// 14. bold()
console.log("Hello".bold()); // "<b>Hello</b>"

// 15. italics()
console.log("Hello".italics()); // "<i>Hello</i>"

// 16. strike()
console.log("Hello".strike()); // "<strike>Hello</strike>"

// 17. small()
console.log("Hello".small()); // "<small>Hello</small>"

// 18. sup()
console.log("2".sup()); // "<sup>2</sup>"

// 19. sub()
console.log("2".sub()); // "<sub>2</sub>"

// 20. link()
console.log("Google".link("https://google.com")); // "<a href='...'>Google</a>"

// 21. fontsize()
console.log("Hello".fontsize(5)); // "<font size='5'>Hello</font>"

// 22. match()
console.log("hello".match(/l/g)); // ["l", "l"]

// 23. matchAll()
const matches = [..."hello".matchAll(/l/g)];
console.log(matches); // Array of match objects

// 24. padStart()
console.log("5".padStart(3, "0")); // "005"

// 25. padEnd()
console.log("5".padEnd(3, "0")); // "500"

// 26. localeCompare()
console.log("a".localeCompare("b")); // -1

// 27. valueOf()
const strObj = new String("hello");
console.log(strObj.valueOf()); // "hello"

// 28. toString()
const num = 123;
console.log(num.toString()); // "123"

// 29. search()
console.log("hello".search(/l/)); // 2

// 30. normalize()
console.log("café".normalize()); // "café"

// 31. toLocaleLowerCase()
console.log("HELLO".toLocaleLowerCase()); // "hello"

// 32. toLocaleUpperCase()
console.log("hello".toLocaleUpperCase()); // "HELLO"