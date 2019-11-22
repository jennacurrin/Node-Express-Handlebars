module.exports = function(app){
    app.get('/api/friends', (req, res)=> {
        res.json(users);
    })
    
}