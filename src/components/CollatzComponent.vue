<template>
    <div>
        <h1>Collat!!!!!</h1>
        <label>Introduzca un número</label>
        <input type="number" v-model="numero"/>
        <button @click="generarCollatz()">Generar collatz</button>
        <ul>
            <li v-for="num in numeros" :key="num" v-html="$filters.collatzColores(num)"></li>
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
                this.numeros = []
                let numero = this.numero
                while(numero !== 1){
                    if(numero % 2 === 0){
                        numero = numero / 2
                    }else{
                        numero = numero * 3 + 1
                    }
                    this.numeros.push(numero)
                }

            }
        }
    }
</script>