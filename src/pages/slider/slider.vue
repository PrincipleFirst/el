<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Slider 滑块</h2>
      <p>通过拖动滑块在一个固定区间内进行选择</p>
      <h3>基础用法</h3>
      <p>在拖动滑块时，显示当前值</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置绑定值自定义滑块的初始值</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>自定义初始值<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"value2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>隐藏 Tooltip<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"value3"</span> <span class="hljs-attr">:show-tooltip</span>=<span
      class="hljs-string">"false"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>格式化 Tooltip<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"value4"</span> <span class="hljs-attr">:format-tooltip</span>=<span class="hljs-string">"formatTooltip"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>禁用<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"value5"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">value2</span>: <span class="hljs-number">50</span>,
        <span class="hljs-attr">value3</span>: <span class="hljs-number">36</span>,
        <span class="hljs-attr">value4</span>: <span class="hljs-number">48</span>,
        <span class="hljs-attr">value5</span>: <span class="hljs-number">42</span>
      }
    },
    <span class="hljs-attr">methods</span>: {
      formatTooltip(val) {
        <span class="hljs-keyword">return</span> val / <span class="hljs-number">100</span>;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>离散值</h3>
      <p>选项可以是离散的</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider
              v-model="value6"
              :step="10">
            </el-slider>
          </div>
          <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider
              v-model="value7"
              :step="10"
              show-stops>
            </el-slider>
          </div>
        </div>
        <div class="meta"><div class="description"><p>改变<code>step</code>的值可以改变步长，通过设置<code>show-step</code>属性可以显示间断点</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>不显示间断点<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
      <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>显示间断点<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
      <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>
      <span class="hljs-attr">show-stops</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value6</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">value7</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有输入框</h3>
      <p>通过输入框设置精确数值</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value8"
              show-input>
            </el-slider>
          </div>
        </div>
        <div class="meta"><div class="description"><p>设置<code>show-input</code>属性会在右侧显示一个输入框</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value8"</span>
      <span class="hljs-attr">show-input</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value8</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>范围选择</h3>
      <p>支持选择某一数值范围</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value9"
              range
              show-stops
              :max="10">
            </el-slider>
          </div>
        </div>
        <div class="meta"><div class="description"><p>设置<code>range</code>即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value9"</span>
      <span class="hljs-attr">range</span>
      <span class="hljs-attr">show-stops</span>
      <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value9</span>: [<span class="hljs-number">4</span>, <span class="hljs-number">8</span>]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>竖向模式</h3>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value10"
              vertical
              height="200px">
            </el-slider>
          </div>
        </div>
        <div class="meta"><div class="description"><p>设置<code>vertical</code>可使 Slider 变成竖向模式，此时必须设置高度<code>height</code>属性</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-slider</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value10"</span>
      <span class="hljs-attr">vertical</span>
      <span class="hljs-attr">height</span>=<span class="hljs-string">"200px"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-slider</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value10</span>: <span class="hljs-number">0</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>min</td><td>最小值</td><td>number</td><td>—</td><td>0</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>—</td><td>100</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>step</td><td>步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>show-input</td><td>是否显示输入框，仅在非范围选择时有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-input-controls</td><td>在显示输入框的情况下，是否显示输入框的控制按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-stops</td><td>是否显示间断点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-tooltip</td><td>是否显示 tooltip</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>format-tooltip</td><td>格式化 tooltip message</td><td>function(value)</td><td>—</td><td>—</td></tr><tr><td>range</td><td>是否为范围选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>vertical</td><td>是否竖向模式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>height</td><td>Slider 高度，竖向模式时必填</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>屏幕阅读器标签</td><td>string</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>输入时的去抖延迟，毫秒，仅在<code>show-input</code>等于true时有效</td><td>number</td><td>—</td><td>300</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）</td><td>改变后的值</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }

  .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>
