@extends('layouts.default')

@section('content')


<!-- SHORTCODE-ACCORDION -->
<div class="container shortcode-content">
	<div class="row">
		<div class="col-md-12">
			<h3 class="uppercase">Proyectos presentados</h3>
			<div class="accordionf">



	<?php if (count($proyectos)>0 )  {

												 foreach ($proyectos as $proyecto) {

														echo "<h3>$proyecto->proyecto</h3>";

														echo "<div class='pane'>";

														echo "<p>";
														echo "Creado:" . $proyecto->created_at . "<br>";
														echo "Modificado:" . $proyecto->updated_at . "<br>";
														echo "Estado:" . $proyecto->descripcion . "<br>";
														echo "Autor/es:" . $proyecto->autores . "<br>";

														echo "</p>";
														echo "</div>";






												} ?>


		<?php } ?>



					</div>
				</div>
			</div>
		</div>


@stop
