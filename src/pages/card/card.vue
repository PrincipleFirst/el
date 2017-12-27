<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Card 卡片</h2>
      <p>将信息聚合在卡片容器中展示。</p>
      <h3>基础用法</h3>
      <p>包含标题，内容和操作。</p>
      <div class="demo-block demo-card">
        <div class="source">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <div class="meta">
          <div class="description"><p>Card 组件包括<code>header</code>和<code
          >body</code>部分，<code>header</code>部分需要有显式具名 slot 分发，同时也是可选的。</p></div>
          <div class="highlight"><pre><code
            class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-card</span> <span
            class="hljs-attr">class</span>=<span
            class="hljs-string">"box-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span
    class="hljs-attr">slot</span>=<span class="hljs-string">"header"</span> <span
    class="hljs-attr">class</span>=<span class="hljs-string">"clearfix"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span
      class="hljs-name">span</span>&gt;</span>卡片名称<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
      class="hljs-attr">style</span>=<span class="hljs-string">"float: right; padding: 3px 0"</span> <span
      class="hljs-attr">type</span>=<span
      class="hljs-string">"text"</span>&gt;</span>操作按钮<span
              class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span
    class="hljs-attr">v-for</span>=<span class="hljs-string">"o in 4"</span> <span
    class="hljs-attr">:key</span>=<span class="hljs-string">"o"</span> <span
    class="hljs-attr">class</span>=<span class="hljs-string">"text item"</span>&gt;</span>
    {{'列表内容 ' + o }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-card</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span
              class="css">
  <span class="hljs-selector-class">.text</span> {
    <span class="hljs-attribute">font-size</span>: <span
              class="hljs-number">14px</span>;
  }

  <span class="hljs-selector-class">.item</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">18px</span>;
  }

  <span class="hljs-selector-class">.clearfix</span><span
              class="hljs-selector-pseudo">:before</span>,
  <span class="hljs-selector-class">.clearfix</span><span
              class="hljs-selector-pseudo">:after</span> {
    <span class="hljs-attribute">display</span>: table;
    <span class="hljs-attribute">content</span>: <span
              class="hljs-string">""</span>;
  }
  <span class="hljs-selector-class">.clearfix</span><span
              class="hljs-selector-pseudo">:after</span> {
    <span class="hljs-attribute">clear</span>: both
  }

  <span class="hljs-selector-class">.box-card</span> {
    <span class="hljs-attribute">width</span>: <span
              class="hljs-number">480px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>简单卡片</h3>
      <p>卡片可以只有内容区域。</p>
      <div class="demo-block demo-card2">
        <div class="source">
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-card</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"box-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span
    class="hljs-string">"o in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"o"</span> <span
    class="hljs-attr">class</span>=<span class="hljs-string">"text item"</span>&gt;</span>
    {{'列表内容 ' + o }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-card</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.text</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
  }

  <span class="hljs-selector-class">.item</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">18px</span> <span
              class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.box-card</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">480px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>带图片</h3>
      <p>可配置定义更丰富的内容展示。</p>
      <div class="demo-block">
        <div class="source">
          <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="./hamburger.png" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="meta">
          <div class="description"><p>配置<code>body-style</code>属性来自定义<code>body</code>部分的<code>style</code>，我们还使用了布局组件。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
    class="hljs-string">"8"</span> <span class="hljs-attr">v-for</span>=<span
    class="hljs-string">"(o, index) in 2"</span> <span class="hljs-attr">:key</span>=<span
    class="hljs-string">"o"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"index &gt; 0 ? 2 : 0"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-card</span> <span class="hljs-attr">:body-style</span>=<span
      class="hljs-string">"{ padding: '0px' }"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span
        class="hljs-string">"./hamburger.png"</span> <span class="hljs-attr">class</span>=<span
        class="hljs-string">"image"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
        class="hljs-string">"padding: 14px;"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>好吃的汉堡<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
          class="hljs-string">"bottom clearfix"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">time</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"time"</span>&gt;</span>{{ currentDate }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">time</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"text"</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"button"</span>&gt;</span>操作按钮<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-card</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.time</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">13px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#999</span>;
  }

  <span class="hljs-selector-class">.bottom</span> {
    <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">13px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">12px</span>;
  }

  <span class="hljs-selector-class">.button</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">float</span>: right;
  }

  <span class="hljs-selector-class">.image</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">display</span>: block;
  }

  <span class="hljs-selector-class">.clearfix</span><span class="hljs-selector-pseudo">:before</span>,
  <span class="hljs-selector-class">.clearfix</span><span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">display</span>: table;
      <span class="hljs-attribute">content</span>: <span class="hljs-string">""</span>;
  }

  <span class="hljs-selector-class">.clearfix</span><span class="hljs-selector-pseudo">:after</span> {
      <span class="hljs-attribute">clear</span>: both
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">currentDate</span>: <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>()
    };
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table">
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>header</td>
          <td>设置 header，也可以通过 <code>slot#header</code> 传入 DOM</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>body-style</td>
          <td>设置 body 的样式</td>
          <td>object</td>
          <td>—</td>
          <td>{ padding: '20px' }</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'
  import { collapseMixin } from 'common/js/mixin'

  export default {
    mixins: [collapseMixin],
    data () {
      return {
        o: null,
        currentDate: new Date(),
        switchers: [{
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }]
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .text {
    font-size: 14px;
  }

  .demo-card .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

  .demo-card2 .item {
    padding: 18px 0;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>
