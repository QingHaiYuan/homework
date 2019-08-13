<template>
  <div>
    <div id="app">
    <h1>动态css class</h1>
    <h2 v-bind:class="{red:true}">示例 1</h2>
    <div v-on:class='{changeColor:changeColor}'></div>
    <h2>示例 2</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      changeColor:false,
    changLenth:false
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
span{
  background-color: red;
  display:inline-block;
  padding: 10xp;
  color:#fff;
  margin: 10px 0;
}

.changeLength span{
  background-color: green;

}
.changeLength span::after{
    content:'length';
    margin-left:10px;
}
</style>
