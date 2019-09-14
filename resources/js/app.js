function passShower() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function forgetPass() {
  var x = $(".log-in");
  var y = $(".forget-password");
    x.css('display', 'none');
    y.css('display', 'block');
 
}
function panel() {
  var y = $(".log-in");
  var x = $(".forget-password");
    x.css('display', 'none');
    y.css('display', 'block');
 
}




//city management

var list_btn = $(".select-list");
var city_btn = $(".select-city");
var prov_btn = $(".select-prov");

var city = $(".city");
var list = $(".list");
var prov = $(".prov");



city_btn.click(function(){
   list.css('display', 'none');
   prov.css('display', 'none');
    city.css('display', 'block');
    city_btn.css('background-color','#EE4367');
    city_btn.css('color','#fff');
     list_btn.css('background-color','#fff');
    list_btn.css('color','#000');
        prov_btn.css('color','#000');
         prov_btn.css('background-color','#fff');


    
});

list_btn.click(function(){
   city.css('display', 'none');
   prov.css('display', 'none');
    list.css('display', 'block');
    city_btn.css('background-color','#FFF');
    city_btn.css('color','#000');
    list_btn.css('background-color','#EE4367');
    list_btn.css('color','#fff');
    prov_btn.css('color','#000');
         prov_btn.css('background-color','#fff');
    
});

prov_btn.click(function(){
   city.css('display', 'none');
   prov.css('display', 'block');
    list.css('display', 'none');
    console.log("aaaaaaaa");
    city_btn.css('background-color','#FFF');
    city_btn.css('color','#000');
    list_btn.css('background-color','#fff');
    list_btn.css('color','#000');
     prov_btn.css('color','#fff');
         prov_btn.css('background-color','#EE4367');
    
});



$(document).ready(function(){
    persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
	function traverse(el){
		if(el.nodeType==3){
			var list=el.data.match(/[0-9]/g);
			if(list!=null && list.length!=0){
				for(var i=0;i<list.length;i++)
					el.data=el.data.replace(list[i],persian[list[i]]);
			}
		}
		for(var i=0;i<el.childNodes.length;i++){
			traverse(el.childNodes[i]);
		}
	}
    traverse(document.body);
});


//daste bandi
var sportList_btn = $(".select-sport-list");
var sport_btn = $(".select-sport");
var group_btn = $(".select-group");

var sport = $(".sport");
var list = $(".list");
var group = $(".group");



sport_btn.click(function(){
   list.css('display', 'none');
   group.css('display', 'none');
    sport.css('display', 'block');
    sport_btn.css('background-color','#EE4367');
    sport_btn.css('color','#fff');
     sportList_btn.css('background-color','#fff');
    sportList_btn.css('color','#000');
        group_btn.css('color','#000');
         group_btn.css('background-color','#fff');


    
});

sportList_btn.click(function(){
   sport.css('display', 'none');
   group.css('display', 'none');
    list.css('display', 'block');
    sport_btn.css('background-color','#FFF');
    sport_btn.css('color','#000');
    sportList_btn.css('background-color','#EE4367');
    sportList_btn.css('color','#fff');
    group_btn.css('color','#000');
         group_btn.css('background-color','#fff');
    
});

group_btn.click(function(){
   sport.css('display', 'none');
   group.css('display', 'block');
    list.css('display', 'none');
    console.log("aaaaaaaa");
    sport_btn.css('background-color','#FFF');
    sport_btn.css('color','#000');
    sportList_btn.css('background-color','#fff');
    sportList_btn.css('color','#000');
     group_btn.css('color','#fff');
         group_btn.css('background-color','#EE4367');
    
});



$(document).ready(function(){
    persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
	function traverse(el){
		if(el.nodeType==3){
			var list=el.data.match(/[0-9]/g);
			if(list!=null && list.length!=0){
				for(var i=0;i<list.length;i++)
					el.data=el.data.replace(list[i],persian[list[i]]);
			}
		}
		for(var i=0;i<el.childNodes.length;i++){
			traverse(el.childNodes[i]);
		}
	}
    traverse(document.body);
});



//business management

var bussineslist_btn = $(".select-business-list");
var business_btn = $(".select-business");


var business = $(".business");
var businesslist = $(".business-list");




