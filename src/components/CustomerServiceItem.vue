<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center mb-5">
        <h2 class="heading1">{{ customer.header }}</h2>
        <br />
        <h6>
          {{ customer.headerText }}
        </h6>
      </div>
    </div>
    <h6>
      <li>Siz müşterilerimize sunduğumuz hizmetlerimizden bir tanesi de canlı destek! Peki;}</li>
    </h6>
    <div class="mt-4">
      <vue-collapsible-panel-group accordion :baseColor="'#482c77'">
        <vue-collapsible-panel :expanded="false">
          <template #title> {{ customer.question }} </template>
          <template #content>
            {{ customer.answer }}
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
    <h6 class="pt-3"><li>Canlı destek sizin için doğru tercih değilse;</li></h6>
    <div class="mt-4">
      <vue-collapsible-panel-group accordion :baseColor="'#482c77'">
        <vue-collapsible-panel :expanded="false">
          <template #title> {{ customer.question2 }} </template>
          <template #content>
            {{ customer.answer2 }}
          </template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <tr>
      <td>
        <strong>
          <i class="bi-telephone-fill" style="color: #666690"></i>
          İletişim No.
        </strong>
      </td>
    </tr>
  </div>

  <div class="d-flex justify-content-center">
    <p>
      Müşteri hizmetlerimize Parcell hatlarınızdan 532'yi; diğer operatörlerden ve sabit hatlardan 0 (532) 532
      00 00'ı arayarak ulaşabilirsiniz.
    </p>
  </div>
</template>

<script>
import VueCollapsiblePanel from "../components/VueCollapsiblePanel.vue";
import VueCollapsiblePanelGroup from "./VueCollapsiblePanelGroup.vue";
import axios from "axios";
export default {
  components: {
    VueCollapsiblePanel,
    VueCollapsiblePanelGroup,
  },

  mounted() {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/618d36a56885f60a50bb5edd/1fk7pqtml";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },

  data() {
    return {
      customer: {},
      id: "61bca8f1da08106680ea3a07",
    };
  },
  created() {
    this.$appAxios
      .get("/CustomerService/GetCustomerService/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.customer = response.data;
        console.log(this.customer);
      })
      .catch((error) => {
        console.log("There was an error" + error.response);
      });
  },
};
</script>
