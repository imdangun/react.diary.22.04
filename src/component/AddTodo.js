import {TextField, Paper, Button, Grid} from '@material-ui/core'

function AddTodo() {
    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={10} md={10} item style={{paddingRight: 16}}>
                    <TextField placeholder='할일을 입력하세요.' fullWidth/>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button color='secondary' variant='outlined' fullWidth>+</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo