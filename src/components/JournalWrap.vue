<template>
  <div>
    <journal-nav @columnchange="changeJournalKind($event)"></journal-nav>
    <journal-panel :column-kind="columnKind"></journal-panel>
  </div>
</template>

<script>
import JournalNav from "@/components/Nav/JournalNav.vue";
import JournalPanel from "@/components/JournalPanel.vue";
export default {
  data() {
    return {
      // default value: recommand
      columnKind: { value: "recommand", type: "journalKind" },
    };
  },
  components: { JournalNav, JournalPanel },
  methods: {
    changeJournalKind(event) {
      console.log("journal kind:" + event);
      this.columnKind = {
        value: event,
        type: "journalKind",
      };
    },
  },
};
</script>

<style scope></style>
