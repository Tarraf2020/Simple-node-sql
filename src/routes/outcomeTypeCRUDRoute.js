import app from '../app'
const connection = require('../connection/DBConnection');
let outcomeTypeCRUD = () => {

    /*
function and route for get all the outcomeTypes
*/
    let getoutcomeTypes = () => {
        app.get('/outcomeTypes', async (req, res) => {

            connection.con.query('select * from outcomeType', (err, result) => {
                try {
                    if (result.length > 0) {
                        res.status(200).json({ success: true, result: result });
                    } else {
                        res.status(404).json({ success: false });
                    }

                } catch (e) {
                    res.status(500).json({ success: false });

                }
            })
        });
    }

    /*
    function and route for get the outcomeType by id
    */
    let getoutcomeType = () => {
        app.get('/outcomeType/:id', async (req, res) => {
            let id = req.params.id
            connection.con.query('select * from outcomeType where id=' + id, (err, result) => {
                try {
                    if (result.length > 0) {
                        res.json({ success: true, result: result });
                    } else {
                        res.json({ success: false });
                    }

                } catch (e) {
                    res.json({ success: false });

                } 
            })
        });
    }

    /*
    function and route for create outcomeType
    */
    let createoutcomeType = () => {
        app.post('/outcomeType', async (req, res) => {
            //   let outcomeTypeDetails={'name':'omar','email':'omar@gail.com','password':'1212'};

            var createoutcomeType = {
                'name': req.body.name,
                'price': req.body.price
            }

            var sql = "INSERT INTO outcomeType SET ?";
            try {
                connection.con.query(sql, createoutcomeType, (err, result) => {
                    res.json(result);
                });
            } catch (e) {
                res.send('error')
            }
        })



    }

    /*
    function and route for update outcomeType
    */

    let updateoutcomeType = () => {
        app.put('/outcomeType/:id', async (req, res) => {

            let id = req.params.id;
            var sql = "update outcomeType SET ? where id=?";
            var arr = req.body;
            try {
                connection.con.query(sql, [arr, id], (err, result) => {
                    res.json(result);
                });
            } catch (e) {
                res.send('error')
            }
        })

    }
    /*
  function and route for deleting the outcomeType by id
  */

    let deleteoutcomeType = () => {
        app.delete('/outcomeType/:id', async (req, res) => {
            let id = req.params.id;
            connection.con.query('delete from outcomeType where id=' + id, (err, result) => {
                try {
                    res.json({ success: true, result: result });
                } catch (e) {
                    res.json({ success: false });

                }
            })
        });
    }
    /*
    we must call every function we created in above
    */
   
    getoutcomeTypes();
    getoutcomeType();
    createoutcomeType();
    updateoutcomeType();
    deleteoutcomeType();
}

module.exports = { outcomeTypeCRUD };

