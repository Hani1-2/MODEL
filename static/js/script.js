$(function() {
	var rangePercent = $('[type="range"]').val();
	$('[type="range"]').on('change input', function() {
		rangePercent = $('[type="range"]').val();
		$('h4').html(rangePercent+'<span></span>');
		$('[type="range"], h4>span').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
		// $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
		$('h4').css({'transform': 'translateX(-50%) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
	});
});
function updateTextInput(val) {
	document.getElementById('textInput_HIC-1340-PV').value=val; 
  }
function updateTextInput_1(val) {
	document.getElementById("textInput_HIC-1340-SETPOINT").value=val; 
  }
function updateTextInput_2(val) {
document.getElementById("textInput_HIC-1340-OUTPUT").value=val; 
}
function updateTextInput_3(val) {
document.getElementById("textInput_TI-1112-PV").value=val; 
}
function updateTextInput_4(val) {
document.getElementById("textInput_TIC-114-PV").value=val; 
}
function updateTextInput_5(val) {
document.getElementById("textInput_TIC-119-PV").value=val; 
}
function updateTextInput_6(val) {
document.getElementById("textInput_TIC-119-SETPOINT").value=val; 
}
function updateTextInput_7(val) {
document.getElementById("textInput_TIC-119-OUTPUT").value=val; 
}
function updateTextInput_8(val) {
document.getElementById("textInput_TI-306-PV").value=val; 
}
function updateTextInput_9(val) {
document.getElementById("textInput_TI-313-PV").value=val; 
}
function updateTextInput_10(val) {
document.getElementById("textInput_TI-315-PV").value=val; 
}
function updateTextInput_11(val) {
document.getElementById("textInput_TIC-305-PV").value=val; 
}
function updateTextInput_12(val) {
document.getElementById("textInput_TIC-305-SETPOINT").value=val; 
}
function updateTextInput_13(val) {
document.getElementById("textInput_TIC-314-PV").value=val; 
}
function updateTextInput_14(val) {
document.getElementById("textInput_TIC-314-SETPOINT").value=val; 
}
function updateTextInput_15(val) {
	document.getElementById("textInput_LIC-404-PV").value=val; 
  }
function updateTextInput_16(val) {
document.getElementById("textInput_LIC-404-SETPOINT").value=val; 
}
function updateTextInput_17(val) {
document.getElementById("textInput_LIC-404-OUTPUT").value=val; 
}
function updateTextInput_18(val) {
document.getElementById("textInput_TIC-600-PV").value=val; 
}
function updateTextInput_19(val) {
document.getElementById("textInput_TIC-600-SETPOINT").value=val; 
}
function updateTextInput_20(val) {
document.getElementById("textInput_TIC-600-OUTPUT").value=val; 
}
function updateTextInput_21(val) {
document.getElementById("textInput_TIC-606-PV").value=val; 
}
function updateTextInput_22(val) {
document.getElementById("textInput_TIC-606-SETPOINT").value=val; 
}
function updateTextInput_23(val) {
document.getElementById("textInput_TIC-606-OUTPUT").value=val; 
}
