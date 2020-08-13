<template>
  <div class="swapper" ref="swapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        bScroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.bScroll = new BScroll(this.$refs.swapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      this.bScroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
      this.bScroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.bScroll && this.bScroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.bScroll && this.bScroll.finishPullUp()
      },
      refresh() {
        // console.log('aaa')
        this.bScroll && this.bScroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>