# Tabla de contenidos
- [Teoria](#Teoria)
    - [¿Que es Github Actions?](#Github-Actions)
        - [¿Que es un Workflow?](#Workflow)
        - [¿Que son los Jobs?](#Jobs)
        - [¿Que son los Steps?](#Steps)
        - [¿Que son las Actions?](#Actions)
        - [¿Que es un Runner?](#Runner)
- [Start](#Start)
    - [Estructura inicial](#Estructura-inicial)
    - [Sintaxis](#Sintaxis)
    - [Tests](#Tests)










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




# Start

## Estructura inicial

<table>
<tr>
    <td>
    <br>
        <img src="img/estructuraInicial.png">
    </td>
    <td>
      Primero crearemos la estructura inicial del proyecto <br>
    es decir añadiremos una capreta .github <br> 
    con dos subcarpetas dentro, actions y workflows. <br> 
    Dentro de esta ultima crearemos un archivo llamado Bingo_Workflow.yml
    </td>
</tr>
</table>

## Workflow

<table>
<tr>
    <td>
                <img src="img/workflow.png">
    </td>
    <td>
    En nuestro workflow Bingo_Workflow.yml haremos lo siguiente: <br>
    - Primero le asignaremos un nombre <br>
    - Segundo le diremos que se ejecute cuando se suba a la rama githubActions_improvement
    </td>
</tr>
</table>

Cabe destacar que todos nuestros jobs tendran como valor nombre su nombre de job y todos se ejecutaran en un runner ubuntu-lastest

## Sintaxis
Este [job](#Jobs) se encargara de verificar que la sintáxis utilizada és correcta en los ficheros javascript.

<table>
<tr>
    <td>
        <img src="img/syntax.png">
    </td>
    <td>
        Primero crearemos el objeto job para <br> poder ir haciendo uno detras de otro. <br> El primero será syntax_check_job <br>  al cual le asignaremos varios seteps: <br> <br>
        - Checkout code: Obtendrá el código fuente  <br> del proyecto ejecutando la action actions/checkout@v2<br>
        - Linter execution: Ejecutará la action <br> github/super-linter@v3  con estas variables de entorno.
    </td>
</tr>
<tr>
    <td>
    Una vez subidos estos cambios a nuestro <br> repositorio podremos comprobar que  <br>  todo funciona correctamente
    </td>
    <td>
            <img src="img/Gsyntax.png">
    </td>
</tr>
</table>

## Tests
Este [job](#Jobs) se encargara dese ejecutar los tests y verificar que todos funcionan como se esperaba.

<table>
<tr>
    <td>
        <img src="img/tests.png">
    </td>
    <td>
       Añadimos a jobs test_execution_job <br>  al cual le asignaremos varios seteps: <br> <br>
        - Checkout code: Obtendrá el código fuente  <br> del proyecto ejecutando la action actions/checkout@v2<br>
        - Run jest test: Instalara lo necesario y ejecutará los tests
    </td>
</tr>
<tr>
    <td>
    Una vez subidos estos cambios a nuestro <br> repositorio podremos comprobar que  <br>  todo funciona correctamente
    </td>
    <td>
            <img src="img/Gsyntax.png">
    </td>
</tr>
</table>