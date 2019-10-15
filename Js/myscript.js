$(document).ready(function(){
// Abdullah : first i create the html basic and append to body

	var div = ` 

	  <header class="p-4" style="background-color: black;">
	      <div class="text-center text-white">
	          <h1>Movie Factory</h1>
	      </div>
	  </header>

	      <nav class="row navbar bg-secondary">
	            <a class="navbar-brand text-white p-2" href="index.html">Home</a>
	      </nav>


	  <div class="container-fluid pl-1">

	      <h2 class=" text-center mt-4 mb-5 text-white"> Box Office</h2>

	
	        <div class="text-right col-md-3 ml-auto dropdown"><!-- the dropdown sort box-->
	            <button class="btn btn-basic dropdown-toggle text-white" type="button" data-toggle="dropdown">
	            Sort
	            <span class="caret"></span></button>
	            <ul class="dropdown-menu bg-dark">
	              
	              <li class="text-white text-center mostliked">Most Liked</li>
	              <li class="text-center"><a class="btn text-white " href="index.html">All</a></li>
	      
	            </ul>
	          </div>


	      <div class="row justify-content-between  ml-1 mr-1 ">



	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>   


	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>   

	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>   

	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>   

	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>  

	          <div class="col-lg-6 col-md-6 col-sm-6 mb-5 ">
	                <div class="pl-lg-3 pr-lg-3 pl-md-3 pr-md-3 pl-sm-2 pr-sm-2">
	                      <div class="divofdata">
	                      </div> 
	                </div>
	          </div>   
	      </div>
	    </div>


		<footer class="p-2" style="background-color: black;"> 
		  <div class="container">
		    <div class="text-center text-white">
		      <h2>Movie</h2>
		    </div>
		  

			
				<div class="text-center text-white">
		  			<p>Osama Alhussin - CodeFactory 2019</p>
				</div>
			</div>
		</footer> 
	`;
   $("body").append(div);

//i store the div of the data in var
	var maindiv = $('.divofdata');
//sort the data and create according to the json 
	moviesdata.sort(resort);
	create(moviesdata);
//function to compare the values and sort
function resort(x,y)
	{

		if(x.like < y.like){return 1;}
		else{
			if(x.like > y.like){return -1;}
					else{return 0;}
			}

	}
//main function data from json to html page
	function create(x){

		for(let i = 0; i < maindiv.length; i++){
			$(maindiv[i]).html(` <div class="row myr">              
			    <div class="img-responsive col-lg-7"> 
			        <img height="350" width="250" src="${x[i].img}" alt="${x[i].title}">
			    </div>

			        <div class="col-lg-5  text-white">
			        	<h5 class=" text-info title">${x[i].title}</h5>
							<p><small>${x[i].description}</small></p>

			            <div class="text-right text-info myb">
			                  <p class="thump"> Like <i class="fas fa-thumbs-up"></i> 
			                 	 <span style="font-size:30px"class="rounded-circle bg-info btn text-white likecounter">${x[i].like}</span>
			                  </p>
			           </div>

			        </div>
			  </div>`);
		
   
                    
               
		}

		var like = $(".thump"); //array store in var to reach each
		var count = $(".likecounter"); //array store in var to write over the values 


		for(let i = 0; i < maindiv.length; i++){

			$(like[i]).on('click', function(){

					++moviesdata[i].like; // add like
					$(count[i]).text(moviesdata[i].like);

					//update the sort when you click

					$('.mostliked').on('click' ,function(){
						
						moviesdata.sort(resort);
						create(moviesdata);
						
					})


			});

		}

	}

});


	   /*   function all(b) {

        	$(b).click(function(){
		       	var select = $(this).text();
		
				$(".divofdata").empty();
				for (let i=0 ; i < moviesdata.length; i++){
					if (select == moviesdata[i].mylist) {
		

						create(moviesdata);
						


						
					}
				}
				
        	})
                
                }*/
