###### Requirements: VIM on VSC extension.
# [LiveDemo](https://rroderickk.github.io/vimVSC_cheatSheet/)

![demo](./assets/demo_game.gif)

![demo](./assets/livedemo2.png)



<h2>Lo mas difícil de dominar es el movimiento inicial con las teclas 
  <span style="color: crimson">h j k l</span> <i>-Para es este juego-</i>
  Una vez lo logras el resto es <b>PAN COMIDO</b>....
</h2>
<small style="font-size: 17px;">Por supuesto hay otros movimientos añadidos que descubriras leyendo este post</small><br/>
<small style="font-size: 17px;">El unico requerimiento es tener instalada la extension VIM on VSC</small>



<h2>Combo1: Pasitos de tortuga </h2>
<p>Una vez que domines el movimiento tortuga ya estaras listo para empezar a hackear los movimientos y moverte modo liebre, guepardo o gokú teletransportandote.</p>
<p style="font-style: oblique; filter: contrast(0.8)">Nota: La idea principal es asociar o referenciar los comandos como &ensp; 
  <span> dt< </span> &ensp; hacia lo que quieres hacer por medio de la via corta, en este caso en ingles significa: <span>delete until < </span>  &ensp; eliminar hasta < 
</p>
<p>Así los comandos quedan INTERIORIZADOS para siempre.</p>
  <img src="./assets/demo_dt_1.gif" alt="demo1"/>
<p>Puedes ver lo poderoso que es?, entonces empecemos con los movimientos por palabras, si como su nombre lo dice palabras en ingles <span>words</span> que es diferente a <span> WORDS </span> jejejej si puedes ir haciendote la idea que la velocidad de movimiento cambia si presionamos <span>w</span> o <span>W</span> a su vez si queremos ir hacia atras usamos la <span>b</span> o <span>B</span> que en ingles es <span>back</span></p>
  <img src="./assets/demo_wb.gif" alt="demo1"/>



