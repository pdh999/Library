var Book = require('../models/book');
var Author = require('../models/author');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Books new Test controller!');
};

exports.book_create = function (req, res, next) {

var book = new Book ({

    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    numberOfPages: req.body.numberOfPages,
    genre: req.body.genre,
    publisher: req.body.publisher
});

book.save(function(err, book){
    if(err)
        return next(err);
    res.send('Book created successfully with id: ' + book.id)
});

console.log('Author2: ' +req.body.author);
//See if author already exists
Author.find({"name":req.body.author}, function(err, author)
{
   
    //console.log('Author name: ' +author.authorName);
    //Check for error
    if(err){
        console.log('Error 1');
        return next(err)}
    //
    //Author doesn't exist, so create it
    //
    //    console.log('got here' +author.length)}
    //else if(!author.length){
    else if(Author.authorName == req.body.author){
        console.log('doesnt exist')
        var author1 = new Author
            ({
               authorName: req.body.author,
               books: {book: req.body.title}
            });
            author1.save(function (err) {
                if (err) 
                return next(err)
            })
    }
//
//Author does exist, so update it
//
    else {

 console.log('author exists here ' +Author.length);
 console.log('author name file ' +Author.authorName);
 console.log('author name ' +req.body.author);

   //     author.findByIdAndUpdate(author[0].id, {
     //       $set: {
       //         books: author[0].books.push(req.body.title)
         //   }

            Author.updateOne(
                {authorName: req.body.author}, 
           //     {$addToSet: {books: [req.body.title]}
                {$addToSet: {books: ["Book 99"]}
                },
                function(err,){
                if(err) return next(err);
                console.log('Author Updated with id: ' + author.id)    
        })
    }
})
//added below
};


//
exports.book_details_all = function (req, res, next) {
    Book.find(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_details = function (req, res, next) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};

exports.book_update = function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, book) {
        if (err) return next(err);
        res.send('Book '+book.id+' udpated.');
    });
};

exports.book_delete = function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) ;
        res.send('Book deleted successfully');
    })
};
