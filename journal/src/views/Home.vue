<template>
  <div>
    <navbar></navbar>
    <search></search>
    <journal-wrap></journal-wrap>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";
import Search from "@/components/Search.vue";
import JournalWrap from "@/components/JournalWrap.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Navbar, Search, JournalWrap, Footer },
};
</script>
