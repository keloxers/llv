@extends('layouts.default')
@section('content')

<!-- NEWSFEED -->
<div class="news-feed">
	<div class="container">

		<div class="row">
			<div class="row">
				<div class="newsfeed isotope1 col-md-12">




									@foreach ($articulos as $articulo)

									<div class="item world">
										<div class="item-inner">

												<?php
												$texto = $articulo->texto;
												$archivos = DB::table('archivos')
												->where('padre', '=', 'articulo')
												->where('padre_id', '=', $articulo->id)
												->first();

												if (preg_match('/^.{1,460}\b/s', $articulo->copete, $match))
												{ $texto = $match[0]; }
												$categoria = Categoria::find($articulo->categorias_id);
												?>

											@if (count($archivos)>0 )
												<div class="mf-thumb">
													<a href="/articulos/show/{{ $articulo->url_seo }}">
														<img src="/uploads/big/{{ $archivos->archivo }}" class="img-responsive" alt=""/>
													</a>
													<span class="mag-cat-ribbon color3">{{ $categoria->categoria }}</span>
												</div>
											@endif

											<h4><a href="/articulos/show/{{ $articulo->url_seo }}">{{ $articulo->articulo }}</a></h4>
											<span class="nmeta">{{ $articulo->created_at }} - {{ $articulo->visitas }}</span>



												<p>{{ $texto }}...</p>
												<br>

												<a href="/articulos/show/{{ $articulo->url_seo }}" class="btn-small color1 space60">
										 			Leer
										 		</a>

											</div>
										</div>


									@endforeach




					</div>
				</div>



			</div>
			<div class="clearfix"></div>
			<div class="space30"></div>
			<!-- {{ $articulos->links()}} -->
		</div>
	</div>
</div>



@stop
