<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-gray-900 p-8 h-fit rounded-xl col-span-2 text-white">
            <div class="text-2xl leading-loose">DAFTAR PESANAN</div>
            
            <!-- Table -->
            <table class="table-auto w-full rounded-xl overflow-hidden">
                <thead>
                    <tr class="">
                        <td class="bg-black bg-opacity-20 p-4 text-center border-gray-900 border-2">Tanggal/Waktu</td>
                        <td class="bg-black bg-opacity-20 p-4 text-center border-gray-900 border-2">Metode</td>
                        <td class="bg-black bg-opacity-20 p-4 text-center border-gray-900 border-2">Status</td>
                        <td class="bg-black bg-opacity-20 p-4 text-center border-gray-900 border-2">AKSI</td>
                    </tr>
                </thead>
                <thead>
                    <tr class="">
                        <td class="bg-black bg-opacity-10 p-3 text-center border-gray-900 border-2">16-01-2022 09:15</td>
                        <td class="bg-black bg-opacity-10 p-3 text-center border-gray-900 border-2">Gopay</td>
                        <td class="bg-black bg-opacity-10 p-3 text-center border-gray-900 border-2 text-primary">Unpaid</td>
                        <td class="bg-black bg-opacity-10 p-3 text-center border-gray-900 border-2">
                            <button data-tooltip-target="tooltip-detail" class="w-9 h-9 p-2 mx-1 text-white bg-green-600 rounded active:bg-green-700"><DocumentTextIcon/></button>
                            <button data-tooltip-target="tooltip-pay" class="w-9 h-9 p-2 mx-1 text-white bg-blue-600 rounded active:bg-blue-700"><CashIcon/></button>
                            <button data-tooltip-target="tooltip-cancel" class="w-9 h-9 p-2 mx-1 text-white bg-red-600 rounded active:bg-red-700"><TrashIcon/></button>
                        </td>
                    </tr>
                </thead>
            </table>
            <!-- End Table -->
        </div>
        <div class="bg-gray-900 p-8 rounded-xl text-white">
            <div class="text-2xl leading-loose">RINCIAN PESANAN</div>
            <div class="flex justify-between py-3 items-center">
                <div class="">
                    <div class="text-sm opacity-75">RANK</div>
                    <div class="">VIP 30 Hari</div>
                </div>
                <div class="text-right">
                    <button class="w-4 h-4" data-tooltip-target="tooltip-cancel">
                        <XIcon/>
                    </button>
                    <div class="">RP. 70.000,00</div>
                </div>
            </div>
            <hr class="border-gray-700">
            <div class="flex justify-between py-3 items-center">
                <div class="">
                    <div class="text-sm opacity-75">GMONEY</div>
                    <div class="">Paket Dasar</div>
                </div>
                <div class="text-right">
                    <button class="w-4 h-4" data-tooltip-target="tooltip-cancel">
                        <XIcon/>
                    </button>
                    <div class="">RP. 15.000,00</div>
                </div>
            </div>
            <hr class="border-gray-700">
            <div class="flex justify-between my-3">
                <div class="text-xl">TOTAL</div>
                <div class="text-xl">Rp. 182.000,00</div>
            </div>
            <div class="text-sm opacity-75">* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, incidunt!</div>
            <button class="p-2 w-full rounded-full mt-4 bg-primary hover:bg-dark-primary">BUAT PESANAN</button>
        </div>

        <!-- Tooltips -->
        <Tooltip id="tooltip-detail" text="Lihat Rincian"/>
        <Tooltip id="tooltip-pay" text="Bayar"/>
        <Tooltip id="tooltip-cancel" text="Batalkan"/>
        <!-- End Tooltips -->
    </div>
</template>

<script>
import * as Icons from '@heroicons/vue/outline';
// import {D} from '@heroicons/vue/outline';
import Tooltip from '../../components/Tooltip.vue';
export default {
    components: {
        ...Icons, Tooltip
    }
}
</script>