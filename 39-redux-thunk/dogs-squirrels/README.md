# Async Redux

- Which library should we import combineReducers from? REDUX
- What does combineReducers allow us to do? combine multiple reducers
- Why is this important? to split em up

- What is connect()? its metaprogramming to set up mapStateToProps and mapDispatchToProps
- Which library should we import connect() from? react-redux
- What functionality does it provide?  its metaprogramming to set up mapStateToProps and mapDispatchToProps

- What argument(s) should mapStateToProps accept? state to map to props
- What arguments(s) should mapDispatchToProps accept? a callback to dispatch to?

- What should mapStateToProps return? something that can be used as props
- What should mapDispatchToProps return? an object that maps action types (like window messages) to function calls

- How do our connect() functions create a single prop object in our component? Good question.

- Why is mapDispatchToProps an important function? To setup the event loop to handle lots of different actions?

- What does .then() return? El promiso.

## Handling Async in Redux

- npm install redux-thunk
- Create your action creators
  - Including your async action creators
- Export your action creators
- Use action creators where necessary
