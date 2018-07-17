
const getToDosSuccess = data => ({
  type: "GET_DATA",
  toDoArr: data
});

export const getToDos = () => {
  return dispatch => {
    const options = {
      headers: {'Content-Type': 'application/json'}
    };
    const f = fetch('/api/todos', options);
      f.then((res) => {
        return res.json()
      }).then(DataArr=>{
        return dispatch(getToDosSuccess(DataArr));
      }).catch(err => console.log(err))
  }
};


const addTodoSuccess = data => ({
  type: "ADD_TODO",
  toDo: data
});

export const addToDo = payload => {
  console.log('export action addToooooo ', payload );
  return dispatch => {
    const data = {  toDo: payload };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    };
    const f = fetch('/api/todos', options);
      f.then((res) => {
        return res.json()
      }).then(addedData=>{
        return dispatch(addTodoSuccess(addedData));
      }).catch(err => console.log(err))
  }
};


export const editToDo = (payload, _id) => {
  return dispatch => {
    const toDo = payload;
    const data = {toDo, _id: _id };
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }
    const f = fetch(`/api/todos/${_id}`, options);
    f.then((res)=>{
      return res.json();
    }).then((editedData) => {
      return dispatch({type: 'EDIT_TODO', toDo: editedData.toDo});
    })
  }
};

export const deleteToDo = payload_id => {
    return dispatch => {
      const data = {
        _id: payload_id
      };
      const options = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      }
      const f = fetch(`/api/todos/${payload_id}`, options);
      f.then((res)=>{
        return res.json()
      })
      .then((deletedDataId) => {
          return dispatch({type: 'DELETE_TODO', _id: payload_id});
      }).catch(err => console.log(err))
    }
};
