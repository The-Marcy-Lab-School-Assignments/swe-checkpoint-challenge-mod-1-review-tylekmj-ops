# Short Responses

For this assessment, aim to write a response with the following qualities:
- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

Letter is always `undefined` in the **function** because we're assigning the **variable** letter inside of the **if statement** blocks. 

**Part B:**

To fix it just remove all of the `let` keywords from all the letters inside the if statements.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

75 will be returned to the console since assigning `newSettings` to `originalSettings` will make both **variables** **reference** the same **object** so mutating a **property** like `volume` in one of the variables will mutate both.

**Part B:**
Instead of assigning `newSettings` to `originalSettings` I would just assign `newSettings` to a copy of `originalSettings` using the **spread operator**(...) so that those 2 variables aren't referencing the same **values**


**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = {...originalSettings};
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:
```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock
});
```

Walk through what happens in the first iteration of filter:
- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3
On the first **iteration** of `products.filter`, `product` will represent the first object with the name property `laptop`, because the **filter** **method** is checking for products in stock. Its going to check if that laptop inStock **property** is true and **return** it if it is and its going to be stored in an array that the `itemsInStock` variable has. Then its going to repeat that process with all of its other iterations then by the end of it the itemsInStock variable will just be an array with only the objects with the inStock property set to true.

