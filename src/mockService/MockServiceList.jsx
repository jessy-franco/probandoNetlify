const arrayItems = [
    {
        id: "1",
        descripcion: "En macetas de 2.5 litros, simples o dobles, varios colores ",
        name: "Azalea",
        info: "Observaciones: Ubicacion exterior a media sombra, o pleno sol en contenedores amplios o en tierra. SUSTRATO Fértil, ácido, bien drenado. FLORACIÓN A fin del Invierno y Primavera (Agosto-Octubre), flores acampanadas que cubren la planta. Forma un arbusto globoso de hojas perennes. Se puede podar luego de la floración. Si está en tierra o en una maceta grande puede tolerar sol intenso, sin descuidar el riego. No soporta los lugares ventosos y secos. Es nativo de Japón.",
        stock: 11,
        price: "1600",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/7718158/pexels-photo-7718158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
    },
    {
        id: "2",
        descripcion: "En macetas nro 10, surtidos",
        name: "Clavelines",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO fértil, con buen drenaje. FLORACIÓN de Primavera a Otoño. Planta herbácea de 20 cm de alto y ancho, con flores en varios tonos de rojo y rosa, puede vivir varios años si el Invierno no es muy frío. Dianthus chinensis es originaria de Europa del Este, Asia, y norte de India.",
        stock: 45,
        price: "850",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/2480232/pexels-photo-2480232.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "3",
        descripcion: "En macetas colgante nro 12",
        name: "Geranios",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO Tolera diferentes condiciones de acidez, con muy buen drenaje. FLORACIÓN Todo el año, con más intensidad en Primavera-Verano. Es una planta herbácea perenne. Se puede usar como colgante o cubresuelos ya que forma matas con guías largas. Muy resistente a lugares muy expuestos al sol y riegos moderados. Es nativo de Sudáfrica.",
        stock: 21,
        price: "780",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/6608986/pexels-photo-6608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "4",
        descripcion: "En maceta de 3 lts flor perfumada, enredadera",
        name: "Jazmin de leche",
        info: "UBICACIÓN exterior a pleno sol, aunque también acepta media sombra. SUSTRATO Muy tolerante, preferentemente ácido y bien drenado. FLORACIÓN La principal es en Primavera (Octubre-Noviembre), cuando se llena en su totalidad de flores blancas muy perfumadas. Vuelve a florecer en Verano pero con menor intensidad. Trepadora de hoja perenne, necesita una estructura de soporte para enredarse. Muy resistente al frío, sol, y viento, con riegos moderados. A la sombra florece menos. Podar a fin del Invierno para que la floración sea más intensa. Es nativo de China, Japón, Corea, y Vietnam.",
        stock: 19,
        price: "879",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/5649254/pexels-photo-5649254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "5",
        descripcion: "En maceta de 3lts, flor grande",
        name: "Margarita",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO: Ácido, fértil, bien drenado. FLORACIÓN de Primavera a Otoño, flores simples o dobles, con pétalos de colores en torno a un disco central. Pueden ser rosadas, fucsias, blancas, amarillas, o rojas. Herbácea perenne, que se cultiva como anual en zonas de Inviernos fríos. Crece hasta 35 cm de altura, es recomendable cortarle las flores pasadas, y podarla un tercio luego de la floración, para que rebrote compacta. Resistente al sol, viento, y riegos moderados. Es nativa de las Islas Canarias.",
        stock: 35,
        price: "990",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/6617355/pexels-photo-6617355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "6",
        descripcion: "Narcisos trompeta importados",
        name: "Narcisos",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO: Ácido, fértil, bien drenado. FLORACIÓN en Primavera, flores al final de un tallo sin hojas (escapo áfilo), con forma de trompeta, con una corona desarrollada que puede tener el mismo color que la corola, en tonos de amarillo, blanco, crema, salmón, o naranja. Planta bulbosa, que desarrolla en Invierno, con hojas lineares verde- grisáceas. No hace falta sacarla de la tierra una vez plantada. Se multiplica y rebrota y florece todos los años. Pierde las hojas en Verano. Es nativo de la Cuenca del Mediterráneo, Asia Central, sur de China, y Japón",
        stock: 35,
        price: "1800",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/11958833/pexels-photo-11958833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "7",
        descripcion: "Premium importados, colores varios",
        name: "Tulipanes",
        info: "UBICACIÓN: Exterior a pleno sol. SUSTRATO ligeramente ácido, fértil, bien drenado. FLORACIÓN flores simples que abren en Primavera, con una duración aproximada de diez días. Pueden ser amarillas, rosas, blancas, o fucsias. Planta bulbosa originaria de lugares con una temporada fría húmeda, y una temporada cálida seca. Se plantan en Otoño o Invierno, cubriéndolos con 5 cm de tierra. Crece durante el frío, y abre hacia fines del Invierno. Luego de la floración es necesario dejar la planta al sol para que desarrolle los bulbillos hijos que florecerán recién hacia el segundo o tercer año. Es necesario en los bulbos adultos tengan un período cálido para que desarrollen la floración, y un período frío para que la flor tenga el tallo largo, sino sale muy corta. Para cultivarlos en el clima húmedo pampeano es necesario dejarlos de regar en Verano, y ponernos 1 mes en la heladera en el Otoño, cubiertos de turba apenas húmeda. Los tulipanes cultivados en la actualidad son todos híbridos intergenéricos descendientes en su mayoría de Tulipa gesneriana y otros tulipanes, originarios de las zonas montañosas de Asia Central. Se cree que fueron introducidos en Europa por los árabes en el siglo X, y de allí se popularizaron en Holanda en el siglo XVII, llegando a valer fortunas.",
        stock: 35,
        price: "2100",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/12938951/pexels-photo-12938951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "8",
        descripcion: "variedad de colores, simples o dobles",
        name: "Rosa china",
        info: "UBICACIÓN exterior a pleno sol, o media sombra muy luminosa. SUSTRATO Ácido, fértil, bien drenado. FLORACIÓN en toda la época cálida, flores grandes de variados colores, simples, semidobles, o dobles que salen en las axilas de las hojas. Existen blancas, amarillas, anarajandas, rosas, fucsias, rojas, en diferentes tonos. Cada flor dura un día o dos, pero el periodo de floración es muy prolongado, de Primavera a Otoño. Atraen colibríes. Arbusto bien ramificado, de hoja perenne. Se puede podar a fin de Otoño, o fin de Invierno, para obtener una planta más tupida, con mayor número de flores. Soporta sol, viento, y riegos no tan frecuentes. Es nativo de las Islas Vanuatu, un archipiélago en el Pacífico Sur al este de Australia.",
        stock: 35,
        price: "1900",
        category: "Ofertas",
        img: "https://images.pexels.com/photos/6471887/pexels-photo-6471887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "9",
        descripcion: "En macetas nro 10",
        name: "Dimorphoteca",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO fértil, y bien drenado. FLORACIÓN de Primavera a Otoño, con flores en forma de margarita blancas, rosadas, violeta, o amarillo. Atraen mariposas y abejas. Crece hasta 30 cm de alto y ancho. Se comporta como una perenne. Hay que podarla luego de la floración para que se mantenga prolija. Resiste sol, viento, y riegos moderados. Es nativa de Sudáfrica.",
        stock: 35,
        price: "890",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/531774/pexels-photo-531774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "10",
        descripcion: "Colores varios en maceta nro 12",
        name: "Calendula",
        info: "UBICACIÓN exterior a pleno sol.SUSTRATO fértil, ácido, bien drenado, aunque es tolerante. FLORACIÓN primavera, Verano, y Otoño. Hay variedades de flor naranja y amarilla.Plantin estacional. Forma matas bajas que crecen hacia los costados. Se utiliza en huertas orgánicas porque atrae insectos benéficos. Tiene propiedades curativas. Es nativa de España.",
        stock: 35,
        price: "545",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/10719234/pexels-photo-10719234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "11",
        descripcion: "Variedad de colores, enanas y comunes",
        name: "Pensamientos",
        info: "UBICACIÓN exterior a pleno sol. SUSTRATO fértil, ácido, bien drenado. FLORACIÓN desde fin del Otoño, Invierno, y Primavera, hasta que empieza el calor fuerte. Plantín de estación. Florece intensamente cuando tiene sol pleno (4-6 hs de sol directo). Crece hacia los costados por lo que necesita una maceta ancha y no demasiado profunda. Viola x wittrockiana es un híbrido artificial descrito por primera vez en 1896, descendiente de Viola tricolor, Viola lutea, y Viola altaica, nativas de Europa, Turquía, Irán, y norte de Asia.",
        stock: 35,
        price: "500",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/668940/pexels-photo-668940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "12",
        descripcion: "Cultivados en macetas nro 10",
        name: "Erica",
        info: "UBICACIÓN exterior a pleno sol, o media sombra. SUSTRATO tolera diferentes condiciones de acidez, con muy buen drenaje. FLORACIÓNtodo el año con más intensidad en Primavera-Verano. Pequeñas flores blancas o rosadas que atraen abejas. Forma matas bajas de follaje perenne. Tolera viento y riego moderado. Se puede podar a fin del Invierno para dar forma.  Es originaria de México y Centroamérica.",
        stock: 35,
        price: "560",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/10916884/pexels-photo-10916884.jpeg"
    },
    {
        id: "13",
        descripcion: "En macetas de 5lts",
        name: "Ficus",
        info: "UBICACIÓN exterior en zonas libres de heladas, soporta interior muy luminoso. SUSTRATO es muy tolerante a diferentes condiciones. Árbol de rápido crecimiento, con follaje perenne, podado con el Arte Topiario, con el tronco despejado y la copa redondeada. Hay que evitar plantarlo en tierra en lugares urbanos porque presenta unas raíces superficiales muy agresivas que rompen las veredas y cañerías. Es ideal para macetas. Es nativo del Sudeste Asiático, y norte de Australia.",
        stock: 35,
        price: "1.800",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "14",
        descripcion: "suculenta en macetas nro 12",
        name: "Aeonium rubra",
        info: "UBICACIÓN exterior a pleno sol, o interior con al menos 4 horas de sol directo. SUSTRATO muy tolerante, pero con excelente drenaje. FLORACIÓN a principios de Primavera, panículas de flores pequeñas amarillas. Planta suculenta que forma rosetas de hojas bordo oscuras. Soporta sol, viento, y riegos moderados. Es un híbrido de una planta originaria de las Islas Canarias.",
        stock: 35,
        price: " 550",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/5720098/pexels-photo-5720098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "15",
        descripcion: "En maceta nro 15",
        name: "Aphelandra variegda",
        info: "UBICACIÓN interior bien luminoso. SUSTRATO acido, fértil, bien drenado. FLORACIÓN florece en el extremo de los tallos, con brácteas y flores amarillas. La Afelandra Variegada forma una planta subarbustiva, de hoja perenne en climas cálidos. Colocar en lugares con buena luz protegida del sol directo y del frío. Se puede podar para controlar su crecimiento. Es un híbrido obtenido en los Países Bajos de Aphelandra squarrosa, planta nativa de Brasil.",
        stock: 35,
        price: "1022",
        category: "Plantas de interior",
        img: "https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "16",
        descripcion: "Combo surtido x4 unidades",
        name: "Aromaticas",
        info: "UBICACIÓN la mayoría a pleno sol, siempre en exterior. Algunas como la Albahaca y la Menta pueden cultivarse a media sombra, o en interiores pegadas a una ventana donde dé el sol. SUSTRATO fértil, bien suelto y drenado. FLORACIÓN en lo posible hay que evitar que florezcan, para que no se desmerezca el follaje, salvo que se quiera obtener semillas para reproducirlas. Algunas son perennes (Romero, Curry, Ciboulette, Cedrón, Menta), otras duran un par de temporadas (Salvia, Orégano, Tomillo), y otras son muy sensibles al frío y se comportan como anuales (Perejil, Estragón, Eneldo, Cilantro, Albahaca).",
        stock: 35,
        price: "1840",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/8547929/pexels-photo-8547929.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "17",
        descripcion: "En macetas de 5lts",
        name: "Aspidistra",
        info: "UBICACIÓN interior. Tolera condiciones de baja luminosidad. SUSTRATO acido, bien drenado, aunque es muy tolerante.  FLORACIÓN a ras del suelo, carnosa y de color morado. Poco común, evolucionó para ser polinizada por caracoles. Planta herbácea que forma una mata de hasta 1 m de alto que va creciendo en ancho. Crece bien aún con poca luz y riego. Las hojas duran mucho tiempo en la planta. Muy resistente. Es nativa de Japón.",
        stock: 35,
        price: "1220",
        category: "Plantas de interior",
        img: "https://i.pinimg.com/564x/9b/4e/ce/9b4ece56c1b498e9d6d0e547f0dee3f5.jpg"
    },
    {
        id: "18",
        descripcion: " en macetas nro 8",
        name: "Cactus piedra",
        info: "UBICACIÓN exterior a pleno sol o media sombra, o interior muy luminoso. SUSTRATO muy tolerante, con excelente drenaje. FLORACIÓN pequeñas flores como margaritas que surgen entre las dos hojas que forman la planta. Por lo general salen de a una por vez, en el Verano-Otoño. Pequeñas suculenta no cactáceas de la familia Aizoáceas, crecen en grupos de pequeños individuos formados por 2 hojas carnosas que terminan planas. Cada especie tiene sus patrones de coloración y textura característicos. Es muy importante que crezca en un lugar muy luminoso y con riegos muy espaciados, sobre todo en Invierno cuando entra en reposo. Lithops es un género nativo de Botswana, Namibia, y Sudáfrica.",
        stock: 1,
        price: "645",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/74/4a/ef/744aef265b3f63265a9dc83bf8313408.jpg"
    },
    {
        id: "19",
        descripcion: " En macetas nro 6",
        name: "Cactus de coleccion",
        info: "UBICACIÓN exterior o Interior, pero con sol directo al menos 4 horas, idealmente protegidos de las lluvias en Invierno. SUSTRATO con excelente drenaje, y arena gruesa entre sus componentes. FLORACIÓN algunos géneros florecen desde muy jóvenes. Las flores son muy bellas pero efímeras en la mayoría de los casos. Plantas suculentas que guardan agua en sus tallos, adaptadas en su mayoría a condiciones de cultivo con alta exposición solar y riego escaso. No regar con tiempo frío y húmedo. No prosperan sin sol directo. Los cactus forman la familia Cactaceae, con características propias, la más distintiva es la presencia de areolas, estructura vegetativa que da origen a las flores y espinas. Son exclusivamente de América, con una sola excepción, Rhipsalis baccifera, distribuida también en África tropical, Madagascar, y Sri Lanka.",
        stock: 1,
        price: "840",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/49/6b/7d/496b7ded4891aeb2d5e7ffe14c4205ac.jpg"
    },
    {
        id: "20",
        descripcion: "Importado flor  amarilla perfumada atrapa insectos",
        name: "Cactus especial",
        info: "UBICACIÓN Exterior o Interior, pero con sol directo al menos 4 horas, idealmente protegidos de las lluvias en Invierno.  SUSTRATO con excelente drenaje, y arena gruesa entre sus componentes. FLORACIÓN algunos géneros florecen desde muy jóvenes. Las flores son muy bellas pero efímeras en la mayoría de los casos. Plantas suculentas que guardan agua en sus tallos, adaptadas en su mayoría a condiciones de cultivo con alta exposición solar y riego escaso. No regar con tiempo frío y húmedo. No prosperan sin sol directo.  Los cactus forman la familia Cactaceae, con características propias, la más distintiva es la presencia de areolas, estructura vegetativa que da origen a las flores y espinas. Son exclusivamente de América, con una sola excepción, Rhipsalis baccifera, distribuida también en África tropical, Madagascar, y Sri Lanka.",
        stock: 1,
        price: "940",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/50/db/69/50db6978337338538cbdb16fa4808999.jpg"
    },
    {
        id: "21",
        descripcion: "En macetas nro 12",
        name: "Cactus espiralado",
        info: "UBICACIÓN Exterior a pleno sol. SUSTRATO muy tolerante, pero con excelente drenaje. FLORACIÓN en Verano y Otoño, flores de hasta 20 cm de ancho, blanco-rosadas, que abren una sola noche. La floración es prolongada en ejemplares adultos. Forma varios tallos con forma de espiral, de hasta 5 metros de alto. Mutaciones naturales de Cereus hildmannianus y Cereus forbesii, originarios de Bolivia, Paraguay, Brasil, Uruguay y Argentina, han dado lugar a estos ejemplares espiralados.",
        stock: 1,
        price: "1654",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/23/b8/11/23b8118e01f380b7aadcecdca79697e5.jpg"
    },
    {
        id: "22",
        descripcion: " En macetas nro 8",
        name: "Cactus injertado",
        info: "UBICACIÓN Exterior o Interior, pero con sol directo al menos 4 horas, protegido de las lluvias en invierno. SUSTRATO con excelente drenaje, y arena gruesa entre sus componentes. FLORACIÓN flores de acuerdo a la especie utilizada. Son dos especies distintas unidas mediante la técnica del injerto, donde se busca que la parte superior colorida y sin clorofila crezca con vigor. La parte inferior, o portainjerto, provee anclaje y resistencia a enfermedades. Se injertan por lo general ejemplares de diferentes colores del cultivar Hibotan de Gymnocalycium mihanovichii, cactus originario del norte de Argentina y Paraguay, y como portainjerto se utiliza Selenicereus undatus, cactácea originaria de Centroamérica.",
        stock: 1,
        price: "2890",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/49/12/3a/49123a0f2ce2d7b493100cae0fcfb343.jpg"
    },
    {
        id: "23",
        descripcion: "En macetas nro 12",
        name: "Croton petra",
        info: "UBICACIÓN Interior muy luminoso, en lo posible con sol directo. SUSTRATO Ácido, fértil, bien drenado. Necesita calor, sol, y humedad. Cuanto más intensa es la luz más colorado y anaranjado se pone. Si sufre cambios bruscos de temperatura o alteraciones en el riego puede perder algunas hojas. Es un cultivar de Codiaeum variegatum, nativo del Sudeste Asiático y noreste de Australia.",
        stock: 1,
        price: "950",
        category: "Plantas de interior",
        img: "https://i.pinimg.com/564x/fc/92/c1/fc92c165a7651ebaa2cbed250c52c646.jpg"
    },
    {
        id: "24",
        descripcion: "Bolsa presentacion de 500gr, variedad 4 estaciones",
        name: "Semillas de cesped",
        info: "Ryegrass anual, Ryegrass perenne, Bermuda, Festuca rubra, Festuca alta, Agrostis tenuis y Poa pratensis. Por la variedad de semillas que la componen, esta mezcla de césped es apta para una amplia gama de situaciones. Brinda rápida emergencia, rusticidad y excelente cobertura. RENDIMIENTO: 500 GR X 15 METROS CUADRADOS",
        stock: 1,
        price: "1890",
        category: "Plantas de exterior",
        img: "https://pasturastropicales.com/wp-content/uploads/2021/04/pasto-mano.jpg"
    },
    {
        id: "25",
        descripcion: "Maceta de balcon 80x30x30 c/patas drenaje",
        name: "Balconera fibrocemento",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1800",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/00/11/f1/0011f1a95f635b5fa6ed41f908bdefed.jpg"
    },
    {
        id: "26",
        descripcion: "Confeccionado en fibrocemento 30x30 moderno jardin patio",
        name: "Maceta fibrocemento cilindro",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1200",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/fd/10/d9/fd10d96f9b1d7df0673b20c0526198db.jpg"
    },
    {
        id: "27",
        descripcion: "Confeccionado en fibrocemento 35x35x35 moderno jardin patio",
        name: "Cubo de fibrocemento ",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1890",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/24/45/e9/2445e997e2ab4637bf5d25f084447246.jpg"
    },
    {
        id: "28",
        descripcion: "Maceta terracota nro 23",
        name: "Americana terracota",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1660",
        category: "Macetas",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/159/765/products/americana-blum11-f4266b44526257a4ce15874961633288-640-0.jpg"
    },
    {
        id: "29",
        descripcion: "Maceta terracota nro 45",
        name: "Balconera terracota",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "890",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_894323-MLA49855054049_052022-F.webp"
    },
    {
        id: "30",
        descripcion: "maceta colgante pared nro 12",
        name: "colgadera de pared terracota",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1000",
        category: "Macetas",
        img: "https://www.terracotalerma.com/sites/default/files/imagenes_productos_sin_venta/maceta-pared-ceramica-terracota-lerma.jpg"
    },
    {
        id: "31",
        descripcion: "Maceta estilo italiana nro 23",
        name: "Italiana terracota",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1045",
        category: "Macetas",
        img: "https://puebloflorido.com/wp-content/uploads/2020/07/D_NQ_NP_687784-MLA31636430473_072019-1.jpg"
    },
    {
        id: "32",
        descripcion: "Maceta esmaltada trabajo artesanal nro 23",
        name: "Nordica terracota esmaltada",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 3390",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_674003-MLA49086899045_022022-W.jpg"
    },
    {
        id: "33",
        descripcion: "Maceta deco nro 10",
        name: "Esmaltada deco-azul ",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "1820",
        category: "Macetas",
        img: "https://i.pinimg.com/474x/25/e3/cf/25e3cfc4962dc4d12c4e7d160c9ef75e.jpg"
    },

    {
        id: "76",
        descripcion: "Maceta rotomoldeada nro 20 ",
        name: "Maceta cono",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 1200",
        category: "Macetas",
        img: "https://i.pinimg.com/474x/01/93/8a/01938a0c0ce4c796f1dbe7b12cd2d31d.jpg"
    },

    {
        id: "34",
        descripcion: "Maceta rotomoldeada 100x35x35",
        name: "Maceta rectangular",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: "4300",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_931449-MLA45078559917_032021-W.webp"
    },

    {
        id: "35",
        descripcion: "Maceta rotomoldeado 45x45x45",
        name: "Cubo plastico",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 980",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_830637-MLA45360144423_032021-W.webp "
    },

    {
        id: "36",
        descripcion: "Maceta rotomoldeada 25cm diametro ",
        name: "Esfera Deco leparc",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 1890",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_982583-MLA48325898310_112021-F.webp"
    },

    {
        id: "37",
        descripcion: "Maceta nro 12 confeccionada en cemento blanco  ",
        name: "Hexagonal con plato deco",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " $ 960",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_795936-MLA48278128010_112021-F.webp"
    },

    {
        id: "38",
        descripcion: "Maceta deco rotomoldeado  nro 23",
        name: "Inca rustica",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 2980",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_704030-MLA49425799633_032022-W.webp"
    },

    {
        id: "39",
        descripcion: "Maceta de fibrocemento nro 12 ",
        name: "vaso colonial",
        info: "Verifique si el tamaño de la maceta a comprar, es mayor al diámetro del envase en que viene la planta seleccionada. Se debe tener en cuenta, que mientras más grande la maceta, mejor crecerá la planta. Es importante considerar, que la planta no quede desproporcionada respecto del tamaño de la maceta a comprar. 💚Para armar la planta en su nueva maceta, se necesita una mezcla del siguiente sustrato: 🔹TIERRA, según el tipo de planta. 🔹POMETINA, debe ir en el fondo de la maceta, asegurando así, un correcto drenaje. 🔹CORTEZA DE PINO, se coloca en la superficie de la tierra (protege y decora). 🧮La cantidad de sustrato necesaria, depende de la capacidad de la maceta. En el detalle del producto, figuran tablas con el volumen medido en Litros = Dm³. Entre la planta, pometina, tierra y corteza, debe completar el volumen de la maceta elegida.",
        stock: 1,
        price: " 760",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_904801-MLA26250454444_102017-F.webp "
    },

    {
        id: "40",
        descripcion: "Sustrato especial, de 1ra calidad presentacion de 5dcl",
        name: "Terrafertil -Cactus y suculentas-",
        info: "Específicamente desarrollado para Cactus y plantas Crasas. Sus componenentes y estructura brindan especiales condiciones a las plantas sensibles a la humedad. La arcilla aporta oligoelementos, acumulando agua y nutrientes. La arena de cuarzo pura, optimiza la evacuación del excedente de riego. Componentes: Arena, Arcilla y Turba de musgo Sphagnum.",
        stock: 1,
        price: " 1800",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_640654-MLA46937241101_072021-F.webp"
    },
    {
        id: "41",
        descripcion: "Compost de 1ra calidad 5dcl ",
        name: "Compost organico Terrafertil",
        info: "Ideal para plantas de exterior en canteros y macetas. Mayor porosidad y drenaje. Sustrato abonado, listo para usar. Componentes: Corteza, Compost orgánico.",
        stock: 1,
        price: " 1200",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_811857-MLA46481367180_062021-F.webp"
    },
    {
        id: "42",
        descripcion: "Sustrato especial, de 1ra calidad presentacion de 5dcl",
        name: "Terrafertil -bonsái y kokedamas- ",
        info: "El sustrato específicamente desarrollado para el cuidado y manteniemiento de Bonsai y Kokedamas. Estructura fina con nutrientes que satisfacen las elevadas exigencias de estos cultivos. Permite un crecimiento lento. Componentes: Arena. Arcilla yTurba de musgo Sphagnum.",
        stock: 1,
        price: " 1350",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_927609-MLA31067304642_062019-F.webp"
    },
    {
        id: "43",
        descripcion: "Sustrato especial, de 1ra calidad presentacion de 5dcl",
        name: "Terrafertil -huerta- ",
        info: "Permite un desarrollo rápido de las raíces. Sustrato ideal para germinación y transplante de hortalizas. Componentes: Turba de Musgo Sphagnum, Compost, perlita, Dolomita y Fertilizantes.",
        stock: 1,
        price: " 1240",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_998966-MLA46793771482_072021-F.webp"
    },
    {
        id: "44",
        descripcion: "Sustrato especial, de 1ra calidad presentacion de 5dcl",
        name: "Terrafertil -jardin-",
        info: "Tierra Negra enriquecida con compost orgánico. Desarrollada para ser utilizada como soporte de oros sustratos en jardines, canteros y como relleno en las zonas bajas del jardín. Componentes: Compost Orgánico. Tierra Negra",
        stock: 1,
        price: " 1400",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_661861-MLA31036212561_062019-F.webp"
    },
    {
        id: "45",
        descripcion: "Corteza de pino y otras especies arboreas, estetica y nutrientes",
        name: "Terrafertil -Chips-",
        info: "Especificaciones: Conserva la humedad del suelo. Evita el crecimiento de malezas. Evita cambios bruscos de temperatura. Mejora la estética.",
        stock: 1,
        price: " 890",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_852095-MLA44377602803_122020-F.webp"
    },
    {
        id: "46",
        descripcion: "HUMUS DE LOMBRIZ LOMBRI COMPUESTO TERRAFERTIL 50 LTS",
        name: "Terrafertil Humus",
        info: "Producto estabilizado obtenido a partir de materiales orgánicos, a base de compost obtenido por digestión con lombrices bajo condiciones controladas. Presenta óptimas condiciones físicas. Aporta materia orgánica humificada, con alto contenido de nutrientes",
        stock: 1,
        price: " 875",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_843260-MLA32821420561_112019-F.webp"
    },
    {
        id: "47",
        descripcion: "Fertizante natural y ecologico para sustratos",
        name: "Terrafertil resaca",
        info: "Ideal para plantas que requieran suelos levemente ácidos. Aumenta la retención de nutrientes. Evita cambios en pH. Favorece la aireación y respiración de las raíces. Aumenta la capacidad de retención hídrica manteniendo por mas tiempo la humedad. Evita la compactación favoreciendo el desarrollo de raíces. Evita los cambios bruscos de temperatura en el suelo. Componentes: Compost Orgánico. Acícula de pino y Resaca de río.",
        stock: 1,
        price: " 1200",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_910589-MLA32815283943_112019-F.webp"
    },
    {
        id: "48",
        descripcion: "Musgo premium para orquideas y plantas de sombra",
        name: " Musgo tucumano ",
        info: "Se utiliza principalmente como elemento decorativo, para cubrir la tierra de las macetas,  vestir naturalmente tutores o estacas y realzar la vista de las plantas. Como cubresuelos, protege a las raíces superficiales del frío y del calor. Conserva la humedad de la tierra. Es un producto ideal para hacer Kokedamas. ",
        stock: 1,
        price: " 880",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_999428-MLA50099916144_052022-F.webp"
    },
    {
        id: "49",
        descripcion: "Mineral para sustratos, especial sin polvillo",
        name: " Perlita ",
        info: "Ideal para mejorar el drenaje. Aumenta la porosidad, la aireación y aliviana la mezcla. Quimicamente inerte. De pH neutro.",
        stock: 1,
        price: " 1050",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_683145-MLA47546479552_092021-F.webp"
    },
    {
        id: "50",
        descripcion: "Fungicida ecologico presentacion de 30ml",
        name: " Trichoderma ",
        info: "Fungicida de amplio espectro. Posee mecanismos para atacar y parasitar a otros hongos y así, aprovechar una fuente nutricional adicional. Controla enfermedades del suelo como Phythium, Rhizoctonia, Fusarium y Sclerotinia; y del follaje como Botrytis, Mildeu Polvoso, Mildeu Lanoso, entre otros.",
        stock: 1,
        price: " 980",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_610036-MLA45136143629_032021-F.webp"
    },
    {
        id: "51",
        descripcion: "Premium de 1ra calidad musgo fueguino 5dcl",
        name: "Terrafertil Turba ",
        info: "La Turba de Musgo Sphagnum Fueguina ofrece una buena retención de agua, favoreciendo la absorción de los elementos nutricionales. Aporta porosidad y baja el pH. Especialmente para Azaleas, Helechos, Bromelias, Camelias y Violeta de los alpes, entre otras. Componentes: Turba de musgo Sphagnum.",
        stock: 1,
        price: " 1050",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_646172-MLA46794845008_072021-F.webp"
    },
    {
        id: "52",
        descripcion: "Insecticida ecologico concentrado soluble por 70ml",
        name: " Jabón potásico + neem canela ",
        info: "Insecticida biológico de procedencia vegetal, selectivo contra las plagas, inocuo contra las personas y beneficioso para el medio ambiente. No produce residuos tóxicos. Controla: Mosca Blanca, Araña Roja, Trips, Cochinillas y Pulgones. Aplicacable en cultivo de hortalizas, frutales y plantas ornamentales. Triple acción: insecticida, fungicida y bactericida. Rinde 10 L.",
        stock: 1,
        price: " 1680",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_745782-MLA49665231886_042022-F.webp"
    },
    {
        id: "53",
        descripcion: "Presentacion de 2kg, fosil natural ecologico fertilizante",
        name: " Tierra de diatomeas",
        info: "Es un producto natural hecho a base de tierra de diatomeas, no contiene ningún agregado químico. Su acción insecticida actúa por desidratacion y no por envenenamiento químico. No produce resistencia, actúa sobre larvas y adultos. Tiene un efecto fertilizante y recuperador del suelo, incorporando nutrientes para las plantas. Presentacion 2Kg es en bolsa.",
        stock: 1,
        price: " 950",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_692072-MLA46179879181_052021-F.webp"
    },
    {
        id: "54",
        descripcion: " Fertilizante granulado Triple 15 nutricion universal, todo tipo de plantas 1kg",
        name: " Terrafertil Fertizante organico ",
        info: "Nutrición equilibrada para plantas generales. Estimula el desarollo del follaje. Desarolla los tejidos. Mejora la sanidad de flores y frutos. Aumenta la resistencia a heladas. Tan fácil como distribuir al voleo y regar. Nitrógeno, Fósforo, Potasio. Grado: 15-6,5-12,5. Grado equivalente: 15 - 15 - 15",
        stock: 1,
        price: "980",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_600910-MLA45499485683_042021-F.webp"
    },
    {
        id: "55",
        descripcion: "Compuesto soluble presentacion de 40cc",
        name: "Fertilizante organico liquido",
        info: "fertilizante químico orgánico liquido formulado para aplicación por fertiriego y uso foliar. Compuesto por sustancias naturales, presenta un balanceado aporte de nutrientes específicos indispensables para las plantas. Aporta todos los macro y micronutrientes necesarios, aminoácidos y materia orgánica de origen vegetal (ácidos húmicos y fúlvicos). Puede aplicarse en cualquer momento del ciclo de cultivo. Actúan rápidamente restituyendo el balance natural. Permite una alta absorción radicular y estomática y una rápida translocación a los tejidos y órganos que presenten mayor demanda. Estimula la actividad de microorgánismos en la rizósfera. Otorga mayor tolerancia al ataque de plagas y resistencia a enfermedades. Revierte carencias de hierro y potencia la disponibilidad de nutrientes en diferentes tipos de suelos. Mejora sustancialmente la incorporación de micronutrientes.",
        stock: 1,
        price: " 890",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_965888-MLA32341807028_092019-F.webp"
    },
    {
        id: "56",
        descripcion: "Plastico reforzado, resistente 14 dientes",
        name: " Barre hojas/rastrillo Stanley ",
        info: "Cabezal de acero templado para mayor vida útil. Recubrimiento de pintura en polvo para mayor resistencia a la fricción y la corrosión. Empuñadura en polipropileno y TPR con mango ergonómico con grip antideslizante. Garantía de por vida.",
        stock: 1,
        price: " 1680",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_722861-MLA31121532288_062019-F.webp"
    },
    {
        id: "57",
        descripcion: "Mango largo, confeccion de 1ra calidad",
        name: " Pala corazón Tramontina",
        info: "Una herramienta fabricada con materiales de alta calidad que proporciona mayor vida útil a la pieza y mejor desempeño en el trabajo. La pala se fabrica en acero al carbono especial de alta calidad, y se corta con láser. Es templada en todo el cuerpo de la pieza, proporcionando más resistencia y menos desgaste durante el uso. Recibe pintura electrostática a polvo, que tiene mejor presentación visual y mayor protección contra la oxidación. El mango de 71 cm de esta herramienta, además de tener excelente resistencia, se fabrica con madera de origen renovable. Mango con terminación barnizada para una mejor presentación del producto. La capa protectora de barniz incoloro realza su tonalidad, concediéndole brillo y un toque más liso al producto. Tiene empuñadura plástica ergonómica. Pala liviana, que le genera menos esfuerzo físico al usuario y le proporciona más productividad. ",
        stock: 1,
        price: " 1050",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_984176-MLA31050473190_062019-F.webp"
    },
    {
        id: "58",
        descripcion: "1ra calidad confeccionado con acero valirio",
        name: "Palita de jardín Tramontina",
        info: " Fabricación en acero carbono especial de alta calidad. Recibe pintura electrostática a polvo, que tiene mejor presentación visual y mayor protección contra la oxidación. El mango de esta herramienta, además de tener excelente resistencia, se fabrica con madera de origen renovable. Mango con terminación barnizada para una mejor presentación del producto. La capa protectora de barniz incoloro realza su tonalidad, concediéndole brillo y un toque más liso al producto. Producto liviano, que le genera menos esfuerzo físico al usuario y hace que su trabajo sea más placentero",
        stock: 1,
        price: " 750",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_892497-MLA46546010754_062021-F.webp"
    },
    {
        id: "59",
        descripcion: "1ra calidad, inoxidable",
        name: " Tijera de podar Tramontina",
        info: " La tijera es templada en todo el cuerpo de la pieza, proporcionando más resistencia y menos desgaste durante el uso. Láminas con dientes fabricadas en acero carbono especial de alta calidad. La lámina dentada permite cortar pequeñas ramas. El afilado de las láminas se hace con máquinas CNC, proporcionando excelente durabilidad del filo y un corte más preciso y suave. El mango de esta herramienta, además de tener excelente resistencia, se fabrica con madera de origen renovable. Mango con terminación barnizada para una mejor presentación del producto. La capa protectora de barniz incoloro realza su tonalidad, concediéndole brillo y un toque más liso al producto. Liviana y práctica en el uso.",
        stock: 1,
        price: " 1450",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_852033-MLA43312912052_082020-F.webp"
    },
    {
        id: "60",
        descripcion: "set para macetas, trabajos pequeños",
        name: "Juego de herramientas para macetas Tramontina",
        info: "Tenga productos de alta calidad que sólo Tramontina podría ofrecer. Con el Conjunto para Jardinería Tramontina Metálica con Cable de Madera 4 Piezas, las actividades al aire libre van a quedar mucho más placenteras. Compuesto por cuatro piezas producidas en metal con cable de madera, el conjunto trae herramientas ideales para el trabajo al aire libre. Cada pieza tiene características propias para los requisitos que usted encuentra en la jardinería.",
        stock: 1,
        price: " 1350",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_893457-MLA31635415763_072019-F.webp"
    },
    {
        id: "61",
        descripcion: "colores surtidos, reforzados",
        name: "Guantes reforzados",
        info: "GUANTES DE JARDINERÍA REFOZADOS. 40% POLIESTER 60% POLIURETANO",
        stock: 1,
        price: " 860",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_968598-MLA46495567060_062021-F.webp"
    },
    {
        id: "62",
        descripcion: "combo 1ra calidad trabajo jardin",
        name: "Guantes reforzado profesional + set de herramientas",
        info: "Guantes profesional 1ra calidad en conjunto con set de jardin Hudson fabricados en acero valiryo y mango de madera de organica",
        stock: 1,
        price: " 9860",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_706645-MLA47355670220_092021-F.webp"
    },
    {
        id: "63",
        descripcion: "Importadas desde Mordor",
        name: "Piedra de rio, tejo plato x30 kg",
        info: "PIEDRA TEJO POR 25KG (LA CANTIDAD ES BOLSA DE 25 KILOS). COBERTURA DE SUELO 1 M2 = 2 BOLSAS DE 25 KG",
        stock: 1,
        price: " 900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_728885-MLA42753214208_072020-F.webp"
    },
    {
        id: "64",
        descripcion: "Decorativa, efecto llama x4",
        name: "Estaca solar",
        info: "Faroles decorativos para jardines o patios con luz LED color cálido, recargables con energía solar. Se cargan durante el día y a la noche se encienden las luces automáticamente. Impermeable IP44, a prueba de agua. Adecuado para uso en exteriores, resiste lluvia, nieve, heladas o el aguanieve. Puede instalarlos en cualquier lugar. Fácil de instalar. Simplemente ensamble el farol con la estaca y estará listo para usar. El panel solar se encuentra arriba del farol, así que la luz siempre pegara directamente en el mismo y recibirá buena carga.",
        stock: 1,
        price: " 14.000",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_955097-MLA47339198187_092021-F.webp"
    },
    {
        id: "65",
        descripcion: "Simil balde confeccionada en roble frances",
        name: "Macetas de barricas",
        info: "Ideales para grandes plantas, o huertas, muy resistentes y de larga durabilidad, pueden estar a la intemperie. Las medidas son de 70cm de diámetro por 45cm de alto, la medida es estándar ya que las barricas son estándares",
        stock: 1,
        price: " 7900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_743882-MLA44384615532_122020-F.webp"
    },
    {
        id: "66",
        descripcion: "Posee lampara 12v completamente funcional",
        name: "Escultura angelito",
        info: "Medidas Aproximadas. Ancho: 17cm. Profundidad: 18cm. Altura: 36 cm. Lampara bipin halogena de 12v 20w. Garantia de 6 meses.",
        stock: 1,
        price: " 5900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_953470-MLA46214389344_052021-F.webp"
    },
    {
        id: "67",
        descripcion: "Deco x2 unidades, confeccionada en acero valiryo",
        name: "Flamenco",
        info: "Flamenco decorativo de metal FLAMINGO STAR. Decora tu parque, jardín, quincho o piscina. Tratamiento anti UV, apto Interior o Exterior. Material: Metal. Medidas: 81*32*17 cm.",
        stock: 1,
        price: "7800",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_701688-MLA42146235446_062020-F.webp"
    },
    {
        id: "68",
        descripcion: "Escultura hiperrealista colgante 40 cm",
        name: "Tucan ceramica artesanal",
        info: "Tucanes de cerámica pintados a mano para interiores y jardín. Diseño Libertasartesanias inspirado en ejemplares centroamericanos. Tamaños: grandes(35cm). Colores a elección: negros o azul marino combinados con el resto de la paleta. Sólo usamos pigmentos de primera marca al igual que el barniz. Pico de 2, 3, 4 o 5 colores. Detalles dorados.",
        stock: 1,
        price: " 2500",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_885677-MLA26956415450_032018-F.webp"
    },
    {
        id: "69",
        descripcion: "Confeccionada en acero inox. 27cm",
        name: "Antorcha de mesa",
        info: "Excelentes Antorchas de Acero Inoxidable Cobre tipo de mesa/sobre mesa modelo Chicago color Cobre de 27 cm. de alto para Jardín calidad Premium para decorar e iluminar jardines, quinchos, senderos, piscinas. Las mismas tienen una larga vida útil gracias a sus mechas de fibra de vidrio, al tener siempre su recipiente con un minimo de aceite de citronella se asegura a que no se queme la mecha y alargue su vida! Su recipiente le permite cargar 390Ml. de aceite de Citronella, el mismo viene con sistema de cierre de seguridad para proteger en caso de accidentes no se derrame su liquido.",
        stock: 1,
        price: " 4900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_859845-MLA43558023452_092020-F.webp"
    },
    {
        id: "70",
        descripcion: "Confeccionada en resina poliester 50 cm altura",
        name: "Escultura hindu <Buda>",
        info: "36 cm x 15 cm x 49 cm",
        stock: 1,
        price: " 19800",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_885568-MLA48494267185_122021-F.webp"
    },
    {
        id: "71",
        descripcion: "Incluye bomba y transformador",
        name: "Fuente de agua -Buda- decoracion",
        info: "Fuentes de Agua - Cascada- Varios Modelos. ESTA FUENTE ES DE TAMAÑO INTERMEDIO- SONIDO MODERADO (Ver gráfico orientativo). MEDIDAS APROX: ALTURA: 30cm DIAMETRO: 23cm MATERIAL POLIRESINA. Son un excelente instrumento para renovar la energía de tus ambientes y generar un clima armonioso y relajado. Como elemento decorativo son elegantes y llamativas. En el Feng Shui, son utilizadas como símbolo de prosperidad y para atraer abundancia.Todas las fuentes de agua incluyen bomba de agua con luz led sumergibles.",
        stock: 1,
        price: " 16000",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_758629-MLA50866640269_072022-F.webp"
    },
    {
        id: "72",
        descripcion: "Cascada grande, 1mts de altura, incluye bomba, transformador y agua de manantial",
        name: "Fuente de agua",
        info: "Largo x Ancho x Altura: 40 cm x 50 cm x 100 cm. VOLUMEN SONIDO: Alto. Los modelos en los que la caída de agua es corta hacen poco ruido. Se siente, pero muy suave. Mientras que los modelos tengan cortina de lluvia o caídas de agua largas tienen mayor volumen. odas las fuentes de agua incluyen bomba de agua con luz sumergibles. Dependiendo el modelo puede variar la bomba. Las fotos son fidedignas, el producto que se envía es el que se ve en la foto. Las bombas de agua son sumergibles",
        stock: 1,
        price: " 146.900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_991982-MLA47032394488_082021-F.webp"
    },
    {
        id: "73",
        descripcion: "Confeccionado en resina poliester 80cm altura",
        name: "Escultura de guerrero terracota",
        info: "Medidas: altura 81,5 cm",
        stock: 1,
        price: " 25.900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_634140-MLA48950042827_012022-F.webp"
    },
    {
        id: "74",
        descripcion: "28cm budismo zen deco",
        name: "Escultura perro fu",
        info: "Estos son también conocidos como <perros de la felicidad> o <perros celestiales> y son emblemas de VALOR y ENERGÍA, complementos indispensables de la SABIDURÍA. El simbolismo de los leones de Fu es considerado, asimismo, en los estudios sobre el Feng Shui que les asocia la vigilancia, el juego limpio y la defensa del débil.",
        stock: 1,
        price: " 8900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_892714-MLA31590524114_072019-F.webp"
    },
    {
        id: "75",
        descripcion: "Para caminos x25kg",
        name: "Piedra partida blanca",
        info: "PRODUCTO CALIDAD PREMIUN BLANCO BRILLANTE (NO SON AMARILLAS COMO OTRAS QUE SE VENDEN EN EL SITIO).PIEDRA MARMOL BLANCO BRILLANTE PARTIDO POR BOLSA DE 25 KG. COBERTURA DE SUELO.1 M2 = 2 BOLSAS DE 25 KG PARA JARDINES",
        stock: 1,
        price: " 1900",
        category: "Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_729465-MLA44564068920_012021-F.webp"
    },
]

export default function ArrayProd() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayItems);
        }, 500);
    })
}

export function getSingleItem(idParams) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemRequested = arrayItems.find((item) => item.id ===(idParams));

            if (itemRequested) {
                resolve(itemRequested);
            } else {
                reject(new Error("El item no existe."));
            }
        }, 500);
    });
}


export function ArrayProdByCategory(categoryId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemSelecccion = arrayItems.filter((item) =>
                item.category === categoryId
            )
            resolve(itemSelecccion);
        }, 500);
    });
}


