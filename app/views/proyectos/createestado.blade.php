@extends('layouts.default')

@section('content')




					<div class="container shortcode-forms">
							<div class="row">
								<div class="col-md-7">

									<h3 class="uppercase">Agregar Estado al proyecto</h3>


					{{ Form::open(array('route' => 'proyectos.storeestado', 'class' => 'o-form')) }}
					{{ Form::hidden('proyectos_id' , $proyectos_id, array('proyectos_id' =>'proyectos_id')) }}

					<textarea class="form-control" id="descripcion" name="descripcion" placeholder="Descripción" rows="4"></textarea>
					<label for="exampleInputMessage-3">Estado</label>

							{{ Form::select('estado', array(
														'Ingreso' => 'Ingreso',
														'Despacho' => 'Despacho',
														'Aprobado' => 'Aprobado',
														'Rechazado' => 'Rechazado'
														), 'ingreso',
														array('class' => 'form-control input-lg', 'id' =>'estado', 'name' =>'estado')) }}

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
