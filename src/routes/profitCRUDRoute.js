import app from '../app'
const connection = require('../connection/DBConnection');
let injuredSideCRUD = () => {

    /*
function and route for get all the InjuredSide
*/
    let getInjuredSides = () => {
        app.get('/injuredside', async (req, res) => {

            connection.con.query('select * from injuredSide', (err, result) => {
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
    function and route for get the injuredSide by id
    */
    let getInjuredSide = () => {
        app.get('/injuredside/:id', async (req, res) => {
            let id = req.params.id
            connection.con.query('select * from injuredSide where id=' + id, (err, result) => {
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
    function and route for create injuredSide
    */
    let createInjuredSide = () => {
        app.post('/injuredside', async (req, res) => {

            var createinjuredSide = {
                'name': req.body.name
            }

            var sql = "INSERT INTO injuredSide SET ?";
            try {
                connection.con.query(sql, createinjuredSide, (err, result) => {
                    res.json(result);
                });
            } catch (e) {
                res.send('error')
            }
        })



    }

    /*
    function and route for update injuredSide
    */

    let updateInjuredSide = () => {
        app.put('/injuredside/:id', async (req, res) => {

            let id = req.params.id;
            var sql = "update injuredSide SET ? where id=?";
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
  function and route for deleting the injuredSide by id
  */

    let deleteInjuredSide = () => {
        app.delete('/injuredside/:id', async (req, res) => {
            let id = req.params.id;
            connection.con.query('delete from injuredSide where id=' + id, (err, result) => {
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
   
    getInjuredSides();
    getInjuredSide();
    createInjuredSide();
    updateInjuredSide();
    deleteInjuredSide();
}

module.exports = { injuredSideCRUD };

