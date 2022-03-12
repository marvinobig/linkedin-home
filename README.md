# LinkedIn Homepage
The home page of a logged in user on LinkedIn. 

# What I've learned doing this project
1. What do props help us accomplish?

They allow us to dynamically pass data in to custom components without hardcoding said data into the component. This allows the components to be reusable.


2. How do you pass a prop into a component?

You do it the same way you pass in arguments to functions in vanilla js. You enter in a name within the component parenthesis and then when calling an instance of a component, you create values within the component tag like variables. Then within the components, use dot notation to call the name within the parenthesis and after the dot, call the name of the property you passed into the component tag.


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

   No as it doesn't read as javascript but as text. Only info wrapped in curly braces gets read as javascript so in this case, the word true would read as a variable called true instead of a boolean.


4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

You give the prop a name within the component pareanthesis. This would then allow you to access the prop like you would access object properties using dot notation.


5. What data type is `props` when the component receives it?

Props are object data types.

6. What does the `.map()` array method do?

It takes each element of an array, applies a function to it and then returns the altered values in a new array.


7. What do we usually use `.map()` for in React?

We use it to render each element of a .map array into a component 
and render multiple instances of the component.


8. Why is using `.map()` better than just creating the components
   manually by typing them out?

It allows for the dynamic rendering of components to the raect DOM 
without hardcoding everything.