// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function(){
		$('#beep').tap(function (){
			navigator.notification.beep(1);//numero de veses que deseas  que modifique});//beep
		});
		$('#btnvibrar').on('tap', function (){
			navigator.notification.vibrate(2000);
		});
	});
});