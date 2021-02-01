# Tabla de contenidos
- [Teoria](#Teoria)
    - [¿Que es Github Actions?](#Github-Actions)
        - [¿Que es un Workflow?](#Workflow)
        - [¿Que son los Jobs?](#Jobs)
        - [¿Que son los Steps?](#Steps)
        - [¿Que son las Actions?](#Actions)
        - [¿Que es un Runner?](#Runner)
- [Start](#Empecemos)
    - [Estructura inicial](#Estructura-inicial)








# Teoria
Antes de comenzar deberiamos entender los siguientes conceptos:

## Github Actions
Permite crear flujos de trabajo ([Workflow](#Workflow)) que se pueden utilizar para compilar, probar y desplegar código, dando la posibilidad de crear flujos de integración y despliegue continuo dentro del propio repositorio de git.


Los flujos de trabajo tienen que contener al menos un [job](#Jobs). Estos incluyen una serie de pasos que ejecutan tareas individuales que pueden ser acciones o comandos. Un flujo de trabajo puede comenzar por distintos eventos que suceden dentro de GitHub, como un push al repositorio o un pull request.

En este tutorial vamos a crear un workflow para ejecutar las pruebas unitarias de un proyecto Laravel y realizar el despliegue por ssh a un servidor.

### Workflow
Procedimiento automatizado que agregamos a un repositorio. Se compone de uno o más [jobs](#Jobs) y pueden ser activados por eventos.

### Jobs
Conjunto de [steps](#Steps) que se ejecutan en el mismo runner. Por defecto, los jobs de un workflow se ejecutan en paralelo

### Steps 
Tarea individual que se ejecuta dentro de un [job](#Jobs). Puede ser un action o un comando shell.

### Actions
Comandos independientes que se combinan formando [steps](#Steps). Son el bloque de construccion protátil mas pequeño de un flujo de trabajo.

### Runner
Servidor que tiene instalada la aplicación de ejecución de [Github Actions](#Github-Actions)




# Empecemos

## Estructura inicial

<table>
<tr>
    <td>
    <br>
        <img rowspan="2" src="img/estructuraInicial.png">
    </td>
    <td>
      Primero crearemos la estructura inicial del proyecto <br>
    es decir añadiremos una capreta .github <br> 
    con dos subcarpetas dentro, actions y workflows. <br> 
    Dentro de esta ultima crearemos un archivo llamado Bingo_Workflow.yml
    </td>
</tr>
</table>

## 