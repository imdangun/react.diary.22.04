import {ListItem, ListItemText, InputBase, Checkbox, IconButton} from '@material-ui/core'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

function Todo({item, delTodo}) {
    const onClick = () => delTodo(item.todoId)

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
            <IconButton onClick={onClick}>
                <DeleteOutlined/>
            </IconButton>
       </ListItem>
   )
}

export default Todo