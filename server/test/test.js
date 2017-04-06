var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var mongoose = require('mongoose');
var Costumer = require('../models/costumer')
var Item = require('../models/item')
chai.use(chaiHttp);

// Items Test
describe('Items', ()=> {

  beforeEach((done)=> {
    let newItem = new Item({
      name: 'baju',
      desc: 'baju keren untuk anak muda gaul jaman sekarang',
      picture_url: 'abc/test.jpg',
      stock : 100,
      price : '15000'
    })
    newItem.save((err)=> {
      done()
    })
  })

  afterEach((done)=> {
    Item.collection.remove({})
    done()
  })

  it('Create 1 item in database', function(done) {
      chai.
      request(server)
      .post('/item')
      .send({
        name: 'celana',
        desc: 'celana keren untuk anak muda gaul jaman sekarang',
        picture_url: 'abc/test.jpg',
        stock : 100,
        price : '15000'
      }).end(function(err, res) {
          res.should.have.status(200);
          res.body.name.should
          res.body.should.have.property('name');
          res.body.should.have.property('facebookid');
          res.body.should.have.property('email');
          Item.collection.remove({})
      })
  })

  it('Find Items in database')

})

// Costumers Test
describe('costumer', function() {

    beforeEach(function(done) {
        var Costumer = new Blob({
            name: 'Bat',
            facebookid: '122304849',
            email: 'bat@mail.com'
        });
        Costumer.save(function(err) {
            done();
        });
    });

    afterEach(function(done) {
        Costumer.collection.remove({});
        done();
    });

    it('create costumer', function(done) {
        chai.
        request(server)
        .post('api/costumer')
        .send({
            name: 'ego',
            facebookid: '12233444',
            email: 'ego1303@gmail.com'
        }).end(function(err, res) {
            res.should.have.status(200);
            res.body.name.should
            res.body.should.have.property('name');
            res.body.should.have.property('facebookid');
            res.body.should.have.property('email');
        })
    })

})
