---
layout: home
---

<script setup>
import { onMounted } from "vue";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import url from "./rs-api.yaml?url"

onMounted(() => {
  SwaggerUI({
    dom_id: "#swagger",
    url,
  });
});
</script>

<div class="swagger" id="swagger"></div>

<style scoped>
/** add your custom style here **/
#swagger {
  border: 1px;
}
</style>