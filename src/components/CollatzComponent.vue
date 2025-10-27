<template>
    <div>
        <h1>Collat!!!!!</h1>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <button @click="generarCollatz()">Generar collatz</button>
        <ul>
            <li v-for="numero in numeros" :key="numero" v-html="$filters.collatzColores(numero)" ></li>
        </ul>

    </div>
</template>
<script>
    export default {
        name: "CollatzComponent",
        data() {
            return {
                numero: 0,
                numeros: []
            }
        }, methods: {
            generarCollatz() {
                let aux = [];
                while(this.numero !=1){
                    if(this.numero % 2 == 0){
                        this.numero = this.numero / 2
                    } else {
                        this.numero = this.numero * 3 + 1
                    }
                    aux.push(this.numero)
                }
                this.numeros = aux
            }
        }
    }
</script>