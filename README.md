¿Qué sucedio al usar async y await?
Al usar async y await, el programa se detendrá en cada llamada a una función que devuelve una promesa (como añadirTarea, eliminarTarea y completarTarea) y esperará a que esa promesa se resuelva antes de continuar con la siguiente línea de código
¿Qué sucedio al usar el método then()?
Con el método then(), las llamadas encadenadas permiten ejecutar una serie de acciones una tras otra, pero no de manera síncrona. Cada llamada a then() devuelve una nueva promesa y se resuelve cuando la promesa anterior se completa
