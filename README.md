# MdLinks

## ¿Qué es Markdown?

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

##### Por lo cuál se crea esta librería que vamos a poder implementar con la finalidad de verificar
##### el status de nuestros links.

# Diagrama de flujo

A continuación se muestra el diagrama de flujo elaborado para la solución de este proyecto.
![Diagrama](https://i.ibb.co/w6YRPpy/My-Diagrama.jpg)

# Usabilidad

Puede ser usado con archivos o directorios.

Los comandos ejecutables son:

- `--validate`
- `--stats`

Pueden aplicarse uno por uno o ambos.


# Ejemplos de usabilidad

#### Ejemplo de README.md sin opciones:

![Ejemplo sin opciones](https://i.ibb.co/rv6kHFm/CYMERA-20190831-190523.jpg)

#### Ejemplo de README.md con opción `--validate` :

![Ejemplo con validate](https://i.ibb.co/7QXZBJS/CYMERA-20190831-185640.jpg)

#### Ejemplo de README.md con opción `--stats` :

![Ejemplo con stats](https://i.ibb.co/vZqg7JV/CYMERA-20190831-185758.jpg)

#### Ejemplo de README.md con `--validate` y `--stats`

![Ejemplo con ambos](https://i.ibb.co/8j6GVNP/CYMERA-20190831-190339.jpg)

## Tambien es posible el uso en Directorios

#### Ejemplo de Directorio ./ sin opciones:

![Ejemplo dir sin opciones:](https://i.ibb.co/8bLrqK9/CYMERA-20190831-190256.jpg)

#### Ejemplo de Directorio con `--validate`:

![Ejemplo dir validate](https://i.ibb.co/bzwcZ9X/CYMERA-20190831-185946.jpg)
![Ejemplo dir validate2](https://i.ibb.co/K7KNdFf/CYMERA-20190831-190433.jpg)

#### Ejemplo de DIrectorio con `--validate` y `--stats`

![Ejemplo val y stats dir](https://i.ibb.co/5s7v8cS/CYMERA-20190831-190153.jpg)


# Dependencias

Para el desarrollo del proyecto se utilizaron las siguientes dependencias:

- [marked]
- [node-fetch]
- [eslint]
- [jest]
- [chalk]
- [node-emoji]


