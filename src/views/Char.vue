<script setup>
import { onMounted, ref, computed } from 'vue';
import { useBlueArchiveStore } from '@/store/api';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';


const Charstore = useBlueArchiveStore();
const { CharacterBlueArchivePage,  currentPage, hasNextPage } = storeToRefs(Charstore);
const router = useRouter();


//test char home with page
onMounted(() => {
  Charstore.changePage(1);
  console.log('CharacterBlueArchivePage:', CharacterBlueArchivePage.value);
});

const goBack = () => {
  if (currentPage.value > 1) {
    Charstore.changePage(currentPage.value - 1);
  }
};

const goNext = () => {
  if (hasNextPage.value) {
    Charstore.changePage(currentPage.value + 1);
  }
};



//get id char
const charDetail = ref(null);

const getCharDetail = async (id) => {
  charDetail.value = await Charstore.getIDcharacter(id);
}

const goToDetail = (id) => {
  router.push(`/CharDetail/${id}`)
}

</script>

<template>
  <div class="char-bg">

    <div  class="flex flex-wrap justify-center gap-4 box-char">
      <div v-for="character in CharacterBlueArchivePage" :key="character._id" class="text-center"
        style="cursor:pointer;">
        <div class="char-img">
          <img :src="character.photoUrl && character.photoUrl.replace(/\/(\d+)px-/i, '/400px-')" :alt="character.name" @click="goToDetail(character._id)" />
        </div>
        <div class="charNameTT " @click="goToDetail(character._id)">{{ character.name }}</div>
      </div>
    </div>

    <div class="flex justify-center gap-4 mt-6 button-page ">
      <button type="button" class="btn" @click="goBack">Back</button>
      <span class="currentPage">Page {{ currentPage }}</span>
      <button type="button" class="btn" @click="goNext">Next</button>
    </div>
  </div>
</template>

<style scoped >
.char-bg {
  background: url("../assets/img/BG_AronaRoom.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.box-char {
  padding-top: 100px;
}



.char-img img {
  transition: transform 0.3s ease;
  width: 170px;
}

.char-img img:hover {
  transform: scale(1.05);
}

.button-page {
  padding-bottom: 20px;
}

.button-page .btn {
  background: #1e293b;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}

.charNameTT {
  font-size: 17px;
  
  cursor: pointer;
  margin-top: 5px;
  font-weight: 500;
  color: #fff8f8;
  font-weight: bold;
  text-shadow: 1px 1px 1px #169ED1;
}

.currentPage {
  
  color: #fffbfb;
  font-weight: bold;
  font-weight: 500;
  text-shadow: 1px 1px 2px #9ad2e9;
  padding-top: 7px;
}
</style>
