@extends('layouts.default')

@section('content')


					<div class="container shortcode-forms">
							<div class="row">
								<div class="col-md-7">

									<h3 class="uppercase">Modificar Proyecto</h3>



        <!-- Forms -->
        {{ Form::open(array('url' => URL::to('/proyectos/' . $proyecto->id), 'method' => 'PUT', 'class' => 'o-form')) }}

          <!-- First name form -->
              {{ Form::text('proyecto', $proyecto->proyecto, array('class' => 'form-control', 'id' => 'proyecto', 'placeholder' => 'Ingrese el titular')) }}
              <textarea class="" id="descripcion" name="descripcion" placeholder="Descripcion del proyecto" rows="4">{{$proyecto->descripcion}}</textarea>
              <textarea class="" id="autores" name="autores" placeholder="autores del proyecto" rows="16">{{$proyecto->autores}}</textarea>

              <br><br>
          <!-- Submit button -->
          <p>
            <button type="submit" class="btn-small color4">
							Modificar
						</button>
          </p>

        </form>

      </div>


  </div>
</div>
<!-- - - - - - - - - - END SECTION - - - - - - - - - -->

@stop
