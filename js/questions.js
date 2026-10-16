export const questions=[
['¿Qué produce la rasterización?',['Fragmentos con cobertura','Una nueva matriz Model','Coordenadas de cámara solamente'],0,'Convierte primitivas en fragmentos; después siguen sombreado y pruebas.','pipeline'],
['Una dirección tiene w igual a…',['1','0','Depende de la distancia'],1,'w=0 evita que la traslación modifique una dirección.','algebra'],
['Con vectores columna, T·R·S aplica primero…',['Traslación','Rotación','Escala'],2,'La matriz de la derecha actúa primero sobre el vector.','model'],
['¿Qué datos usa gluLookAt?',['eye, center y up','Color, normal y brillo','near, far y textura'],0,'View se define desde posición, punto de mira y orientación superior.','camera'],
['En ortográfica un objeto más lejano…',['Siempre se reduce a la mitad','No se encoge solo por alejarse','No puede ocultar otro objeto'],1,'Mantiene tamaño por distancia; Z sigue afectando recorte y profundidad.','camera'],
['¿Qué condición es válida para gluPerspective?',['near=0','near<0 siempre','0<near<far'],2,'near y far son distancias positivas delante del ojo en esta configuración.','camera'],
['Además de activar GL_DEPTH_TEST necesitas…',['GLUT_DEPTH y limpiar la profundidad por cuadro','Solo cambiar el color de fondo','Ordenar por nombre los objetos'],0,'Se necesita un buffer y reiniciarlo para cada cuadro.','depth'],
['N·L con vectores unitarios opuestos produce difusa…',['−1 como brillo visible','0 tras max(0,N·L)','1'],1,'El producto es −1, pero el modelo difuso lo limita a cero.','light'],
['En z=−6−15i, para i=3 resulta…',['−45','−36','−51'],2,'−6−45=−51.','pyramid'],
['Dos superficies casi coplanares parpadean. Es probable…',['Z-fighting','Traslación homogénea','Doble buffer correcto'],0,'Compiten por la precisión del buffer de profundidad.','depth'],
['El centro del rango visible y el origen…',['Siempre coinciden','Pueden ser distintos','No tienen coordenadas'],1,'Un rango asimétrico tiene un centro distinto de (0,0).','plane'],
['La escala no uniforme exige especial cuidado con…',['El nombre de la función','La cantidad de ventanas','La transformación de normales'],2,'La matriz normal y la renormalización mantienen perpendicularidad y longitud adecuadas.','algebra']
];
