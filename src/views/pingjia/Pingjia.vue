<template>
    <div>
          <p>评价</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getShopComment')
    },
}
</script>
<style lang="">
    
</style>