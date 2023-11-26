import app from '../app'
const connection = require('../connection/DBConnection');
let employeeCRUD = () => {

    /*
function and route for get all the employee
*/
    let getEmployees = () => {
        app.get('/employee', async (req, res) => {

            connection.con.query('select * from employee', (err, result) => {
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
    function and route for get the employee by id
    */
    let getEmployee = () => {
        app.get('/employee/:id', async (req, res) => {
            let id = req.params.id
            connection.con.query('select * from employee where id=' + id, (err, result) => {
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
    function and route for create employee
    */
    let createEmployee = () => {
        app.post('/employee', async (req, res) => {

            var createemployee = {
                'name': req.body.name,
                'email': req.body.email,
                'timeIn' : req.body.timeIn,
                'timeOut' : req.body.timeOut,
                'totalHours' : req.body.totalHours,
                'salary' : req.body.salary,
                'password' : req.body.password,
                'salary' : req.body.salary,
                'subAdmin' : req.body.subAdmin,
                'token' : req.body.token,
                
            }

            var sql = "INSERT INTO employee SET ?";
            try {
                connection.con.query(sql, createemployee, (err, result) => {
                    res.json(result);
                });
            } catch (e) {
                res.send('error')
            }
        })



    }

    /*
    function and route for update employee
    */

    let updateEmployee = () => {
        app.put('/employee/:id', async (req, res) => {

            let id = req.params.id;
            var sql = "update employee SET ? where id=?";
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
  function and route for deleting the employee by id
  */

    let deleteEmployee = () => {
        app.delete('/employee/:id', async (req, res) => {
            let id = req.params.id;
            connection.con.query('delete from employee where id=' + id, (err, result) => {
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
   
    getEmployees();
    getEmployee();
    createEmployee();
    updateEmployee();
    deleteEmployee();
}

module.exports = { employeeCRUD };

