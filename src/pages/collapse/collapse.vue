<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Collapse 折叠面板</h2>
      <p>通过折叠面板收纳内容区域</p>
      <h3>基础用法</h3>
      <p>可同时展开多个面板，面板之间不影响</p>
      <div class="demo-block">
        <div class="source">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="meta"><!----><div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"activeNames"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"一致性 Consistency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"3"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeNames</span>: [<span class="hljs-string">'1'</span>]
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>手风琴效果</h3>
      <p>每次只能展开一个面板</p>
      <div class="demo-block">
        <div class="source">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="meta"><div class="description"><p>通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"activeName"</span> <span class="hljs-attr">accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"一致性 Consistency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"3"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeName</span>: <span class="hljs-string">'1'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义面板标题</h3>
      <p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
      <div class="demo-block">
        <div class="source">
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-info"></i>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="meta"><!----><div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-collapse</span> <span class="hljs-attr">accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
      一致性 Consistency<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"header-icon el-icon-info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Collapse Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>accordion</td><td>是否手风琴模式</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value</td><td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td><td>string/array</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Collapse Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td><td>(activeNames: array|string)</td></tr></tbody></table>
      <h3>Collapse Item Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标志符</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>面板标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        activeNames: ['1'],
        activeName: '1'
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
