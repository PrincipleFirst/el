<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Tag 标签</h2>
      <p>用于标记和选择。</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source">
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
        <div class="meta">
          <div class="description"><p>由<code>type</code>属性来选择tag的类型，也可以通过<code>color</code>属性来自定义背景色。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tag</span>&gt;</span>标签一<span class="hljs-tag">&lt;/<span
            class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"success"</span>&gt;</span>标签二<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"info"</span>&gt;</span>标签三<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"warning"</span>&gt;</span>标签四<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"danger"</span>&gt;</span>标签五<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>文字描述</h3>
      <div class="demo-block">
        <div class="source">
          <el-tag
            v-for="tag in tags"
            :key="tag.name"
            closable
            :type="tag.type">
            {{tag.name}}
          </el-tag>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>closable</code>属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置<code>disable-transitions</code>属性，它接受一个<code>Boolean</code>，true
            为关闭。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tag</span>
  <span class="hljs-attr">v-for</span>=<span class="hljs-string">"tag in tags"</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">"tag.name"</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">:type</span>=<span class="hljs-string">"tag.type"</span>&gt;</span>
  <span>{{</span>tag.name}}
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tags</span>: [
          { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签一'</span>, <span
              class="hljs-attr">type</span>: <span class="hljs-string">''</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签二'</span>, <span
              class="hljs-attr">type</span>: <span class="hljs-string">'success'</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签三'</span>, <span
              class="hljs-attr">type</span>: <span class="hljs-string">'info'</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签四'</span>, <span
              class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span> },
          { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签五'</span>, <span
              class="hljs-attr">type</span>: <span class="hljs-string">'danger'</span> }
        ]
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>动态编辑标签</h3>
      <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。</p>
      <div class="demo-block">
        <div class="source">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-tag</span>
  <span class="hljs-attr">:key</span>=<span class="hljs-string">"tag"</span>
  <span class="hljs-attr">v-for</span>=<span class="hljs-string">"tag in dynamicTags"</span>
  <span class="hljs-attr">closable</span>
  <span class="hljs-attr">:disable-transitions</span>=<span class="hljs-string">"false"</span>
  <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose(tag)"</span>&gt;</span>
  <span>{{</span>tag}}
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-input</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">"input-new-tag"</span>
  <span class="hljs-attr">v-if</span>=<span class="hljs-string">"inputVisible"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"inputValue"</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"saveTagInput"</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
  <span class="hljs-attr">@keyup.enter.native</span>=<span class="hljs-string">"handleInputConfirm"</span>
  <span class="hljs-attr">@blur</span>=<span class="hljs-string">"handleInputConfirm"</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-else</span> <span
  class="hljs-attr">class</span>=<span class="hljs-string">"button-new-tag"</span> <span
  class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">@click</span>=<span
  class="hljs-string">"showInput"</span>&gt;</span>+ New Tag<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-tag</span> + <span class="hljs-selector-class">.el-tag</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
  }
  <span class="hljs-selector-class">.button-new-tag</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">32px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">30px</span>;
    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">0</span>;
  }
  <span class="hljs-selector-class">.input-new-tag</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">90px</span>;
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">vertical-align</span>: bottom;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dynamicTags</span>: [<span class="hljs-string">'标签一'</span>, <span class="hljs-string">'标签二'</span>, <span
              class="hljs-string">'标签三'</span>],
        <span class="hljs-attr">inputVisible</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">inputValue</span>: <span class="hljs-string">''</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleClose(tag) {
        <span class="hljs-keyword">this</span>.dynamicTags.splice(<span class="hljs-keyword">this</span>.dynamicTags.indexOf(tag), <span
              class="hljs-number">1</span>);
      },

      showInput() {
        <span class="hljs-keyword">this</span>.inputVisible = <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        <span class="hljs-keyword">let</span> inputValue = <span class="hljs-keyword">this</span>.inputValue;
        <span class="hljs-keyword">if</span> (inputValue) {
          <span class="hljs-keyword">this</span>.dynamicTags.push(inputValue);
        }
        <span class="hljs-keyword">this</span>.inputVisible = <span class="hljs-literal">false</span>;
        <span class="hljs-keyword">this</span>.inputValue = <span class="hljs-string">''</span>;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>不同尺寸</h3>
      <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      <div class="demo-block">
        <div class="source">
          <el-tag closable>默认标签</el-tag>
          <el-tag size="medium" closable>中等标签</el-tag>
          <el-tag size="small" closable>小型标签</el-tag>
          <el-tag size="mini" closable>超小标签</el-tag>
        </div>
        <div class="meta">
          <div class="description"><p>
            额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tag</span> <span class="hljs-attr">closable</span>&gt;</span>默认标签<span
            class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span
  class="hljs-string">"medium"</span> <span class="hljs-attr">closable</span>&gt;</span>中等标签<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span
  class="hljs-string">"small"</span> <span class="hljs-attr">closable</span>&gt;</span>小型标签<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tag</span> <span class="hljs-attr">size</span>=<span
  class="hljs-string">"mini"</span> <span class="hljs-attr">closable</span>&gt;</span>超小标签<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tag</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>主题</td><td>string</td><td>success/info/warning/danger</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disable-transitions</td><td>是否禁用渐变动画</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hit</td><td>是否有边框描边</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color</td><td>背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭 Tag 时触发的事件</td><td>—</td></tr></tbody></table>
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
        tags: [
          {name: '标签一', type: ''},
          {name: '标签二', type: 'success'},
          {name: '标签三', type: 'info'},
          {name: '标签四', type: 'warning'},
          {name: '标签五', type: 'danger'}
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
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
    methods: {
      handleClose (tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
