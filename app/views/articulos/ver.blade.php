@extends('layouts.default')

@section('content')



<!-- SHORTCODE-ACCORDION -->
<div class="container shortcode-content">
	<div class="row">
		<div class="col-md-12">
			<h3 class="uppercase">Articulos</h3>
			 <a href='/articulos/create'>Nuevo articulo</a><br><br>
			<div class="accordionf">

				<?php

								if (count($articulos)>0 )  {


									foreach ($articulos as $articulo)
										{

												$categoria = Categoria::find($articulo->categorias_id);

												echo "<h3>$articulo->articulo</h3>";

												echo "<div class='pane'>";

												echo "<p>";
												echo "Copete:" . $articulo->copete . "<br>";
												echo "Tipo:" . $articulo->tipo . "<br>";
												echo "Estado:" . $articulo->estado . "<br>";

												echo "<a href='/articulos/" . $articulo->id . "/publicar' class='btn-small color4'>Publicar</a> ";
												echo "<a href='/articulos/" . $articulo->id . "/edit' class='btn-small color4'>Editar</a> ";
												echo "<a href='/articulos/" . $articulo->id . "/archivos/articulo' class='btn-small color4'>Archivos</a> ";
												echo "<a href='/articulos/" . $articulo->id . "/delete' class='btn-small color4'>Eliminar</a> ";

												echo "</p>";
												echo "</div>";

											}

									}
							?>


			</div>
		</div>
	</div>
</div>

{{ $articulos->links()}}


@stop
