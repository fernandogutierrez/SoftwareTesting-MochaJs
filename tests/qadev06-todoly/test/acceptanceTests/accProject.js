var request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;


describe('Projects',function(){
	//this.timeout(5000);
	var prID;
	var prjJson; 
   
	afterEach(function(done){
		if (prID!=undefined){
			    request
		        .del('https://todo.ly/api/projects/'+prID+'.json')
		        .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
		        .end(function(err,res){
		           console.log("deleting with after each");		           
		           done();
		       });
		}
		else{
			console.log('Nothing to delete');
			done();
		}
	  	    	
	});	

	describe('Acceptance Tests',function(){
             
			it('POST /project.json create project',function(done){
				prjJson = {Content:'Project with Superagent99',Icon:4};

		        request
		       .post('https://todo.ly/api/projects.json')
		       .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
		
		       .send(prjJson)

		       .end(function(err,res){
		       	
			       prID = res.body.Id;
			       console.log('project created');
			       console.log(res.body);
			       
			       expect(res.status).to.equal(200);
			       expect(res.body.Content).to.equal(prjJson.Content);
			       expect(res.body.Icon).to.equal(prjJson.Icon);
			       expect(res.body.Deleted).to.equal(false);
			       done();	
  
		       });
	     	});

	     	describe('PROJECTS EDIT DELET',function(){
                beforeEach(function(done){
				    prjJson = {Content:'Project with Superagent99',Icon:4};

			      request
			       .post('https://todo.ly/api/projects.json') 
			       .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
			       .send(prjJson)
			       .end(function(err,res){
				       prID   = res.body.Id;
				       console.log('project created with beforeEach');
				       done();	
			       });
	            }); 
           
	     	  it('PUT /project/[id].json edit a project',function(done){
				request
		       .put('https://todo.ly/api/projects/'+prID+'.json')
		       .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
		       .send({Content: 'project edited'})

		       .end(function(err,res){
				  console.log(res.body.Content);
			      console.log(res.body);
			      expect(res.status).to.equal(200);
			      done();      
				});
	     	 });

            
             it('DELETE /project.json',function(done){
	     		request
		        .del('https://todo.ly/api/projects/'+prID+'.json')
		        .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
		
		        .end(function(err,res){
		           expect(res.body.Deleted).to.equal(true);
		           console.log(res.body);
		           console.log('project deleted with test case');
		           prID = undefined;
		           done();
		        });
	     	});

	     	  
	     });
	 });
});