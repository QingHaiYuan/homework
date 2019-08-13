<template>
  <div>
    <header>
      <section>
        <label for="123">TodoList</label>
        <input type="text" placeholder="添加ToDo" v-model="msg" @keyup.enter="add" />
      </section>
    </header>
    <section>
      <h1>正在进行</h1>
      <span>{{todoLen}}</span>
    </section>
    <section>
      <div>
        <ol v-for="(item,index) in todoList" :key="index">
          <li v-if="item.done===false">
            <input @change="shift(index,true)" type="checkbox" />
            <span>{{item.text}}</span>
            <input type="button" value="-" @click="deletes(index,true)"/>
          </li>
        </ol>
      </div>
    </section>
    <section>
      <h1>已经完成</h1>
      <span>{{todoList.length-todoLen}}</span>
    </section>
    <section>
      <div>
        <ul  v-for="(item,index) in todoList" :key="index">
          <li v-if="item.done===true">
            <input type="checkbox" @change="shift(index,false)"/>
            <span>{{item.text}}</span>
            <input type="button" checked value="-" @click="deletes(index,false)"/>
          </li>
        </ul>
      </div>
    </section>
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
}
</script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: black;
  padding-top: 10px;
}
header label {
  font-size: 30px;
  color: whitesmoke;
}
[type="text"] {
  width: 300px;
  height: 30px;
}
section {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ol,
ul {
  list-style: none;
}
</style>
