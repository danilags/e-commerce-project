var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should()
var mongoose = require('mongoose');
var Customer = require('../models/customer')
var Item = require('../models/item')
chai.use(chaiHttp);

<<<<<<< HEAD
describe('costumer', function() {
    beforeEach(function(done) {
        var Costumer = new Costumer({
            name: 'Bat',
            facebookid: '122304849',
            email: 'bat@mail.com'
        });
        Costumer.save(function(err) {
            done();
        });
    });
=======
// Items Test
describe('ITEM CRUD TEST', ()=> {
  let currentTest
>>>>>>> c011a2183eb20c9fbfebdacd1ef525cfe15d4e5a

  beforeEach((done)=> {
    let newItem = new Item({
      name: 'baju',
      desc: 'baju keren untuk anak muda gaul jaman sekarang',
      picture_url: 'abc/test.jpg',
      stock : 100,
      price : '15000'
    })
    newItem.save((err, data)=> {
      if(err) {
        console.log(err)
      } else {
        currentTest = data
        done()
      }
    })
  })

  afterEach((done)=> {
    Item.collection.remove({})
    currentTest = ''
    done()
  })

  it('Create 1 item in database', function(done) {
      chai
      .request(server)
      .post('/api/item')
      .send({
        name: 'celana',
        desc: 'celana keren untuk anak muda gaul jaman sekarang',
        picture_url: 'abc/test.jpg',
        stock : 100,
        price : '15000'
      }).end(function(err, res) {
          res.should.have.status(200)
          res.body.name.should.equal('celana')
          res.body.should.have.property('name')
          res.body.should.have.property('desc')
          res.body.should.have.property('picture_url')
          res.body.should.have.property('stock')
          res.body.stock.should.be.a('number')
          res.body.should.have.property('price')
          done()
      })
  })

  it('Find Items in database', function(done) {
    chai
      .request(server)
      .get('/api/item')
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

  it('Update 1 item in database', function(done) {
    chai
      .request(server)
      .put(`/api/item/${currentTest._id}`)
      .send({
        name: 'baju orange',
        desc: 'baju enak pakai',
        picture_url: 'edf/oranye.png',
        stock: 99,
        price: '50000'
      })
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.have.property('name')
        res.body.name.should.equal('baju orange')
        res.body.should.have.property('desc')
        res.body.desc.should.equal('baju enak pakai')
        res.body.should.have.property('picture_url')
        res.body.picture_url.should.equal('edf/oranye.png')
        res.body.should.have.property('stock')
        res.body.stock.should.equal(99)
        res.body.stock.should.be.a('number')
        res.body.should.have.property('price')
        res.body.price.should.equal('50000')
        done()
      })
  })

  it('Delete 1 item in database', function(done) {
    chai
      .request(server)
      .delete(`/api/item/${currentTest._id}`)
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.have.property('name')
        res.body.name.should.equal('baju')
        done()
      })
  })

})

// Customers Test
describe('CUSTOMER CR TEST', function() {

    beforeEach((done)=> {
      let newCustomer = new Customer({
        name: 'Bat',
        facebookid: '122304849',
        email: 'bat@mail.com'
      })
      newCustomer.save((err)=> {
        if(err) console.log(err)
        done()
      })
    })

    afterEach((done)=> {
      Customer.collection.remove({})
      done()
    })

    it('create costumer', function(done) {
<<<<<<< HEAD
        chai.request(server)
=======
        chai.
        request(server)
>>>>>>> c011a2183eb20c9fbfebdacd1ef525cfe15d4e5a
        .post('api/costumer')
        .send({
            name: 'ego',
            facebookid: '12233444',
            email: 'ego1303@gmail.com'
        }).end(function(err, res) {
            res.should.have.status(200);
            res.body.name.should.equal('ego')
            res.body.should.have.property('name');
            res.body.should.have.property('facebookid');
            res.body.should.have.property('email');
            done()
        })
    });


    it('view contumer',function(done){
      chai.request(server)
      .get('api/costumer')
      .end(function(err,res){
        res.should.have.status(200);
        res.body.should.have.property('name');
        res.body.should.have.property('facebookid');
        res.body.should.have.property('email');
      })
    });

    it('update item',function(done){
      chai.request(server)
      .put('api/item/')
      .send({

      })
      .end(function(err,res){
        res.should.have.status(200);
        res.body.should.have.property('name');
        res.body.should.have.property('facebookid');
        res.body.should.have.property('email');
      })
    })

})
