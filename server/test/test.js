var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var mongoose = require('mongoose');
var Costumer = require('../models/costumers')
chai.use(chaiHttp);

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



    it('create costumer', function(done) {
        chai.request(server)
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


    afterEach(function(done) {
        Costumer.collection.drop();
        done();
    });

})