business_btn.click(function(){
   businesslist.css('display', 'none');
    business.css('display', 'block');
    business_btn.css('background-color','#EE4367');
    business_btn.css('color','#fff');
     bussineslist_btn.css('background-color','#fff');
    bussineslist_btn.css('color','#000');
        


    
});

bussineslist_btn.click(function(){
   business.css('display', 'none');
    businesslist.css('display', 'block');
    business_btn.css('background-color','#FFF');
    business_btn.css('color','#000');
    bussineslist_btn.css('background-color','#EE4367');
    bussineslist_btn.css('color','#fff');

});


//etelaate karbar

var admin_btn = $(".select-admin");
var pass_btn = $(".select-pass");
var user_btn = $(".select-user");
var dastrasi_btn = $(".select-dastrasi");


var admin = $(".admin");
var pass = $(".pass");
var user = $(".users");
var dastrasi = $(".dastrasi");




admin_btn.click(function(){
   admin.css('display', 'block');
    pass.css('display', 'none');
    user.css('display', 'none');
    dastrasi.css('display', 'none');
    
    admin_btn.css('background-color','#EE4367');
    admin_btn.css('color','#fff');
    
     pass_btn.css('background-color','#fff');
    pass_btn.css('color','#000');
    user_btn.css('background-color','#FFF');
    user_btn.css('color','#000');
    dastrasi_btn.css('background-color','#FFF');
    dastrasi_btn.css('color','#000');
        


    
});

pass_btn.click(function(){
    admin.css('display', 'none');
    pass.css('display', 'block');
    user.css('display', 'none');
    dastrasi.css('display', 'none');
    
 
    pass_btn.css('background-color','#EE4367');
    pass_btn.css('color','#fff');
    
       admin_btn.css('background-color','#FFF');
    admin_btn.css('color','#000');
       user_btn.css('background-color','#FFF');
    user_btn.css('color','#000');
       dastrasi_btn.css('background-color','#FFF');
    dastrasi_btn.css('color','#000');

});

user_btn.click(function(){
    admin.css('display', 'none');
    pass.css('display', 'none');
    user.css('display', 'block');
    dastrasi.css('display', 'none');
    
    
    user_btn.css('background-color','#EE4367');
    user_btn.css('color','#fff');
    
    pass_btn.css('background-color','#FFF');
    pass_btn.css('color','#000');
    admin_btn.css('background-color','#FFF');
    admin_btn.css('color','#000');
    dastrasi_btn.css('background-color','#FFF');
    dastrasi_btn.css('color','#000');

});


dastrasi_btn.click(function(){
    admin.css('display', 'none');
    pass.css('display', 'none');
    user.css('display', 'none');
    dastrasi.css('display', 'block');
    
    
    dastrasi_btn.css('background-color','#EE4367');
    dastrasi_btn.css('color','#fff');
    
    admin_btn.css('background-color','#FFF');
    admin_btn.css('color','#000');
    user_btn.css('background-color','#FFF');
    user_btn.css('color','#000');
    pass_btn.css('background-color','#FFF');
    pass_btn.css('color','#000');

});



//////input number

    (function($, undefined) {

	"use strict";

	// When ready.
	$(function() {
		
		var $form = $( ".league-create" );
		var $input = $form.find( ".charge-input" );

		$input.on( "keyup", function( event ) {
			
			
			// When user select text in the document, also abort.
			var selection = window.getSelection().toString();
			if ( selection !== '' ) {
				return;
			}
			
			// When the arrow keys are pressed, abort.
			if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
				return;
			}
			
			
			var $this = $( this );
			
			// Get the value.
			var input = $this.val();
			
			var input = input.replace(/[\D\s\._\-]+/g, "");
					input = input ? parseInt( input, 10 ) : 0;

					$this.val( function() {
						return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
					} );
		} );
		
		/**
		 * ==================================
		 * When Form Submitted
		 * ==================================
		 */
		
		
	});
})(jQuery);


$("#upfile1").click(function () {
    $("#file1").trigger('click');
});

$("#upfile0").click(function () {
    $("#file0").trigger('click');
});


/*
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to file url
          img.onload = imageIsLoaded; // optional onload event listener
          img.width=100;
          img.height=100;
      
  });
});}*/





var matches_btn = $(".matches-btn");

var nextMatch_btn = $(".next-matches-btn");

var tables_btn = $(".tables-btn");