<h2>Combo2: Movimiento horizontal, busqueda</h2>
<p>Dentro de la misma linea horizontal puedes avanzar a caracteres especificos con la palabra <span>find</span> osea la tecla <span>f</span> puedo moverme buscando los espacios con el comando <span>f space</span> o retrocediendo <span>F space</span> con eso es suficiente para entender la dinamica. <span>f{caracter}</span> |or| <span> F{caracter}</span>.</p>
<p>
  <span>f.</span> find .<br/>
  <span>f(</span> find (<br/>
  <span>f/</span> find / <span>F/</span> Find /<br/>
</p>
  <img src="./assets/demo_f.gif" alt="demof" style="margin: 0"/>
<p style="font-style: oblique; filter: contrast(0.8); margin-bottom: 100px">
  Nota: Siempre hay dos sentidos, infinidad de comandos posibles.
</p>




<h2>Combo3: Inicio y final de linea horizontalmente </h2>
<p>
  <span>0</span> inicio <br/>
  <span>$</span> final <br/>
  <span>%</span> Saltar a la coincidencia ({[]}). <br/>
</p>
<p>Letra Inicial - Letra final en modo insertar </p>
<p>
  <span>I</span> i mayuscula -> Inicio <br/>
  <span>A</span> Al final <br/>
</p>
  <img src="./assets/demo_jnicio_final.gif" alt="inicio_final" style="margin: 0"/>
<p><b>VIMotion</b> tiene tres modos, cursor - insertar - seleccionar 
y como todos insertar tene dos sentidos <span>i, I</span> y <span>a A</span>.<br/></p>
<p>
  <span>i</span> tecla i  <br/>
  <span>a</span> tecla a <br/>
  <span>o</span> open linea debajo <br/>
  <span>O</span> Open linea arriba <br/>
</p>
  <img src="./assets/demo_ia.gif" alt="inicio_final" style="margin: 0"/>
  <p style="margin-bottom: 100px"><b>Felicidades: ya tiene lo suficiente para moverse en modo liebre.</b></p>





<h2>Combo4: Movimiento vertical como guepardo </h2>
<p>Fast Movement </p>
<p style="font-style: oblique; filter: contrast(0.8)">Nota: aqui ya eres libre de decidir como relacionar las teclas con tu forma de pensar </p>
<p>
  <span>( )</span> fast vertical movement  <br/>
  <span>{ }</span> fast vertical movement <br/>
</p>
  <img src="./assets/guepardo.gif" alt="inicio_final" />



<h2>Combo5: Movimientos verticales de alta precisión con patrón de búsqueda </h2>
<p>Busqueda hacia arriba o hacia abajo</p>
<p>
  <span>/{palabra a buscar hacia abajo}</span> Ejemplo: /Nota  <br/>
  <span>?{palabra a buscar hacia arriba}</span> Ejemplo: ?Busqueda <br/>
  <span>n</span> next, siguiente ocurrencia de busqueda <br/>
  <span>N</span> next, anterior ocurrencia de busqueda <br/>
</p>
<p>Busqueda hacia arriba o hacia abajo</p>
  <img src="./assets/busqueda.gif" alt="inicio_final" style="margin-bottom: 0"/>
  <img src="./assets/busquedaN.gif" alt="N" style="margin-bottom: 100px"/>




<h2>T1: linea 0 -> cualquier linea - verticalmente</h2>
<p>
  <!-- gg -->
  <span>gg</span> gugol gugol,te lleva a la linea cero o inicio del documento <br/>
  <span>G</span> al final <br/>
  <span>gg{numero_de_linea}G</span> linea exacta <br/>
  <span>gg100gg</span> tambien funciona y te lleva a la linea 100 <br/>
  <span>gg50enter</span> lo mismo -> linea 50 <br/>
  <span>ggdG</span> <b>Elimina todo el documento </b> 
</p>
  <img src="./assets/gg.gif" alt="inicio_final" /><br/>



<h2>T2: Movimiento 3D </h2>
<p>
  <span><b>gd</b></span> Go to definition <span>de mis favoritos y mas usados</span><br/>
  <span>alt + ArrowLeft</span> Devolver<br/>
  <br/>
  <img src="./assets/gd.gif" alt="inicio_final" style="margin: 0"/><br/>
  <br/>
  <span>gf</span> Get file<br/>
  <br/>
  <img src="./assets/gf.gif" alt="inicio_final" />
</p>



<h2>Editando texto: Modo hardcore</h2>
<p>
  <span><b>dd</b></span> Elimina toda la linea -delete-<br/>
  <span>yy</span> Copia toda la linea -yank-<br/>
  <span>p</span> Pegar <span>Paste</span><br/>
  <span>v</span> Modo seleccionar<br/>
  <span>Esc</span> Para escapar de la mayoria de los comandos y te situa en modo movimiento - cursor<br/>
</p>
<img src="./assets/dd.gif" alt="dd" /><br/>




<h2>Editando texto: Modo hardcore</h2>
<p>
  <span><b>de</b></span> Eliminando palabras<br/>
  <span><b>dt space</b></span> Eliminando hasta el espacio<br/>
  <span><b>dt / </b></span> Elimina hasta el /<br/>
  <span><b>dt ' </b></span> Elimina hasta la '<br/>
  <span>dB</span> delete en sentido contrario delete back<br/>
</p>
  <img src="./assets/dw.gif" alt="dw"/><br/>



<h2>Multiplicadores</h2>
<p>
  <span>4dj</span> Delete 4 lineas hacia abajo <br/>
  <span>4yk</span> yank 4 lineas hacia arriba<br/>
  <span>d1000enter</span> delete 1000 lineas <br/>
  <span>10000dd</span> 10000 lineas delete<br/>
  <span>10000yy</span> 10000 lineas yank -copy-<br/>
</p>
<img src="./assets/multiplicador.gif" alt="multiplicador"/><br/>




<h2> Replicador</h2>
<p>
  <span>.</span> con la tecla punto replica último cambio<br/>
</p>
<img src="./assets/replicador.gif" alt="replicador" /><br/>


<h2>Replace</h2>
<p>
  <span>r </span> Reemplaza el caracter debajo del cursor<br/>
  <span>R </span> Modo reemplazar<br/>
</p>
<img src="./assets/reemplazar.gif" alt="reemplazar"/><br/>



<h2>Substitusion</h2>
<p>
  <span>s </span> Substituye el caracter debajo del cursor<br/>
  <span>S </span> Substituir toda la linea<br/>
  <span>D </span> Delete resto de linea<br/>
</p>
<img src="./assets/substituir.gif" alt="substituir"/><br/>


<p>
  <span>u </span>Undo -deshacer- <br/>
  <span>ctrl z </span>Undo<br/>
  <span>ctrl r </span>Rehacer<br/>
  <span>ctrl shif z </span>Rehacer<br/>
</p>
<!-- :w  -->
<p>
  <span>:wq </span> Write quit -guardar salir- <br/>
  <span>:wq! </span> Write quit forzar <br/>
  <span>:q! </span> Force quit<br/>
  <span>esc ZZ </span> Mi favorita la salida del zorro<br/>
</p>




<h2>Substitusion en todo el documento</h2>
<p>
  <span>:%s/w/s/g </span> :%s sustitucion /word a substituir /substucion /g aplicar cambios a todas las ocurrencias<br/>
  <span>:%s/"/'/g </span>Ejemplo: substituye todas las comillas dobles por comilla simple<br/>
</p>
  <img src="./assets/subs.gif" alt="subs"/><br/>



<h2>Emmet: wrap</h2>
<p>
  <span>f1 wrap enter + name</span>wrap with etiqueta<br/>
</p>
  <img src="./assets/emmet.gif" alt="emmet"/><br/>




<h2>Indentacion</h2>
<p>
  <span style="font-size: 22px;"> > </span> -> Empuja hacia la derecha <br/>
  <span style="font-size: 22px;"> < </span> <- Empuja hacia la izquierda<br/>
  <span style="font-size: 22px;"> <. </span> <- Empuja hacia la izquierda y replica<br/>
</p>
  <img src="./assets/indentacion.gif" alt="indentacion" style="max-width: 770px";/><br/>





<h2>VIM: motion</h2>
<p>
  <span>space space motion  objetivo</span> si tienes habilitada esta opcion con la combinacion de teclas 2 veces espacio y una direccion jklm entras en modo leader VSC te resaltara las opciones precisas a donde quieres ir<br/>
  <span>space space u ,</span> space space arriba y al objetivo , me situara allí<br/>
</p>
  <img src="./assets/motion.gif" alt=""/><br/>


<h2>Navegacion en pestañas o grupo</h2>
<p>
  <span>alt 2 </span> alt numero de pestaña<br/>
  <span>ctrl 2 </span> ctrl numero del grupo de pestaña<br/>
</p>
  <img src="./assets/pestañas.gif" alt="pestañas"/><br/>



<h2>Autoguardado</h2>
<p>
  <span>ctrl , </span>ctrl , abre settings de VSC y en el primer apartado AutoSave escoger <span>afterDelay</span><br/>
</p>
<h3>Si tienes otro hack no dudes en comunicarlo</h3>
  <img src="./assets/auto.gif" alt="pestañas"/><br/>


<h2>Por supuesto la destreza se adquiere practicando con el poco tiempo veras como tu cerebro crea las conexiones necesarias para que tus manos hagan lo que tu desees sin pensarlo.
  <br/> habran errores mientras mas practiques la precision y conexion ojo -> cerebro -> mano -> aumentara...</h2><br/>
<h4> Si quieres aprender a hacer juegos como este te recomiendo este video:
  <a href="https://www.youtube.com/watch?v=vyqbNFMDRGQ" target="_blank">
    JavaScript Fighting Game Tutorial with HTML Canvas
  </a> de este canal:
  <a href="https://www.youtube.com/c/ChrisCourses" target="_blank">
    Chris Courses </a>
</h2>




<a href="https://twitter.com/cheatmodes4" target="_blank" style="text-decoration: none;">
<h3 style="text-align: center; margin: 60px 0 80px">
  <div style="height: 40px"></div>
  <img src="./assets/iam.jpg" alt="cheat" 
    style=" border-radius: 50%;
      width: 90px; height: 100px;
      overflow: hidden; margin-bottom: 0;
  "/>
  <br/>by CheatModes4 - rroderickk </h3>
</a>
