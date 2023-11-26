import app from "../app";
const connection = require("../connection/DBConnection");
let incomeCRUD = () => {
  let getincomes = () => {
    app.get("/incomes", async (req, res) => {
      connection.con.query(
        "SELECT income.nameIn, income.dateIn, income.quantityIn, income.totalIn, incometype.name, incometype.price, paymentMethod.name FROM income INNER JOIN incometype ON income.incomeTypeID = incometype.id INNER JOIN paymentMethod ON income.paymentMethodID = paymentMethod.id",
        (err, result) => {
          try {
            if (result.length > 0) {
              res.status(200).json({ success: true, result: result });
            } else {
              res.status(404).json({ success: false });
            }
          } catch (e) {
            res.status(500).json({ success: false });
          }
        }
      );
    });
  };

  let getincome = () => {
    app.get("/income/:id", async (req, res) => {
      let id = req.params.id;
      connection.con.query(
        "SELECT income.nameIn, income.dateIn, income.quantityIn, income.totalIn, incometype.name, incometype.price, paymentMethod.name FROM income INNER JOIN incometype ON income.incomeTypeID = incometype.id INNER JOIN paymentMethod ON income.paymentMethodID = paymentMethod.id where income.id =" +
          id,
        (err, result) => {
          try {
            if (result.length > 0) {
              res.json({ success: true, result: result });
            } else {
              res.json({ success: false });
            }
          } catch (e) {
            res.json({ success: false });
          }
        }
      );
    });
  };

  let createincome = () => {
    app.post("/income", async (req, res) => {
      //   let incomeDetails={'name':'omar','email':'omar@gail.com','password':'1212'};

      let object = req.value;

      var sql = "INSERT INTO income SET ?";
      try {
        connection.con.query(sql, object, (err, result) => {
          res.json(result);
        });
      } catch (e) {
        res.send("error");
      }
    });
  };

  let updateincome = () => {
    app.put("/income/:id", async (req, res) => {
      let id = req.params.id;
      var sql = "update income SET ? where id=?";
      var arr = req.body;
      try {
        connection.con.query(sql, [arr, id], (err, result) => {
          res.json(result);
        });
      } catch (e) {
        res.send("error");
      }
    });
  };

  let deleteincome = () => {
    app.delete("/income/:id", async (req, res) => {
      let id = req.params.id;
      connection.con.query(
        "delete from income where id=" + id,
        (err, result) => {
          try {
            res.json({ success: true, result: result });
          } catch (e) {
            res.json({ success: false });
          }
        }
      );
    });
  };

  getincomes();
  getincome();
  createincome();
  updateincome();
  deleteincome();
};

module.exports = { incomeCRUD };
