const products = [
    {id:1, name: "Lampara Mini Cat", category:"veladores", price:799 , img: "https://i.postimg.cc/sgVzqc4S/lampara-cat2.jpg", stock:2, description:"Esta lámpara con forma de simpaticos gatitos iluminará los sueños.Cuenta con la posibilidad de posicionarlo en luz blanca estatica o que cambie a siete colores intermitentes!Viene con cable usb incorporado para la carga."},
    {id:2, name: "Lampara Cat Yellow", category:"veladores", price: 899, img:"https://i.postimg.cc/gkhrmNhT/lampara-cat.jpg", stock:34, description:"Este producto es ya uno de nuestros favoritos!Ideal para decorar la habitación de un niño o bebé con un toque de ternura.Puede usarse fijo en el color que mas prefiera o bien al presionar una vez en la parte superior cambia a la función de luces rotativas que cada 3 segundos pasan de un color a otro."},
    {id:3, name: "Lampara Sal", category:"lamparas", price: 599, img :"https://i.postimg.cc/W4N4mVHB/lamapra-sal2.jpg" , stock:6, description:"Lampara De Sal Del Himalaya Hasta 1.8kg (15-20cms)Incluye: Set eléctrico (primera calidad) + Lampara de 15W"},
    {id:4, name: "Lampara Cat White", category:"veladores", price: 1699, img:"https://i.postimg.cc/VkL6n1T3/lampara-cat3.jpg", stock:20, description:"Con la luz de esta preciosa y alegre lámpara quitamiedos con forma de gato, Funciona con luces LED de larga duración que evitan el calentamiento de la lámpara, por lo que es segura para los niños.Dispone de botón de encendido y apagado en su base."},
    {id:5, name: "Lampara Cat Violet", category:"veladores", price: 1199, img: "https://i.postimg.cc/fLXTDbt0/lampara-cat6.jpg", stock:10, description:"Tiernos gatito de silicona con luz LED para decorar la habitación de los niños o incluso para jugar con ellos. Contiene debajo un botón de encendido. Luego la luz se puede encender con un golpeSe carga mediante un cargador USB. Posee una luz LED que indica cuando se esta cargando"},
    {id:6, name: "Lampara Cat 3D", category:"veladores" , price: 999, img: "https://i.postimg.cc/Dy5f2HZ5/lampara-cat7.jpg", stock:11, description:"Lámpara para decorar y ambientar “Tu Espacio”.Tecla para encender/apagar y transformador para que puedas enchufarlo directamente a la corriente! No necesitás nada adicional"},
    {id:7, name: "Lampara Sal m2", category: "lamparas", price: 799, img:"https://i.postimg.cc/DZqFRYHr/lampara-sal.jpg", stock:20, description:"lámpara de sal realizada de forma artesanal, vienen con instalación electrica completa, cable interruptor ficha incluida lámpara 15 w"},
    {id:8, name: "Lampara Reno", categor: "veladores", price: 799, img: "https://i.postimg.cc/15RPYBHF/map.jpg", stock:22, description:"Perfecta como luz anti-miedos, lámpara de mesita de noche o punto de luz.Viene presentada en caja ilustrada promocional lista para regalar!"},
    {id:9, name: "Guirnalda Nube", category: "guirnaldas", price: 499, img: "https://i.postimg.cc/FFpXcc4H/tira.jpg", stock:20, description:"Guirnalda tierna de nubes, ideal para decoracion! Extensión total: 2 m.Cable transparente"},
    {id:10, name: "Guirnalda Unicorn", category: "guirnaldas", price: 699, img: "https://i.postimg.cc/P5BghQm2/tira-leduni.jpg", stock:22, description:"Guirnalda de luces de 10 leds en forma de unicornio. Utiliza 2 pilas AA (no incluídas). Bajo consumo. Perilla ON / OFF.Cable: transparente."},
    {id:11, name: "Guirnalda Stars", category: "guirnaldas", price: 799, img: "https://i.postimg.cc/4dGjH42c/tira-ledstar.jpg", stock:20, description:"Guirnalda estrellas LED, es ideal para decorar todo tipo de eventos o lo que vos quieras.Perfecta para ambientar y darle vida a espacios, 2mts"},
    {id:12, name: "Guirnalda Stars m2", category: "guirnaldas", price: 999, img: "https://i.postimg.cc/mDSJYxK5/tirad-ledstar3.jpg", stock:16, description:"Guirnalda Luces LED con Estrellas, Tiene un largo de 3 metrosEs de muy bajo consumo y genera muy poca temperatura"},
    {id:13, name: "Guirnalda Yellow", category: "guirnaldas", price: 459, img: "https://i.postimg.cc/y8SGf3w9/tira-led2.jpg", stock:22, description:"Las luces son unos de los productos más usados a la hora de decorar el interior del hogar. Contribuye de manera excelente con su bajo consumo y gran iluminación."},
    {id:14, name: "Tira Led 5050", category: "iluminacion", price: 1999, img: "https://i.postimg.cc/NMQPfJL7/tira-led.jpg", stock:25, description:"Kit completo para instalar directo! Con control y fuente!16 Colores.Efectos programados.220V listo para usar.Flexible.Cortable cada 3 LEDS"},
    {id:15, name: "Velador Cat", category: "iluminacion", price: 799, img:"https://i.postimg.cc/1XjWByBJ/lampara-cat4.jpg", stock:15, description:"Velador Tiernos animales con Luz Led Cable Usb Recargable,Tecla para encender/apagar, ideal para el escritorio, varios colores disponibles"},
    {id:16, name: "Velador Bear", category: "iluminacion", price: 989, img:"https://i.postimg.cc/y6QrsTKc/lampara-cat5.jpg", stock:23, description:" Velador Lámpara Luz Led Cable Usb Recargable,Tecla para encender/apagar, ideal para el escritorio, varios colores disponible"},
    {id:17, name: "Tubos Led", category: "cortinas", price: 2989, img:"https://i.postimg.cc/t70F9JYd/test.png", stock:25, description:"La luz de cada bombilla se enciende y apaga uno por uno en secuencia y automaticamente como la lluvia de meteoros o la nieve que cae en el cielo nocturno."},
    {id:18, name: "Cortina Led", category: "cortinas", price: 2999, img:"https://i.postimg.cc/Vv9XL1M3/ddddddd.png", stock:20, description:"Cortina guirnalda tipo red. Los usos son infinitos y van en la originalidad de tus ideas, no levantan temperatura"},
    {id:19, name: "Lluvia Luna Estrellas", category: "cortinas", price: 2989, img:"https://i.postimg.cc/2yxBNGNY/startok.jpg", stock:25, description:"Cortina de Luces LED con 5 Estrellas y 5 Lunas Alambre led. Es ideal para decorar todo tipo de eventosEs de muy bajo consumo y genera muy poca temperatura."},
    {id:20, name: "Lluvia Led Multicolor", category: "cortinas", price: 2989, img:"https://i.postimg.cc/7hcrh8kn/cortina.jpg", stock:33, description:"cortina de 144 Led, Color de Luz Multicolor, Con controlador de efectos fijo e intermitentes"}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 500)
    })
}