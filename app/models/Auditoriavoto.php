<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class Auditoriavoto extends Eloquent {

		protected $table = 'auditoriavotos';

		protected $fillable = ['ip'];


	public static $errors;

	public static function isValid($data, $rules)
		{

			$validation = Validator::make($data, $rules);

			if ($validation->passes()) return true;

				static::$errors = $validation->messages();

			return false;
		}


		public static function voto() {

			$salida = true;

			$cookie_id = 0;
			$cookie_vv = "";


			$encuesta = DB::table('encuestas')
												->where('activo', '=', 'si')
												->orderBy('id', 'desc')
												->first();

			if ($encuesta) {


					if (isset($_COOKIE["cookie_id"])) {
						$cookie_id = $_COOKIE["cookie_id"];
					}

					if (isset($_COOKIE["cookie_vv"])) {
						$cookie_vv = $_COOKIE["cookie_vv"];
					}

					$ip = Auditoriavoto::get_client_ip();
					$sess = Session::getId();

					$auditoriavoto = DB::table('auditoriavotos')
															->where('cookie', '=', $cookie_vv)
															->where('encuestas_id', '=', $encuesta->id)
															->first();

					if ($auditoriavoto) {


						$salida = false;

					}

					$auditoriavoto = DB::table('auditoriavotos')
															->where('session', '=', $sess)
															->where('encuestas_id', '=', $encuesta->id)
															->first();

					if ($auditoriavoto) {
						$salida = false;
					}


					$auditoriavoto = DB::table('auditoriavotos')
															->where('ip', '=', $ip)
															->where('encuestas_id', '=', $encuesta->id)
															->first();

					if ($auditoriavoto) {

							$datetime1 = new DateTime($auditoriavoto->created_at);
							$datetime2 = new DateTime();
							$interval = $datetime1->diff($datetime2);
							$horas = $interval->format('%h%');

							if ($horas < 2 ) {
								$salida = false;
							}

					}
			} else {
				$salida = false;
			}

			return $salida;


		}




			public static function get_client_ip() {
			    $ipaddress = '';
			    if (getenv('HTTP_CLIENT_IP'))
			        $ipaddress = getenv('HTTP_CLIENT_IP');
			    else if(getenv('HTTP_X_FORWARDED_FOR'))
			        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
			    else if(getenv('HTTP_X_FORWARDED'))
			        $ipaddress = getenv('HTTP_X_FORWARDED');
			    else if(getenv('HTTP_FORWARDED_FOR'))
			        $ipaddress = getenv('HTTP_FORWARDED_FOR');
			    else if(getenv('HTTP_FORWARDED'))
			       $ipaddress = getenv('HTTP_FORWARDED');
			    else if(getenv('REMOTE_ADDR'))
			        $ipaddress = getenv('REMOTE_ADDR');
			    else
			        $ipaddress = 'UNKNOWN';
			    return $ipaddress;
			}



}
