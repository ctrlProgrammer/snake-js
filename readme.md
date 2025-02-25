# Snake Js By CtrlProgrammer

Juego simple utilizando javascript, html y css.

### Requisitos

1. [NPM](http://www.dropwizard.io/1.0.2/docs/)
2. Navegador (Google Chrome, Firefox, Opera, etc)
3. [GIT](https://git-scm.com/) (No es obligatorio)

### Como inicar el juego

1. Clone git o descarga el ZIP ([Aqui](https://github.com/ctrlProgrammer/snake-js))

```
git clone https://github.com/ctrlProgrammer/snake-js.git
```

2. Abre el archivo en la terminal
3. Usa npm para instalar los modulos necesarios

```
npm install
```

4. Inicia el servidor

```
npm run start
```

5. Utiliza la URL (http://localhost:xxxx) que obtienes al iniciar el servidor

## Configurar juego

Archivo: main.js

```
config = {
    environment: "production", // default, para desarrolladores
    fps: 60, // (60) default, velocidad del juego
    width: 60 * 15, // (900px) default, ajuste de pantalla ancho
    height: 30 * 15, // (450px) default, ajuste de pantalla altura
    pixelSize: 15, // (15) default, ajuste al tamano del pixel
}
```

## Construido con

- JavaScript - Lenguaje principal
- HTML- Manejo de etiquetas
- CSS - Diseno y estilos
- [Serve](https://www.npmjs.com/package/serve) - Modulo en NPM para iniciar un servidor

## Autores

- **CtrlProgrammer** - _Trabajo Inicial_ - [CtrlProgrammer](https://github.com/ctrlProgrammer)
