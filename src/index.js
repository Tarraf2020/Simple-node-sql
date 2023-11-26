import app from './app'

const incomeCRUD = require('./routes/incomeCRUDRoute');
const outcomeTypeCRUD = require('./routes/outcomeTypeCRUDRoute');
const paymentMethodCRUD = require('./routes/paymentMethodCRUDRoute');




incomeCRUD.incomeCRUD();
outcomeTypeCRUD.outcomeTypeCRUD();
paymentMethodCRUD.paymentMethodCRUD();

/*
fast testing the server in the loading
*/
app.get('/',(req,res)=>res.send('okay'));
app.listen( 8000, () => console.log('server listening on port 8000') )
