<template>
  <div>

    <!-- slider -->
    <section id="slider">
      <agile :autoplay="true" :fade="true" :dots="false" :autoplay-speed="6000">
        <div class="slider slider-1">
          <div class="container">
            <div class="p-grid">
              <div class="p-md-5 p-col">
                <span>Feminina</span>
                <h1>Black Friday</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore</p>
                <Button label="Comprar Agora" class="p-button-warning"></Button>
              </div>
              <div class="off-card">
                <h2>Até<span>50%</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div class="slider slider-2">
          <div class="container">
            <div class="p-grid">
              <div class="p-md-5 p-col">
                <span>Infantil</span>
                <h1>Dia das Crianças</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore</p>
                <Button label="Comprar Agora" class="p-button-warning"></Button>
              </div>
              <div class="off-card">
                <h2>Até<span>50%</span></h2>
              </div>
            </div>
          </div>
        </div>

        <template slot="prevButton"><i class="pi pi-chevron-left"></i></template>
        <template slot="nextButton"><i class="pi pi-chevron-right"></i></template>
      </agile>
    </section>
    <!-- /slider -->

    <section id="banners" class="p-p-6">
      <div class="p-grid">
        <div class="p-col p-m-4"><SingleBanner title="Men's" picture="~/assets/img/banner-1.jpg"/></div>
        <div class="p-col p-m-4"></div>
        <div class="p-col p-m-4"></div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {}

</script>

<style>

</style>
