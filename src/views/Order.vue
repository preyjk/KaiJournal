<template>
  <div class="__order">
    <Navbar></Navbar>
    <div class="__order_wrap">
      <header class="__order_header">
        <p class="__order_topP">
          <span class="__order_account">18553523055</span>
          <span class="__order_welcome">Welcome to kai journal, have fun!</span>
        </p>
        <p class="__order_secondP">
          <label for="">reamain asserts:</label>
          <span> 0gold</span>
          <label for="" class="__order_consumerLabel">consumed:</label>
          <span> 0gold</span>
        </p>
      </header>
      <div class="__order_functionArea">
        <div class="__order-functionList">
          <ul>
            <li>Online recharge</li>
            <li>Upgrade</li>
            <li>Consume List</li>
            <li>Recharge Doc</li>
          </ul>
        </div>
        <div class="__order-functionShow">
          <!-- charge -->
          <div class="__order-chargeModule">
            <nav class="__order-chargeNav">
              <ul>
                <li class="__order-alipay">alipay</li>
                <li class="__order-wechatpay">applepay</li>
              </ul>
            </nav>
            <div class="__order-chargeContent">
              <div class="__order-priceGrid">
                <a href="">3gold</a>
                <a href="">5gold</a>
                <a href="">10gold</a>
                <a href="">15gold</a>
                <a href="">20gold</a>
                <a href="">30gold</a>
                <a href="">50gold</a>
                <a href="">60gold</a>
                <a href="">80gold</a>
                <a href="">100gold</a>
              </div>
              <p class="__order_chargeAccount">
                <span>recharge account:</span>
                <span></span>
              </p>
              <p class="__order_chargeAttain">
                <span>complete recharge:</span>
                <span></span>
                <span>gold</span>
              </p>
              <button class="__order_chargeBtn">recharge>></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "@/components/Nav/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.__order_wrap {
  margin-top: 80px;
  background-color: rgb(249, 249, 249);
}

.__order_header {
  margin: 0 auto;
  width: 90%;
  height: 100px;
  padding: 15px;
  background-color: rgb(65, 63, 63);
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.__order_account {
  font-size: 24px;
}

.__order_welcome {
  margin-left: 10px;
  font-size: 12px;
}

.__order_consumerLabel {
  margin-left: 10px;
}

.__order_functionArea {
  display: flex;
  margin: 0 auto;
  width: 90%;
  background-color: white;
}

.__order-functionList ul li {
  padding: 10px;
  text-align: center;
}

.__order-functionList {
  flex: 1;
}

.__order-chargeNav {
  padding: 15px;
}

.__order-chargeNav ul {
  border-bottom: 1px solid black;
}

.__order-chargeNav ul li {
  display: inline-block;
  padding: 15px;
  font-size: 16px;
}

.__order-functionShow {
  flex: 4;
}

.__order-chargeContent {
  padding: 15px;
}

.__order-priceGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-auto-rows: 30px;
}

.__order-priceGrid a {
  border: 1px solid black;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
}

.__order-priceGrid a:hover {
  color: rgb(97, 97, 233);
  border-color: rgb(97, 97, 233);
}

.__order_chargeAccount {
  margin-top: 20px;
}

.__order_chargeAttain {
  margin-top: 20px;
}

.__order_chargeBtn {
  margin-top: 20px;
  width: 120px;
  height: 42px;
  background-color: rgb(97, 97, 233);
  color: white;
  border: none;
}
</style>
