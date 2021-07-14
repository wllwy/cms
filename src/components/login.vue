<template>
  <div  class="Cabox" @click="login"></div>
</template>

<script>
export default {
    methods: {
        login(){
            console.log("登录")
        }
    }
}
</script>

<style>
.Cabox{
    width: 25px;
    height: 25px;
    border: 1px solid rgb(114, 114, 114);
    background: #ddfff0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto
}
</style>