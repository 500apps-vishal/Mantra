<template>
    <div>
        <app-header></app-header>
        <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../src/assets/components/Header.vue';
import Footer from '../src/assets/components/Footer.vue';
import Ninjas from '../src/assets/components/Ninjas.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-ninjas': Ninjas
    },
    data () {
        return {
          ninjas: [
              {name:'Agile CRM',speciality:'A Company of Excllence',show:false},
                {name:'mantra technology',speciality:'500apps',show:false},
                {name:'500 apps Python',speciality:'backend built using Python',show:false},
                {name:'500Apps infinity',speciality:'built using vue.js',show:false},
                {name:'Mantra',speciality:'Premier global Technology',show:false},
                {name:'Agile',speciality:'A Company of Excllence',show:false}
          ]
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'green';
}
</style>
