<template>
  <div>
    <!-- Top Bar -->
    <section id="topBar">
      <div class="container">
        <div class="float-left contacts">
          <div class="mail-service float-left block">
            <a href="mailto:contato@mail.com"><FaIcon icon="envelope" /> contato@mail.com</a>
            
          </div>
          <div class="phone-service float-right block">
            <a href="tel:5511977706622"><FaIcon icon="phone-alt" /> (11) 9 7770-6622</a>
            
          </div>
        </div>

        <div class="float-right">
          <div class="login float-right block"><a href="#"><FaIcon icon="user" /> Login</a></div>
          <div class="float-left block social-media">
            <a href="http://facebook.com/TotalDev" target="_blank" rel="noopener noreferrer"><FaIcon :icon="['fab', 'instagram']" /></a>
            <a href="http://twitter.com/TotalDev" target="_blank" rel="noopener noreferrer"><FaIcon :icon="['fab', 'twitter']" /></a>
            <a href="http://facebook.com/TotalDev" target="_blank" rel="noopener noreferrer"><FaIcon :icon="['fab', 'facebook-f']" /></a>
          </div>
        </div>

      </div>
    </section>
    <!-- /Top Bar -->

    <!-- Main Bar -->
    <section id="main-bar" class="container">
      <div class="p-grid">

        <div class="p-col-12 p-md-2 p-lg-2 p-xl-2 p-p-0">
          <div class="logo">
            <nuxt-link to="/">
              <img src="https://preview.colorlib.com/theme/fashi/img/logo.png" alt="">
            </nuxt-link>
          </div>
        </div>

        <div class="p-col-12 p-md-7 p-lg-7 p-xl-7  p-p-0">
          <div class="advanced-search p-grid p-nogutter">
            <button class="category-btn p-col-3">Todas</button>
            <div class="p-inputgroup p-col">
              <InputText placeholder="O que você precisa?" />
                <Button icon="pi pi-search" class="p-button-warning"/>
            </div>
          </div>
        </div>

        <div class="p-col-12 p-md-3 p-lg-3 p-xl-3  cart">
          <div class="float-right">
            <ul>
              <li class="heart-icon">
                <nuxt-link to="/lista-de-desejos">
                  <span class="p-overlay-badge">
                    <i class="pi pi-heart"></i><span class="p-badge">7</span>
                  </span>
                </nuxt-link>
              </li>
              <li class="cart-icon">
                <nuxt-link to="/carrinho">
                  <span class="p-overlay-badge">
                    <i class="pi pi-shopping-cart"></i><span class="p-badge">2</span>
                  </span>
                </nuxt-link>
              </li>
              <li class="cart-price">R$ 200.00</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
    <!-- /Main Bar -->

    <!-- Main Menu -->
    <section id="main-menu">
      <div class="container">
        <MegaMenu :model="menu" />
      </div>
      
    </section>
    <!-- /Main Menu -->

    <main>
      <Nuxt />
    </main>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: 'Todos os Departamentos', icon: 'pi pi-bars',
          items: [[
            { items: [
              { label: 'Feminina', command: (event) => { this.$router.push('loja') }}, 
              { label: 'Masculina', command: (event) => { this.$router.push('loja') }}, 
              { label: 'Íntima', command: (event) => { this.$router.push('loja') }}, 
              { label: 'Infantil', command: (event) => { this.$router.push('loja') }}, 
              { label: 'Acessórios', command: (event) => { this.$router.push('loja') }}, 
            ] },
          ]]
        },
        { label: 'Início', command: (event) => { this.$router.push('/') }, class: 'yellow'},
        { label: 'Sobre', command: (event) => { this.$router.push('sobre') }},
        { label: 'Loja', command: (event) => { this.$router.push('loja') }},
        { label: 'Blog', command: (event) => { this.$router.push('blog') }},
        { label: 'Contato', command: (event) => { this.$router.push('contato') }},
      ]
    }
  }
}
</script>
