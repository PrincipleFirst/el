<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Badge 标记</h2>
      <p>出现在按钮、图标旁的数字或状态标记。</p>
      <h3>基础用法</h3>
      <p>展示新消息数量。</p>
      <div class="demo-block">
        <div class="source">
          <el-badge :value="12" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>

          <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                评论
                <el-badge class="mark" :value="12"/>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                回复
                <el-badge class="mark" :value="3"/>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta">
          <div class="description"><p>定义<code>value</code>属性，它接受<code
           >Number</code>或者<code>String</code>。</p></div>
          <div class="highlight"><pre><code
                                                                                  class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
            class="hljs-attr">:value</span>=<span class="hljs-string">"12"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>评论<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
  class="hljs-attr">:value</span>=<span class="hljs-string">"3"</span> <span
  class="hljs-attr">class</span>=<span
                                                          class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>回复<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span
  class="hljs-attr">trigger</span>=<span
                                                            class="hljs-string">"click"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span
    class="hljs-attr">class</span>=<span
                                                            class="hljs-string">"el-dropdown-link"</span>&gt;</span>
    点我查看<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span
              class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-caret-bottom el-icon--right"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span
    class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span
                                                        class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">class</span>=<span class="hljs-string">"clearfix"</span>&gt;</span>
      评论
      <span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
        class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"mark"</span> <span
        class="hljs-attr">:value</span>=<span class="hljs-string">"12"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span
                                                        class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">class</span>=<span class="hljs-string">"clearfix"</span>&gt;</span>
      回复
      <span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
        class="hljs-attr">class</span>=<span
                                                                class="hljs-string">"mark"</span> <span
        class="hljs-attr">:value</span>=<span class="hljs-string">"3"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span
              class="css">
<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">margin-top</span>: <span
                                                                           class="hljs-number">10px</span>;
  <span class="hljs-attribute">margin-right</span>: <span
                                                                             class="hljs-number">40px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>最大值</h3>
      <p>可自定义最大值。</p>
      <div class="demo-block">
        <div class="source">
          <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div class="meta">
          <div class="description"><p>由<code>max</code>属性定义，它接受一个<code
           >Number</code>，需要注意的是，只有当<code>value</code>为<code>Number</code>时，它才会生效。
          </p></div>
          <div class="highlight"><pre><code
                                                                                  class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
            class="hljs-attr">:value</span>=<span class="hljs-string">"200"</span> <span
            class="hljs-attr">:max</span>=<span
                                                                   class="hljs-string">"99"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>评论<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
  class="hljs-attr">:value</span>=<span class="hljs-string">"100"</span> <span
  class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span> <span
  class="hljs-attr">class</span>=<span
                                                          class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>回复<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span
              class="css">
<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">margin-top</span>: <span
                                                                           class="hljs-number">10px</span>;
  <span class="hljs-attribute">margin-right</span>: <span
                                                                             class="hljs-number">40px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义内容</h3>
      <p>可以显示数字以外的文本内容。</p>
      <div class="demo-block">
        <div class="source last">
          <el-badge value="new" class="item">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge value="hot" class="item">
            <el-button size="small">回复</el-button>
          </el-badge>
        </div>
        <div class="meta">
          <div class="description"><p>定义<code>value</code>为<code
           >String</code>类型是时可以用于显示自定义文本。</p></div>
          <div class="highlight"><pre><code
                                                                                  class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
            class="hljs-attr">value</span>=<span class="hljs-string">"new"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>评论<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
  class="hljs-attr">value</span>=<span class="hljs-string">"hot"</span> <span
  class="hljs-attr">class</span>=<span
                                                          class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">size</span>=<span
                                                           class="hljs-string">"small"</span>&gt;</span>回复<span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span
              class="css">
<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">margin-top</span>: <span
                                                                           class="hljs-number">10px</span>;
  <span class="hljs-attribute">margin-right</span>: <span
                                                                             class="hljs-number">40px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>小红点</h3>
      <p>以红点的形式标注需要关注的内容。</p>
      <div class="demo-block">
        <div class="source">
          <el-badge is-dot class="item">数据查询</el-badge>
          <el-badge is-dot class="item">
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
          </el-badge>
        </div>
        <div class="meta">
          <div class="description"><p>除了数字外，设置<code>is-dot</code>属性，它接受一个<code
           >Boolean</code>。</p></div>
          <div class="highlight"><pre><code
                                                                                  class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
            class="hljs-attr">is-dot</span> <span
                                                                     class="hljs-attr">class</span>=<span
            class="hljs-string">"item"</span>&gt;</span>数据查询<span
                                                                                     class="hljs-tag">&lt;/<span
            class="hljs-name">el-badge</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-badge</span> <span
  class="hljs-attr">is-dot</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"item"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span
    class="hljs-attr">class</span>=<span class="hljs-string">"share-button"</span> <span
    class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span> <span
    class="hljs-attr">type</span>=<span
                                                           class="hljs-string">"primary"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span
                                                             class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-badge</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span
              class="css">
<span class="hljs-selector-class">.item</span> {
  <span class="hljs-attribute">margin-top</span>: <span
                                                                           class="hljs-number">10px</span>;
  <span class="hljs-attribute">margin-right</span>: <span
                                                                             class="hljs-number">40px</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
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
          <td>显示值</td>
          <td>string, number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>is-dot</td>
          <td>小圆点</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>hidden</td>
          <td>隐藏 badge</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .share-button {
    width: 36px;
    padding: 10px;
  }
</style>
