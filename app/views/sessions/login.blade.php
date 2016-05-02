@extends('layouts.default')
@section('content')


<!-- LOGIN/REG CONTENT -->
<div class="checkout-content container">
	<div class="row">
		<div class="col-md-6 login-content">
			<div class="col-md-11 pull-right">
				<h3 class="uppercase">Ingresar</h3>
					{{ Form::open(array('action' => 'SessionController@store', 'class' => 'o-form')) }}
					{{ Form::text('email', null, array('placeholder' => trans('users.email'), 'autofocus')) }}
					{{ Form::password('password', array('placeholder' => trans('users.pword')))}}
					<div class="clearfix space30"></div>
					<button class="btn-small btn-center" type="submit">Ingresar</button>
				</form>
			</div>
		</div>

		<div class="col-md-6 register-content">
			<div class="col-md-11 pull-left">
				<h3 class="uppercase">Nuevos Usuarios</h3>
					{{ Form::open(array('action' => 'UserController@store', 'class' => 'o-form')) }}
					{{ Form::text('email', null, array('placeholder' => trans('users.email'))) }}
					{{ Form::password('password', array('placeholder' => trans('users.password'))) }}
					{{ Form::password('password_confirmation', array('placeholder' => trans('users.confirm_password'))) }}

					<div class="clearfix space40"></div>
					<button class="btn-small btn-center" type="submit">Registrarse</button>
				</form>
			</div>
		</div>
	</div>
</div>



@stop
