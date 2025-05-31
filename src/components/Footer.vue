<template>
  <div class="SwaFooter">
    <div class="container f14">
      <div class="top_box flex">
        <div class="top_box_left flex">
          <div class="item">
            <div class="title bold f16">服务</div>
            <div class="text mT12 cursor">数据可视化</div>
            <div class="text mT12 cursor">趋势洞察</div>
          </div>
          <div class="item mL20">
            <div class="title bold f16">关于我们</div>
            <div class="text mT12 cursor">关于SEMetrics</div>
            <div class="text mT12 cursor">团队介绍</div>
            <div class="text mT12 cursor">加入我们</div>
          </div>
          <div class="item">
            <div class="title bold f16">支持</div>
            <div class="text mT12 cursor">帮助中心</div>
            <div class="text mT12 cursor">API文档</div>
          </div>
        </div>
        <div class="top_box_right">
          <div class="title bold f16">联系我们</div>
          <div class="email mT16">邮箱：support@semetrics.cn</div>
          <div class="email mT16">电话：+86 400-123-4567</div>
          <div class="icon_box mT24 flex">
            <div class="icon in cursor">
              <img class="iconImgHover" src="@/assets/images/footer/in_hover.png" />
              <img class="iconImg" src="@/assets/images/footer/in.png" />
            </div>
            <div class="icon twitter mL24 cursor">
              <img class="iconImgHover" src="@/assets/images/footer/twitter_hover.png" />
              <img class="iconImg" src="@/assets/images/footer/twitter.png" />
            </div>
            <div class="icon wechat mL24">
              <img class="iconImgHover" src="@/assets/images/footer/wechat_hover.png" />
              <img class="iconImg" src="@/assets/images/footer/wechat.png" />
              
            </div>
          </div>
        </div>
      </div>

      <div class="middle_box flex">
        
        <div class="address mT52">
          <div class="title bold f16">地址</div>
          <div class="address_text mT12">
            湖南省长沙市岳麓区麓谷企业广场A座9层 SEMetrics 数据科技
          </div>
        </div>
      </div>

      <div class="divider_line mT26"></div>

      <div class="bottom_box flex">
        <div class="copy_right f14">
          <a href="https://beian.miit.gov.cn" target="_blank">湘ICP备2024001234号-1</a>
          <span class="mL4">© 2025 SEMetrics. 版权所有</span>
        </div>
        <div class="box_right">
          <span class="cursor">免责声明</span>
          <span class="mL16 cursor">用户协议</span>
          <span class="mL16 cursor">隐私政策</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑，纯展示型组件
</script>

<style scoped>
/* 复制参考样式并做适配调整 */
@import "@/assets/styles/footer.css"; /* 你可以把上面的 CSS 提取到这里 */

.logo img {
  height: 30px;
}
</style>
