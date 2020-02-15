export var dataConf = {
    "centralimage": "fondo_mundo.jpg",
    "marginbody":1,
    "iconpath": "HomePage_files/img/",
    "thumbnailspath": "HomePage_files/img/thumbnails/",
    "constbigger": 1.4, // Mínimo 1.0
    "constimgrelwidth": 1000,   // Ancho relativo de la imagen. Mida lo que mida le asignamos 2000
    "constimgrelheight": 2000   // Altura relativa de la imagen. Mida lo que mida le asignamos 1000
};

export var dataIco = [
        {
            "id": 1,
            "name": "Lista Links",
            "description": "Listado de todos los links",
            "type": "img",
            "coordinates": "900,1900",
            // Horizontal, Vertical
            "onclick": "fcn",
            // "action": "show_combo_data('help');",
			"action": "show_combo_data",
			"actionParams": "help",
            "icon": "help-icon.png",
            "titlealt": "Lista Links",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
    },
		{
		    "id": 2,
		    "name": "Google",
		    "description": "Buscador de internet",
		    "type": "img",
		    "coordinates": "800,930",
		    "onclick": "url",
		    "action": "http://www.google.es",
		    "icon": "google.png",
		    "titlealt": "Google",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 64,
            "thumbnails": "google.png",
		    "extra": "",
		    "active": "Y"
    }
    ,

        {
            "id": 3,
            "name": "Google Maps",
		    "description": "",
		    "type": "img",
		    "coordinates": "900,60",
		    "onclick": "url",
		    "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
            "icon": "earth-icon.png",
		    "titlealt": "Google Maps",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "GoogleMapsFC.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 4,
		    "name": "GMail",
		    "description": "Correo GMail",
		    "type": "img",
		    "coordinates": "395,635",
		    "onclick": "url",
		    "action": "http://mail.google.com/",
		    "icon": "Mail-Gmail-icon.png",
		    "titlealt": "GMail",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "gmail.png",
		    "extra": "",
		    "active": "Y"
    }
    ,
		{
		    "id": 5,
		    "name": "Traductor Idiomas",
            "description": "Google Translator",
            "type": "img",
            "coordinates": "580, 300",
            "onclick": "url",
            "action": "http://translate.google.es",
            "icon": "traductor_64.gif",
            "titlealt": "Google Translator",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "traductorgoogle.png",
            "extra": "",
            "active": "Y"
        }
    ,
		{
		    "id": 6,
		    "name": "Distancias",
            "description": "Medir Distancias",
            "type": "img",
            "coordinates": "581,150",
            "onclick": "url",
            "action": "http://sigpac.mapa.es/fega/visor/",
            "icon": "MedirDistancias.png",
            "titlealt": "Distancias",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "MedirDistancias.png",
            "extra": "",
            "active": "Y"
        }
    ,
    // arrUrl[32] = new UrlData("032", "Citas Médicas", "img", "il", "citamedica", "PedirCita.png", "875##475", "https://www.citaprevia.sanidadmadrid.org/Forms/PedirCita.aspx", "Pedir Cita", "height:72px;width:72px;", "pedircita.png", "", "", ""); // http://multipre.tarifika.com/
		{
		    "id": 7,
		    "name": "Citas Médicas",
		    "description": "",
		    "type": "img",
		    "coordinates": "305,1380",
		    "onclick": "url",
		    "action": "https://www.citaprevia.sanidadmadrid.org/Forms/Acceso.aspx",
            "icon": "PedirCita.png",
		    "titlealt": "Citas Médicas",
		    "css": "",
		    "style": "",
		    "height": 32,
		    "width": 32,
            "thumbnails": "GoogleMapsFC.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
        {
            "id": 8,
            "name": "Traductor Idiomas",
            "description": "Google Translator",
            "type": "img",
            "coordinates": "620, 480",
            "onclick": "url",
            "action": "http://translate.google.es",
            "icon": "traductor_64.gif",
            "titlealt": "Google Translator",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "traductorgoogle.png",
            "extra": "",
            "active": "N"
        }
    ,
        {
            "id": 9,
            "name": "R.A.E.",
            "description": "Real Academia Española",
            "type": "img",
            "coordinates": "700,480",
            "onclick": "url",
            "action": "http://www.rae.es/",
            "icon": "Dictionary-Mac-Book-icon.png",
            "titlealt": "Diccionario",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "rae.png",
            "extra": "",
            "active": "N"
        }
    ,
        {
            "id": 10,
            "name": "Wikipedia",
            "description": "Wikipedia",
            "type": "img",
            "coordinates": "528,486",
            "onclick": "url",
            "action": "https://es.wikipedia.org/wiki/Wikipedia:Portada",
            "icon": "wikipedia_64.png",
            "titlealt": "Wikipedia",
            "css": "",
            "style": "",
            "height": 32,
            "width": 32,
            "thumbnails": "wikipedia.png",
            "extra": "",
            "active": "N"
          }
    
];

// ÑAPAVISO - FIN Colección Datos principales

//  

// Filter the icons data with "active=Yes"
dataIco = dataIco.filter(function (data) {
    return data.active === "Y";
});

// Colección de combos
// Tiene que estar declarada como mínimo
//var dataCombos = [];


export var dataCombos = [
    {
        "comboid": "programacion",
        "comboname": "Url Programación",
        "combodescripcion": "Url de sitios de programación",
        "comboactive": "Y",
        "combosize" : 3,
        "combocoleccion": [
            {
                "text": "Stackoverflow",
                "value": "http://stackoverflow.com",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "Dotnetperls",
                "value": "http://www.dotnetperls.com",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "C-sharpcorner",
                "value": "http://www.c-sharpcorner.com",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-examples",
                "value": "http://www.csharp-examples.net",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Bytes",
                "value": "http://bytes.com",
                "orden": 5,
                "active": "Y"
            },
            {
                "text": "Eggheadcafe",
                "value": "http://www.eggheadcafe.com",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp.net-tutorials",
                "value": "http://csharp.net-tutorials.com",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Codeguru",
                "value": "http://www.codeguru.com",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Support.microsoft",
                "value": "http://support.microsoft.com",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Microsoft",
                "value": "http://msdn.microsoft.com",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-station",
                "value": "http://www.csharp-station.com",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "W3schools",
                "value": "http://www.w3schools.com",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "W3",
                "value": "http://www.w3.org",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Forosdelweb",
                "value": "http://www.forosdelweb.com",
                "orden": 14,
                "active": "Y"
            }
            ,
            {
                "text": "Java2s",
                "value": "http://www.java2s.com",
                "orden": 15,
                "active": "Y"
            }
            ,
            {
                "text": "Javascripter",
                "value": "http://www.javascripter.net/",
                "orden": 16,
                "active": "Y"
            }
            ,
            {
                "text": "Acens",
                "value": "http://www.acens.com/",
                "orden": 17,
                "active": "Y"
            }
			//http://www.tutorialsteacher.com/webapi/create-web-api-project
        ]
    }
    ,
    {
        "comboid": "recursos",
        "comboname": "Recursos On Line",
        "combodescripcion": "Urls de recursos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Monitorización Internet",
                "value": "http://www.akamai.com/html/technology/dataviz1.html",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "MD5 Encriptación",
                "value": "http://www.cuwhois.com/herramienta-seo-md5.php",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "MD5 Desencriptación",
                "value": "http://md5.rednoize.com/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Calculadora NIF",
                "value": "http://www.calcularletradni.com/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Calculadora NIE",
                "value": "http://www.gabilos.com/textocalculadoranie.htm",
                "orden": 5,
                "active": "Y"
            }
            ,
            {
                "text": "Cod Postal",
                "value": "http://www.correos.es/comun/CodigosPostales/1010_s-CodPostal.asp",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "Generador NIF-NIE-CIF",
                "value": "http://niednicifgenerador.appspot.com/",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Generador-Validador NIF-NIE-CIF",
                "value": "http://generadordni.es/",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Tarjetas de Crédito - Pruebas",
                "value": "http://modulosdepago.es/Tarjetas-de-cr%C3%A9dito-pruebas",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Validador Cuenta Corriente",
                "value": "http://www.aplicacionesinformaticas.com/programas/gratis/ctabanco.php",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "Calcula IBAN-BIC-SWIFT",
                "value": "http://www.calculatuiban.com/",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "Convertir Epoch - Tiempo Unix",
                "value": "http://espanol.epochconverter.com/",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C#",
                "value": "http://json2csharp.com/",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Conv Json To C# - Avanzado",
                "value": "https://app.quicktype.io/",
                "orden": 14,
                "active": "Y"
            }
        ]
    }
    ,
    { 
        "comboid": "periodicos",
        "comboname": "Periódicos online",
        "combodescripcion": "Combo de periódicos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "El Mundo",
                "value": "http://www.elmundo.es/",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "El País",
                "value": "http://www.elpais.com/",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "20 Minutos",
                "value": "http://www.20minutos.es/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Heraldo Aragon",
                "value": "http://www.heraldo.es/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "ABC",
                "value": "http://www.abc.es",
                "orden": 5,
                "active": "Y"
            }
        ]
    }
    ,
    {
        "comboid": "radiosidiomas",
        "comboname": "Radios en Idiomas",
        "combodescripcion": "Combo de radios online en inglés",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Tunein",
                "value": "https://tunein.com/radio/Learning-English-p51794/?topicId=114633337",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "BBC 4",
                "value": "https://www.bbc.co.uk/radio/player/bbc_radio_fourfm",
                "orden": 2,
                "active": "Y"
            },
            {
                "text": "La Classe Francaiçe",
                "value": "https://laclassefrançaise.es/cultura-francesa/radios-francesas/",
                "orden": 4,
                "active": "Y"
            },
			{
				"text": "BBC",
				"value": "https://www.bbc.co.uk/radio/player/bbc_world_service",
				"orden": 3,
				"active": "Y"
			}
			
        ]

    }
];


// Filter the combos data with "comboactive=Yes"
dataCombos = dataCombos.filter(function (data) {
    return data.comboactive === "Y";
});


// http://prcs-lpt-016/ReportServer_SSRS/
// http://prcs-lpt-016:81/ReportServer_SSRS/Pages/ReportViewer.aspx?%2F
// http://prcs-lpt-016:81/Reports/browse/
// https://regex101.com/r/gG3cX2/1

// Tu usuario en Project Center es jose.pairet@e.ineco.com y tu contraseña I119QHE7
// https://projectcenter.ineco.es//projectcenter/Account.aspx/RedirectLogOn?returnurl=/projectcenter/Home.aspx?d=true


//https://app.asana.com/0/home/900479283983793
// jose.pairet@e.ineco.com
// 7Enanitos

// https://devti.ineco.es/jira
// jose.pairet
// Ineco2018


// https://devti.ineco.es/confluence
// Confluence.png
// jose.pairet
// Ineco2018
