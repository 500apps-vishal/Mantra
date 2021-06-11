<template>
<div>
    <h1>User</h1>
    <p>Team id is {{ $route.params.teamId }}</p>
    <button @click="gohome">Go Back</button>
    </div>
</template>
<script>
export default {
    watch: {
        '$route'(to,from){
            alert(to.params.teamId);
        }
    },
    created() {
        alert(this.$route.params.teamId);
    },
    methods:{
        gohome(){
            this.$router.push('/');
        }
    }
    
}
</script>
