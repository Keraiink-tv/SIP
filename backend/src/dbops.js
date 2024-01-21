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
            'INSERT INTO drinks (Id, name, description, img) VALUE (69, "Cuba Libra", "beskrivelse", "billede")',
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

    return router;
}

module.exports = createRouter;