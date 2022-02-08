<template>
    <div class="grid gap-x-10 gap-y-10 grid-cols-4">
        <div v-for="i in 4" :key="i">
            <div class="rounded-xl h-52 relative bg-white overflow-clip bg-opacity-5">
                <!-- <img src="13.png" alt=""> -->
                <div class="absolute w-12 h-10 rounded-bl-md right-0 bg-primary text-sm items-center flex justify-center text-white">HOT</div>
            </div>
            <div class="text-center px-3">
                <h2 class="leading-loose text-2xl text-white">VIP</h2>
                <p class="text-opacity-50 text-white text-md">Rp 40.000/bln</p>
                <hr class="border-gray-700 mt-3">
                <div class="py-2">
                    <div class="text-white text-sm">Permission Set.</div>
                    <hr class="border-gray-700 mt-3">
                </div>
                <button class="bg-primary text-white font-sans w-full rounded-full hover:bg-opacity-80 text-sm mt-3 p-2">ORDER NOW</button>
            </div>
        </div>
    </div>
</template>

<script>
</script>