<template>
    <div class="text-muted mt-5" id="pageFooter">
      <div class="my-2 text-black">
        <a target="_blank" href="https://www.facebook.com/OrangeDolphinSG/"><img class="icons" src="@/assets/icons/facebook.png"></a>
        <a target="_blank" href="https://www.instagram.com/ahloytan/?hl=en"><img class="icons" src="@/assets/icons/instagram.png"></a>
        <a target="_blank" href="https://sg.linkedin.com/in/jerry-seah-86518281"><img class="icons" src="@/assets/icons/linkedin.png"></a>
      </div>
      <div id="header" class="text-center w-100 px-3 fs-2">Giving and Growing Since 2012</div>
      <div>COPYRIGHT &#169; Orange Dolphin 2023</div>
    </div>
</template>
<script>
export default {
  name: 'PageFooter',
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
</style>