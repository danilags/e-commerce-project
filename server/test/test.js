var chai = require('chai');
var chaiHttp = require('chai-http');
var server=require('../app');
var should = chai.should();
chai.use(chaiHttp);

describe('costumer',function(){
  it ('create costumer',function(done){
    chai,request(server)
     .post('api/costumer')
     .send({
       name:'ego',
       facebookid:'12233444',
       email:'ego1303@gmail.com'
     }).end(function(err,res){
       res.should.have.status(200);
       res.body.name.should
       res.body.should.have.property('name');
       res.body.should.have.property('facebookid');
       res.body.should.have.property('email');
     })
  })
})
