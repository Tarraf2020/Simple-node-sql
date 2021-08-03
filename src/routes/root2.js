import app from '../app'
let b=()=>{
app.get( '/b', async (req, res) => {
res.send('B');
});

}
module.exports={b};
