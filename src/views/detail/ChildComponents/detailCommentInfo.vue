<template > 
  <div v-if = "Object.keys(commentInfo).length !==0" class = "comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        <i class="arrow">更多</i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-images" v-if="commentInfo.images">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key = "index">
      </div>
    </div>

  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  name:'detailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  filters:{
    showDate (value){
      // 将时间转换成Data对象
      const date = new Date(value * 1000)
      // 将data进行格式化
      return formatDate(date,'yyyy-MM-dd hh:mm:ss' )
    }
  }
}
</script>

<style scoped>
.comment-info {
  box-shadow: 0px 3px 0 #F7F7F7;
}
.info-header {
  position: relative;
}
.info-header .header-title {
  position: absolute;
  left: 20px;
}
.info-header .header-more {
  position: absolute;
  right: 20px;
}

.info-user {
  padding: 20px 20px;
}
.info-user img {
  width: 30px;
  margin-right: 10px;
}

.info-detail {
  padding: 20px;
}

.info-other {
  padding: 20px 0px;
}

.info-other span {
  margin: 0 10px;
}

.info-images {
  display: flex;
  overflow:hidden;
}
.info-images img{
  width: 48%;
}
</style>