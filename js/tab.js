// JavaScript Document
var w=Object();var p=Object();var c=Object();
var b1=Object();var b2=Object();var b3=Object();

window.onload=function(){
	w=document.getElementById("works");
	p=document.getElementById("profile");
	c=document.getElementById("contact_form");
	b1=document.getElementById("b1");
	b2=document.getElementById("b2");
	b3=document.getElementById("b3");

	disp(1);
};
function disp(n){

	w.style.display="none";
	p.style.display="none";
	c.style.display="none";
	b1.style.backgroundColor='#CACACA';
	b2.style.backgroundColor='#CACACA';
	b3.style.backgroundColor='#CACACA';
	switch(n){
		case 0:
			w.style.display="block";
			b1.style.backgroundColor='#000064';
			break;
		case 1:
			p.style.display="block";
			b2.style.backgroundColor='#000064';
			break;
		case 2:
			c.style.display="block";
			b3.style.backgroundColor='#000064';
			break;
	}
}
