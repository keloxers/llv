<?php

class proyectosController extends BaseController {


	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{


        $proyectos = DB::table('proyectos')
													->orderBy('id', 'desc')
													->paginate(30);



        return View::make('proyectos.index', array('proyectos' => $proyectos
									));

	}




	public function buscancallar()
	{





        return View::make('buscancallar', array(
									));

	}




/**
* Display a listing of the resource.
*
* @return Response
*/
public function ver()
{

			$proyectos = DB::table('proyectos')->orderBy('id', 'desc')->paginate(10);
			$title = "proyectos";
			return View::make('proyectos.ver', array('title' => $title, 'proyectos' => $proyectos));

}




	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        return View::make('proyectos.create');
	}



	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{

		// var_dump(Input::All());
		// die;
		//

		// 'categorias_id' => 'exists:rubros,id'

		$rules = [
			'proyecto' => 'required'
		];


		if (! Proyecto::isValid(Input::all(),$rules)) {

			return Redirect::back()->withInput()->withErrors(Proyecto::$errors);

		}

		$proyecto = new proyecto;

		$proyecto->users_id = Sentry::getUser()->id;
		$proyecto->proyecto = Input::get('proyecto');
		$proyecto->descripcion = Input::get('descripcion');
		$proyecto->autores = Input::get('autores');

		$proyecto->save();

		$proyectos_id =  $proyecto->id;
		$descripcion = "Nuevo proyecto";
		$estado = Input::get('estado');

		$proyectosestado = new Proyectosestado;
		$proyectosestado->proyectos_id = $proyectos_id;
		$proyectosestado->descripcion = $descripcion;
		$proyectosestado->proyectosestado = $estado;
		$proyectosestado->save();


		return Redirect::to('/proyectos/ver');

	}


		/**
		 * Show the form for creating a new resource.
		 *
		 * @return Response
		 */
		public function createestado($id)
		{
	        return View::make('proyectos.createestado', array('proyectos_id' => $id));
		}


/**
 * storeestado a newly created resource in storage.
 *
 * @return Response
 */
