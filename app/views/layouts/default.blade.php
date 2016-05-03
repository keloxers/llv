<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!-->	<html> <!--<![endif]-->
<head>

	<!-- Meta -->
	<meta charset="utf-8">
	<meta name="keywords" content="HTML5 Template" />
	<meta name="description" content="">
	<meta name="author" content="">

	<title>{{trans('pages.name')}}</title>

	<!-- Mobile Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Favicon -->
	<link rel="shortcut icon" href="/favicon.ico">

	<!-- Google Webfont -->
	<link rel="stylesheet" href="/css/ico/icomoon/style.css">
	<link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Montserrat:400,700'>
	<link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

	<!-- CSS -->
	<link rel="stylesheet" href="/css/bootstrap.css">
	<link rel="stylesheet" href="/js/vendor/easytabs/easy-responsive-tabs.css">
	<link rel="stylesheet" href="/js/vendor/instastream/jquery.instastream.css">
	<link rel="stylesheet" href="/js/vendor/owl-carousel/owl.carousel.css">
	<link rel="stylesheet" href="/js/vendor/owl-carousel/owl.theme.css">
	<link rel="stylesheet" href="/js/vendor/owl-carousel/owl.transitions.css">
	<link rel="stylesheet" href="/js/vendor/flex-slider/flexslider.css"/>
	<link rel="stylesheet" href="/js/vendor/slick/slick.css"/>
	<link rel="stylesheet" href="/js/vendor/rsplugin/rs-plugin//css/settings.css" media="screen"/>
	<link rel="stylesheet" href="/css/prettyphoto.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/responsive.css">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond./js/1.4.2/respond.min.js"></script>
	<![endif]-->

</head>
<body>

<div class="body">
	<!-- HEADER -->
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-4 logo">
					<h1><a href="/">Labor Legislativa Virasoro</a></h1>
				</div>
				<div class="col-md-8">
					<div class="search pull-right">
						<span class="icon-search2 slide-search"></span>
					</div>
					<!-- NAVIGATION -->
					<nav id="nav_menu" class="pull-right">
						<ul>

