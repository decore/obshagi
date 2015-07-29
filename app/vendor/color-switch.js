//- Created ~AlexMil~

$(document).ready(function() {
	// List color theme
	var theme1 = '#08BFBA';
	var theme2 = '#B2C009';
	var theme3 = '#C09A84';
	var theme4 = '#718FC0';
	var theme5 = '#81C075';
	var theme6 = '#C05353';
	//---------------------------------------
	// List of path to css themes
	var color1 = '../app/theme1.css';
	var color2 = '../app/theme2.css';
	var color3 = '../app/theme3.css';
	var color4 = '../app/theme4.css';
	var color5 = '../app/theme5.css';
	var color6 = '../app/theme6.css';
	// Arrays themes and path to css
	var arrTheme = [theme1, theme2, theme3, theme4, theme5, theme6];
	var arrPath = [color1, color2, color3, color4, color5, color6];
	//---------------------------------------
	$('body').append('<div class="color-switch">');
	$('.color-switch').css({
		position: 'fixed',
		top: '40%',
		width: '30px',
		borderRadius: '0 7px 7px 0',
		background: '#fff',
		boxShadow: '0 0 20px rgba(0,0,0,.3)',
		padding: '5px 0',
		zIndex: '10000'
	});
	for (var i = 0; i <= arrTheme.length - 1; i++) {
		$('div.color-switch').append('<div class="color-btn">');
	};
	var a = 0;
	var arrId = new Array();
	$('div.color-btn').each(function() {
		a++;
		var btnId = 'color' + a;
		$(this).attr('id', btnId).css('backgroundColor', arrTheme[a-1]);
		arrId[a] = btnId;
	});
	$('div.color-btn').css({
		width: '20px',
		height: '20px',
		borderRadius: '7px',
		margin: '5px',
		cursor: 'pointer',
		boxShadow: 'inset 0 5px 3px rgba(0,0,0,.3)'
	});
	$('.color-btn').click(function() {
		var clickBtn = $(this).attr('id');
		for (var a = 0; a <= arrId.length-1; a++) {
			if (arrId[a] == clickBtn) {
				var b = a - 1;
				$('#themeSwitch').attr('href', arrPath[b]);
			}
		}
	});
});