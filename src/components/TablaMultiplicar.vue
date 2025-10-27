<template>
    <div id="container">
        <h1>Tabla multiplicar</h1>
        <h3>Tabla 1</h3>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <button @click="generarTabla()">Generar tabla</button>
        <table border="1">
            <thead>
                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
        <h3>Tabla 2</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody v-if="numero != 0">
                <tr v-for="contador in 10" :key="contador">
                    <td>{{numero + " * " + contador}}</td>
                    <td>{{numero * contador}}</td>
                </tr>
            </tbody>
        </table>
        <h3>Tabla 3</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>OPERACIÓN</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody v-if="numero != 0">
                <tr v-for="contador in 10" :key="contador">
                    <td>{{ $filters.getOperacion(numero, contador) }}</td>
                    <td>{{ $filters.getResultado(numero, contador) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "TablaMultiplicar",
        data() {
            return {
                numero: 0,
                html: ""
            }
        }, methods: {
            generarTabla() {
                let aux = "";
                for (var i = 1; i <= 10; i++){
                    aux += "<tr>"
                    aux += "<td>" + this.numero + " * " + i + "</td>"
                    aux += "<td>" + (this.numero * i) + "</td>"
                    aux += "</tr>"
                }
                this.html= aux
            }
        }
    }
</script>

<style>
 #container {
    align-items: center;
    justify-items: center;
 }

 table {
    margin-top: 2%;
    text-align: center;
    border-collapse: collapse;
    width: 50%;
 }
</style>