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
        <p>El soldado Romano no da lugar a que tomes una decisión. Es demasiado tarde. Te immovila y junto a otros soldados te arrastran hasta la celda de gladiadores.\
        La entrada que te regaló aquel señor era una entrada para gladiadores. Tendrás que combatir en las arenas del coliseo Romano cuando sea tu turno. Tras varios minutos de desesperación viendo\
        gladiadores salir y no volver, el guarda de la celda te llama para combatir. Eres el último.</p>\
        <p><a href='arena'>Sales a la arena</a></p>",
       // {
         //   exit: function(character, system, to) {
           //     system.setQuality("espada", true);
             //   system.setQuality("escudo", true);
           // }
       // }
    ),
    arena: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif' >\
        <p>De rojo se tintan las arenas del Coliseo, cuya insmensidad supera toda espectativa. El público está eufórico. Al otro lado del coliseo, una compuerta se abre lentamente.\
        Una bestia emerge de las profundidades y ruge hambrienta. Aprovechas la lejanía de la bestia para <a href = './coger-espada'>coger una espada</a> y un \
        <a href = './coger-escudo'>escudo</a> que había en el suelo.\
        El león comienza a correr, tu quedas paralizado y en cuestión de segundos el león salta hacia ti.</p>\
        <p><strong>Será mejor que cojas la espada y el escudo.</strong></p>\
        <p><a href='esquivar'>Esquivas</a></p>\
        <p><a href='cubrir'>Usas el escudo para cubirte</a></p>\
        <p><a href='atacarmal'>Usas la espada para atacar</a></p>",
        {
            actions:{
                'coger-espada': function(character,system,action){
                    system.setQuality("espada", true);
            },
                'coger-escudo': function(character,system,action){
                system.setQuality("escudo", true);        
        }

        },
        exit:function(character, system, to) {
            if(!character.qualities.escudo && !character.qualities.espada){ 
            system.write("<p>Será mejor que cojas la espada y el escudo.</p>");}
        
    }
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
        <p><a href='atacar'>Usas la espada para atacar</a></p>"
    ),
    atacartrascrubrir: new undum.SimpleSituation(
        "<h1>Arena</h1>\
        <img  class='img-situation' src='media/img/gladiador_leon.jfif'>\
        <p>Das muerte a la bestia con la espada y pones fin al combate. El público aplaude \
        estruendósamente y te ovaciona sin parar. De pronto se hace el silencio, el emperador Victorius debe dedicir si eres digno de seguir con vida.</p>\
        <p>- ¿Cual es tu nombre, gladiador?</p>"
    ),
   

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    /*
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
    */
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
        "Espada", {priority:"0001", group:'objeto'}
    ),
    escudo: new undum.OnOffQuality(
        "Escudo", {priority:"0001", group:'objeto'}
    ),
    brazo: new undum.OnOffQuality(
        "-1 brazo", {priority:"0001", group:'objeto'}
    ), 
    vida: new undum.NumericQuality("Vida",{priority:"0002",group:'stats'})
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
    character.qualities.vida = 3;
};
