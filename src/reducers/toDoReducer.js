// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
//
// export default combineReducers({
//   todos
// })



export const toDoReducer = (prevState = [], action)=> {
  // console.log(`prevState`, prevState);
  console.log(action);
  switch (action.type) {
    case "GET_DATA":
      return action.toDoArr;
    case "ADD_TODO":
      return [...prevState, action.toDo];
    case "EDIT_TODO":
      const editedValueArr = prevState.map((el, i, arr)=>{
        return el._id != action.toDo._id ? el : toDo
      });
      return editedValueArr;
    case "DELETE_TODO":
        const deletedValueArr = prevState.filter((el, i, arr)=>{
          return el._id != action._id
        });
        return deletedValueArr;
    default:
      return prevState;
  }
}
