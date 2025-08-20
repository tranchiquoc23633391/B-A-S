
<script>


</script>


<template>
    <div class="container">
        <div class="box flex justify-between ">

            <div class="logo flex items-center">

                <router-link to="/"> <img src="../assets/img/BlueArchive-블루 아카이브_symbolon.png" alt="log"
                    class="pl-5"></router-link>
            </div>


            <div class="menu-choice p-5">
                <router-link to="/" class="font pr-3">HOME</router-link>
                <router-link to="/Char" class="font pr-3">CHARACTER</router-link>
                <router-link to="/Banner" class="font">BANNER</router-link>
            </div>

            <div class="logo-icon p-5 ">
                <ul class="flex">
                    <li class="icon pr-5"><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'facebook']"
                                class="cursor-pointer icon-large" /></a></li>
                    <li class="icon pr-5"><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'twitter']"
                                class="cursor-pointer icon-large" /></a></li>
                    <li class="icon pr-5"><a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'tiktok']"
                                class="cursor-pointer icon-large" /></a></li>
                </ul>
            </div>


        </div>

    </div>


</template>

<style scoped>
.container {
    background-color: #008AFF;
    width: 100%;
    position: fixed;
    background-color: rgba(62, 115, 164, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

.logo img {
    width: 180px;

}

.font {
    font-size: 15px;
    font-weight: 500;
}

.icon{
    font-size: 20px;
}

/* responsive */
@media only screen and (max-width: 640px) {
   
    .box{
        display: flex;
        justify-content: center;
    }
   
    .logo-icon{
        display: none;
    }

    .menu-choice{
        display: none;
    }




}


</style>