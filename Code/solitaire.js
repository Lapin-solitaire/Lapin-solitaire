var nb_essais = 0;
var score = -1;
 
//alert("Deplacez les lapins les uns par dessus les autres. A chaque fois qu'un lapin est chevauche, il disparait. Jouez jusqu'a ce qu'il ne reste plus qu'un seul lapin ! Une surprise vous attend a la fin !");
  
$(function(){

	init();

});


function init(){
	
$("#supertitre").empty().append('<h1 class="titre">LAPIN SOLITAIRE</h1>');
$("#solitaire").empty().append('<table>'+

'<tr>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+


'<tr>'+
'<td class="vide"></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="off"></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="on"><img src="rouge.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"></td>'+
'</tr>'+

'<tr>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'<td class="vide"><img src="carre.png" alt=""/></td>'+
'</tr>'+


'</table>');

$("#solitaire td.on img").each(function(){deplacable(this);})
$("#solitaire td.off").each(function(){recevante(this);})

nb_essais = nb_essais + 1;

};



function gain_question(){
	
	$("#supertitre").empty()
	$("#solitaire").empty().append('<img src="echo.jpg" width="578" height="567">')
	$("#menu").empty()
	
	var audio = new Audio('son2.mp3');
	audio.play()
	
}

function perdu(compte){
	
	var message = 'C\'est mieux mais c\'est pas terrible...';
	
	if (compte == score){
		message = 'C\'est toujours aussi nul !';
	}
	if (compte > score){
		message = 'C\'est de pire en pire...';
	}
	if (compte < 5){
		message = 'On y est presque !';
	} 
	if (nb_essais == 5){
		message = 'Bon, ca fait deja 5 essais... C\'est long';
	}
	if (nb_essais == 10){
		message = 'Deja 10 essais !';
	}
	if (score == -1){
		message = 'C\'est un bon debut...';
	}
	
	$("#supertitre").empty().append('<h1 class="titre">'+compte+' lapins restants ! '+message+'</h1>')
	$("#solitaire").empty().append('<img src="perdu.png" width="667" height="300">')
	
	score = compte;
	
}


function deplacable(pion){
 $(pion).draggable($(pion).draggable({
 helper:function(){return $('<img src="noir.png" alt="X" />'); }
,start: function(){ $(this).css({opacity:0}); }
,stop: function(){ $(this).css({opacity:100}); }
})
);
 return pion;
}


function recevante(reception){
   $(reception).droppable({
   activeClass:'acceptable'
       ,accept:function(pion){
          var id_case = $("#solitaire td").index(this);
          var id_pion = $("#solitaire td").index($(pion).parent());
          var delta = Math.abs(id_case-id_pion);
          var is_pion_present = $("#solitaire td").eq(id_pion+(id_case-id_pion)/2).find("img").size();
          return (delta==18 || delta==2) && (is_pion_present==1);
       }
       ,drop:function(event,ui){
   console.debug("drop");
   //on ajoute un pion 'deplacable' à la case d'arrivée
   $(this).removeClass("off").addClass("on").droppable("destroy").append(
       deplacable($('<img src="rouge.png" alt="X" />'))
   );
   var case_origine = $(ui.draggable).parent();
   var id_case = $("#solitaire td").index(this);
   var id_pion = $("#solitaire td").index(case_origine);
   var case_saute =  $("#solitaire td").eq(id_pion+(id_case-id_pion)/2)
   //la case de départ est vide et 'recevante'
   recevante($(case_origine).empty().removeClass("on").addClass("off"));
   //le pion saute disparait
   $(case_saute).find("img").fadeOut(function(){
        //à la fin de l'animation; la case sautée est vide et 'revecante'
        recevante($(case_saute).empty().removeClass("on").addClass("off"));
		//puis on teste la fin de la partie
		
				if(($("#solitaire table td.on img").size()==1)){
					
					gain_question()
					
				}else if(finPartie()){
					
					var audio = new Audio('son1.mp3');
					audio.play();
					var compte=$("#solitaire table td.on img").size();
					perdu(compte)
				}
					
				
			});
		}
   });
return reception;
}


function afficheMessage(message,callback){
	$("#solitaire").append($('<div id="message"><p>'+message+'</p><p><a href="">OK</a></p></div>'));
	$("#message").find("a").click(function(){
		$("#message").fadeOut(200,function(){$(this).remove()});
		callback();
		return false;
	});
	//affiche le message
	$("#solitaire").css("position","relative");
	$("#message").animate({
		marginTop:"-50px",
		marginLeft:"-75px",
		width:"150px",
		height:"100px",
		opacity:"1",
		fontSize:"1em"
	},500);
}

//teste la fin de la partie
function finPartie(){
	var resultat=true;
	//on essaye chaques pion restant
	$("#solitaire td.on img").each(function(i,e){
		//avec chaque cases vides restantes
		$("#solitaire td.off").each(function(j,a){
			//si un deplacement est acceptable
			if(acceptable(e,a)){
				//alors la partie n'est pas fini
				resultat=resultat&false;
				return false;
			}
		});
		//re-break
		if(!resultat)return false;
	});
	return resultat;
} 
function acceptable(pion,CaseArrivee){
	var id_case = $("#solitaire td").index(CaseArrivee);
	var id_pion = $("#solitaire td").index($(pion).parent());
	var delta = Math.abs(id_case-id_pion);
	var is_pion_present = $("#solitaire td").eq((id_case+id_pion)/2).find("img").size();
	return (delta==18 || delta==2) && (is_pion_present==1);
} 

