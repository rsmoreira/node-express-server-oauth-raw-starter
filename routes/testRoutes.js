module.exports = (app) => {

    app.post('/test/body-parser', (req, res) => {
        console.log(req.body);
        res.status(200).send(req.body)
    });

};