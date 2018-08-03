# To demonstrate HOC concept

Higher Order Components (HOC) are the functions which take components as arguments and returns a new enhanced component.

In this example, we have created a HOC component which enhances the other components with the header in it. So HOC component can act as a container which holds the boilerplate code with certain functionality. `this.props` give them access to props of the called Component which
we can use if we want to render conditionally.

It will be super useful if we are using Redux and want to build a HOC component accessing the redux state properties. 