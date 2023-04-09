<template>
  <div class="journal-nav">
    <ul class="journal-nav-ul">
      <li>
        <a
          @click="$emit('columnchange', 'recommand'), active(0)"
          :class="{ active: isActive[0] }"
        >
          Recommand
        </a>
      </li>
      <div class="sep">/</div>
      <li>
        <a
          @click="$emit('columnchange', 'latest'), active(1)"
          :class="{ active: isActive[1] }"
          >Latest
        </a>
      </li>
      <div class="sep">/</div>
      <li>
        <a
          @click="$emit('columnchange', 'fansion'), active(2)"
          :class="{ active: isActive[2] }"
          >Fansion
        </a>
      </li>
      <div class="sep">/</div>
      <li>
        <a
          @click="$emit('columnchange', 'economic'), active(3)"
          :class="{ active: isActive[3] }"
          >Economic
        </a>
      </li>
      <div class="sep">/</div>
      <li>
        <a
          @click="$emit('columnchange', 'sport'), active(4)"
          :class="{ active: isActive[4] }"
          >Sport</a
        >
      </li>
      <div class="sep">/</div>
      <li>
        <a
          @click="$emit('columnchange', 'game'), active(5)"
          :class="{ active: isActive[5] }"
          >Game</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: [true, false, false, false, false, false],
    };
  },
  methods: {
    active(index) {
      for (var i in this.isActive) {
        this.isActive.splice(i, 1, false);
      }
      this.isActive.splice(index, 1, true);
    },
  },
};
</script>

<style scope>
.journal-nav {
  text-align: center;
  margin-top: 20px;
}
.journal-nav-ul {
  list-style: none;
  font-size: 18px;
}
.sep {
  color: rgb(181, 179, 179);
}
.journal-nav-ul li,
.sep {
  display: inline-block;
  margin-right: 30px;
}

.journal-nav-ul li a:hover {
  color: rgb(89, 89, 237);
}

.journal-nav .active {
  color: rgb(89, 89, 237);
}

.journal-nav a {
  text-decoration: none;
  color: rgb(50, 50, 50);
  cursor: pointer;
}
</style>
