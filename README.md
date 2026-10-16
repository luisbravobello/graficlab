# GráficLab · Computación Gráfica II

Web local de estudio ISW-412, independiente de MAUIlab. Abrir en http://127.0.0.1:4183/ con el servidor iniciado desde esta carpeta:

    python -m http.server 4183 --bind 127.0.0.1

## Contenido

- Inicio y cinco fases: Leer, Entender, Recordar, Practicar, Corregir.
- Ocho temas: pipeline, álgebra, Model, cámara, profundidad, iluminación, pirámides y plano.
- 32 tarjetas nuevas con autoevaluación e intervalos orientativos.
- Doce casos razonados y doce preguntas de comprobación; errores registrados para repaso.
- Herramientas Canvas: orden de transformaciones, comparación de proyección y componente difusa.
- Cuatro hojas de examen escrito con nombre, matrícula, fecha y referencias desplegables. Impresión en blanco A4 sin soluciones; PDF final no verificado en diálogo de impresión.
- Material completo adaptado de los cuatro HTML del usuario: repaso, 21 cartas conservadas, práctica 7 y plano editable.

## Adaptaciones y límites

Se excluyeron los contenidos de Unity por instrucción del usuario, incluidas sus dos cartas. Se retiraron dependencias de fuentes remotas. Los documentos originales del usuario no se modificaron; las copias están en material/.

La guía distingue OpenGL clásico del perfil core moderno, fragmentos de píxeles y profundidad de cámara de Z global. Se aclara la normal con escala no uniforme y el sombreado manual de las pirámides. Referencias oficiales enlazadas desde Material (Khronos).

Las herramientas nuevas simulan en Canvas, no compilan C ni ejecutan una implementación de OpenGL. El modelo de perspectiva compara alturas a cámara fija y no es un renderizador completo.

## Progreso y respaldo

Clave localStorage: graficlab-study-v1. Notas, lectura, intervalos y errores no comparten datos con otros sitios de estudio. Se puede exportar/importar JSON con validación de formato y confirmación antes de reemplazar. No hay cuentas ni servidor de datos.

## Verificación

Sintaxis comprobada de módulos propios y scripts de las cuatro copias. Pruebas numéricas: T·R frente a R·T, proporciones proyectadas y límites de difusa. UI: herramientas, retroalimentación y Corregir, tarjetas, persistencia de nota tras recarga, cuatro hojas/doce casos de examen y carga de los materiales. Ocho páginas nuevas sin desbordamiento horizontal a 390 px CSS y sin errores de consola observados durante las pruebas.
