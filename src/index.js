import app from './app'

const userCRUD = require('./routes/userCRUDRoute');
const teacherCRUD = require('./routes/teacherCRUDRoute');

userCRUD.userCRUD();

teacherCRUD.teacherCRUD();
/*
fast testing the server in the loading
*/
app.get('/',(req,res)=>res.send('okay'));
app.listen( 8000, () => console.log('server listening on port 8000') )
