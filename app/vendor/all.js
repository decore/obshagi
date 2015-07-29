$(document).ready(function(){
	$('.fancybox').fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		helpers: {
			title: {
				type: 'inside'
			}
		}
	});

	$('.fix').liFixar({
		side: 'top',
		position: 0
	});

	$('select').select2();

	$('.datepicker').datepicker({
		startDate: '01.01.1940',
		startView: 2,
		language: 'ru'
	});

	$.ionTabs('#tabs', {
		type: 'none'
	});

	$('.icon-list').on('click', function(){
		$.ionTabs.setTab('tab-open', 'tab-list');
	});

	$('.icon-map').on('click', function(){
		$.ionTabs.setTab('tab-open','tab-maps');
	});

	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/app/vendor/outdatedbrowser/lang/ru.html'
	})

	$('input[type=tel]').inputmask('+[9] 999 9999999');

	$('.pnotify1').click(function(){
		PNotify.prototype.options.styling = "bootstrap3";
		if (typeof stack_context === "undefined") stack_context = {
			'dir1': 'down',
			'dir2': 'left',
			'firstpos1': 70,
			'firstpos2': 10
		}
		new PNotify({
			addclass: 'short',
			title: 'Ошибка!',
			text: 'Произошла ошибка в ваших действиях, повторите попытку позже.',
			stack: stack_context,
			delay: 5000,
			icon: 'icon-error',
			width: '200px',
			type: 'error',
			animation: 'slide',
			animation_speed: 'normal',
			mouse_reset: false,
			buttons: {
				sticker: false,
				closer_hover: false
			}
		});
		new PNotify({
			addclass: 'short',
			title: 'Сообщение!',
			text: 'Вам пришло уведомление поясняющее подробности.',
			stack: stack_context,
			delay: 5000,
			icon: 'icon-info',
			width: '200px',
			type: 'info',
			animation: 'slide',
			animation_speed: 'normal',
			mouse_reset: false,
			buttons: {
				sticker: false,
				closer_hover: false
			}
		});
		new PNotify({
			addclass: 'short',
			title: 'Выполнено!',
			text: 'Действие выполнено, можете продолжать далее.',
			stack: stack_context,
			delay: 5000,
			icon: 'icon-success',
			width: '200px',
			type: 'success',
			animation: 'slide',
			animation_speed: 'normal',
			mouse_reset: false,
			buttons: {
				sticker: false,
				closer_hover: false
			}
		});
	});

	if ($.browser.msie) {
		$('body').addClass('ie');
	};
	if ($.browser.mozilla) {
		$('body').addClass('ff');
	};
});
