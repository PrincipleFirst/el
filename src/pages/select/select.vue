<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Select 选择器</h2>
      <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
      <h3>基础用法</h3>
      <p>适用广泛的基础单选</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p><code>v-model</code>的值为当前被选中的<code>el-option</code>的 value 属性值</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
        }],
        <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>有禁用选项</h3>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>在<code>el-option</code>中，设定<code>disabled</code>值为 true，即可禁用该选项</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value2"</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options2"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"item.disabled"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options2</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>,
          <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
        }],
        <span class="hljs-attr">value2</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>可清空单选</h3>
      <p>包含清空按钮，可将选择器清空为初始状态</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value4" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>
            为<code>el-select</code>设置<code>clearable</code>属性，则可将选择器清空。需要注意的是，<code>clearable</code>属性仅适用于单选。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value4"</span> <span class="hljs-attr">clearable</span> <span
    class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
        }],
        <span class="hljs-attr">value4</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>基础多选</h3>
      <p>适用性较广的基础多选，用 Tag 展示已选项</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-model="value11"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>为<code>el-select</code>设置<code>multiple</code>属性即可启用多选，此时<code>v-model</code>的值为当前选中值所组成的数组。默认情况下选中值会以
            Tag 的形式展现，你也可以设置<code>collapse-tags</code>属性将它们合并为一段文字。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value5"</span> <span class="hljs-attr">multiple</span> <span
    class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value11"</span>
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">collapse-tags</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-left: 20px;"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
        }],
        <span class="hljs-attr">value5</span>: [],
        <span class="hljs-attr">value11</span>: []
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义模板</h3>
      <p>可以自定义备选项</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value6" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>将自定义的 HTML 模板插入<code>el-option</code>的 slot 中即可。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value6"</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in cities"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span
        class="hljs-string">"float: left"</span>&gt;</span>{{ item.label }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span
        class="hljs-string">"float: right; color: #8492a6; font-size: 13px"</span>&gt;</span>{{ item.value }}<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">cities</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Beijing'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Shanghai'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'上海'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Nanjing'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'南京'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Chengdu'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'成都'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Shenzhen'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'深圳'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'Guangzhou'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'广州'</span>
        }],
        <span class="hljs-attr">value6</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>分组</h3>
      <p>备选项进行分组展示</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value7" placeholder="请选择">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>el-option-group</code>对备选项进行分组，它的<code>label</code>属性为分组名</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value7"</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option-group</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"group in options3"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"group.label"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"group.label"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
        <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in group.options"</span>
        <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
        <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
        <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options3</span>: [{
          <span class="hljs-attr">label</span>: <span class="hljs-string">'热门城市'</span>,
          <span class="hljs-attr">options</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Shanghai'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'上海'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Beijing'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'北京'</span>
          }]
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'城市名'</span>,
          <span class="hljs-attr">options</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Chengdu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'成都'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Shenzhen'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'深圳'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Guangzhou'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'广州'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'Dalian'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'大连'</span>
          }]
        }],
        <span class="hljs-attr">value7</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>可搜索</h3>
      <p>可以利用搜索功能快速查找选项</p>
      <div class="demo-block">
        <div class="source">
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>为<code>el-select</code>添加<code>filterable</code>属性即可启用搜索功能。默认情况下，Select
            会找出所有<code>label</code>属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个<code>filter-method</code>来实现。<code>filter-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"value8"</span> <span class="hljs-attr">filterable</span> <span
    class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
        }],
        <span class="hljs-attr">value8</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>远程搜索</h3>
      <p>从服务器搜索数据，输入关键字进行查找</p>
      <div class="demo-block">
        <div class="source">
          <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>为了启用远程搜索，需要将<code>filterable</code>和<code>remote</code>设置为<code>true</code>，同时传入一个<code>remote-method</code>。<code>remote-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果<code>el-option</code>是通过<code>v-for</code>指令渲染出来的，此时需要为<code>el-option</code>添加<code>key</code>属性，且其值需具有唯一性，比如此例中的<code>item.value</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value9"</span>
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">filterable</span>
    <span class="hljs-attr">remote</span>
    <span class="hljs-attr">reserve-keyword</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入关键词"</span>
    <span class="hljs-attr">:remote-method</span>=<span class="hljs-string">"remoteMethod"</span>
    <span class="hljs-attr">:loading</span>=<span class="hljs-string">"loading"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options4"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options4</span>: [],
        <span class="hljs-attr">value9</span>: [],
        <span class="hljs-attr">list</span>: [],
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">states</span>: [<span class="hljs-string">"Alabama"</span>, <span class="hljs-string">"Alaska"</span>, <span
              class="hljs-string">"Arizona"</span>,
        <span class="hljs-string">"Arkansas"</span>, <span class="hljs-string">"California"</span>, <span
              class="hljs-string">"Colorado"</span>,
        <span class="hljs-string">"Connecticut"</span>, <span class="hljs-string">"Delaware"</span>, <span
              class="hljs-string">"Florida"</span>,
        <span class="hljs-string">"Georgia"</span>, <span class="hljs-string">"Hawaii"</span>, <span
              class="hljs-string">"Idaho"</span>, <span class="hljs-string">"Illinois"</span>,
        <span class="hljs-string">"Indiana"</span>, <span class="hljs-string">"Iowa"</span>, <span class="hljs-string">"Kansas"</span>, <span
              class="hljs-string">"Kentucky"</span>,
        <span class="hljs-string">"Louisiana"</span>, <span class="hljs-string">"Maine"</span>, <span
              class="hljs-string">"Maryland"</span>,
        <span class="hljs-string">"Massachusetts"</span>, <span class="hljs-string">"Michigan"</span>, <span
              class="hljs-string">"Minnesota"</span>,
        <span class="hljs-string">"Mississippi"</span>, <span class="hljs-string">"Missouri"</span>, <span
              class="hljs-string">"Montana"</span>,
        <span class="hljs-string">"Nebraska"</span>, <span class="hljs-string">"Nevada"</span>, <span
              class="hljs-string">"New Hampshire"</span>,
        <span class="hljs-string">"New Jersey"</span>, <span class="hljs-string">"New Mexico"</span>, <span
              class="hljs-string">"New York"</span>,
        <span class="hljs-string">"North Carolina"</span>, <span class="hljs-string">"North Dakota"</span>, <span
              class="hljs-string">"Ohio"</span>,
        <span class="hljs-string">"Oklahoma"</span>, <span class="hljs-string">"Oregon"</span>, <span
              class="hljs-string">"Pennsylvania"</span>,
        <span class="hljs-string">"Rhode Island"</span>, <span class="hljs-string">"South Carolina"</span>,
        <span class="hljs-string">"South Dakota"</span>, <span class="hljs-string">"Tennessee"</span>, <span
              class="hljs-string">"Texas"</span>,
        <span class="hljs-string">"Utah"</span>, <span class="hljs-string">"Vermont"</span>, <span class="hljs-string">"Virginia"</span>,
        <span class="hljs-string">"Washington"</span>, <span class="hljs-string">"West Virginia"</span>, <span
              class="hljs-string">"Wisconsin"</span>,
        <span class="hljs-string">"Wyoming"</span>]
      }
    },
    mounted() {
      <span class="hljs-keyword">this</span>.list = <span class="hljs-keyword">this</span>.states.map(<span
              class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> { <span class="hljs-attr">value</span>: item, <span class="hljs-attr">label</span>: item };
      });
    },
    <span class="hljs-attr">methods</span>: {
      remoteMethod(query) {
        <span class="hljs-keyword">if</span> (query !== <span class="hljs-string">''</span>) {
          <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>;
          setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>;
            <span class="hljs-keyword">this</span>.options4 = <span class="hljs-keyword">this</span>.list.filter(<span
              class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
              <span class="hljs-keyword">return</span> item.label.toLowerCase()
                .indexOf(query.toLowerCase()) &gt; <span class="hljs-number">-1</span>;
            });
          }, <span class="hljs-number">200</span>);
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">this</span>.options4 = [];
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>创建条目</h3>
      <p>可以创建并选中选项中不存在的条目</p>
      <div class="demo-block">
        <div class="source">
          <el-select
            v-model="value10"
            multiple
            filterable
            allow-create
            placeholder="请选择文章标签">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="meta">
          <div class="description"><p>为了启用远程搜索，需要将<code>filterable</code>和<code>remote</code>设置为<code>true</code>，同时传入一个<code>remote-method</code>。<code>remote-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果<code>el-option</code>是通过<code>v-for</code>指令渲染出来的，此时需要为<code>el-option</code>添加<code>key</code>属性，且其值需具有唯一性，比如此例中的<code>item.value</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value9"</span>
    <span class="hljs-attr">multiple</span>
    <span class="hljs-attr">filterable</span>
    <span class="hljs-attr">remote</span>
    <span class="hljs-attr">reserve-keyword</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入关键词"</span>
    <span class="hljs-attr">:remote-method</span>=<span class="hljs-string">"remoteMethod"</span>
    <span class="hljs-attr">:loading</span>=<span class="hljs-string">"loading"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options4"</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options4</span>: [],
        <span class="hljs-attr">value9</span>: [],
        <span class="hljs-attr">list</span>: [],
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">states</span>: [<span class="hljs-string">"Alabama"</span>, <span class="hljs-string">"Alaska"</span>, <span
              class="hljs-string">"Arizona"</span>,
        <span class="hljs-string">"Arkansas"</span>, <span class="hljs-string">"California"</span>, <span
              class="hljs-string">"Colorado"</span>,
        <span class="hljs-string">"Connecticut"</span>, <span class="hljs-string">"Delaware"</span>, <span
              class="hljs-string">"Florida"</span>,
        <span class="hljs-string">"Georgia"</span>, <span class="hljs-string">"Hawaii"</span>, <span
              class="hljs-string">"Idaho"</span>, <span class="hljs-string">"Illinois"</span>,
        <span class="hljs-string">"Indiana"</span>, <span class="hljs-string">"Iowa"</span>, <span class="hljs-string">"Kansas"</span>, <span
              class="hljs-string">"Kentucky"</span>,
        <span class="hljs-string">"Louisiana"</span>, <span class="hljs-string">"Maine"</span>, <span
              class="hljs-string">"Maryland"</span>,
        <span class="hljs-string">"Massachusetts"</span>, <span class="hljs-string">"Michigan"</span>, <span
              class="hljs-string">"Minnesota"</span>,
        <span class="hljs-string">"Mississippi"</span>, <span class="hljs-string">"Missouri"</span>, <span
              class="hljs-string">"Montana"</span>,
        <span class="hljs-string">"Nebraska"</span>, <span class="hljs-string">"Nevada"</span>, <span
              class="hljs-string">"New Hampshire"</span>,
        <span class="hljs-string">"New Jersey"</span>, <span class="hljs-string">"New Mexico"</span>, <span
              class="hljs-string">"New York"</span>,
        <span class="hljs-string">"North Carolina"</span>, <span class="hljs-string">"North Dakota"</span>, <span
              class="hljs-string">"Ohio"</span>,
        <span class="hljs-string">"Oklahoma"</span>, <span class="hljs-string">"Oregon"</span>, <span
              class="hljs-string">"Pennsylvania"</span>,
        <span class="hljs-string">"Rhode Island"</span>, <span class="hljs-string">"South Carolina"</span>,
        <span class="hljs-string">"South Dakota"</span>, <span class="hljs-string">"Tennessee"</span>, <span
              class="hljs-string">"Texas"</span>,
        <span class="hljs-string">"Utah"</span>, <span class="hljs-string">"Vermont"</span>, <span class="hljs-string">"Virginia"</span>,
        <span class="hljs-string">"Washington"</span>, <span class="hljs-string">"West Virginia"</span>, <span
              class="hljs-string">"Wisconsin"</span>,
        <span class="hljs-string">"Wyoming"</span>]
      }
    },
    mounted() {
      <span class="hljs-keyword">this</span>.list = <span class="hljs-keyword">this</span>.states.map(<span
              class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">return</span> { <span class="hljs-attr">value</span>: item, <span class="hljs-attr">label</span>: item };
      });
    },
    <span class="hljs-attr">methods</span>: {
      remoteMethod(query) {
        <span class="hljs-keyword">if</span> (query !== <span class="hljs-string">''</span>) {
          <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>;
          setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
            <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">false</span>;
            <span class="hljs-keyword">this</span>.options4 = <span class="hljs-keyword">this</span>.list.filter(<span
              class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
              <span class="hljs-keyword">return</span> item.label.toLowerCase()
                .indexOf(query.toLowerCase()) &gt; <span class="hljs-number">-1</span>;
            });
          }, <span class="hljs-number">200</span>);
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">this</span>.options4 = [];
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Select Attributes</h3>
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
          <td>multiple</td>
          <td>是否多选</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>value-key</td>
          <td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td>
          <td>string</td>
          <td>—</td>
          <td>value</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸</td>
          <td>string</td>
          <td>large/small/mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>单选时是否可以清空选项</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>collapse-tags</td>
          <td>多选时是否将选中值按文字的形式展示</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>multiple-limit</td>
          <td>多选时用户最多可以选择的项目数，为 0 则不限制</td>
          <td>number</td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>name</td>
          <td>select input 的 name 属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>占位符</td>
          <td>string</td>
          <td>—</td>
          <td>请选择</td>
        </tr>
        <tr>
          <td>filterable</td>
          <td>是否可搜索</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>allow-create</td>
          <td>是否允许用户创建新条目，需配合 <code>filterable</code> 使用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>filter-method</td>
          <td>自定义搜索方法</td>
          <td>function</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>remote</td>
          <td>是否为远程搜索</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>remote-method</td>
          <td>远程搜索方法</td>
          <td>function</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否正在从远程获取数据</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading-text</td>
          <td>远程加载时显示的文字</td>
          <td>string</td>
          <td>—</td>
          <td>加载中</td>
        </tr>
        <tr>
          <td>no-match-text</td>
          <td>搜索条件无匹配时显示的文字</td>
          <td>string</td>
          <td>—</td>
          <td>无匹配数据</td>
        </tr>
        <tr>
          <td>no-data-text</td>
          <td>选项为空时显示的文字</td>
          <td>string</td>
          <td>—</td>
          <td>无数据</td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>Select 下拉框的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>reserve-keyword</td>
          <td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>default-first-option</td>
          <td>在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用</td>
          <td>boolean</td>
          <td>-</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
      <h3>Select Events</h3>
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
          <td>选中值发生变化时触发</td>
          <td>目前的选中值</td>
        </tr>
        <tr>
          <td>visible-change</td>
          <td>下拉框出现/隐藏时触发</td>
          <td>出现则为 true，隐藏则为 false</td>
        </tr>
        <tr>
          <td>remove-tag</td>
          <td>多选模式下移除tag时触发</td>
          <td>移除的tag值</td>
        </tr>
        <tr>
          <td>clear</td>
          <td>可清空的单选模式下用户点击清空按钮时触发</td>
          <td>—</td>
        </tr>
        <tr>
          <td>blur</td>
          <td>当 input 失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>当 input 获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        </tbody>
      </table>
      <h3>Option Group Attributes</h3>
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
          <td>分组的组名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否将该分组下所有选项置为禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
      <h3>Option Attributes</h3>
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
          <td>选项的值</td>
          <td>string/number/object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>选项的标签，若不设置则默认与 <code>value</code> 相同</td>
          <td>string/number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用该选项</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value2: '',
        value4: '',
        value5: [],
        value6: '',
        value8: '',
        value11: [],
        item: '',
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: '',
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois',
          'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Pennsylvania',
          'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas',
          'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin',
          'Wyoming'],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    },
    mounted () {
      this.list = this.states.map(item => {
        return {value: item, label: item}
      })
    },
    methods: {
      remoteMethod (query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options4 = []
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
</style>
