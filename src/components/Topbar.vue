<template>
    <header class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-semibold leading-snug text-white">SHOP</h1>
            <div class="text-gray-200">Lorem ipsum dolor sit amet.</div>
        </div>
        <div class="flex items-center gap-6">
            <button class="text-gray-200 w-5 h-5" data-dropdown-toggle="dropdown">
                <TranslateIcon/>
<!-- Dropdown menu -->
<div id="dropdown" class="hidden text-left z-10 w-44 list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Indonesia</a>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Inggris</a>
      </li>
    </ul>
</div>
            </button>

            <router-link :to="{name: 'Cart', params: {}}" class="text-gray-200 w-5 h-5 relative">
                <ShoppingCartIcon/>
                <div class="bg-primary absolute bottom-3 left-3 w-4 h-4 flex items-center justify-center rounded-full" style="font-size: 10px">3</div>
            </router-link>
            <button class="text-gray-200 w-5 h-5">
                <LogoutIcon/>
            </button>
            <div class="h-10 w-0 border-r-2 opacity-25"></div>
            <div class="text-gray-200">Noname</div>
            <div class="w-14 rounded-xl h-14 bg-gray-900 overflow-clip">
                <!-- <img src="/13.png" alt=""> -->
            </div>
        </div>
    </header>
</template>

<script>
import {ShoppingCartIcon, LogoutIcon, TranslateIcon} from '@heroicons/vue/outline'
export default {
    components: {
        ShoppingCartIcon, LogoutIcon, TranslateIcon
    }
}
</script>