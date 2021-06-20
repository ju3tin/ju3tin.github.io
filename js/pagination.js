	/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var first = 0;
var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------
	
    // change page
    Click: function() {

        var pageNumber = parseInt( $(this).text() );

        loadPosts(pageNumber);

        $(".current").removeClass("current");

        $(this).addClass("current");

        var catname = getUrlParameter('category');

        if (catname) {
			console.log(pageNumber);
			if (pageNumber > 1) {
				window.history.pushState('page2', 'Title', '/blog/page/'+pageNumber+'?category='+catname );
			}
            else {
				window.history.pushState('page2', 'Title', '/blog/?category='+catname );
			}
        }
        else {
			if (pageNumber == 1) {
				 window.history.pushState('page2', 'Title', '/blog/');
			} 
			else {
				 window.history.pushState('page2', 'Title', '/blog/page/'+pageNumber );
			}
           
        }


        // work with next/prev buttons, hide if not needed
      
       	 if ( $("#pagination span a").last().hasClass("current") ) {
			  $(".nextPag").hide();
		  }
		  else {
			  $(".nextPag").show();
		  }


		  if ( $("#pagination span a").first().hasClass("current") ) {
			  $(".prevPag").hide();
		  }
		  else {
			  $(".prevPag").show();
		  }

        Pagination.page = +this.innerHTML;
        Pagination.Start();
		
		console.log(first);
		if ( first == 1 ) {
			
			$('html, body').animate({
				scrollTop: $("#posts").offset().top - 120
			}, 500);
			
		}
		
		first = 1;
		

    },

    // previous page
    Prev: function() {

        Pagination.page--;

        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        else {
            $("#pagination a.current").prev().get(0).click();
        }

        Pagination.Start();
    },

    // next page
    Next: function() {

        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        else {
            $("#pagination a.current").next().get(0).click();
        }

        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages

    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a class="prevPag"><i class="fas fa-chevron-left"></i></a>', // previous button
            '<span></span>',  // pagination container
            '<a class="nextPag"><i class="fas fa-chevron-right"></i></a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};

