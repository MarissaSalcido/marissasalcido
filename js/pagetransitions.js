$(document).ready (function() {

	var $main = $( '#main' ),
		$pages = $main.children( 'div.page' ),
		$iterate = $( '#trans-right' ),
		$backtrack = $('#trans-left'),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		animationOn = false;
		animEndEventName = 'animationend';
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'classesList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'current-page' );

		$iterate.on( 'click', function() {
			if (!animationOn){
			animcursor = 1;
			nextPage( animcursor );
			}
		} );
		$backtrack.on('click', function(){
			if (!animationOn){
			animcursor = 2;
			nextPage(animcursor);
			}
		});

	}
	
	function nextPage(options ) {
		animationOn = true;
		var animation = options;
		var $currPage = $pages.eq( current );
		if (animation === 1){
			if( current < pagesCount - 1 ) {
				++current;
			}
			else {
				current = 0;
			}
		}
		else{
			if (current === 0){
				current = 2;
			}
			else{
				--current;
			}

		}
		
		var $nextPage = $pages.eq( current ).addClass( 'current-page' ),
			outClass = '', inClass = '';

		if (animation === 1){
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
		}
		else{
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			resetPage($currPage, $nextPage);
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			resetPage($currPage, $nextPage);
		} );

	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'classesList' ) );
		$inpage.attr( 'class', $inpage.data( 'classesList' ) + ' current-page' );
		animationOn = false;
	}

	init();

	return { 
		init : init,
		nextPage : nextPage,
	};

});