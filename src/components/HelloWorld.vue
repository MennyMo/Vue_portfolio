<template>
<div>
     <section class="section mb-0 pb-0">
      <div class=" d-flex col-sm-12 justify-content-between mt-5 mb-0 pt-5">
          <div class="text p-5">
            <div class="hello fs-1 fw-bolder  ">Hi there! <img src="/assets/hi.svg" alt="hi" class="copy"> <br> I'm Omolade Akinwumi</div>
            <div class="fs-6">Frontend Developer / UI designer</div>
            <div class="text-dark fs-5 pt-3">
                Thanks for dropping by dear human!!! <br>
                I am a motivated developer aimed at providing the best <br> services to my amazing clients
            </div>
            <div class="fw-bold fs-5 p-4">
                <a href="#" class="black" target="blank"> Resume <img src="/assets/curved-up-arrow-.svg" alt="" class="copyright"></a>
            </div>
          </div>
         
        <div class="col-lg-4  img-fluid"><img src="/assets/my-picture_thumbnail.png" alt="" class="img-hor img-fluid rounded-circle border  shadow   rounded "></div>
      </div>
    </section>
</div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {

    background-color: #ecf4f9 !important;
    font-family: "Montserrat " !important;
    padding-top: 50px;
}
.section {

    background-color: #ecf4f9 !important;
    font-family: "Montserrat " !important;
    padding-top: 50px;
}
/* .hello {
    font-size: 50px;
} */
.img-hor {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    height: 50% !important;
    width: auto !important;
}
.text {
    padding-right: 100px !important;
}
image {
        padding-left: 5rem !important;
}
.section {
    box-sizing: unset;
}
.copyright {
    height: 10px !important;
    width: 10px !important;
}
.copy {
    height: 30px !important;
    width: 30px !important;
}

.black {
    color: black !important;
}
</style>
