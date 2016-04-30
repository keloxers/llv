@extends('layouts.default')

@section('content')


					<div class="container shortcode-forms">
							<div class="row">
								<div class="col-md-12">

									<h3 class="uppercase">Agregar Proyecto</h3>



	<?php
		echo "<a href='/proyectos/create' class='btn-small color4'>Nuevo proyecto</a><br><br>";

		if (count($proyectos)>0 )  {


?>


													<table class="cart-table">

														<!-- Table head -->
														<thead>

													<!-- Table row -->
													<tr>
														<th>
															Proyecto
														</th>
														<th>
															Descripcion
														</th>
														<th>
															Autores
														</th>
														<th>
															Estado
														</th>

														<th>
															Accion
														</th>
													</tr>
													<!-- End table row -->

												</thead>
												<!-- End table head -->

												<!-- Table body -->
												<tbody>

												<?php

											foreach ($proyectos as $proyecto)
												{

												$proyectosestados = DB::table('proyectosestados')
																					->where('proyectos_id', '=', $proyecto->id)
																					->orderBy('id', 'desc')
																					->get();



														// $categoria = Categoria::find($proyecto->categorias_id);

														echo "<tr>";
												    echo "<td>" . $proyecto->proyecto . "</td>";
												    echo "<td>" . $proyecto->descripcion . "</td>";
														echo "<td>" . $proyecto->autores . "</td>";
												    echo "<td>";
														foreach ($proyectosestados as $proyectosestado)
															{
																echo $proyectosestado->created_at . " - " . $proyectosestado->proyectosestado . "<br>";
															}
														// $proyectosestado->proyectosestado
														echo "</td>";
														echo "<td>" ;

														echo "<a href='/proyectos/" . $proyecto->id . "/edit' class='btn-small color1'> Editar </a> ";
														echo "<a href='/proyectos/" . $proyecto->id . "/archivos/proyecto' class='btn-small color1'> Archivos </a> ";
														echo "<a href='/proyectos/" . $proyecto->id . "/nuevoestado' class='btn-small color1'> Estado </a><br>";
														// echo "<a href='/proyectos/" . $proyecto->id . "/delete' class='btn pi-btn-base pi-btn-small'>Eliminar</a> ";


														print "</td>";
														print "</tr>";



												}


											?>


											</tbody>
											<!-- End table body -->

										</table>

									<!-- End table -->


										{{ $proyectos->links()}}





							</footer>
						</section>
		<?php

			}

		?>

</div>
</div>
</div>

@stop
