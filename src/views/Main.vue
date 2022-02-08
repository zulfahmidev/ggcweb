<template>
    <main class="flex flex-col flex-1 gap-6 px-8 py-4 max-h-screen overflow-y-auto">
        <Topbar/>
        <hr class="border-gray-700">
        <router-view></router-view>
    </main>
</template>

<script>
import Topbar from '../components/Topbar.vue';
import Shop from './store/Store.vue';
import Detail from './cart/Cart.vue';
export default {
    components: {
        Topbar, Shop, Detail
    }
}
</script>