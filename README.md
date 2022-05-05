PROJECTO E-COMERCE TIENDA ONLINE REACT JS - 

Este proyecto esta pensando para implementar todos los contenidos de react y aprender.
Se empezo como una app de tienda

la idea principal del proyecto es darle un estilo pixel art, el cual me gusta mucho !
se le implemento pequeñas animaciones como el fondo, a los productos.
Como vera soy amante de los gatos, por eso ese fue el tema principal del proyecto,
La idea es una tienda de insumos de iluminacion para el hogar , tanto para chicos y grandes.

-link del repositorio 
https://github.com/stresha/proyectReactBenito
En caso de querer correrlo , solo bastara con clonarlo o  bien descargar el zip desde git hub -
recordar en caso de no tener instalado los npm
con npm install - 
y para correr la app npm start 


-link con la navegablidad de la app (se encuentra ademas de manera local en la app en  public/proyectoReactGif)
https://gifyu.com/image/Ss3hm

Dependencias: 
-bootstramp (por el momento no se esta utilizando), ya que se utilizo css en su estado puro para los estilos.
-sweetAlert
-Firebase


------------------------------------------------------------
La pagina se compone de varias secciones para ir navegando por cada categoria 
"cortinas",
"guirnaldas",
"lamparas",
"veladores"

la app se compone de las siguiente secciones 
*Estructura basica de la app

 -NavBar 
    posee las diferentes categorias para navagar entre ellas, si el carrito tiene productos, se muestra para poder ir al mismo. 
 
 -Banner
    logo de la pagina.

 -CartWidget
    corresponde al carrito que se muestra en navBar si tiene productos.
 
 -footer
    copyright ,derechos reservados de la pagina. 



*Contenido
 -item
    muestra cada producto, mostrando nombre, stock, precio , con un boton para ver el detalle del mismo 
 -itemDetail
    muestra el producto seleccionado con mas informacion, y poder elegir la cantidad de producto seleccionado
 -itemDetailContainer
    muestra solo un prod con sus detalles 
 -itemcount
    contador con su logica para poder elegir la cantidad de productos, sea para sumar o restar
 -itemList
    muestra varios productos 

 -itemListContainer
    muestra productos, y ademas podemos seleccionar por categoria que vamos a ver en navbar, o bien la vista del home

 -formulario
    al finalizar la compra la app se dirige al formulario , en donde el comprador cargara su datos de contacto (mail - tel - nombre ) y complete la compra, mostrando el numero de orden
 
 -cart
    es el carrito de compra , donde vemos los productos elegidos, la cantidad, en caso de querer eliminar o bien modificar uno ,es posible, 

*Otros Componentes

-Servicios
    toda la informacion correspondiente de firebase.

-Context
    se crea el componente context, y muestra todas las funciones, la logica del carrito
    sea borrar productos, sumarlos, e ir a la compra final que nos lleva al formulario
-Hook
    componente por si hay un error de carga con la base de datos.

-adap
    toda la informacion de fire base, para a futuro se cambie algun dato, solo se modifique esto mismo.


En cada producto se encuentra la descripcion del mismo y la opcion para comprar 
Esta la seccion de "CART" que es el carrito 
en el cual podras ver la pre compra, en caso de querer borrar productos ,esta implementado
y un boton, para finalizar compra

Al finalizar compra hay un formulario para completar los datos 
y luego la compra (productos elegidos + datos del comprador) se conectan a una base de datos (fire base)

Se utilizaron variables de entorno para las credenciales de firebase - 


----------------------------------------------------------------------------

