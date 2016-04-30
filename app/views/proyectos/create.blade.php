@extends('layouts.default')

@section('content')




					<div class="container shortcode-forms">
							<div class="row">
								<div class="col-md-7">

									<h3 class="uppercase">Agregar Proyecto</h3>


				{{ Form::open(array('route' => 'proyectos.store', 'class' => 'o-form')) }}


				{{ Form::text('proyecto', '', array('class' => '', 'id' => 'proyecto', 'placeholder' => 'Nombre del proyecto')) }}




							<textarea class="form-control" id="descripcion" name="descripcion" placeholder="Descripción" rows="4"></textarea>
							<textarea class="form-control" id="autores" name="autores" placeholder="Autores" rows="4"></textarea>
						<label for="exampleInputMessage-3">Estado</label>

							{{ Form::select('estado', array(
														'Ingreso' => 'Ingreso',
														'Despacho' => 'Despacho',
														'Aprobado' => 'Aprobado',
														'Rechazado' => 'Rechazado'
														), 'ingreso',
														array('class' => 'form-control input-lg', 'id' =>'estado')) }}

					<br><br>
					<p>
						<button type="submit" class="btn-small color4">
							Guardar
						</button>
					</p>
					<!-- End submit button -->

				</form>
				<!-- End forms -->

				</div>
			</div>
			<!-- End col 6 -->

	</div>

<!-- - - - - - - - - - END SECTION - - - - - - - - - -->





@stop
