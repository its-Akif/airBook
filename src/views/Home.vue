<template>
  <div class="main pt-3">
    <div class="main-content">
      <h1 style="color: white">Recomendations</h1>
      {{ fingerprint }}
      <div>
        <category-option
          v-for="category in categories"
          :key="category.id"
          :catName="category.name"
        />
      </div>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
.main {
  padding-left: 350px;
}
</style>

<script>
import CategoryOption from "../components/category-option.vue";
import axios from "axios";
import getBrowserFingerprint from "get-browser-fingerprint";
// const fingerprint = getBrowserFingerprint();

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CategoryOption,
  },
  data() {
    return {
      categories: "",
    };
  },
  computed: {
    fingerprint() {
      return getBrowserFingerprint();
    },
  },
  created: async function () {
    await axios
      .get(this.$store.state.BaseURLLocal + "list-categories/")
      .then((resp) => {
        console.log(resp);
        if (resp.status == 200) {
          this.categories = resp.data;
        }
      });

    },
};
</script>
