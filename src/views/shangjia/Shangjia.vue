<template>
    <div>
        <p>商家</p>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('getShopInfo')
    },
}
</script>
<style lang="">
    
</style>