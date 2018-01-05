<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Radio 单选框</h2>
      <p>在一组备选项中进行单选</p>
      <h3>基础用法</h3>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <div class="demo-block">
        <div class="source">
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <div class="meta">
          <div class="description"><p>要使用 Radio 组件，只需要设置<code>v-model</code>绑定变量，选中意味着变量的值为相应 Radio <code>label</code>属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"radio"</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"1"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"radio"</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"2"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio</span>: <span class="hljs-string">'1'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <p>单选框不可用的状态。</p>
      <div class="demo-block">
        <div class="source"><label role="radio" aria-disabled="true" tabindex="-1" class="el-radio is-disabled"><span
          class="el-radio__input is-disabled"><span class="el-radio__inner"></span><input type="radio"
                                                                                          disabled="disabled"
                                                                                          tabindex="-1"
                                                                                          class="el-radio__original"
                                                                                          value="禁用"></span><span
          class="el-radio__label">备选项<!----></span></label><label role="radio" aria-checked="true" aria-disabled="true"
                                                                  tabindex="-1" class="el-radio is-disabled is-checked"><span
          class="el-radio__input is-disabled is-checked"><span class="el-radio__inner"></span><input type="radio"
                                                                                                     disabled="disabled"
                                                                                                     tabindex="-1"
                                                                                                     class="el-radio__original"
                                                                                                     value="选中且禁用"></span><span
          class="el-radio__label">备选项<!----></span></label></div>
        <div class="meta">
          <div class="description"><p>
            只要在<code>el-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">disabled</span> <span
    class="hljs-attr">v-model</span>=<span class="hljs-string">"radio1"</span> <span
    class="hljs-attr">label</span>=<span class="hljs-string">"禁用"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">disabled</span> <span
    class="hljs-attr">v-model</span>=<span class="hljs-string">"radio1"</span> <span
    class="hljs-attr">label</span>=<span class="hljs-string">"选中且禁用"</span>&gt;</span>备选项<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio1</span>: <span class="hljs-string">'选中且禁用'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>单选框组</h3>
      <p>适用于在多个互斥的选项中选择的场景。</p>
      <div class="demo-block">
        <div class="source">
          <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </div>
        <div class="meta">
          <div class="description"><p>结合<code>el-radio-group</code>元素和子元素<code>el-radio</code>可以实现单选组，在<code>el-radio-group</code>中绑定<code>v-model</code>，在<code>el-radio</code>中设置好<code>label</code>即可，无需再给每一个<code>el-radio</code>绑定变量，另外，还提供了<code>change</code>事件来响应变化，它会传入一个参数<code>value</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"radio2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">:label</span>=<span
      class="hljs-string">"3"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">:label</span>=<span
      class="hljs-string">"6"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">:label</span>=<span
      class="hljs-string">"9"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio2</span>: <span class="hljs-number">3</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>按钮样式</h3>
      <p>按钮样式的单选组合。</p>
      <div class="demo-block">
        <div class="source">
          <div>
            <el-radio-group v-model="radio3">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京" disabled></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>只需要把<code>el-radio</code>元素换成<code>el-radio-button</code>元素即可，此外，
            还提供了<code>size</code>属性。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio3"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio4"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span> &gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio5"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span> <span class="hljs-attr">disabled</span> &gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio6"</span> <span class="hljs-attr">disabled</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio3</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio4</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio5</span>: <span class="hljs-string">'上海'</span>,
        <span class="hljs-attr">radio6</span>: <span class="hljs-string">'上海'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有边框</h3>
      <div class="demo-block">
        <div class="source">
          <div>
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio9" size="small">
              <el-radio label="1" border>备选项1</el-radio>
              <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio10" size="mini" disabled>
              <el-radio label="1" border>备选项1</el-radio>
              <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>border</code>属性可以渲染为带有边框的单选框。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"radio7"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"radio7"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"2"</span> <span class="hljs-attr">border</span>&gt;</span>备选项2<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"radio8"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"1"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"medium"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"radio8"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"medium"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio9"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项2<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"radio10"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"2"</span> <span class="hljs-attr">border</span>&gt;</span>备选项2<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">radio7</span>: <span class="hljs-string">'1'</span>,
        <span class="hljs-attr">radio8</span>: <span class="hljs-string">'1'</span>,
        <span class="hljs-attr">radio9</span>: <span class="hljs-string">'1'</span>,
        <span class="hljs-attr">radio10</span>: <span class="hljs-string">'1'</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Radio Attributes</h3>
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
          <td>label</td>
          <td>Radio 的 value</td>
          <td>string / number / boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>border</td>
          <td>是否显示边框</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Radio 的尺寸，仅在 border 为真时有效</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生 name 属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Radio Events</h3>
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
          <td>绑定值变化时触发的事件</td>
          <td>选中的 Radio label 值</td>
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
        radio: '1',
        radio1: '选中且禁用',
        radio2: 3,
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
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
