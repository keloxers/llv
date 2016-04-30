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

				<div class="side-content">
					<h5>Recent Comments</h5>
					<ul class="rcomments">
						<li>
							<p><a href="#">Octavian Munteanu</a> on <a href="#">Ebola-Free Pham Visits White House After Re</a></p>
						</li>
						<li>
							<p><a href="#">Quentin Janey</a> on <a href="#">Sed posuere consectetur est at lobortis</a></p>
						</li>
						<li>
							<p><a href="#">Niki Sayre</a> on <a href="#">Praesent commodo cursus magna</a></p>
						</li>
						<li>
							<p><a href="#">Alethea Seo</a> on <a href="#">Morbi leo risus, porta ac consectetur ac</a></p>
						</li>
						<li>
							<p><a href="#">Sonny Farlow</a> on <a href="#">Curabitur blandit tempus porttitor</a></p>
						</li>
					</ul>
				</div>

				<div class="side-content">
					<h5>Categories</h5>
					<ul class="cat">
						<li>
							<p><a href="#">Business</a></p>
						</li>
						<li>
							<p><a href="#">Money</a></p>
						</li>
						<li>
							<p><a href="#">Music</a></p>
						</li>
						<li>
							<p><a href="#">Movies</a></p>
						</li>
						<li>
							<p><a href="#">Photography</a></p>
						</li>
						<li>
							<p><a href="#">Travel</a></p>
						</li>
						<li>
							<p><a href="#">Sport</a></p>
						</li>
					</ul>
				</div>

				<div class="side-content">
					<h5>Tags</h5>
					<ul class="tags	">
						<li>
							<p><a href="#">Oversized,</a></p>
						</li>
						<li>
							<p><a href="#">Marland,</a></p>
						</li>
						<li>
							<p><a href="#">Knit,</a></p>
						</li>
						<li>
							<p><a href="#">Cardigan,</a></p>
						</li>
						<li>
							<p><a href="#">Ullamcorper,</a></p>
						</li>
						<li>
							<p><a href="#">Pharetra,</a></p>
						</li>
						<li>
							<p><a href="#">Tortor,</a></p>
						</li>
						<li>
							<p><a href="#">Cursus,</a></p>
						</li>
						<li>
							<p><a href="#">Elit,</a></p>
						</li>
						<li>
							<p><a href="#">Oversized,</a></p>
						</li>
						<li>
							<p><a href="#">Marled,</a></p>
						</li>
						<li>
							<p><a href="#">Knit,</a></p>
						</li>
						<li>
							<p><a href="#">Cardigan,</a></p>
						</li>
						<li>
							<p><a href="#">Ullamcorper</a></p>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	</div>


	@stop
