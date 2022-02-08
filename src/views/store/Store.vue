<template>
    <div>
        <div class="bg-gray-900 p-8 rounded-xl justify-center">
            <div class="flex mb-8 gap-4 p-1 m-auto rounded-xl bg-opacity-5 bg-white w-fit">
                <router-link v-for="(v,i) in tabs" :key="i" :to="{name:'Store',params:{tab: v.name}}">
                    <button
                        class="px-12 py-2 rounded-lg font-sans font-semibold"
                        :class="tab==v.name ? 'bg-white text-gray-800' : 'text-white opacity-50'"
                    >{{ v.text }}</button>
                </router-link>
            </div>
            <component v-for="(v,i) in tabs" :selected="tab" :key="i" :is="v.c"></component>
        </div>
        <!-- <Rank/> -->
    </div>
</template>

<script>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import Rank from './Rank.vue';
    import Other from './Other.vue';
    import Money  from './Money.vue';
    export default {
        props: {
            tab: String,
        },
        data() {
            return {
                tabs: [
                    {
                        name: 'rank',
                        text: 'RANK',
                        c: Rank
                    },
                    {
                        name: 'money',
                        text: 'UANG',
                        c: Other
                    },
                    {
                        name: 'other',
                        text: 'LAINNYA',
                        c: Other
                    },
                ],
            }
        },
        components: {
            TabGroup,
            TabList,
            Tab,
            TabPanels,
            TabPanel,
            Rank,
        },
        mounted() {
            if (!this.tab) {
                this.tab = 'rank';
            }
        },
    }
</script>