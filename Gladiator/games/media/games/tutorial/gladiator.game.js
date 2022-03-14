// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

var nombre;
nombre = prompt(
    "Antes de comenzar, por favor, ingrese un nombre para su jugador/a. La historia transcurre en la antigua Roma: "
  );
  if(nombre == null){
      nombre = "Maximo Decimo Meridio";
  }

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Hogar</h1>\
        <img class='img-situation' src='media/img/Coliseo-romano.jpg' >\
        <p>Roma, año 80 d.C, hoy es el gran día. Hoy es el día de la inauguración del Coliseo por el gran emperador Victorius. \
        Pese haber rezado a Júpiter toda la noche no tienes entrada para \
        el evento pero algo te dice que la fortuna te va a sonreir.   </p>\
        \
        <p>Vistes tu toga favorita, calzas tus sandalias a la última moda romana y te dispones a salir a la calle.\
        Tienes dos opciones: <a href='forum'>Visitar el Forum</a> en busca de suerte o ir a las <a href='incorrecta'> termas de Caracalla</a> a disfutar de un tranquilo baño.  </p>"
    ),
    forum: new undum.SimpleSituation(
        "<h1>Forum</h1>\
        <img class='img-situation' src='media/img/forum.jpg'>\
        <p>LLegas al forum, zona central de la ciudad de Roma, donde tienen lugar \
        el comercio y los negocios y donde se desarrolla la vida pública y religiosa</p>\
        \
        <p>Un extraño señor llama tu atención y te anima a acercarte a él. Por otro lado\
         en el mercado central ves un puesto con un cartel que indica que venden entradas \
         para el coliseo. Decides :<a href='senior'>Ir hacia el señór</a> en busca de suerte o <a href='mercado'> ir al mercado </a> a comprar una entrada.  </p>\
        \
      "
    ),
    incorrecta: new undum.SimpleSituation(
        "<h1>Termas de Caracalla</h1>\
        <img class='img-situation' src='media/img/termas.png'>\
        <p>LLegas a las termas,te das un baño. La relajación es tanta que te quedas dormido. \
        Cuando te despiertas, con la piel arrugada, escuchas mucho alboroto que proviene de la calle.\
        <a href='./salir' class='once'>Sales a comprobar a que se debe</a>",
        {
            actions:{
                'salir': function(character,system,action){
                    system.write("<p>Sales de las termas y alzas la vista. El ruido procede del coliseo, el espectáculo ya ha comenzado y tu ni siquiera tienes entrada. Empiezas a correr pero\
                    al estar mojado te resbalas y te das un duro golpe en la cabeza.</p>\
                    <h1>FIN</h1>");
            }}

        }

    ),
    senior: new undum.SimpleSituation(
        "<h1>Señor misterioso</h1>\
        <img  class='img-situation' src='media/img/seniormisterioso.jfif'  >\
        <p>Te acercas al señor</p>\
        \<p class = 'dialogo'>- Eh amigo, ¿Quieres una entrada para el coliseo? Es totalmente gratis!!!<\p>\
        <p><a href='coliseo'>Coger la entrada</a><\p>\
        <p><a href='forum'>Volver al forum</a><\p>"
    ),
    mercado: new undum.SimpleSituation(
        "<h1>Mercado</h1>\
        <img  class='img-situation' src='media/img/mercado.jpg' >\
        <p>Una vez en el mercado te acercas a un puesto que dice vender entradas para el coliseo. Efectivamente,\
        les queda justo una entrada. Rascas tu bolsillo en busca de tus ahorros mas preciados y compras la entrada.\
        Das gracias a Júpiter por responder a tus plegarias y te diriges hacia el coliseo para asistir al evento del siglo.\
        Cuando llegas y entregas tu entrada al amable soldado romano de la entrada, este te dice que la entrada es falsa\
        y por tanto no puedes entrar al coliseo. Te han timado en el mercado. Pero... no toda la esperanza está perdida, aún\
        hay tiempo para <a href='senior'>volver a hablar con el señor misterioso</a>.</p>"
       
    ),
    coliseo: new undum.SimpleSituation(
        "<h1>Coliseo</h1>\
        <img  class='img-situation' src='media/img/coliseo.jpg' >\
        <p>Una vez te has hecho con la entrada te diriges al coliseo. Le entregas tu entrada al amable\
        soldado romano. Este te señala el camino para entrar pero observas que es distinto al que están siguiendo el resto de personas.\
        <p><a href='celda'>Vas por el camino</a><\p>\
        <p><a href='celda'>No vas por el camino</a><\p>"


    ),
    celda: new undum.SimpleSituation(
        "<h1>Celda de Gladiadores </h1>\
        <img  class='img-situation' src='media/img/celda.jpg' >\
        <p>El soldado Romano no da lugar a que tomes una decisión. Es demasiado tarde. Te immoviliza y junto a otros soldados te arrastran hasta la celda de gladiadores.\
        La entrada que te regaló aquel señor era una entrada para gladiadores. Tendrás que combatir en las arenas del coliseo Romano cuando sea tu turno. Tras varios minutos de desesperación viendo\
        gladiadores salir y no volver, el guarda de la celda te llama para combatir. Eres el último.</p>\
        <p><a href='arena'>Sales a la arena</a></p>",
    
    ),
    arena: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>De rojo se tintan las arenas del Coliseo, cuya insmensidad supera toda espectativa. El público está eufórico. Al otro lado del coliseo, una compuerta se abre lentamente.\
        Una bestia de enormes colmillos emerge de las profundidades y ruge hambrienta. Es el león mas grande que has visto nunca. Aprovechas la lejanía de la bestia para coger una espada y un \
        escudo que había en el suelo.\
        El león comienza a correr, tu quedas paralizado y en cuestión de segundos el león salta hacia ti.</p>\
        <p><a href='esquivar'>Esquivas</a></p>\
        <p><a href='cubrir'>Usas el escudo para cubirte</a></p>\
        <p><a href='atacarmal'>Usas la espada para atacar</a></p>",
        {
            enter: function (character, system, from) {
            system.setQuality("escudo", true);
            system.setQuality("espada", true);

        },
        }  
    ),
    esquivar: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>Consigues esquivarlo, sin embargo te tropiezas y caes al suelo. Rápidamente el león se da la vuelta y vuelve a cargar contra ti.</p>\
        <p><a href='cubrir2'>Usas el escudo para cubirte</a></p>\
        <p><a href='atacarbien'>Usas la espada para atacar</a></p>"
    ),
    cubrir: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>El león viene a toda velocidad y tiene tanta fuerza que te tira al suelo y te hace daño. Pierdes el escudo. La bestia carga contra ti.</p>\
        <p><a href='esquivar2'>Esquivas</a></p>\
        <p><a href='atacarmal'>Usas la espada para atacar</a></p>",
        {
           // heading: "Batalla",
            enter: function (character, system, from) {
                system.setQuality("escudo", false);
              
            },
          }
    ),
    atacarbien: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>La bestia abre sus fauces e introduces la espada hasta alcanzar su corazón. Antes de morir, el león cierra la boca con todas sus fuerzas arrancando tu brazo sin piedad. Ambos caéis desplomados.</p>\
        <h1>FIN</h1>",
        {
           // heading: "Fin del Juego",
            enter: function (character, system, from) {
                system.setQuality("brazo", true);
                system.setQuality("espada", false);
              
            },
          }
    ),
    atacarmal: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif'>\
        <p>El león viene a toda velocidad y de un bocado te arranca no solo la espada, sino todo el brazo. Desearías no haberte fiado de aquel señor misterioso. Mueres.</p>\
        <h1>FIN</h1>",
        
        {
           // heading: "Fin del Juego",
            enter: function (character, system, from) {
                system.setQuality("brazo", true);
                system.setQuality("espada", false);
              
            },
          }
    ),
    esquivar2: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>Consigues esquivar a la bestia y le tomas la espalda, es tu momento.</p>\
        <p><a href='atacartrascrubrir'>Usas la espada para atacar</a></p>"
    ),
    cubrir2: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>El león queda aturtido al darse de bruces con el escudo, es tu momento.</p>\
        <p><a href='cubrir3'>Usas el escudo para cubirte</a></p>\
        <p><a href='atacartrascrubrir'>Usas la espada para atacar</a></p>"
    ),
    cubrir3: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif'  >\
        <p>Bien, te has cubierto de un mosquito, pero la bestia sigue ahí.</p>\
        <p><a href='atacartrascrubrir'>Usas la espada para atacar</a></p>"
    ),
    atacartrascrubrir: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif'>\
        <p>Das muerte a la bestia con la espada y pones fin al combate. El público aplaude \
        estruendósamente y te ovaciona sin parar. De pronto se hace el silencio, el emperador Victorius debe dedicir si eres digno de seguir con vida.</p>\
        <p class = 'dialogo'>- ¿Cual es tu nombre, gladiador?</p>\
        <p><a href='sinombre' class='transient'>Decir nombre</a> </p>\
        <p><a href='nonombre' >No decir nombre</a> </p>",
           
    ),
    sinombre: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/nombre.jpg'>\
        <p class = 'dialogo'>- Mi nombre es " +
                      nombre +" y estoy aquí por error, yo no soy un gladiador, me estafaron en el forum, solo soy un ciudadano corriente</p><p>El emperador, sorprendido, ordena que se te compense\
                      económicamente y que te trasladen a un curandero inmediatamente. El público corea tu nombre a pulmón lleno.</a></p><p class= 'dialogo'>"+"¡¡"+ nombre + "!!  ¡¡" + nombre +"!!  ¡¡" + nombre + " !!</p>\
                      <p><a href = 'casa'>Continuar</p>"

    ),
    nonombre: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/cesar.jpg'>\
        <p class = 'dialogo'>- ¿Cómo osas desobedecer al emperador?</p>\
            <p>Enfurecido, el emperador extiende si brazo con el pulgar hacia arriba, indicando ,de este modo, que no eres digno de seguir con vida.\
            En ese momento, los más de 100 arqueros situados a lo largo del coliseo disparan sus flechas contra ti. Has aprendido que más vale contestar\
             cuando el emperador Victorius te hace una pregunta. Mueres.</p>\
            <h1>FIN</h1>"

    ),
    casa: new undum.SimpleSituation(
        "<h1>Hogar</h1>\
        <img  class='img-situation' src='media/img/casa_romana.jpg'>\
        <p>Tras ser atendido por un curandero por unos pequeños rasguños llegas a tu vivienda, tu madre está esperando con una sandalia romana en la mano. Sin embargo, al enseñarle los sacos de monedas de oro que traes contigo\
        queda  gratamente sorprendida y te abraza con felicidad.</p>\
        <p class = 'dialogo'>- Hijo, nos has sacado de pobres!!!</p>\
        <h1>FIN</h1>"
       

    ),
   

  
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
   
    espada: new undum.OnOffQuality(
        "Espada", {priority:"0002", group:'objeto'}
    ),
    escudo: new undum.OnOffQuality(
        "Escudo", {priority:"0003", group:'objeto'}
    ),
    brazo: new undum.OnOffQuality(
        "-1 brazo", {priority:"0004", group:'objeto'}
    ),
    name: new undum.OnOffQuality(
        "Nombre: "+"<b>" + nombre + "</b>",{priority:"0001", group:'objeto'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"}),
    objeto: new undum.QualityGroup(null,{priority:"0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
 
    system.setCharacterText("<p>Comienzas tu aventura</p>");

    system.setQuality("name",true);


};
