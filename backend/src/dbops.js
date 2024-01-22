const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function createRouter(db) {
    const router = express.Router()

    router.get('/drinks/get', function (req, res, next) {
        db.query(
            'SELECT * FROM drinks WHERE Id = 2',
            (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(result); // Corrected from results to result
                }
            }
        );
    });

    
    router.post('/drinks/post', function (req, res, next) {
        db.query(
            'INSERT INTO drinks (Id, name, description, img) VALUE (12, "test", "test", "test")',
            (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(result); // Corrected from results to result
                }
            }
        );
    });

// If you want to delete a specific drink from your table
    router.delete('/drinks/delete/:id', function (req, res, next) {
        const drinkId = req.params.id;

        db.query(
            'DELETE FROM drinks WHERE Id = 12',
            [drinkId],
            (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({ status: 'success', message: 'Drink updated successfully' });
                    } else {
                        res.status(404).json({ status: 'error', message: 'Drink not found' });
                    }
                }
            }
        );
    });

    router.put('/drinks/update/:id', function (req, res, next) {
        const drinkId = req.params.id;
        const { name, description, img } = req.body;
    
        // Assuming you want to update name, description, and img
        db.query(
            'UPDATE drinks SET name = "test1", description = "test1", img = "test1" WHERE Id = 11',
            [name, description, img, drinkId],
            (error, result) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (result.affectedRows > 0) {
                        res.status(200).json({ status: 'success', message: 'Drink updated successfully' });
                    } else {
                        res.status(404).json({ status: 'error', message: 'Drink not found' });
                    }
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;