exports.book_create = function(req, res, next){
    //console.log('Req Body:'+JSON.stringify(req.body));
    var book1 = new book ({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        pages: req.body.pages,
        genre: req.body.genre,
        publisher: req.body.publisher
    })
    book1.save(function(err, book){
        if(err) {
            return next(err);
        }
        res.send('Book saved successfully with id: ' + book.id)
    })
    author.find({"name":req.body.author}, function(error, author){
        console.log('Author: ', author)
        if(author.name == ""){
            var author1 = new author({
                name: req.body.author,
                books: new Array(req.body.title)
            })
            author1.save(function(err, author){
                if(err) {
                    return next(err);
                }
                res.send('Author saved successfully with id: ' + author.id)
            }) 
        }else{
            console.log('Books: ',author[0].id)
            author.findByIdAndUpdate(author[0].id, {
                $set: {
                    books: author[0].books.push(req.body.title)
                }
            }, function(err, author){
                    if(err) return next(err)
                console.log('Author Updated with id: ' + author.id)    
            })
        }
    
    })