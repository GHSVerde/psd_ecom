<template>
  <div>
    <header>
      <!-- Top Bar -->
      <section id="topBar">
        <div class="container p-px-0">
          <div class="float-left contacts">
            <div class="mail-service float-left block">
              <a href="mailto:contato@mail.com">
                <FaIcon icon="envelope" /> contato@mail.com</a>

            </div>
            <div class="phone-service float-right block">
              <a href="tel:5511977706622">
                <FaIcon icon="phone-alt" /> (11) 9 7770-6622</a>

            </div>
          </div>

          <div class="float-right">
            <div class="login float-right block"><a href="#">
                <FaIcon icon="user" /> Login</a></div>
            <div class="float-left block social-media">
              <a href="http://facebook.com/TotalDev" target="_blank" rel="noopener noreferrer">
                <FaIcon :icon="['fab', 'instagram']" /></a>
              <a href="http://twitter.com/TotalDev" target="_blank" rel="noopener noreferrer">
                <FaIcon :icon="['fab', 'twitter']" /></a>
              <a href="http://facebook.com/TotalDev" target="_blank" rel="noopener noreferrer">
                <FaIcon :icon="['fab', 'facebook-f']" /></a>
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
                <img src="~assets/img/logo.png" alt="">
              </nuxt-link>
            </div>
          </div>

          <div class="p-col-12 p-md-7 p-lg-7 p-xl-7  p-p-0">
            <div class="advanced-search p-grid p-nogutter">
              <Button class="category-btn p-col-3" @click="categoriesMenu">Todas</Button>
              <Menu ref="categorias" :model="categories" :popup="true" />
              <div class="p-inputgroup p-col">
                <InputText placeholder="O que você precisa?" />
                <Button icon="pi pi-search" class="p-button-warning" />
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
    </header>

    <!-- Main Menu -->
    <nav id="main-menu">
      <div class="container p-px-0">
        <MegaMenu :model="menu" />
      </div>

    </nav>
    <!-- /Main Menu -->

    <main>
      <Nuxt />
    </main>

    <footer>

      <div class="partner-logo">
        <div class="container">
          <div class="p-grid">
            <div class="p-col logo-align"><img class="p-mx-auto" src="~assets/img/partners/logo-1.png"></div>
            <div class="p-col logo-align"><img class="p-mx-auto" src="~assets/img/partners/logo-2.png"></div>
            <div class="p-col logo-align"><img class="p-mx-auto" src="~assets/img/partners/logo-3.png"></div>
            <div class="p-col logo-align"><img class="p-mx-auto" src="~assets/img/partners/logo-4.png"></div>
            <div class="p-col logo-align"><img class="p-mx-auto" src="~assets/img/partners/logo-5.png"></div>
          </div>
        </div>
      </div>

      <div class="footer-content">
        <div class="container">
          <div class="p-grid">

            <!-- Info -->
            <div class="p-col-12 p-md-3">
              <div class="footer-widget">
                <div class="logo p-mb-4">
                  <nuxt-link to="/">
                    <img src="~assets/img/footer-logo.png" alt="">
                  </nuxt-link>
                </div>
                <ul class="p-m-0 p-p-0">
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello.colorlib@gmail.com</li>
                </ul>
                <div class="footer-social p-pt-4">
                  <a href="#">
                    <FaIcon :icon="['fab', 'twitter']" /></a>
                  <a href="#">
                    <FaIcon :icon="['fab', 'instagram']" /></a>
                  <a href="#">
                    <FaIcon :icon="['fab', 'facebook-f']" /></a>
                  <a href="#">
                    <FaIcon :icon="['fab', 'pinterest']" /></a>
                </div>
              </div>
            </div>
            <!-- /Info -->

            <!-- Informações -->
            <div class="p-col-12 p-md-2 p-md-offset-1">
              <div class="footer-widget">
                <h5>Informações</h5>
                <ul class="p-m-0 p-p-0">
                  <li>
                    <nuxt-link to="/sobre">Sobre</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contato">Contato</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/termos-de-uso">Termos de Uso</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/privacidade">Privacidade</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Informações -->

            <!-- Conta -->
            <div class="p-col-12 p-md-2">

              <div class="footer-widget">
                <h5>Minha Conta</h5>
                <ul class="p-m-0 p-p-0">
                  <li>
                    <nuxt-link to="/minha-conta">Minha Conta</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/enderecos">Endereços</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/minha-conta/pedidos">Pedidos</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/lista-de-desejos">Lista de Desejos</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Conta -->

            <!-- Email -->
            <div class="p-col-12 p-md-4">
              <div class="footer-widget">
                <h5>Assine Nossa Newsletter</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div class="p-inputgroup">
                  <InputText placeholder="Seu E-mail" />
                  <Button label="Cadastrar" class="p-button-warning" />
                </div>
              </div>
            </div>
            <!-- /Email -->

          </div>
        </div>

        <div class="copyright-reserved">
        <div class="container">
          <div class="p-grid">
            <div class="p-col-12 p-md-8">
            Copyright &copy; {{ year }} | Todos os Direitos Reservados
            </div>
            <div class="p-col-12 p-md-4 p-text-right">
              <img src="~assets/img/payment-method.png" alt="">
            </div>
            
          </div>
        </div>
        </div>
      </div>

    </footer>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear() ,
        menu: [{
            label: 'Todos os Departamentos',
            icon: 'pi pi-bars',
            items: [
              [{
                items: [{
                    label: 'Feminina',
                    command: (event) => {
                      this.$router.push('loja')
                    }
                  },
                  {
                    label: 'Masculina',
                    command: (event) => {
                      this.$router.push('loja')
                    }
                  },
                  {
                    label: 'Íntima',
                    command: (event) => {
                      this.$router.push('loja')
                    }
                  },
                  {
                    label: 'Infantil',
                    command: (event) => {
                      this.$router.push('loja')
                    }
                  },
                  {
                    label: 'Acessórios',
                    command: (event) => {
                      this.$router.push('loja')
                    }
                  },
                ]
              }, ]
            ]
          },
          {
            label: 'Início',
            command: (event) => {
              this.$router.push('/')
            },
            class: 'yellow'
          },
          {
            label: 'Sobre',
            command: (event) => {
              this.$router.push('sobre')
            }
          },
          {
            label: 'Loja',
            command: (event) => {
              this.$router.push('loja')
            }
          },
          {
            label: 'Blog',
            command: (event) => {
              this.$router.push('blog')
            }
          },
          {
            label: 'Contato',
            command: (event) => {
              this.$router.push('contato')
            }
          },
        ],
        categories: [{
            label: 'Feminina',
            command: (event) => {
              this.$router.push('loja')
            }
          },
          {
            label: 'Masculina',
            command: (event) => {
              this.$router.push('loja')
            }
          },
          {
            label: 'Íntima',
            command: (event) => {
              this.$router.push('loja')
            }
          },
          {
            label: 'Infantil',
            command: (event) => {
              this.$router.push('loja')
            }
          },
          {
            label: 'Acessórios',
            command: (event) => {
              this.$router.push('loja')
            }
          },
        ],
      }

    },
    methods: {
      categoriesMenu: function (event) {
        this.$refs.categorias.toggle(event);
      }

    }
  }

</script>
