<template>
  <div>
    <van-swipe :autoplay="3000" :loop="true" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2849768792,1404089788&fm=26&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582109340349&di=be8141158d06e56d720eda8aa8636421&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014fed57f4701ea84a0d304f1b79fb.jpg%401280w_1l_2o_100sh.jpg"      ]
    };
  }
};
</script>
<style scoped>
.my-swipe {
  width: 100vw;
  max-height: 50vmax;
}
.my-swipe img {
  max-width: 100%;
  max-height: 50%;
}
</style>