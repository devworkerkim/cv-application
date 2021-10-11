# CV Application | The Odin Project

This is the repo for the CV Application project in the javascript course of The Odin Project.

## Things I Learned

### Working With Classes In React

I generally like to work with functions, and the examples in the documentation using function components made a whole lot of sense to me.  But in order to take advantage of lifecycle methods the components need to be written in classes.  This changed, of course, when React Hooks was released, but I haven't reached that part of the curriculum yet.  I could have written function components, but I decided to take it upon myself to get comfortable writing in classes.  Using constructors for props and state is still a bit confusing to me, but I found the more I was coding it out the more comfortable I felt.

### Binding `this`

In previous teachings of React, I never really understood why it was important to bind `this`.  When I did freeCodeCamp and got exposed to React for the first time, there really wasn't much of an explanation as to why `this` needed to be binded.  I think back and am unsure how I even made it past the challenges at all.  In my few instances working with React afterwards, there really wasn't an emphasis of binding `this` if at all.  I guess I didn't need it.

In the lesson before this project, there was a brief section talking about binding `this` in the context of React.  It turns out it actually isn't a problem with React which I, like most people, initially assumed.  I'm still a little fuzzy, but if I undertood the [article in reference](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/) correctly it's a matter of context.  In the case of class components in React, 'this' is tied to its default binding of the window, or global, context.  When methods or variables get invoked or referenced, the component doesn't know to stay in its context and looks at the top context level.  If these methods or variables are explicitly bound to `this`, the component will correctly reference its own object context.

I think I understood binding `this` more effectively while working on the project.  I encountered errors from React that would say it was unable to reference from `undefined`.  I must have learned something because I was quick to figure out that I was missing some bindings to variables and methods.

### Convert Class Components To Function Components

And I thought I enjoyed working with functions more to only find out I got so used to class components I was taken back by the function component syntax.  I found this article on [How To Convert React Class Components to Functional Components with React Hooks](https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks) and looked at the examples given to convert my class components to function components.  Having gone through the lesson on React Hooks, I got practice implementing `useState` and converting to function components.  This was the only hook I used, but I imagine I'll probably have the opportunity in some future projects to use the others.

I was able to see what the different parts that needed to be converted so I could move from classes to functions.  The constructor functions in my class components were not needed as was the render function syntax, and I assigned my method names to arrow functions.  Because my data was in an array, I had to create an array copy to modify on and then set the state to the data array copy.  State can be referenced using the assigned variable in the `useState` destructuring, but it cannot be directly modified.