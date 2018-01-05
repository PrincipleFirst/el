<template>
  <div class="page-component__content">
    <section class="content">
      <h2>InputNumber 计数器</h2>
      <p>仅允许输入标准的数字值，可定义范围</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source">
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="meta">
          <div class="description"><p>要使用它，只需要在<code>el-input-number</code>元素中使用<code>v-model</code>绑定变量即可，变量的初始值即为默认值。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"num1"</span> <span class="hljs-attr">@change</span>=<span
    class="hljs-string">"handleChange"</span> <span class="hljs-attr">:min</span>=<span
    class="hljs-string">"1"</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span> <span
    class="hljs-attr">label</span>=<span class="hljs-string">"描述文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input-number</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">num1</span>: <span class="hljs-number">1</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleChange(value) {
        <span class="hljs-built_in">console</span>.log(value);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <div class="demo-block">
        <div class="source">
          <el-input-number v-model="num2" :disabled="true"></el-input-number>
        </div>
        <div class="meta">
          <div class="description"><p><code>disabled</code>属性接受一个<code>Boolean</code>，设置为<code>true</code>即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置<code>min</code>属性和<code>max</code>属性，不设置<code>min</code>和<code>max</code>时，最小值为
            0。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"num2"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">num2</span>: <span class="hljs-number">1</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>步数</h3>
      <p>允许定义递增递减的步数控制</p>
      <div class="demo-block">
        <div class="source">
          <el-input-number v-model="num3" :step="2"></el-input-number>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>step</code>属性可以控制步长，接受一个<code>Number</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"num3"</span> <span class="hljs-attr">:step</span>=<span
    class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">num3</span>: <span class="hljs-number">5</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>尺寸</h3>
      <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
      <div class="demo-block">
        <div class="source">
          <el-input-number v-model="num4"></el-input-number>
          <el-input-number size="medium" v-model="num5"></el-input-number>
          <el-input-number size="small" v-model="num6"></el-input-number>
          <el-input-number size="mini" v-model="num7"></el-input-number>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"num4"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input-number</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span
    class="hljs-string">"medium"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num5"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span
    class="hljs-string">"small"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num6"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span
    class="hljs-string">"mini"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num7"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">num4</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">num5</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">num6</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">num7</span>: <span class="hljs-number">1</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>按钮位置</h3>
      <div class="demo-block">
        <div class="source">
          <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1"
                           :max="10"></el-input-number>
        </div>
        <div class="meta">
          <div class="description"><p>设置 <code>controls-position</code> 属性可以控制按钮位置。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"num8"</span> <span class="hljs-attr">controls-position</span>=<span
    class="hljs-string">"right"</span> <span class="hljs-attr">@change</span>=<span
    class="hljs-string">"handleChange"</span> <span class="hljs-attr">:min</span>=<span
    class="hljs-string">"1"</span> <span class="hljs-attr">:max</span>=<span
    class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">num8</span>: <span class="hljs-number">1</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleChange(value) {
        <span class="hljs-built_in">console</span>.log(value);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
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
          <td>value</td>
          <td>绑定值</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>min</td>
          <td>设置计数器允许的最小值</td>
          <td>number</td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>max</td>
          <td>设置计数器允许的最大值</td>
          <td>number</td>
          <td>—</td>
          <td>Infinity</td>
        </tr>
        <tr>
          <td>step</td>
          <td>计数器步长</td>
          <td>number</td>
          <td>—</td>
          <td>1</td>
        </tr>
        <tr>
          <td>size</td>
          <td>计数器尺寸</td>
          <td>string</td>
          <td>large, small</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用计数器</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>controls</td>
          <td>是否使用控制按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>debounce</td>
          <td>输入时的去抖延迟，毫秒</td>
          <td>number</td>
          <td>—</td>
          <td>300</td>
        </tr>
        <tr>
          <td>controls-position</td>
          <td>控制按钮位置</td>
          <td>string</td>
          <td>right</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>输入框关联的label文字</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Events</h3>
      <table class="table">
        <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>change</td>
          <td>绑定值被改变时触发</td>
          <td>最后变更的值</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>在组件 Input 失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在组件 Input 获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        </tbody>
      </table>
      <h3>Methods</h3>
      <table class="table">
        <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>focus</td>
          <td>使 input 获取焦点</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    data () {
      return {
        num1: 1,
        num2: 1,
        num3: 5,
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"
</style>
