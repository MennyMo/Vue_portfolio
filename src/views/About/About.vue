<template>
  <div class="about">
    <div class="text1"><h1>Hi! My name is Omolade. I am a frontend developer</h1>
    <h6>I am a self driven, highly motivated, self correcting, disciplined and an excellence seeker. I try never to be average coupled with an intense curiosity, making me willing to learn from anyone as long as it gets the job done. I am focused on building solutions that will solve myriad of social problems in the world by striving to be a well-balanced leader, in the business as well as the technical world.
</h6>
    <h3>Want to know more about the scholarship program I enrolled in?</h3></div>
    <div class="text2"><h4>Click the link below</h4>
    <nav>
      <router-link :to ="{name:'Enyata'}">Enyata</router-link>
    </nav>
      <router-view/></div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
  .about{
    display: flex;
    justify-content: space-between;
    line-height: 100px;
  }
  .text2{
    line-height: 50px;
    /* border: blue 1px solid; */
    padding: 50px;
    margin: 100px;
    background: cadetblue;

  }
  .text1{
    line-height: 50px;
    /* border: red 1px solid; */
    padding: 50px;
    margin: 100px;
  }
  h6{
    line-height: 40px;
  }

  
</style>