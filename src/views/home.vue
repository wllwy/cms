<template>
  <div id="app">
    <div class="app_left"></div>
    <div class="app_right">
      <div class="app_rightOn">
        <div class="app_rightTop">
          <div class="app_rightTopCs">
            <span>请登录</span>
          </div>
          <div class="app_rightTopCa">
            <Login></Login>
          </div>
        </div>
        <div class="app_rightContent">
          <div class="app_rightContent_nav">
              <router-link to='/defualt' class="noActive">nihao<span class="noX">x</span></router-link>


              <router-link to='/home' class="noActive"></router-link>
              <router-link to='/about' class="noActive"></router-link>
            
          </div>
          <div class="app_rightContent_cun">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "../components/login.vue";

export default {
  components: {
    Login,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

#app .app_left {
  position: absolute;
  width: 200px;
  height: 100%;
  background: #42b983;
  z-index: 89;
}
#app .app_right {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ddfff0;
}
#app .app_right .app_rightOn {
  margin-left: 200px;
}
#app .app_right .app_rightOn .app_rightTop {
  width: 100%;
  height: 50px;
  background: #42b983;
}
#app .app_right .app_rightOn .app_rightTop .app_rightTopCs {
  height: 100%;
  padding-left: 30px;
  line-height: 50px;
  color: #fff;
  display: inline-block;
}
#app .app_right .app_rightOn .app_rightTop .app_rightTopCa {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
}
#app .app_right .app_rightOn .app_rightContent {
  width: 100%;
  height: 100%;
}
#app .app_right .app_rightOn .app_rightContent .app_rightContent_nav {
  display: flex;
  width: 100%;
  height: 30px;
  background: #fff;
  justify-content: flex-start;
}
#app .app_right .app_rightOn .app_rightContent .app_rightContent_nav .noActive{
    display: block;
    min-width: 30px;
    width: 90px;
    height: 18px;
    background: #fff;
    border: 1px solid #000;
    float: left;
    padding: 5px;
    font-size: 16px;
    text-decoration: none;
    color: #000;
    position: relative;
}
#app .app_right .app_rightOn .app_rightContent .app_rightContent_nav .noActive .noX{
    display: block;
    width: 15px;
    height: 15px;
    color: rgb(0, 0, 0);
    background: rgb(187, 187, 187);
    border-radius: 555px;
    line-height: 12px;
    text-align: center;
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 8px;
    bottom: 0;
    margin: auto;
}
#app .app_right .app_rightOn .app_rightContent .app_rightContent_nav .active{
    float: left;
    margin-top: 2px;
    background: #ddfff0;
    border: none;
}
</style>
