const app = Vue.createApp({
    data(){
        return {
            titulo: 'Lista de Compras',
            nuevoElemento:'',
            compras:[
            ],
            estado: 'desactivado',
        }
    },
    computed:{
        listaReversa(){
            return this.compras.reverse();
        }
    },
    methods:{
        agregarElemento(){
            this.compras.push({
                nombre: this.nuevoElemento,
                estado: false
            });
            this.nuevoElemento = '';
        },
        cambiarEstado(valor){
            this.estado = valor;
        },
        cambiarEstadoCompra(elemento){
            elemento.estado = !elemento.estado;
        }
    }
}).mount('#app')