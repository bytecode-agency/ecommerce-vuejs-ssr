<template>
  <main class="site-main">
    <HomeBanner />

    <HeroBanner />

    <TrendingProducts />

    <Offers />

    <BestSellers />

    <LatestNews />
    
    <EnquiryForm />
  </main>
</template>

<script>
  import axios from "axios";
  import HomeBanner from "./components/HomeBanner.vue";
  import HeroBanner from "./components/HeroBanner.vue";
  import TrendingProducts from "./components/TrendingProducts";
  import BestSellers from "./components/BestSellers";
  import LatestNews from "./components/LatestNews";
  import Offers from "./components/Offers";
  import EnquiryForm from "../../shared/molecules/EnquiryForm";
  export default {
    name: "Home",
    components: { HeroBanner, HomeBanner, TrendingProducts, BestSellers, LatestNews , EnquiryForm, Offers},
    mounted() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.info = response;
          console.log("hello this is", response);
        });
    },
  };
</script>
