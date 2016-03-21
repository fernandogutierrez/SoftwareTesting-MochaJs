   
var request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;

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
                         console.log('task created with beforeEach');
                         done();
                   	  });     
	           	   });
                  
                  it('Deleted /delete a task',function(done) {
                     request
                      .del('https://todo.ly/API/Items/'+idTask+'.json')
                  	  .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
                      .end(function(err,res){
                         console.log(res.body);
                         expect(res.status).to.equal(200);
                         expect(res.body.Deleted).to.equal(true);
                        done();
                  	  });
                  });
                  
                  it('PUT /project/[id].json edit a project',function(done){
                    request
                       .put('https://todo.ly/API/Items/'+idTask+'.json')
                       .auth('Fernando.Gutierrez@fundacion-jala.org','CONTROL123')
                       .send({Content: 'task edited2',
                              DueDate:'3/23/2017 00:00',
                              DueTimeSpecified:true
                             })

                       .end(function(err,res){
                         console.log(res.body.Content);
                         console.log(res.body);
                         expect(res.status).to.equal(200);
                        done();      
                     });
                  });
           });
   });
            





      