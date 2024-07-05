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

/* Fast dark mode https://github.com/swagger-api/swagger-ui/issues/5327 */
html.dark .swagger {
    filter: invert(88%) hue-rotate(180deg);
    /** change the background-color of .vp-doc tr and .vp-doc tr:nth-child(2n) */
    --vp-c-bg: transparent;
    --vp-c-bg-soft: var(--vp-c-bg);
}

</style>