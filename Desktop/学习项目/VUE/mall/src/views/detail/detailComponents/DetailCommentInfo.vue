<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="left">
          用户评价
        </div>
        <div class="right">
          更多
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default: {}
      }
    },
    filters: {
      showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 0 5px 0;
  }
  .info-header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding-bottom: 30px;
  }
  .info-header .left {
    float: left;
  }
  .info-header .right {
    float: right;
    font-size: 14px;
    margin-right: 20px;
  }
  .info-user {
    padding-top: 10px;
    padding-left: 20px;
  }
  .info-user img {
    width: 36px;
    height: 36px;
    margin-right: 30px;
    border-radius: 50%;
  }
  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .info-detail {
    padding: 0 5px 15px;
  }

  .info-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
    padding-top: 10px;
  }

  .info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .info-other .date {
    margin-right: 8px;
  }

  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

</style>