var matches = $(".game");

var nextMatches = $(".next-game");

var tables = $(".table-section");



matches_btn.click(function(){
   tables.css('display', 'none');
   nextMatches.css('display', 'none');
    matches.css('display', 'block');
    
    
    matches_btn.css('color','#EE4367');
          matches_btn.css('border-bottom','1px solid #EE4367');
          matches_btn.css('outline','none');

   // sport_btn.css('color','#fff');
     nextMatch_btn.css('color','#000');
              nextMatch_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         tables_btn.css('color','#000');
                  tables_btn.css('border-bottom','none');



    
});

nextMatch_btn.click(function(){
   tables.css('display', 'none');
   matches.css('display', 'none');
    nextMatches.css('display', 'block');
    
  nextMatch_btn.css('color','#EE4367');
      nextMatch_btn.css('border-bottom','1px solid #EE4367');
              nextMatch_btn.css('outline','none');

   // sport_btn.css('color','#fff');
     matches_btn.css('color','#000');
          matches_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         tables_btn.css('color','#000');
              tables_btn.css('border-bottom','none');

    
});

tables_btn.click(function(){
   nextMatches.css('display', 'none');
   tables.css('display', 'block');
    matches.css('display', 'none');
    console.log("aaaaaaaa");
    
   nextMatch_btn.css('color','#000');
                  nextMatch_btn.css('border-bottom','none');

   // sport_btn.css('color','#fff');
     matches_btn.css('color','#000');
                  matches_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         tables_btn.css('color','#EE4367');
         tables_btn.css('border-bottom','1px solid #EE4367');
                  tables_btn.css('outline','none');

    
});




var playedmatches_btn = $(".played-games-btn");

var achiveTables_btn = $(".archive-table-btn");

var mainTable_btn = $(".main-table-btn");

var playedmatches = $(".plyed-game");

var achiveTables = $(".archive-table-section");

var mainTable = $(".main-table-section");



playedmatches_btn.click(function(){
   mainTable.css('display', 'none');
   achiveTables.css('display', 'none');
    playedmatches.css('display', 'block');
    
    
    playedmatches_btn.css('color','#EE4367');
          playedmatches_btn.css('border-bottom','1px solid #EE4367');
          playedmatches_btn.css('outline','none');

   // sport_btn.css('color','#fff');
     achiveTables_btn.css('color','#000');
              achiveTables_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         mainTable_btn.css('color','#000');
                  mainTable_btn.css('border-bottom','none');



    
});

achiveTables_btn.click(function(){
   mainTable.css('display', 'none');
   playedmatches.css('display', 'none');
    achiveTables.css('display', 'block');
    
  achiveTables_btn.css('color','#EE4367');
      achiveTables_btn.css('border-bottom','1px solid #EE4367');
              achiveTables_btn.css('outline','none');

   // sport_btn.css('color','#fff');
     playedmatches_btn.css('color','#000');
          playedmatches_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         mainTable_btn.css('color','#000');
              mainTable_btn.css('border-bottom','none');

    
});

mainTable_btn.click(function(){
   achiveTables.css('display', 'none');
   mainTable.css('display', 'block');
    playedmatches.css('display', 'none');
    console.log("aaaaaaaa");
    
   achiveTables_btn.css('color','#000');
                  achiveTables_btn.css('border-bottom','none');

   // sport_btn.css('color','#fff');
     playedmatches_btn.css('color','#000');
                  playedmatches_btn.css('border-bottom','none');

   // sportList_btn.css('color','#000');
       // group_btn.css('color','#000');
         mainTable_btn.css('color','#EE4367');
         mainTable_btn.css('border-bottom','1px solid #EE4367');
                  mainTable_btn.css('outline','none');

    
});



$(document).ready(function() {
    $(".menu a li").click(function() {
        $(".menu a li").removeClass('current');
        $(this).addClass('current');
    });
});



$(document).ready(function() {
    $(".league-btn").click(function() {
        $(".league-btn").removeClass('league-btn-current');
        $(".league-info").removeClass('league-info-current');
        
        $(this).addClass('league-btn-current');
        $('.'+$(this).attr('id')).addClass('league-info-current');
       
        
    });
});


// add input for form photos


$(".img-submit-btn").click(function () {
    $("#img-submit").trigger('click');
});