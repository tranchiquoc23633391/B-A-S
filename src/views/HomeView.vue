<template>
  <div class="main">
    <div class="video-background-wrapper">
      <video autoplay loop muted playsinline class="background-video">
        <source src="../assets/videoTrailer/trailerHome.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>

    <div class="img-background-wrapper">
      <img src="../assets/img/wall-phone.jpg"></img>
    </div>
  </div>

</template>

<style scoped>
.video-background-wrapper {
  position: relative;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  z-index: -1;
}

.img-background-wrapper {
  display: none;
}
.main{
  
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  
}
@media only screen and (max-width: 640px) {
  .video-background-wrapper {
    display: none;
  }

  .img-background-wrapper {
    display: block;
  }
}
</style>
