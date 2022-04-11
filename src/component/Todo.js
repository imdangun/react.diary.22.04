import {ListItem, ListItemText, InputBase, Checkbox} from '@material-ui/core'

function Todo({item}) {
    /*
    return (
        <div> 
            <input type='checkbox' id={item.todoId} checked={item.done}/>
            <label htmlFor={item.todoId}>{item.title}</label>
        </div>
    )
    */
   return (
       <ListItem>
           <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    type='text'
                    id={item.todoId + ''}
                    value={item.title}                   
                    fullWidth={true}/>
            </ListItemText>
       </ListItem>
   )
}

export default Todo

/*
{
    item : {
        todoId: 1,
        title: '자바 공부',
        done: true
    }
}
*/