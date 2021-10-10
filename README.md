# CV Project | The Odin Project

This is the repo for the CV project in the javascript course of The Odin Project.

## Things I Learned

### More Practice With React

### Some Clarity Using Props And State

### Binding `this`

In previous teachings of React, I never really understood why it was important to bind `this`.  When I did freeCodeCamp and got exposed to React for the first time, there really wasn't much of an explanation as to why `this` needed to be binded.  I think back and am unsure how I even made it past the challenges at all.  In my few instances working with React afterwards, there really wasn't an emphasis of binding `this` if at all.  I guess I didn't need it.

In the lesson before this project, there was a brief section talking about binding `this` in the context of React.  It turns out it actually isn't a problem with React which I, like most people, initially assumed.  I'm still a little fuzzy, but if I undertood the [article in reference](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/) correctly it's a matter of context.  In the case of class components in React, 'this' is tied to its default binding of the window, or global, context.  When methods or variables get invoked or referenced, the component doesn't know to stay in its context and looks at the top context level.  If these methods or variables are explicitly bound to `this`, the component will correctly reference its own object context.

I think I understood binding `this` more effectively while working on the project.  I encountered errors from React that would say it was unable to reference from `undefined`.  I must have learned something because I was quick to figure out that I was missing some bindings to variables and methods.