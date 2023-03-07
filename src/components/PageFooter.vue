<template>
    <div class="text-muted mt-5" id="pageFooter">
      <div class="my-2 text-black">
        <a target="_blank" :href="link.href" v-for="link in links" :key="link.path"><img class="icons" :src="getImage(link.path)"></a>
      </div>
      <div id="header" class="text-center w-100 px-3 fs-small">Giving and Growing Since 2012</div>
      <div>COPYRIGHT &#169; Orange Dolphin 2023</div>
    </div>
</template>
<script>
export default {
  name: 'PageFooter',
  data(){
    return {
      links: [
        {href: "https://www.facebook.com/OrangeDolphinSG/", path: "facebook.png"},
        {href: "https://www.instagram.com/orangedolphinsg/", path: "instagram.png"},
        {href: "https://sg.linkedin.com/in/jerry-seah-86518281", path: "linkedin.png"}
      ]
    }
  },
  methods: {
    getImage(imagePath) {
      return require("@/assets/icons/" + imagePath);
    }
  }
}
</script>
<style scoped lang="scss">
#pageFooter{
    left: 0;
    bottom: 0;
}

#header{
  color: $od-red;
}

.bi{
  font-size: 32px;
  padding: 0 20px;
}

.icons{
  width: 32px;
  height: 32px;
  margin: 0 20px;
}

.fs-small{
  font-size: $fs-xs;

  @include breakpoint(tablet){
    font-size: $fs-s;
  }
}
</style>