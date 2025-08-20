<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <div class="icon" @click="toggleSidebar">
    <div class="bar"> <font-awesome-icon :icon="['fas', 'bars']" class="menu-icon" />
    </div>
  </div>


  <!-- //overlay -->

  <div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>

  <aside :class="{ open: isOpen }" class="sidebar">

    <div class="logo flex items-center">

      <router-link to="/"> <img src="../assets/img/BlueArchive-블루 아카이브_symbolon.png" alt="log"
          class=""></router-link>
    </div>

    <ul>
      <li><router-link to="/" class="font pr-3">HOME</router-link></li>
      <li><router-link to="/Char" class="font pr-3">CHARACTER</router-link></li>
      <li><router-link to="/Banner" class="font">BANNER</router-link></li>
    </ul>
  </aside>

</template>

<style scoped>
.icon {
  width: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  z-index: 1100;
  position: fixed;
  top: -6px;
  left: 15px;
}

.icon .bar {
  font-size: 30px;
  display: none;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.sidebar {
  position: fixed;

  left: -250px;
  width: 250px;
  height: 100%;

  background-color: rgba(60, 113, 163, 0.95);
  box-shadow: 2px 0 8px rgba(2, 2, 2, 0.3);
  transition: left 0.3s ease;
  z-index: 1100;
  padding-top: 0px;

}

.sidebar.open {
  left: 0;
}


.sidebar ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.sidebar ul li {
  padding: 15px;
  border: 1px solid rgb(28, 27, 27);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);

  border-radius: 20px;
  margin-top: 10px;
  width: 230px;
  transition: transform 0.3s ease, background-color 0.3s ease;


}

.sidebar ul li a {
  color: aqua;
  font-size: 16px;
  text-decoration: none;

}

li:hover {
  background-color: rgb(192, 201, 201);
  transform: scale(1.05);
  /* Phóng to nhẹ */
}

.sidebar ul li a:hover {
  text-decoration: underline;
}


/* responsive */

@media only screen and (max-width: 640px) {
  .icon .bar {
    font-size: 30px;
    display: block;
  }
}
</style>