public function storeestado()
{


	$proyectos_id =  Input::get('proyectos_id');
	$descripcion = Input::get('descripcion');
	$estado = Input::get('estado');

	$proyectosestado = new Proyectosestado;
	$proyectosestado->proyectos_id = $proyectos_id;
	$proyectosestado->descripcion = $descripcion;
	$proyectosestado->proyectosestado = $estado;
	$proyectosestado->save();

	return Redirect::to('/proyectos/ver');

}
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($url_seo)
	{

		$proyecto = DB::table('proyectos')->where('url_seo', '=', $url_seo)->first();;

		$id = $proyecto->id;

		$proyecto = proyecto::find($id);

		$valor=rand(1, 3);

		if ($proyecto->visitas==0 and $proyecto->categorias_id==14) {
				$proyecto->created_at = $proyecto->updated_at;

				$arch = new Archivo;

				$arch->archivo = "flor-negra-0a018d4e-acec-4890-9469-299fbd257a1b (1) (1).jpg";
				$arch->descripcion = "Fallecimiento";
				$arch->padre_id = $id;
				$arch->padre = "proyecto";
				$arch->save();

		}

		$proyecto->visitas = $proyecto->visitas + $valor;

		$proyecto->save();
		$categoria = Categoria::find($proyecto->categorias_id);



		$archivos = DB::table('archivos')
			->where('padre', '=', 'proyecto')
			->where('padre_id', '=', $proyecto->id)
			->get();


		$proyectosrelacionados = DB::table('proyectos')
											->where('estado', '=', 'publicado')
											->where('categorias_id', '=', $proyecto->categorias_id)
											->where('id', '<>', $proyecto->id)
											->where('created_at', '>=', new DateTime('-10 days'))
											->orderBy('visitas', 'desc')
											->paginate(3);


		// show the view and pass the nerd to it

		return View::make('proyectos.show', array(
											'proyecto' => $proyecto,
											'proyectosrelacionados' => $proyectosrelacionados,
											'categoria' => $categoria,
											'archivos' => $archivos));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$proyecto = proyecto::find($id);
		$title = "Editar proyecto";

        return View::make('proyectos.edit', array('title' => $title, 'proyecto' => $proyecto));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{



		$proyecto = proyecto::find($id);

		$rules = [
			'proyecto' => 'required|unique:proyectos,proyecto,' . $id,
		];
		//
		//
		//
		// if (! proyecto::isValid(Input::all(),$rules)) {
		//
		// 	return Redirect::back()->withInput()->withErrors(proyecto::$errors);
		//
		// }


		$proyecto->proyecto = Input::get('proyecto');
		$proyecto->descripcion = Input::get('descripcion');
		$proyecto->autores = Input::get('autores');

		$proyecto->save();

		return Redirect::to('/proyectos/ver');

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$input = Input::all();


		$proyecto = proyecto::find($id)->delete();

		return Redirect::to('/proyectos');
	}


/**
* Remove the specified resource from storage.
*
* @param  int  $id
* @return Response
*/
public function publicar($id)
{

	$proyecto = proyecto::find($id);
	$proyecto->estado = 'publicado';
	$proyecto->save();

	return Redirect::to('/proyectos/ver');
}




    public function search(){

        $term = Input::get('term');

        $proyectos = DB::table('proyectos')->where('proyecto', 'like', '%' . $term . '%')->get();

        $adevol = array();

        if (count($proyectos) > 0) {

            foreach ($proyectos as $proyecto)
                {
                	$precio_sin_iva = $proyecto->precio_publico / (($proyecto->iva / 100) + 1);

                    $adevol[] = array(
                        'id' => $proyecto->id,
                        'value' => $proyecto->proyecto,
                        'precio' => $precio_sin_iva,
                        'iva' => $proyecto->iva,
                    );
            }
        } else {
                    $adevol[] = array(
                        'id' => 0,
                        'value' => 'no hay coincidencias para: ' .  $term,
                        'precio' => 0,
                        'iva' => 0,
                    );
        }

        return json_encode($adevol);


    }







		public function url_slug($str, $options = array()) {
			// Make sure string is in UTF-8 and strip invalid UTF-8 characters
			$str = mb_convert_encoding((string)$str, 'UTF-8', mb_list_encodings());

			$defaults = array(
				'delimiter' => '-',
				'limit' => null,
				'lowercase' => true,
				'replacements' => array(),
				'transliterate' => false,
			);

			// Merge options
			$options = array_merge($defaults, $options);

			$char_map = array(
				// Latin
				'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A', 'Å' => 'A', 'Æ' => 'AE', 'Ç' => 'C',
				'È' => 'E', 'É' => 'E', 'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I', 'Ï' => 'I',
				'Ð' => 'D', 'Ñ' => 'N', 'Ò' => 'O', 'Ó' => 'O', 'Ô' => 'O', 'Õ' => 'O', 'Ö' => 'O', 'Ő' => 'O',
				'Ø' => 'O', 'Ù' => 'U', 'Ú' => 'U', 'Û' => 'U', 'Ü' => 'U', 'Ű' => 'U', 'Ý' => 'Y', 'Þ' => 'TH',
				'ß' => 'ss',
				'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'ae', 'ç' => 'c',
				'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i',
				'ð' => 'd', 'ñ' => 'n', 'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ő' => 'o',
				'ø' => 'o', 'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ü' => 'u', 'ű' => 'u', 'ý' => 'y', 'þ' => 'th',
				'ÿ' => 'y',

				// Latin symbols
				'©' => '(c)',

				// Greek
				'Α' => 'A', 'Β' => 'B', 'Γ' => 'G', 'Δ' => 'D', 'Ε' => 'E', 'Ζ' => 'Z', 'Η' => 'H', 'Θ' => '8',
				'Ι' => 'I', 'Κ' => 'K', 'Λ' => 'L', 'Μ' => 'M', 'Ν' => 'N', 'Ξ' => '3', 'Ο' => 'O', 'Π' => 'P',
				'Ρ' => 'R', 'Σ' => 'S', 'Τ' => 'T', 'Υ' => 'Y', 'Φ' => 'F', 'Χ' => 'X', 'Ψ' => 'PS', 'Ω' => 'W',
				'Ά' => 'A', 'Έ' => 'E', 'Ί' => 'I', 'Ό' => 'O', 'Ύ' => 'Y', 'Ή' => 'H', 'Ώ' => 'W', 'Ϊ' => 'I',
				'Ϋ' => 'Y',
				'α' => 'a', 'β' => 'b', 'γ' => 'g', 'δ' => 'd', 'ε' => 'e', 'ζ' => 'z', 'η' => 'h', 'θ' => '8',
				'ι' => 'i', 'κ' => 'k', 'λ' => 'l', 'μ' => 'm', 'ν' => 'n', 'ξ' => '3', 'ο' => 'o', 'π' => 'p',
				'ρ' => 'r', 'σ' => 's', 'τ' => 't', 'υ' => 'y', 'φ' => 'f', 'χ' => 'x', 'ψ' => 'ps', 'ω' => 'w',
				'ά' => 'a', 'έ' => 'e', 'ί' => 'i', 'ό' => 'o', 'ύ' => 'y', 'ή' => 'h', 'ώ' => 'w', 'ς' => 's',
				'ϊ' => 'i', 'ΰ' => 'y', 'ϋ' => 'y', 'ΐ' => 'i',

				// Turkish
				'Ş' => 'S', 'İ' => 'I', 'Ç' => 'C', 'Ü' => 'U', 'Ö' => 'O', 'Ğ' => 'G',
				'ş' => 's', 'ı' => 'i', 'ç' => 'c', 'ü' => 'u', 'ö' => 'o', 'ğ' => 'g',

				// Russian
				'А' => 'A', 'Б' => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D', 'Е' => 'E', 'Ё' => 'Yo', 'Ж' => 'Zh',
				'З' => 'Z', 'И' => 'I', 'Й' => 'J', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N', 'О' => 'O',
				'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T', 'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
				'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sh', 'Ъ' => '', 'Ы' => 'Y', 'Ь' => '', 'Э' => 'E', 'Ю' => 'Yu',
				'Я' => 'Ya',
				'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'yo', 'ж' => 'zh',
				'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o',
				'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c',
				'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sh', 'ъ' => '', 'ы' => 'y', 'ь' => '', 'э' => 'e', 'ю' => 'yu',
				'я' => 'ya',

				// Ukrainian
				'Є' => 'Ye', 'І' => 'I', 'Ї' => 'Yi', 'Ґ' => 'G',
				'є' => 'ye', 'і' => 'i', 'ї' => 'yi', 'ґ' => 'g',

				// Czech
				'Č' => 'C', 'Ď' => 'D', 'Ě' => 'E', 'Ň' => 'N', 'Ř' => 'R', 'Š' => 'S', 'Ť' => 'T', 'Ů' => 'U',
				'Ž' => 'Z',
				'č' => 'c', 'ď' => 'd', 'ě' => 'e', 'ň' => 'n', 'ř' => 'r', 'š' => 's', 'ť' => 't', 'ů' => 'u',
				'ž' => 'z',

				// Polish
				'Ą' => 'A', 'Ć' => 'C', 'Ę' => 'e', 'Ł' => 'L', 'Ń' => 'N', 'Ó' => 'o', 'Ś' => 'S', 'Ź' => 'Z',
				'Ż' => 'Z',
				'ą' => 'a', 'ć' => 'c', 'ę' => 'e', 'ł' => 'l', 'ń' => 'n', 'ó' => 'o', 'ś' => 's', 'ź' => 'z',
				'ż' => 'z',

				// Latvian
				'Ā' => 'A', 'Č' => 'C', 'Ē' => 'E', 'Ģ' => 'G', 'Ī' => 'i', 'Ķ' => 'k', 'Ļ' => 'L', 'Ņ' => 'N',
				'Š' => 'S', 'Ū' => 'u', 'Ž' => 'Z',
				'ā' => 'a', 'č' => 'c', 'ē' => 'e', 'ģ' => 'g', 'ī' => 'i', 'ķ' => 'k', 'ļ' => 'l', 'ņ' => 'n',
				'š' => 's', 'ū' => 'u', 'ž' => 'z'
			);

			// Make custom replacements
			$str = preg_replace(array_keys($options['replacements']), $options['replacements'], $str);

			// Transliterate characters to ASCII
			if ($options['transliterate']) {
				$str = str_replace(array_keys($char_map), $char_map, $str);
			}

			// Replace non-alphanumeric characters with our delimiter
			$str = preg_replace('/[^\p{L}\p{Nd}]+/u', $options['delimiter'], $str);

			// Remove duplicate delimiters
			$str = preg_replace('/(' . preg_quote($options['delimiter'], '/') . '){2,}/', '$1', $str);

			// Truncate slug to max. characters
			$str = mb_substr($str, 0, ($options['limit'] ? $options['limit'] : mb_strlen($str, 'UTF-8')), 'UTF-8');

			// Remove delimiter from ends
			$str = trim($str, $options['delimiter']);

			return $options['lowercase'] ? mb_strtolower($str, 'UTF-8') : $str;
		}







		public function categorias($id)
		{


	        $proyecto_tapa = DB::table('proyectos')
														->where('estado', '=', 'publicado')
														->where('tipo', '=', 'principal')
														->where('categorias_id', '=', $id)
														->orderBy('id', 'desc')
														->paginate(3);

					$proyectos = DB::table('proyectos')
														->where('estado', '=', 'publicado')
														->where('categorias_id', '=', $id)
														->orderBy('id', 'desc')->paginate(16);

					$proyectos_masvistos = DB::table('proyectos')
														->where('estado', '=', 'publicado')
														->where('created_at', '>=', new DateTime('-10 days'))
														->orderBy('visitas', 'desc')
														->paginate(4);

					$categorias = DB::table('categorias')
														->orderBy('categoria', 'asc')
														->get();

					$banners_smalls = DB::table('banners')
											->where('posicion', '=', 'homesmall')
											->get();

					$banners_lateral = DB::table('banners')
											->where('posicion', '=', 'homelateral')
											->get();


					$clasificados = DB::table('clasificados')
														->where('estado', '=', 'publicado')
														->orderBy('id', 'desc')->paginate(30);


					$encuesta = DB::table('encuestas')
														->where('activo', '=', 'si')
														->orderBy('id', 'desc')
														->first();
					if ($encuesta) {
							$respuestas = DB::table('respuestas')
															->where('encuestas_id', '=', $encuesta->id)
															->orderBy('id')
															->get();
					} else {
							$respuestas = "";
					}

	        return View::make('home', array('proyecto_tapa' => $proyecto_tapa,
																					'proyectos' => $proyectos,
																					'proyectos_masvistos' => $proyectos_masvistos,
																					'categorias' => $categorias,
																					'banners_smalls' => $banners_smalls,
																					'banners_lateral' => $banners_lateral,
																					'clasificados' => $clasificados,
																					'encuesta' => $encuesta,
																					'respuestas' => $respuestas
										));

		}







}
