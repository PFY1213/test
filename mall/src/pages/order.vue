<template>
    <div>
        <order-header/>
        <router-view></router-view>
        <nav-footer/>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader.vue'
import NavFooter from './../components/NavFooter.vue'


export default {
    name: 'order',
    components: {
        OrderHeader,
        NavFooter
    }
}
</script>
<style scoped>

</style>