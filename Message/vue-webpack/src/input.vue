<template>
    <div>
        <p>{{ msg}}</p>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>
<script>s

export default {
    props: ['msg'],
    data() {
        return{
            message:''

        }
        
    }
}
</script>
