<template>
  <section class="WhySEMetrics">
    <div class="container">
      <div class="title bold">为什么选择SEMetrics？</div>
      <div class="list">
        <div class="list_item" v-for="(item, index) in reasons" :key="index" :class="{ mT56: index >= 2 }">
          <div class="list_item_title f22">
            <img class="svgIcon mR24" :src="item.icon" :alt="item.title" />
            <div class="list_item_title_span bold">{{ item.title }}</div>
          </div>
          <div class="list_item_text mT8 f18">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ComprehensiveIcon from '@/assets/images/icons/why-semetrics/Comprehensive.png'
import PowerfulIcon from '@/assets/images/icons/why-semetrics/Powerful.png'
import UniqueIcon from '@/assets/images/icons/why-semetrics/Unique.png'
import TrustedIcon from '@/assets/images/icons/why-semetrics/Trusted.png'

export default {
  name: "WhySEMetrics",
  data() {
    return {
      reasons: [
        {
          title: "数据全面、结构清晰",
          text: "覆盖科研成果、项目、基金、机构、期刊等多个维度，标准结构统一，便于多方整合分析。",
          icon: ComprehensiveIcon,
        },
        {
          title: "灵活的数据服务能力",
          text: "提供API、下载、可视化等多种数据接入方式，满足不同科研场景的数据需求。",
          icon: PowerfulIcon,
        },
        {
          title: "深度智能解析",
          text: "基于AI模型实现智能实体识别与数据挖掘，为科研人员提供更具价值的知识关联。",
          icon: UniqueIcon,
        },
        {
          title: "专注科研数据领域",
          text: "累计服务数百家高校、研究机构和数据平台，专注学术科研数据场景，广受认可。",
          icon: TrustedIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "@/assets/styles/why-semetrics.css";

</style>
