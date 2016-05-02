@extends('layouts.default')

@section('content')

<?php $user = Sentry::findUserById($articulo->users_id); ?>


	<!-- BLOG CONTENT -->
	<div class="container"  id="blog-content">
		<div class="row">
			<div class="col-md-9">


				<article class="blog-slider">
					<?php foreach ($archivos as $archivo) { ?>
							<div id="blog-slider" class="owl-carousel owl-theme">
									<div class="item">
										<img src="/uploads/big/{{ $archivo->archivo }}" class="img-responsive" alt=""/>
									</div>
							</div>
					<?php } ?>
					<div class="excerpt slider-excerpt">
						<h4><a href="#">{{$articulo->articulo}}</a></h4>
						<div class="post-meta">
							{{$articulo->created_at}} <em>/</em> By <a href="#">{{$user->last_name}}, {{$user->first_name}}</a> <em>/</em> In <a href="#">{{$categoria->categoria}}</a>
						</div>
						<h5>{{$articulo->copete}}</h5>
						<br>
						<p>{{$articulo->texto}}</p>
					</div>
				</article>



			</div>

			<!-- SIDEBAR -->
			<aside class="col-md-3">
				<div class="side-content">
					<h5>Buscar en las noticias</h5>
					<div class="faq-search">
						<form>
							<input type="text">
							<button type="submit" class="btn-small">Buscar</button>
						</form>
					</div>
				</div>

				<div class="side-content">
					<h5>Twitters</h5>
					<div id="side-slider" class="owl-carousel owl-theme">

					</div>
				</div>

				
			</aside>
		</div>
	</div>


	@stop
