var request = require('superagent');
require('superagent-proxy')(request);

var expect = require('chai').expect;

describe('Smoke test',function(){
	var projectID;
	it('GET /projects.json returns status code 200',function(done){
		request
		.get('https://todo.ly/api/projects.json')
		.proxy('http://172.20.240.5:8080')
		.auth('Lucero.Penarrieta@fundacion-jala.org','Control123!')
		.end(function(err,res){
			expect(res.status).to.equal(200);
			done(); 
		});
	});
	it('POST /projects.json returns status code 5xx',function(done){
		request
		.post('https://todo.ly/api/projects.json')
		.proxy('http://172.20.240.5:8080')
		.auth('Lucero.Penarrieta@fundacion-jala.org','Control123!')
		.set('Authorization','THVjZXJvLlBlbmFycmlldGFAZnVuZGFjaW9uLWphbGEub3JnOkNvbnRyb2wxMjMh')
		.send({Content:'Project with Superagent99'})
		.end(function(err,res){
			projectID = res.body.Id;
			expect(res.status).to.be.below(500);
			done(); 
			
		});
	});

	it('GET /projects/[id].json',function(done){//test solo termins cuando llegue a la funcion done
		request
		.get('http://todo.ly/API/Projects/'+ projectID+'.json')
		.proxy('http://172.20.240.5:8080')
		.auth('Lucero.Penarrieta@fundacion-jala.org','Control123!')
		.end(function(err,res){

			expect(res.status).to.equal(200);
			done();
			
		});
	});
});