// PACKAGES
var mysql = require("mysql");
var inquirer = require("inquirer");

// FUNCTIONS
function postItem () {
    inquirer
    .prompt([
        {
            type: "input",
                message: "Enter your username:",
                name: "userName"
        },
        {
            type: "input",
                message: "Enter the item name:",
                name: "itemName"
        },
        {
            type: "input",
                message: "Enter a short description:",
                name: "itemDesc"
        },
        {
            type: "input",
            message: "Enter the starting price:",
            name: "itemPrice"
        }
    ])
    .then(answers => {
        console.log(answers.itemPrice);

        var query = connection.query(
            "INSERT INTO items SET ?",
            {
              item: answers.itemName,
              description: answers.itemDesc,
              price: parseFloat(answers.itemPrice),
              name: answers.userName
            },
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " item inserted!\n");
            }
        );
    });
}

function bidOnItem () {
    connection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        
        for (i in res) {
            console.log("\nITEM NAME: " + res[i].item);
            console.log("DESCRIPTION: " +res[i].description);
            console.log("PRICE: " +res[i].price);
            console.log("CREATED BY:  " +res[i].name);
            console.log("--------------------");
        }
    });

    inquirer
    .prompt([
        {
            type: "input",
                message: "Which item would you like to bid on?",
                name: "itemName"
        },
        {
            type: "input",
                message: "How much would you like to bid?",
                name: "bid"
        },
        {
            type: "input",
                message: "Enter your username:",
                name: "username"
        }
    ])
    .then(answers => {
        var query = connection.query(
            "UPDATE items SET ? WHERE ?",
            [
              {
                price: parseFloat(answers.bid)
              },
              {
                item: answers.itemName
              }
            ],
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " products updated!\n");
            }
        );
    });
}

// VARIABLES
// Create connection to SQL table
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "greatbay"
  });

// CODE
inquirer
  .prompt([
      {
        type: "input",
            message: "Would you like to POST an item or BID on an item?",
            name: "action"
      }
  ])
  .then(answers => {
    action = answers.action.toLowerCase();
    
    switch (action) {

        case "post" :
            postItem();
            break;

        case "bid" :
            bidOnItem();
            break;
    }
});