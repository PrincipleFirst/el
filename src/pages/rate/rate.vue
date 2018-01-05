<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Rate 评分</h2>
      <p>评分组件</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source trim">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
              v-model="value2"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过<code>colors</code>属性设置，而它们对应的两个阈值则通过
            <code>low-threshold</code> 和 <code>high-threshold</code> 设定。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>默认不区分颜色<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-rate</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-rate</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>区分颜色<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-rate</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
    <span class="hljs-attr">:colors</span>=<span
      class="hljs-string">"['#99A9BF', '#F7BA2A', '#FF9900']"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-rate</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value1</span>: <span class="hljs-literal">null</span>,
        <span class="hljs-attr">value2</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>辅助文字</h3>
      <p>用辅助文字直接地表达对应分数</p>
      <div class="demo-block">
        <div class="source">
          <el-rate
            v-model="value3"
            show-text>
          </el-rate>
        </div>
        <div class="meta">
          <div class="description"><p>为组件设置 <code>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code>texts</code>
            可以为每一个分值指定对应的辅助文字。<code>texts</code> 为一个数组，长度应等于最大值 <code>max</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-rate</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
  <span class="hljs-attr">show-text</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-rate</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value3</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>其它 icon</h3>
      <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
      <div class="demo-block">
        <div class="source">
          <el-rate
            v-model="value4"
            :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>icon-classes</code>属性可以自定义对应 3 个不同分段的图标。本例还使用<code>void-icon-class</code>指定了未选中时的图标类名。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-rate</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
  <span class="hljs-attr">:icon-classes</span>=<span class="hljs-string">"['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"</span>
  <span class="hljs-attr">void-icon-class</span>=<span class="hljs-string">"icon-rate-face-off"</span>
  <span class="hljs-attr">:colors</span>=<span class="hljs-string">"['#99A9BF', '#F7BA2A', '#FF9900']"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-rate</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value4</span>: <span class="hljs-literal">null</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>只读</h3>
      <p>只读的评分用来展示分数，允许出现半星</p>
      <div class="demo-block">
        <div class="source">
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-upload</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">"upload-demo"</span>
  <span class="hljs-attr">action</span>=<span class="hljs-string">"https://jsonplaceholder.typicode.com/posts/"</span>
  <span class="hljs-attr">:on-preview</span>=<span class="hljs-string">"handlePreview"</span>
  <span class="hljs-attr">:on-remove</span>=<span class="hljs-string">"handleRemove"</span>
  <span class="hljs-attr">:file-list</span>=<span class="hljs-string">"fileList2"</span>
  <span class="hljs-attr">list-type</span>=<span class="hljs-string">"picture"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span
    class="hljs-string">"small"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>点击上传<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"tip"</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"el-upload__tip"</span>&gt;</span>只能上传jpg/png文件，且不超过500kb<span class="hljs-tag">&lt;/<span
              class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-upload</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">fileList2</span>: [{<span class="hljs-attr">name</span>: <span class="hljs-string">'food.jpeg'</span>, <span
              class="hljs-attr">url</span>: <span class="hljs-string">'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'</span>}, {<span
              class="hljs-attr">name</span>: <span class="hljs-string">'food2.jpeg'</span>, <span
              class="hljs-attr">url</span>: <span class="hljs-string">'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'</span>}]
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleRemove(file, fileList) {
        <span class="hljs-built_in">console</span>.log(file, fileList);
      },
      handlePreview(file) {
        <span class="hljs-built_in">console</span>.log(file);
      }
    }
  }
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
          <td>max</td>
          <td>最大分值</td>
          <td>number</td>
          <td>—</td>
          <td>5</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否为只读</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>allow-half</td>
          <td>是否允许半选</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>low-threshold</td>
          <td>低分和中等分数的界限值，值本身被划分在低分中</td>
          <td>number</td>
          <td>—</td>
          <td>2</td>
        </tr>
        <tr>
          <td>high-threshold</td>
          <td>高分和中等分数的界限值，值本身被划分在高分中</td>
          <td>number</td>
          <td>—</td>
          <td>4</td>
        </tr>
        <tr>
          <td>colors</td>
          <td>icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色</td>
          <td>array</td>
          <td>—</td>
          <td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
        </tr>
        <tr>
          <td>void-color</td>
          <td>未选中 icon 的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#C6D1DE</td>
        </tr>
        <tr>
          <td>disabled-void-color</td>
          <td>只读时未选中 icon 的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#EFF2F7</td>
        </tr>
        <tr>
          <td>icon-classes</td>
          <td>icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名</td>
          <td>array</td>
          <td>—</td>
          <td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
        </tr>
        <tr>
          <td>void-icon-class</td>
          <td>未选中 icon 的类名</td>
          <td>string</td>
          <td>—</td>
          <td>el-icon-star-off</td>
        </tr>
        <tr>
          <td>disabled-void-icon-class</td>
          <td>只读时未选中 icon 的类名</td>
          <td>string</td>
          <td>—</td>
          <td>el-icon-star-on</td>
        </tr>
        <tr>
          <td>show-text</td>
          <td>是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-score</td>
          <td>是否显示当前分数，show-score 和 show-text 不能同时为真</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>辅助文字的颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#1F2D3D</td>
        </tr>
        <tr>
          <td>texts</td>
          <td>辅助文字数组</td>
          <td>array</td>
          <td>—</td>
          <td>['极差', '失望', '一般', '满意', '惊喜']</td>
        </tr>
        <tr>
          <td>score-template</td>
          <td>分数显示模板</td>
          <td>string</td>
          <td>—</td>
          <td>{value}</td>
        </tr>
        </tbody>
      </table>
      <h3>Methods</h3>
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
          <td>分值改变时触发</td>
          <td>改变后的分值</td>
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
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
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
