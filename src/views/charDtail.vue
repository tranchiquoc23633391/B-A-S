<script setup>
import { onMounted, ref } from 'vue';
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
    <div v-if="charDetail" class="char-bg flex justify-center">

        <!-- <div class="img-wrap">
            <img v-if="charDetail.TrinitySchool" :src="charDetail.TrinitySchool" :alt="charDetail.name"
                class="mb-6 rounded-lg shadow-lg is w-72" />



        </div> -->


        <div class="left">
            <img src="../assets/img/cardStudent.png"></img>
        </div>



        <div class="right">
            <div class="information">
                <div class="">
                    <h3 class="pb-2">{{ charDetail.name }}</h3>
                    <hr>
                    <div class="flex justify-center pb-2">
                        <h4>{{ charDetail.school }}</h4>
                    </div>
                    <div class="content">
                        <p>birthday: {{ charDetail.birthday }}</p>
                        <p>School: {{ charDetail.school }}</p> 
                        <p>DamageType: {{ charDetail.damageType }}</p>
                    </div>

                </div>


            </div>

            <img v-if="charDetail.image" :src="charDetail.image" :alt="charDetail.name"
                class="mb-6 rounded-lg shadow-lg char w-72" />
        </div>

    </div>
    <div v-else class="py-10 text-center">Đang tải...</div>
</template>




<style>
.char-bg {
    background: url("../assets/img/CharBG-img.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    overflow: hidden;
    align-items: center;
    position: relative;
}


.char-bg .right img {
    width: 70%;
    padding: 20px;
}

.char-bg .left img {
    width: 500px;
}


@media only screen and (max-width: 640px) {
    .char-bg .left {
        display: none;

    }

    .char-bg .right img {
        width: 1000px;
        padding-top: 120px;
        padding-left: 100px;
        padding-right: 0;
    }

    .char-bg .information {
        position: absolute;
        top: 300px;
        width: 200px;
        height: 200px;
        background-color: rgba(47, 199, 255, 0.5);
    }

    .right {
        position: fixed;
    }

    .right .information {
        display: flex;
        justify-content: center;
        padding-top: 10px;

        

    }

    .information h3{
        font-size: 18px;
        font-weight: 700;
    }

}

.information{

    display: none;
}
</style>
