var request = require('superagent');
require('superagent-proxy')(request);

expected = require('chai').expect;
describe('Smoke Tests for Projects',function(done){
	it('GET / project.json',function() {
		 request
     		 .post('https://todo.ly/api/Projects.json');
             .proxy('http://172.20.240.5:8080')
             .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123');
         .end(function(err,res){
         	 expect(res.status).to.be.bellow(500);

         	 done();
         });     
        
	});
})

