
var request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
/*
 describe('Create a project',function(){
    var prID;

 	this.timeout(10000);
   	it('Post create a new project',function(done) {
   	 prjJson = {Content:'Project with Superagent99',Icon:4};
  	   request
  	     .post('https://todo.ly/api/projects.json')
         .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
         .send(prjJson)       

  	     .end(function(err,res){
			   console.log(res.body);
			   expect(res.status).to.equal(200);
			   expect(res.body.Content).to.equal(prjJson.Content);
			   expect(res.body.Icon).to.equal(prjJson.Icon);
			   expect(res.body.Deleted).to.equal(false);
		   done();	
	     });
    });
   
     	it('Post create a subproject',function(done) {

     		prjJson = {
					  Content:"newSubSUB Project3",
					  ParentId: 3508151,
					  Icon: 3  
					  };
     		request

     		 .post('https://todo.ly/api/projects.json')
     		 .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
             .send(prjJson)

     		 .end(function(err,res){
                 console.log(res.body);
                 expect(res.status).to.equal(200);
                 expect(res.body.Content).to.equal(prjJson.Content);
                 expect(res.body.ParentId).to.equal(prjJson.ParentId);

     		 	done();
     		 });
     	});
    */

    
		   describe('Projects',function(){
             var prID;
              var idTask;
		        beforeEach(function(done){
				 var jsonProject = {Content:'Psss22',Icon:4};

			      request
			       .post('https://todo.ly/api/projects.json') 
			       .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
			       .send(jsonProject)
			       .end(function(err,res){
				       prID   = res.body.Id;
				       console.log('prid::::' + prID);
				       console.log('project created with beforeEach');
				       done();	
			       });
	            });

	           describe('Items',function(){

	           	 beforeEach(function(done){
	           	 	
                    var jsonTask = {
                          Content:"new task3",
              		      ProjectId: null,
                          DueDate: ""
              		    };
                    jsonTask.ProjectId = prID;
                   
                      request
                       .post('http://todo.ly/API/Items.json')
                   	   .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
                       .send(jsonTask)
                       .end(function(err,res){
                         idTask = res.body.Id;
                         console.log(idTask + ' id del task');
                         done();
                   	  });     
	           	   });
                  
                  it('Deleted /delete a task',function(done) {
                  	console.log(' iddddddddddd');
                     request
                      .del('https://todo.ly/API/Items/'+idTask+'.json')
                  	  .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
                      .end(function(err,res){
                         console.log(res.body);
                         expect(res.status).to.equal(200);
                        done();
                  	  });
                  });
                  


                    /*
                   it('testofget',function(done) {
	                 request
	                  .get('http://todo.ly/API/Items.json')
	              	  .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
	                  .end(function(err,res){
	                    console.log('');

	                   // console.log(res.body);
	                    done();
	              	   });
	                 });*/


	            });


	            
	              

               /*              
                it('POST /create new task',function(done) {
                   var prjJson = {
                          Content:"new task3",
              		      ProjectId: null,
                          DueDate: ""
              		    };
                    prjJson.ProjectId = prID;
                 
                      request
                       .post('http://todo.ly/API/Items.json')
                   	   .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
                       .send(prjJson)
                       .end(function(err,res){
                         console.log(res.body);
                         expect(res.body.Content).to.equal(prjJson.Content);
                         done();
                   	  });
                 });*/
		   });



// });

 



