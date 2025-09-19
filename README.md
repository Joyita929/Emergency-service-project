# PH, Batch-12, Assignment 5 - README.md (Questions and Answers)

## Question 1: What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Answer 1:**

- **`getElementById`**: Finds an element using its `id`. Since IDs are unique, it returns a single element.  
- **`getElementsByClassName`**: Finds elements by their class name. Multiple elements can have the same class, so it returns an **HTMLCollection** of elements.  
- **`querySelector`**: Finds the **first** element that matches a CSS selector (id, class, tag, or attribute). Returns `null` if nothing is found.  
- **`querySelectorAll`**: Finds **all** elements that match a given CSS selector. Returns a **NodeList** of elements.  

---

## Question 2: How do you create and insert a new element into the DOM?

**Answer 2:**

You can create a new element using `document.createElement('tagName')` and insert it into the DOM using `appendChild()`.

**Example:**

```javascript
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
