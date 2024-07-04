
<script setup>
import { onMounted } from "vue";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

import spec from '../openapis/rs-api.json'

onMounted(() => {
  SwaggerUI({
    dom_id: "#swagger",
    spec: spec, // url: './openapis/rs-api.json',
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