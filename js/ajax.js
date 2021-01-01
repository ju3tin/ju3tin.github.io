$(function(){

	var page = 1,
		pagelimit = 10,
		totalrecord = 0;

	fetchData();

	// handling the prev-btn
	$(".prev-btn").on("click", function(){
		if (page > 1) {
			page--;
			fetchData();
		}
		console.log("Prev Page: " + page);
	});

	// handling the next-btn
	$(".next-btn").on("click", function(){
		if (page * pagelimit < totalrecord) {
			page++;
			fetchData();
		}
		console.log("Next Page: " + page);
	});

	function fetchData() {
		// ajax() method to make api calls
		$.ajax({
			url: "/posts123.json",
			type: "GET",
			data: {
				page: page,
				pagelimit: pagelimit
			},
			success: function(data) {
				console.log(data);

				if (data.success) {
					var dataArr = data.success.data;

					totalrecord = data.success.totalrecord;

					var html = "";
					for (var i = 0; i < dataArr.length; i++) {
						html +="<article class='blog-post'><a href='"+ 
							dataArr[i].link + "' class='blog-post-header-image'><div class='bg-transfer'>"+
							"<img src='"+ dataArr[i].image +"' alt=''></div></a>"+"<div class='sample-user'>"+
							"<!--<h3>ID: " + dataArr[i].id + "</h3>"+
							"<p>First Name: " + dataArr[i].firstname + "</p>" +
							"<p>Last Name: " + dataArr[i].lastname + "</p>" +
							"<p>Last Modified At: " + dataArr[i].lastmodified + "</p>" +
							"<p>Created At: " + dataArr[i].created + 
							"</p>--></div><header><a href='"+ 
							dataArr[i].link +"'><h2>"+ 
							dataArr[i].title +
							"</h2></a></header>"+
							"<figure class='meta'>"+
							"<a href='#' class='link-icon'>"+
							"<i class='fa fa-user'></i>Admin</a>"+
							"<a href='#' class='link-icon'>"+
							"<i class='fa fa-calendar'></i>" 
							+ dataArr[i].created + 
							"</a>"+
							"<div class='tags'>"+
							" <a href='#' class='tag article'>Interior</a>"+
							" <a href='#' class='tag article'>New Living</a>"+"</div></figure>"+
							"<p>"
							+ dataArr[i].mincontent + 
							"</p>"+
							"<a href='"+ 
							dataArr[i].link +"' class='btn btn-primary btn-small btn-grey'>Read More</a></article>"+
						"<hr />";
					}
					$("#result").html(html);
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		});
	}
});