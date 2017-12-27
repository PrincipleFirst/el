<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Checkbox 多选框</h2>
      <p>一组备选项中进行多选</p>
      <h3>基础用法</h3>
      <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
      <div class="demo-block">
        <div class="source">
          <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <div class="meta">
          <div class="description"><p>在<code>el-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- `checked` 为 true 或 false --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"checked"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <p>多选框不可用状态。</p>
      <div class="demo-block">
        <div class="source">
          <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
          <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>disabled</code>属性即可。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"checked1"</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"checked2"</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checked1</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">checked2</span>: <span class="hljs-literal">true</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>多选框组</h3>
      <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <div class="demo-block">
        <div class="source">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="meta">
          <div class="description"><p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group
            中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>el-checkbox</code> 的 <code>label</code>属性是该
            checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。<code>label</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
    class="hljs-attr">v-model</span>=<span class="hljs-string">"checkList"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"复选框 A"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"复选框 B"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"复选框 C"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"禁用"</span> <span class="hljs-attr">disabled</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"选中且禁用"</span> <span class="hljs-attr">disabled</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checkList</span>: [<span class="hljs-string">'选中且禁用'</span>,<span class="hljs-string">'复选框 A'</span>]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>indeterminate 状态</h3>
      <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
      <div class="demo-block">
        <div class="source">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span
    class="hljs-attr">:indeterminate</span>=<span class="hljs-string">"isIndeterminate"</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"checkAll"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleCheckAllChange"</span>&gt;</span>全选<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin: 15px 0;"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
    class="hljs-attr">v-model</span>=<span class="hljs-string">"checkedCities"</span> <span
    class="hljs-attr">@change</span>=<span class="hljs-string">"handleCheckedCitiesChange"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">v-for</span>=<span
      class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span
      class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'上海'</span>, <span
              class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span
              class="hljs-string">'深圳'</span>];
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checkAll</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">checkedCities</span>: [<span class="hljs-string">'上海'</span>, <span class="hljs-string">'北京'</span>],
        <span class="hljs-attr">cities</span>: cityOptions,
        <span class="hljs-attr">isIndeterminate</span>: <span class="hljs-literal">true</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleCheckAllChange(val) {
        <span class="hljs-keyword">this</span>.checkedCities = val ? cityOptions : [];
        <span class="hljs-keyword">this</span>.isIndeterminate = <span class="hljs-literal">false</span>;
      },
      handleCheckedCitiesChange(value) {
        <span class="hljs-keyword">let</span> checkedCount = value.length;
        <span class="hljs-keyword">this</span>.checkAll = checkedCount === <span class="hljs-keyword">this</span>.cities.length;
        <span class="hljs-keyword">this</span>.isIndeterminate = checkedCount &gt; <span class="hljs-number">0</span> &amp;&amp; checkedCount &lt; <span
              class="hljs-keyword">this</span>.cities.length;
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>按钮样式</h3>
      <div class="demo-block">
        <div class="source">
          <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}
              </el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>只需要把<code>el-checkbox</code>元素替换为<code>el-checkbox-button</code>元素即可。此外，还提供了<code>size</code>属性。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup1"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup2"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup3"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:disabled</span>=<span class="hljs-string">"city === '北京'"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup4"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'上海'</span>, <span
              class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span
              class="hljs-string">'深圳'</span>];
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checkboxGroup1</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup2</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup3</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup4</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">cities</span>: cityOptions
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[4].expand" :index="4" @switcher="switcherState"></collapseBar>
      </div>
      <h3>带有边框</h3>
      <div class="demo-block">
        <div class="source">
          <div>
            <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup5" size="small">
              <el-checkbox label="备选项1" border></el-checkbox>
              <el-checkbox label="备选项2" border disabled></el-checkbox>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
              <el-checkbox label="备选项1" border></el-checkbox>
              <el-checkbox label="备选项2" border></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>只需要把<code>el-checkbox</code>元素替换为<code>el-checkbox-button</code>元素即可。此外，还提供了<code>size</code>属性。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup1"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup2"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup3"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:disabled</span>=<span class="hljs-string">"city === '北京'"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup4"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span
        class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span
        class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span><span>{{</span>city}}<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'上海'</span>, <span
              class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span
              class="hljs-string">'深圳'</span>];
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data () {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">checkboxGroup1</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup2</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup3</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">checkboxGroup4</span>: [<span class="hljs-string">'上海'</span>],
        <span class="hljs-attr">cities</span>: cityOptions
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[5].expand" :index="5" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Checkbox Attributes</h3>
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
          <td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td>
          <td>string / number / boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>true-label</td>
          <td>选中时的值</td>
          <td>string / number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>false-label</td>
          <td>没有选中时的值</td>
          <td>string / number</td>
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
          <td>Checkbox 的尺寸，仅在 border 为真时有效</td>
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
        <tr>
          <td>checked</td>
          <td>当前是否勾选</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>设置 indeterminate 状态，只负责样式控制</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
      <h3>Checkbox Events</h3>
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
          <td>当绑定值变化时触发的事件</td>
          <td>更新后的值</td>
        </tr>
        </tbody>
      </table>
      <h3>Checkbox-group Attributes</h3>
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
          <td>size</td>
          <td>多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效</td>
          <td>string</td>
          <td>medium / small / mini</td>
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
          <td>min</td>
          <td>可被勾选的 checkbox 的最小数量</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>max</td>
          <td>可被勾选的 checkbox 的最大数量</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>按钮形式的 Checkbox 激活时的文本颜色</td>
          <td>string</td>
          <td>—</td>
          <td>#ffffff</td>
        </tr>
        <tr>
          <td>fill</td>
          <td>按钮形式的 Checkbox 激活时的填充色和边框色</td>
          <td>string</td>
          <td>—</td>
          <td>#409EFF</td>
        </tr>
        </tbody>
      </table>
      <h3>Checkbox-group Events</h3>
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
          <td>当绑定值变化时触发的事件</td>
          <td>更新后的值</td>
        </tr>
        </tbody>
      </table>
      <h3>Checkbox-button Attributes</h3>
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
          <td>选中状态的值（只有在<code>checkbox-group</code>或者绑定对象类型为<code>array</code>时有效）</td>
          <td>string / number / boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>true-label</td>
          <td>选中时的值</td>
          <td>string / number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>false-label</td>
          <td>没有选中时的值</td>
          <td>string / number</td>
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
          <td>name</td>
          <td>原生 name 属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>当前是否勾选</td>
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

  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['选中且禁用', '复选框 A'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checkboxGroup5: [],
        checkboxGroup6: [],
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
      },
      handleCheckAllChange (val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
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
