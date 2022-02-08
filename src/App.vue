<template>
    <div class="flex w-full min-h-screen font-sans bg-gray-800">
        <Sidebar/>
        <Main/>
    </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue';
import Main from './views/Main.vue';

export default {
    components: {
        Sidebar, Main
    }   
}
</script>