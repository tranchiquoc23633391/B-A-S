<script setup>
import { onMounted, ref} from 'vue';
import { useBlueArchiveStore } from '@/store/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useBlueArchiveStore();

const charDetail = ref(null);

onMounted(async () => {
    const id = route.params.id;
    charDetail.value = await store.getIDcharacter(id);
});


</script>

<template scoped>
    <div v-if="charDetail" class="">

        <div class="img-wrap">
            <img v-if="charDetail.TrinitySchool" :src="charDetail.TrinitySchool" :alt="charDetail.name"
                class="mb-6 rounded-lg shadow-lg is w-72" />


            <!-- <img v-if="charDetail.image" :src="charDetail.image" :alt="charDetail.name"
                class="mb-6 rounded-lg shadow-lg char w-72" /> -->
        </div>

    </div>
    <div v-else class="py-10 text-center">Đang tải...</div>
</template>





<style>
.img-wrap {
    position: relative;
    align-items: center;
    display: flex;
}

.is{
    position: absolute;
    width: 700px;
    top: 0;
    
}

</style>
