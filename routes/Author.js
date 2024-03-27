var express = require('express');
var router = express.Router();
var AuthorModel = require('../schemas/Author');

router.get('/', async function (req, res, next) {
  let limit = req.query.limit ? req.query.limit : 5;
  let page = req.query.page ? req.query.page : 1;
  var queries = {};
  var exclude = ["sort","page","limit"];
  var stringFilter = ["name"];
  //{ page: '1', limit: '5', name: 'Hac,Ly', author: 'Cao' }
  for (const [key,value] of Object.entries(req.query)) {
      if(!exclude.includes(key)){
        if(stringFilter.includes(key)){
          queries[key] = new RegExp(value.replace(',','|'),'i');
        }else{
          
        }
      }
  }
  queries.isDeleted=false;
  Authors = await AuthorModel.find(queries).skip((page - 1) * limit).limit(limit).exec();
  res.status(200).send(authors);
});

router.get('/:id', async function (req, res, next) {
  try {
    var Author = await AuthorModel.findById(req.params.id).exec();
    res.status(200).send(author);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post('/', async function (req, res, next) {
  try {
    let newAuthor = new authorModel({
      name: req.body.name,
    });
    await newAuthor.save();
    res.status(200).send(newAuthor);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.put('/:id', async function (req, res, next) {
  try {
    var Author = await AuthorModel.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true
      }).exec();
    res.status(200).send(author);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.delete('/:id', async function (req, res, next) {
  try {
    var Author = await AuthorModel.findByIdAndUpdate(req.params.id, {
      isDeleted: true
    },
      {
        new: true
      }).exec();
    res.status(200).send(author);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;