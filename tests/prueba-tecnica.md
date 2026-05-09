Prueba Técnica Automatización
Farmatodo S.A.S

1. Pruebas Técnicas Ingeniero Automatizacion
Estas son las pruebas técnicas para aplicar al candidato(a), antes de iniciar tenga en cuenta lo siguiente:
● Verifique que su entorno de Desarrollo funciona correctamente.
● Realizar la prueba en PlayWright con TS usando patrón de diseño POM
● Debes enviar la solución desde un repositorio público, no olvides dejar un readme explicando la ejecución y despliegue del proyecto.
● Se debe enviar su código fuente en un mismo repositorio público.

1.1. Pruebas de Integración
Se solicita realizar una prueba de integración contra la API pública PokéApi, enfocándose en el recurso de evoluciones de Pokemon.
El objetivo de la prueba es obtener la cadena de evoluciones para el pokemon Squirtle, extraer los nombres y su peso (weight) de las especies involucradas en dicha cadena y mostrarlo ordenados alfabéticamente, sin utilizar métodos de ordenamiento nativos como .sort().

La API para iniciar con la prueba es la siguiente: https://pokeapi.co/api/v2/pokemon/
Criterios de Aceptación
● Las APIS deben responder un código 200 en cada solicitud.
● Se extraen correctamente los nombres de los Pokémon en la evolución.
● La lista de nombres se ordena alfabéticamente sin utilizar métodos de ordenamiento nativos.
● Se imprimen los nombres ordenados correctamente con su peso en la salida.


1.2. Prueba E2E
Debe realizar una prueba de extremo a extremo (E2E) que consiste en lo siguiente:
1. Ingresar al siguiente enlace: PaginaPrueba.
2. Realizar el Login, el usuario y contraseña están en la misma página.
3. Una vez dentro, deberán localizar el producto Sauce Labs Fleece Jacket.
4. Almacenar el nombre del artículo y su precio para futuras validaciones.
5. Añadir el producto al carrito de compras.
6. Antes de continuar con el proceso de compra, es importante validar que el nombre y el precio del producto en el carrito coincidan con los valores previamente capturados desde la pantalla de productos.
7. Completar el proceso de compra hasta llegar a la confirmación de la orden.