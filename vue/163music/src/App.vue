
<template>
    <div id="app">
        <div class="user">
            <div class="back" @click="back">
                <i class="fa fa-angle-left" >
                </i>
            </div>
            <div class="swithches-wrapper">
          <swithches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"/>
        </div>
        </div>
        
    </div>
</template>
<script>

import Swithches from './components/switches/switches'

export default {   //模块输出
  data(){
    return{
       switches:[
         {
           name:'我的收藏'
         },
         {
           name:'最近播放'
         }
       ],
      currentIndex:0
    }
  },
  methods:{
    back() {
    // eslint-disable-next-line no-console
    console.log('回到上一页');
  },
    switchItem(index){
      this.currentIndex=index
    }
  },
  components: {
    'swithches':  Swithches
  }
}
</script>
<style lang="stylus">
@import "./common/styl/variable.styl";
@import "./common/styl/reset.styl";
@font-face {
  font-family: 'FontAwesome';
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot');
  src: url('./common/font-awesome/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff2') format('woff2'),
    url('./common/font-awesome/fonts/fontawesome-webfont.woff') format('woff'),
    url('./common/font-awesome/fonts/fontawesome-webfont.ttf') format('truetype'),
    url('./common/font-awesome/fonts/fontawesome-webfont.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa
  display inline-block
  font normal normal normal 14px/1 FontAwesome
  font-size inherit 
  text-rendering auto 
  -webkit-font-smoothing antialiased 
.user
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 100
  background $color-background
  .back
    position absolute
    top 0
    left 4px
    .fa-angle-left
      padding 5px 10px
      font-size 30px
      color #ffffff
      &:before
        content "\F104"
.swithches-wrapper
  display flex
  align-items center
  background red
  height 44px
</style>