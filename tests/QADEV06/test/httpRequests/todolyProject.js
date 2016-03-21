var request = require('superagent');
require('superagent-proxy')(request);

describe('Projects',function() {
 this.slow(10000);	
   it.only('GET /projects.json',function(done) {
   	 request
   	   .get('https://todo.ly/api/projects.json')
   	   .proxy('http://172.20.240.5:8080')
   	   .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
   	  .end(function(err,res) {
   	  	  //console.log(res.body);
          //console.log(res.headers);
          console.log(res.headers['content-type']);
          console.log(res.status);

   	  	  done();
   	  });
   	 });

    it('POST /projects.json',function(done) {
   	 request
   	   .post('https://todo.ly/api/projects.json')
   	   .proxy('http://172.20.240.5:8080')
   	   .set('Authorization','RmVybmFuZG8uR3V0aWVycmV6QGZ1bmRhY2lvbi1qYWxhLm9yZzpDT05UUk9MMTIz')
       .send({Content:'Project with Superagent'})
   	 .end(function(err,res) {
          console.log(res.status);
          console.log(res.body);
   	  	  done();
   	  });
    });
   
    
    it('DELETE /projects.json',function(done) {
   	 request
   	       .del('https://todo.ly/api/projects/3507123.json')
   	       .proxy('http://172.20.240.5:8080')
   	       .set('Authorization','RmVybmFuZG8uR3V0aWVycmV6QGZ1bmRhY2lvbi1qYWxhLm9yZzpDT05UUk9MMTIz')
   	       .end(function (err,res) {
   	       	 console.log(res.status);
            done();
   	       });
    });


});