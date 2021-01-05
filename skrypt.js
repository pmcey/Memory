window.onload = timer;

var sek = -1;
var min = 0;

var elementy = new Array;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

elementy[0] = "ciastko";
elementy[1] = "sól";
elementy[2] = "chleb";
elementy[3] = "barwniki";
elementy[4] = "kakao";
elementy[5] = "kawa";

elementy[6] = "ciastko";
elementy[7] = "cukier";
elementy[8] = "piernik";
elementy[9] = "sól";
elementy[10] = "piernik";
elementy[11] = "barwniki";

elementy[12] = "ser";
elementy[13] = "ser";
elementy[14] = "kawa";
elementy[15] = "cukier";
elementy[16] = "jajko";
elementy[17] = "mysz";

elementy[18] = "jajko";
elementy[19] = "masło";
elementy[20] = "kakao";
elementy[21] = "masło";
elementy[22] = "chleb";
elementy[23] = "mysz";
	
var karta1 = "";
var karta2 = "";
var wynik = 0;

var kartaodw1 = "";
var kartaodw2 = "";


function timer(){
	
	if (wynik<12) {
	
		sek++;
		if (sek == 60){
			sek = 0;
			min++;
		}
		if (sek < 10) {
			document.getElementById("pasek").innerHTML = "0"+min+":0"+sek;
		}
		else {
			document.getElementById("pasek").innerHTML = "0"+min+":"+sek;
		}
		if (min >= 2) setTimeout("przegrana()",150);
		
		
		if (min<2) setTimeout("timer()",1000);
	}
}

function podmiana(numer_kafelka){

	document.getElementById(numer_kafelka).innerHTML = elementy[numer_kafelka];
	
	if (karta1 === ""){
		karta1 = numer_kafelka;
	}
	else{
		karta2 = numer_kafelka;
		if (karta1 != karta2){
			setTimeout("sprawdz()",150);
		}
	}

}
function sprawdz(){
	
	if (elementy[karta1] != elementy[karta2]){
		no.play();
		document.getElementById(karta1).innerHTML="<div style='color: red;'>"+elementy[karta1]+"</div>";
		document.getElementById(karta2).innerHTML="<div style='color: red;'>"+elementy[karta2]+"</div>";
		kartaodw1 = karta1;
		kartaodw2 = karta2;
		karta1 = "";
		karta2 = "";
		setTimeout("odwroc_zle()", 300);
		
	}	
	else {
		yes.play();
		document.getElementById(karta1).setAttribute("onclick",";");
		document.getElementById(karta1).innerHTML="<div style='color: #00dd00;'>"+elementy[karta1]+"</div>";
		document.getElementById(karta2).setAttribute("onclick",";");
		document.getElementById(karta2).innerHTML="<div style='color: #00dd00;'>"+elementy[karta2]+"</div>";
		kartaodw1 = karta1;
		kartaodw2 = karta2;
		karta1 = "";
		karta2 = "";
		setTimeout("odwroc_dobre()", 300);
	}
}
function odwroc_dobre(){
	wynik++;
	if (wynik == 12){
		document.getElementById("content").innerHTML="<div style='font-size: 50px; margin-bottom: 20px'>Wygrana!</div><div><input type='submit' value='Graj ponownie' onclick='location.reload();'></div>";
	}
	document.getElementById(kartaodw1).innerHTML="";
	document.getElementById(kartaodw2).innerHTML="";
	document.getElementById(kartaodw1).style.backgroundColor = "transparent";
	document.getElementById(kartaodw1).style.border = "3px solid black";
	document.getElementById(kartaodw1).style.cursor = "default";
	document.getElementById(kartaodw2).style.backgroundColor = "transparent";
	document.getElementById(kartaodw2).style.border = "3px solid black";
	document.getElementById(kartaodw2).style.cursor = "default";
}

function odwroc_zle(){
		document.getElementById(kartaodw1).innerHTML="";
		document.getElementById(kartaodw2).innerHTML="";
}
function przegrana() {
	document.getElementById("content").innerHTML="<div style='font-size: 50px; margin-bottom: 20px'>Przegrana!</div><div><input type='submit' value='Graj ponownie' onclick='location.reload();'></div>";
}