<!--
							<li class='has-sub'>
								<a href='#'>Features</a>
								<ul>
									<li><a href='./elements_tabs.html'>Elements - Tabs</a></li>
									<li><a href='./elements_forms.html'>Elements - Forms</a></li>
								</ul>
							</li> -->

							<li {{ (Request::is('proyectos') ? 'class="active"' : '') }}><a href="/proyectos">Proyectos</a></li>

							<li class='has-sub'>
								<a href='#'>Secciones</a>
								<ul>
									<?php
											$pages = DB::table('pages')
													->where('activo', '=', 'si')
													->where('mostrar_menu', '=', 'si')
													->orderBy('page', 'asc')->get();
											if (count($pages)) {
												foreach ($pages as $page) {
													?>
														<li><a href="/pages/{{$page->url_seo}}">{{$page->page}}</a></li>
													<?php
												}
											}
									?>
								</ul>
							</li>



							@if (Sentry::check() && Sentry::getUser()->hasAccess('admin'))

									<li class='has-sub'>
										<a href='#'>{{ Lang::get('messages.menu_admin') }}</a>
										<ul>
											<li><a href="{{ URL::to('/users') }}">{{trans('pages.users')}}</a></li>
											<li><a href="{{ URL::to('/groups') }}">{{trans('pages.groups')}}</a></li>
											<li><a href="/articulos/ver">Articulos</a></li>
									    <li><a href="/pages">Paginas</a></li>
											<li><a href="/proyectos/ver">Proyectos</a></li>
										</ul>
									</li>

							@endif


							@if (Sentry::check())
							<li {{ (Request::is('users/show/' . Session::get('userId')) ? 'class="active"' : '') }}><a href="{{ URL::to('users') }}/{{ Session::get('userId') }}">Perfil</a></li>
							<li><a href="{{ URL::to('logout') }}">{{trans('pages.logout')}}</a></li>
							@else
							<li {{ (Request::is('login') ? 'class="active"' : '') }}><a href="{{ URL::to('login') }}">{{trans('pages.login')}}</a></li>
							@endif





						</ul>
					</nav>
				</div>
			</div>
		</div>

		<!-- SLIDE SEARCH -->
		<div class="searchbar-content">
			<form class="search">
				<input type="text" placeholder="Ingrese lo que busca y presione Enter...">
			</form>
		</div>
	</header>
	<!-- HEADER -->

	<!-- WELCOME -->
	<div class="container home-welcome">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<h4>LABOR LEGISLATIVA VIRASORO</h4>
				<p>Bienvenido a todo nuestra web donde podra encontrar todo el trabajo de los concejales de Gdor. Virasoro</p>
			</div>
		</div>
	</div>


	@yield('content')


	<!-- FOOTER -->
	<footer>
		<div class="container">
			<div class="row">
				<div class="row">
					<div class="col-md-4">
						<h4>Labor Parlamentaria Virasoro</h4>
						<p>
							Gdor. Virasoro<br>
							Corrientes<br>
							Argentina<br>
						</p>
						<form class="newsletter">
							<input type="text" placeholder="Tu email">
							<button>Suscribirse</button>
						</form>
					</div>
					<div class="col-md-4">
						<h4>Mas vistas</h4>
						<ul class="lnews">
							<li>
								<h5><a href="#">noticia 1</a></h5>
							</li>
							<li>
								<h5><a href="#">noticia 2</a></h5>
							</li>
							<li>
								<h5><a href="#">noticia 3</a></h5>
							</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h4>Seguinos en</h4>
						<ul class="social">
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Dribbble</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">Lnkedin</a></li>
						</ul>
					</div>
					<div class="col-md-3">
					</div>
				</div>
			</div>
		</div>
	</footer>

	<!-- FOOTER-COPYRIGHT -->
	<div class="footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<p>2016 &copy; Labor Parlamentaria Virasoro. Todos los derechos reservados.</p>
				</div>
				<div class="col-md-6">

				</div>
			</div>
		</div>
	</div>
</div>

<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script src="/js/vendor/flex-slider/jquery.flexslider.js"></script>
<script src="/js/vendor/flex-slider/main.js"></script>

<script src="/js/jquery.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery.appear.js"></script>
<script src="/js/jquery.inview.js"></script>
<script src="/js/stellar.js"></script>
<script src="/js/jquery.easing.js"></script>
<script src="/js/classie.js"></script>
<script src="/js/cbpAnimatedHeader.js"></script>
<script src="/js/jquery.prettyphoto.js"></script>
<script src="/js/jquery.sticky.js"></script>
<script src="/js/jquery-ui.js"></script>
<script src="/js/jquery.animateNumber.js"></script>
<script src="/js/jquery.easy-ticker.min.js"></script>

<script src="/js/vendor/video/video.js"></script>
<script src="/js/vendor/slick/slick.js"></script>
<script src="/js/vendor/isotope/main.js"></script>
<script src="/js/vendor/rsplugin/main.js"></script>
<script src="/js/vendor/pikaday/pikaday.js"></script>
<script src="/js/vendor/audio/audioplayer.js"></script>
<script src="/js/vendor/isotope/isotope.pkgd.js"></script>
<script src="/js/vendor/owl-carousel/owl.carousel.js"></script>
<script src="/js/vendor/easytabs/easyResponsiveTabs.js"></script>
<script src="/js/vendor/instastream/jquery.instastream.js"></script>
<script src="/js/vendor/rsplugin/rs-plugin//js/jquery.themepunch.tools.min.js"></script>
<script src="/js/vendor/rsplugin/rs-plugin//js/jquery.themepunch.revolution.min.js"></script>
<script src="/js/vendor/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

<script src="/js/main.js"></script>



</body>
</html>
