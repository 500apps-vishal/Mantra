<template>
    <div>
    <h1>Application Form...</h1>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="useful-links">
                <ul>
                    <li><a href="https://mantragroup.com/">Mantra server 1</a></li>
                    <br>
                    <li><a href="https://500apps.com/">500apps server 2</a></li>
                    
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: palegoldenrod;
}
#useful-links ul{
    padding: 3;
}
#useful-links li{
    display: inline-block;
    margin-right: 15px;
}
form > div{
    padding: 20px;
    background: lightgreen;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
