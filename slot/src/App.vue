<template>
    <div>
        <formhelper>
            <div slot="form-header">
               <center> <h1>Mantra Technology</h1>
               <marquee>Mantra Technology</marquee>
                <h2>User Login</h2></center>
            </div>
            <div slot="form-fields">
            <br>
                <input type="text" placeholder="Name" required /><br>

                <input type="text" placeholder="E-mail" required /><br>
                
                <input type="password" placeholder="Password" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
                <button v-on:click="handleCancel">Cancel</button>
            </div>
        </formhelper>
    </div>
</template>

<script>
import formhelper from './components/formhelper.vue'

export default {
    components: {
        'formhelper': formhelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('submit successfully');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';

}
marquee{
    padding: 4px;
    background-color :lightsalmon;
}
</style>