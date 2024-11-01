/*
@author: Dipen Vyas
Top25 Social Icons
*/
$t25tooltip =  jQuery.noConflict();
$t25tooltip(function(){
				  
$t25tooltip(".social-icons li a").each(function(){
										  
										$ti = $t25tooltip(".social-icons a").attr("title");
										
										$t25tooltip(".scoial-icons a").attr("data-original-title" , $ti);
										  });
});