<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Steps 步骤条</h2>
      <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
      <h3>基础用法</h3>
      <p>简单的步骤条。</p>
      <div class="demo-block">
        <div class="source">
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>active</code>属性，接受一个<code>Number</code>，表明步骤的 index，从 0
            开始。需要定宽的步骤条时，设置<code>space</code>属性即可，它接受<code>Boolean</code>，单位为<code>px</code>，如果不设置，则为自适应。设置<code>finish-status</code>属性可以改变已经完成的步骤的状态。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-steps</span> <span class="hljs-attr">:active</span>=<span
            class="hljs-string">"active"</span> <span class="hljs-attr">finish-status</span>=<span class="hljs-string">"success"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">style</span>=<span
  class="hljs-string">"margin-top: 12px;"</span> <span class="hljs-attr">@click</span>=<span
  class="hljs-string">"next"</span>&gt;</span>下一步<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">active</span>: <span class="hljs-number">0</span>
      };
    },

    <span class="hljs-attr">methods</span>: {
      next() {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.active++ &gt; <span
              class="hljs-number">2</span>) <span class="hljs-keyword">this</span>.active = <span
              class="hljs-number">0</span>;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>含状态步骤条</h3>
      <p>每一步骤显示出该步骤的状态。</p>
      <div class="demo-block">
        <div class="source">
          <el-steps :space="200" :active="1" finish-status="success">
            <el-step title="已完成"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </div>
        <div class="meta">
          <div class="description"><p>也可以使用<code>title</code>具名分发，可以用<code>slot</code>的方式来取代属性的设置，在本文档最后的列表中有所有的 slot
            name 可供参考。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-steps</span> <span class="hljs-attr">:space</span>=<span
            class="hljs-string">"200"</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span> <span
            class="hljs-attr">finish-status</span>=<span class="hljs-string">"success"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"已完成"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"进行中"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>有描述的步骤条</h3>
      <p>每个步骤有其对应的步骤状态描述。</p>
      <div class="demo-block demo-dropdown">
        <div class="source">
          <el-steps :active="1">
            <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这段就没那么长了"></el-step>
          </el-steps>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-steps</span> <span class="hljs-attr">:active</span>=<span
            class="hljs-string">"1"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 1"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 2"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 3"</span> <span class="hljs-attr">description</span>=<span
    class="hljs-string">"这段就没那么长了"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>居中的步骤条</h3>
      <p>标题和描述都将居中。</p>
      <div class="demo-block">
        <div class="source">
          <el-steps :active="2" align-center>
            <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
          </el-steps>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-steps</span> <span class="hljs-attr">:active</span>=<span
            class="hljs-string">"2"</span> <span class="hljs-attr">align-center</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤1"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤2"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤4"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>带图标的步骤条</h3>
      <p>步骤条内可以启用各种自定义的图标。</p>
      <div class="demo-block">
        <div class="source">
          <el-steps :active="1">
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
          </el-steps>
        </div>
        <div class="meta">
          <div class="description"><p>通过<code>icon</code>属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名<code>slot</code>来使用自定义的图标。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html">
<span class="hljs-tag">&lt;<span class="hljs-name">el-steps</span> <span class="hljs-attr">:active</span>=<span
  class="hljs-string">"1"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 1"</span> <span class="hljs-attr">icon</span>=<span
    class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 2"</span> <span class="hljs-attr">icon</span>=<span
    class="hljs-string">"el-icon-upload"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"步骤 3"</span> <span class="hljs-attr">icon</span>=<span
    class="hljs-string">"el-icon-picture"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">el-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[4].expand" :index="4" @switcher="switcherState"></collapseBar>
      </div>
      <h3>竖式步骤条</h3>
      <p>竖直方向的步骤条。</p>
      <div class="demo-block">
        <div class="source">
          <div style="height: 300px;">
            <el-steps direction="vertical" :active="1">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>只需要在<code>el-steps</code>元素中设置<code>direction</code>属性为<code>vertical</code>即可。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
            class="hljs-string">"height: 300px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-steps</span> <span class="hljs-attr">direction</span>=<span
    class="hljs-string">"vertical"</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[5].expand" :index="5" @switcher="switcherState"></collapseBar>
      </div>
      <h3>简洁风格的步骤条</h3>
      <p>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</p>
      <div class="demo-block">
        <div class="source">
          <el-steps :active="1" simple>
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
          </el-steps>

          <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </div>
        <div class="meta">
          <div class="description"><p>只需要在<code>el-steps</code>元素中设置<code>direction</code>属性为<code>vertical</code>即可。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
            class="hljs-string">"height: 300px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-steps</span> <span class="hljs-attr">direction</span>=<span
    class="hljs-string">"vertical"</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-step</span> <span class="hljs-attr">title</span>=<span
      class="hljs-string">"步骤 3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-step</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-steps</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[6].expand" :index="6" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Steps Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>space</td><td>每个 step 的间距，不填写将自适应间距。支持百分比。</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>显示方向</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>设置当前激活步骤</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>设置当前步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>设置结束步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>进行居中对齐</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>simple</td><td>是否应用简洁风格</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>
      <h3>Step Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>描述性文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>图标</td><td>传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入</td><td>string</td><td>—</td></tr><tr><td>status</td><td>设置当前步骤的状态，不设置则根据 steps 确定状态</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table>
      <h3>Step Slot</h3>
      <table class="table"><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>图标</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>description</td><td>描述性文字</td></tr></tbody></table>
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
        active: 0,
        switchers: [{
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }, {
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
    methods: {
      next () {
        if (this.active++ > 2) this.active = 0
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
