<template>
  <div class="page-component__content">
    <section class="content">
      <h2>ColorPicker 颜色选择器</h2>
      <p>用于颜色选择，支持多种格式。</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source trim">
          <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>有默认值<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"color1"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>无默认值<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"color2"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">color1</span>: <span class="hljs-string">'#409EFF'</span>,
        <span class="hljs-attr">color2</span>: <span class="hljs-literal">null</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>选择透明度</h3>
      <div class="demo-block">
        <div class="source">
          <el-color-picker v-model="color3" show-alpha></el-color-picker>
        </div>
        <div class="meta">
          <div class="description"><p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过<code>show-alpha</code>属性即可控制是否支持透明度的选择。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color3"</span> <span
            class="hljs-attr">show-alpha</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-color-picker</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">color3</span>: <span class="hljs-string">'rgba(19, 206, 102, 0.8)'</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>不同尺寸其它 icon</h3>
      <div class="demo-block">
        <div class="source">
          <el-color-picker v-model="color4"></el-color-picker>
          <el-color-picker v-model="color4" size="medium"></el-color-picker>
          <el-color-picker v-model="color4" size="small"></el-color-picker>
          <el-color-picker v-model="color4" size="mini"></el-color-picker>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span
            class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">el-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span
  class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span
  class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span
  class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-color-picker</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-color-picker</span> <span class="hljs-attr">v-model</span>=<span
  class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span
  class="hljs-string">"mini"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-color-picker</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">color4</span>: <span class="hljs-string">'#409EFF'</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>—</td><td>medium / small / mini</td></tr><tr><td>show-alpha</td><td>是否支持透明度选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color-format</td><td>写入 v-model 的颜色的格式</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex（show-alpha 为 false）/ rgb（show-alpha 为 true）</td></tr><tr><td>popper-class</td><td>ColorPicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Methods</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发</td><td>当前值</td></tr><tr><td>active-change</td><td>面板中当前显示的颜色发生改变时触发</td><td>当前显示的颜色值</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF',
        switchers: [{
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }]
      }
    },
    mounted () {
      this.meta = document.querySelectorAll('.meta')
    },
    methods: {
      switcherState (index) {
        if (this.switchers[index].expand === true) {
          this.meta[index].style.height = '0'
          this.switchers[index].expand = false
        } else {
          this.meta[index].style.height = 'auto'
          this.switchers[index].expand = true
        }
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
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }

  .block:last-child {
    border-right: none;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .trim
    padding 0 !important
    font-size 0
</style>
