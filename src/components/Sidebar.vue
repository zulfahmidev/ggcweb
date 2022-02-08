<template>
  <div class="flex flex-col gap-y-1 items-center py-8 w-24 bg-white dark:bg-gray-900">
    <button class="p-3 bg-opacity-20 mb-3 rounded-xl bg-primary">
      <img src="/logo_sm.svg" alt="">
    </button>
    <div class="flex flex-col gap-y-4 items-end self-end">
      <div v-for="(menu, i) in menus" :key="i"
        :class="currentRoute() == menu.name ? `bg-gray-800 rounded-l-xl relative 
        before:bg-gray-900 before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top 
        after:bg-gray-900 after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom` : ''"
      >
      <router-link :to="{name: menu.name, params: menu.params}">

        <button 
          class="p-5 my-3 mr-3 ml-3 rounded-xl"
          :class="currentRoute() == menu.name ? 'text-white shadow-primary bg-primary' : 'text-primary'"
        >
          <component class="w-6 h-6" :is="menu.icon"></component>
        </button>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as Icons from '@heroicons/vue/outline'

export default {
  data() {
    return {
      menus: [
        {name: "Home", icon: Icons.HomeIcon},
        {name: "Store", icon: Icons.ShoppingBagIcon, params: {tab: 'rank'}},
        {name: "Blog", icon: Icons.NewspaperIcon},
        {name: "Info", icon: Icons.InformationCircleIcon},
      ],
    }
  },
  methods: {
    currentRoute: function() {
      // console.log(this.$route)
      return this.$route.name;
    }
  }
}
</script>
