<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-text>
        <img
          src="https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a"
          style="border-radius: 20%"
        />
        <h1>littlechin</h1>
        <br />
        <v-divider />
        <br />
        <h3 style="text-align: left">
          我是<strong>小群</strong>，是個攝影師與程式設計師。除了熱愛創造新事物，也喜歡在城市與程式間穿梭，希望讓更多人能夠看見世界，也可以讓更多人使用我所創造出的工具。
        </h3>
        <br />
        <v-divider />
        <br />
        <v-card elevation="0">
          <v-btn
            text
            icon
            v-for="link in links"
            :key="link"
            target="_blank"
            :href="link.link"
          >
            <v-icon>mdi-{{ link.category }}</v-icon>
          </v-btn>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({
    links: [
      {
        link: "https://www.linkedin.com/in/littlechin",
        category: "linkedin",
      },
      {
        link: "https://github.com/littlechintw",
        category: "github",
      },
      {
        link: "https://medium.com/@littlechintw",
        category: "alpha-m-box",
      },
      {
        link: "https://www.facebook.com/littlechinright",
        category: "facebook",
      },
      {
        link: "https://www.instagram.com/littlechintw",
        category: "instagram",
      },
      {
        link: "https://t.me/littlechin/",
        category: "send",
      },
      {
        link: "mailto:littlechintw+page@gmail.com",
        category: "email",
      },
    ],
  }),
};
</script>