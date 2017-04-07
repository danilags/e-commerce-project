var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var mongoose = require('mongoose');

var Item = require('../models/items')
chai.use(chaiHttp);

describe('Items', function() {
    beforeEach(function(done) {
        var Item = new Item({
            picture_url: 'Bat',
            name: 'sepatu berlubang',
            desc: 'sepatu anjay',
            stock:30,
            price:"30000"
        });
        Item.save(function(err) {
            done();
        });
    });



    it('update item',function(done){
      chai.request(server)
      .put('api/item/')
      .send({
         desc:'sepatu mantap'
      })
      .end(function(err,res){
        res.should.have.status(200);
        res.body.desc.should.equal('sepatu mantap');

      })
    })


    afterEach(function(done) {
        Item.collection.drop();
        done();
    });

})
