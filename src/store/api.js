import { defineStore } from "pinia";
import { ref } from "vue";
import {charDataPage}   from "@/data/dataPage";

export const useBlueArchiveStore = defineStore("anime", () => {
  const CharacterBlueArchive = ref([]);
  const isloading = ref(false);

  // page variable declaration
  const CharacterBlueArchivePage = ref([]);
  const currentPage = ref(1);
  const hasNextPage = ref(false);
  // const searchQuery = ref("");



  // Hàm trả về dữ liệu charDataPage (async)
  async function getCharDataPage() {
    return Promise.resolve(charDataPage);
  }

  // Hàm chuyển trang cho charDataPage (async)
  async function changePage(page = 1, pageSize = 10) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    CharacterBlueArchivePage.value = charDataPage.slice(start, end);
    currentPage.value = page;
    hasNextPage.value = end < charDataPage.length;
    return Promise.resolve(CharacterBlueArchivePage.value);
  }

  // lay thong tin character

  async function getIDcharacter(id) {
    const character = charDataPage.find((characterItem) => characterItem._id === id);
    return Promise.resolve(character);
  }

  return {
    CharacterBlueArchive,
    isloading,
    // searchQuery,
    getCharDataPage,
    changePage,
    CharacterBlueArchivePage,
    currentPage,
    hasNextPage,
    getIDcharacter
  };
  
});
