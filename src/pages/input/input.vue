<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Input 输入框</h2>
      <p>通过鼠标或键盘输入字符</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
            class="hljs-string">"input"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>&gt;</span><span
            class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">input</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <div class="demo-block">
        <div class="source">
          <el-input
            placeholder="请输入内容"
            v-model="input1"
            :disabled="true">
          </el-input>
        </div>
        <div class="meta">
          <div class="description"><p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-input</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input1"</span>
  <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">input1</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>可清空</h3>
      <div class="demo-block">
        <div class="source">
          <el-input
            placeholder="请输入内容"
            v-model="input10"
            clearable>
          </el-input>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>clearable</code>属性即可得到一个可清空的输入框</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-input</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input10"</span>
  <span class="hljs-attr">clearable</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">input10</span>: <span class="hljs-string">''</span>
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>复合型输入框</h3>
      <p>可前置或后置元素，一般为标签或按钮</p>
      <div class="demo-block">
        <div class="source">
          <div>
            <el-input placeholder="请输入内容" v-model="input3" style="width: 100%">
              <template slot="prepend">Http://</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input4" style="width: 100%">
              <template slot="append">.com</template>
            </el-input>
          </div>
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select" style="width: 100%">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>可通过 slot 来指定在 input 中前置或者后置内容。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input3"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"prepend"</span>&gt;</span>Http://<span class="hljs-tag">&lt;/<span
              class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
  class="hljs-string">"margin-top: 15px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input4"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"append"</span>&gt;</span>.com<span class="hljs-tag">&lt;/<span
              class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
  class="hljs-string">"margin-top: 15px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">placeholder</span>=<span
    class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input5"</span> <span
    class="hljs-attr">class</span>=<span class="hljs-string">"input-with-select"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"select"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"prepend"</span> <span
      class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"餐厅名"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"订单号"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"用户电话"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"3"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"append"</span> <span class="hljs-attr">icon</span>=<span
      class="hljs-string">"el-icon-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-select</span> <span class="hljs-selector-class">.el-input</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">130px</span>;
  }
  <span class="hljs-selector-class">.input-with-select</span> <span
              class="hljs-selector-class">.el-input-group__prepend</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  data() {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">input3</span>: <span class="hljs-string">''</span>,
      <span class="hljs-attr">input4</span>: <span class="hljs-string">''</span>,
      <span class="hljs-attr">input5</span>: <span class="hljs-string">''</span>,
      <span class="hljs-attr">select</span>: <span class="hljs-string">''</span>
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>带输入建议</h3>
      <p>根据输入内容提供对应的输入建议</p>
      <div class="demo-block">
        <div class="source">
          <el-row class="demo-autocomplete">
            <el-col :span="12">
              <div class="sub-title">激活即列出输入建议</div>
              <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
            </el-col>
            <el-col :span="12">
              <div class="sub-title">输入后匹配输入建议</div>
              <el-autocomplete
                class="inline-input"
                v-model="state2"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                :trigger-on-focus="false"
                @select="handleSelect"
              ></el-autocomplete>
            </el-col>
          </el-row>
        </div>
        <div class="meta">
          <div class="description"><p>autocomplete 是一个可带输入建议的输入框组件，<code>fetch-suggestions</code> 是一个返回输入建议的方法属性，如
            querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-autocomplete"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
    class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"sub-title"</span>&gt;</span>激活即列出输入建议<span class="hljs-tag">&lt;/<span
              class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-autocomplete</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"inline-input"</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state1"</span>
      <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearch"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
      <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-autocomplete</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
    class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"sub-title"</span>&gt;</span>输入后匹配输入建议<span class="hljs-tag">&lt;/<span
              class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-autocomplete</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"inline-input"</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state2"</span>
      <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearch"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
      <span class="hljs-attr">:trigger-on-focus</span>=<span class="hljs-string">"false"</span>
      <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-autocomplete</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">restaurants</span>: [],
        <span class="hljs-attr">state1</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">state2</span>: <span class="hljs-string">''</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      querySearch(queryString, cb) {
        <span class="hljs-keyword">var</span> restaurants = <span class="hljs-keyword">this</span>.restaurants;
        <span class="hljs-keyword">var</span> results = queryString ? restaurants.filter(<span
              class="hljs-keyword">this</span>.createFilter(queryString)) : restaurants;
        <span class="hljs-comment">// 调用 callback 返回建议列表的数据</span>
        cb(results);
      },
      createFilter(queryString) {
        <span class="hljs-keyword">return</span> <span class="hljs-function">(<span
              class="hljs-params">restaurant</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === <span
              class="hljs-number">0</span>);
        };
      },
      loadAll() {
        <span class="hljs-keyword">return</span> [
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"三全鲜食（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Hot honey 首尔炸鸡（仙霞路）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区淞虹路661号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新旺角茶餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"泷千家(天山西路店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路438号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"胖仙女纸杯蛋糕（上海凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"贡茶"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区金钟路633号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"豪大大香鸡排超级奶爸"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区曹安公路曹安路1685号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"茶芝兰（奶茶，手抓饼）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区同普路1435号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"十二泷町"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市北翟路1444弄81号B幢-107"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"星移浓缩咖啡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区新郁路817号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阿姨奶茶/豪大大"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安路1611号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新麦甜四季甜品炸鸡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安公路2383弄55号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Monica摩托主题咖啡店"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浮生若茶（凌空soho店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海长宁区金钟路968号9号楼地下一层"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"NONO JUICE  鲜榨果汁"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路119号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"CoCo都可(北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"快乐柠檬（神州智慧店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路567号1层R117号店铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Merci Paul cafe"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"猫山王（西郊百联店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"枪会山"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区棕榈路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"纵食"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"元丰天山花园(东门) 双流路267号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"钱记"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹杯加"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区通协路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"唦哇嘀咖"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(西郊百联)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号1305室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(近铁广场)"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"鲜果榨汁（金沙江路和美广店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"开心丽果（缤谷店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区威宁路天山路341号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"超级鸡车（丰庄路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区丰庄路240号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"妙生活果园（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"香宜度麻辣香锅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区淞虹路148号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"凡仔汉堡（老真北路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区老真北路160号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"港式小铺"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"蜀香源麻辣香锅（剑河路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"剑河路443-1"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"北京饺子馆"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区北新泾街道天山西路490-1号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"饭典*新简餐（凌空SOHO店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"焦耳·川式快餐（金钟路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市金钟路633号地下一层甲部"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"动力鸡车"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路299弄3号101B"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浏阳蒸菜"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路430号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"四海游龙（天山西路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"樱花食堂（凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹分米客家传统调制米粉(天山店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路428号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"福荣祥烧腊（平溪路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区协和路福泉路255弄57-73号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"速记黄焖鸡米饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"红辣椒麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路492号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"(小杨生煎)西郊百联餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号百联2楼"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阳阳麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路389号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"南拳妈妈龙虾盖浇饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> }
        ];
      },
      handleSelect(item) {
        <span class="hljs-built_in">console</span>.log(item);
      }
    },
    mounted() {
      <span class="hljs-keyword">this</span>.restaurants = <span class="hljs-keyword">this</span>.loadAll();
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[4].expand" :index="4" @switcher="switcherState"></collapseBar>
      </div>
      <h3>自定义模板</h3>
      <p>可自定义输入建议的显示</p>
      <div class="demo-block">
        <div class="source">
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state3"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect">
            <i
              class="el-icon-edit el-input__icon"
              slot="suffix"
              @click="handleIconClick">
            </i>
            <template slot-scope="props">
              <div class="name">{{ props.item.value }}</div>
              <span class="addr">{{ props.item.address }}</span>
            </template>
          </el-autocomplete>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>scoped slot</code>自定义输入建议的模板。该 scope 的参数为<code>item</code>，表示当前输入建议对象。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-autocomplete</span>
  <span class="hljs-attr">popper-class</span>=<span class="hljs-string">"my-autocomplete"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state3"</span>
  <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearch"</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">i</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-edit el-input__icon"</span>
    <span class="hljs-attr">slot</span>=<span class="hljs-string">"suffix"</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"handleIconClick"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot-scope</span>=<span
    class="hljs-string">"props"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"name"</span>&gt;</span><span>{{</span> props.item.value }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"addr"</span>&gt;</span><span>{{</span> props.item.address }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-autocomplete</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">restaurants</span>: [],
        <span class="hljs-attr">state3</span>: <span class="hljs-string">''</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      querySearch(queryString, cb) {
        <span class="hljs-keyword">var</span> restaurants = <span class="hljs-keyword">this</span>.restaurants;
        <span class="hljs-keyword">var</span> results = queryString ? restaurants.filter(<span
              class="hljs-keyword">this</span>.createFilter(queryString)) : restaurants;
        <span class="hljs-comment">// 调用 callback 返回建议列表的数据</span>
        cb(results);
      },
      createFilter(queryString) {
        <span class="hljs-keyword">return</span> <span class="hljs-function">(<span
              class="hljs-params">restaurant</span>) =&gt;</span> {
          <span class="hljs-keyword">return</span> (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === <span
              class="hljs-number">0</span>);
        };
      },
      loadAll() {
        <span class="hljs-keyword">return</span> [
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"三全鲜食（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Hot honey 首尔炸鸡（仙霞路）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区淞虹路661号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新旺角茶餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"泷千家(天山西路店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路438号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"胖仙女纸杯蛋糕（上海凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"贡茶"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区金钟路633号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"豪大大香鸡排超级奶爸"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区曹安公路曹安路1685号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"茶芝兰（奶茶，手抓饼）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区同普路1435号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"十二泷町"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市北翟路1444弄81号B幢-107"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"星移浓缩咖啡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区新郁路817号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阿姨奶茶/豪大大"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安路1611号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新麦甜四季甜品炸鸡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安公路2383弄55号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Monica摩托主题咖啡店"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浮生若茶（凌空soho店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海长宁区金钟路968号9号楼地下一层"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"NONO JUICE  鲜榨果汁"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路119号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"CoCo都可(北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"快乐柠檬（神州智慧店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路567号1层R117号店铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Merci Paul cafe"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"猫山王（西郊百联店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"枪会山"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区棕榈路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"纵食"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"元丰天山花园(东门) 双流路267号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"钱记"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹杯加"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区通协路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"唦哇嘀咖"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(西郊百联)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号1305室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(近铁广场)"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"鲜果榨汁（金沙江路和美广店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"开心丽果（缤谷店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区威宁路天山路341号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"超级鸡车（丰庄路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区丰庄路240号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"妙生活果园（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"香宜度麻辣香锅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区淞虹路148号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"凡仔汉堡（老真北路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区老真北路160号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"港式小铺"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"蜀香源麻辣香锅（剑河路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"剑河路443-1"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"北京饺子馆"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区北新泾街道天山西路490-1号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"饭典*新简餐（凌空SOHO店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"焦耳·川式快餐（金钟路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市金钟路633号地下一层甲部"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"动力鸡车"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路299弄3号101B"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浏阳蒸菜"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路430号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"四海游龙（天山西路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"樱花食堂（凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹分米客家传统调制米粉(天山店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路428号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"福荣祥烧腊（平溪路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区协和路福泉路255弄57-73号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"速记黄焖鸡米饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"红辣椒麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路492号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"(小杨生煎)西郊百联餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号百联2楼"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阳阳麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路389号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"南拳妈妈龙虾盖浇饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> }
        ];
      },
      handleSelect(item) {
        <span class="hljs-built_in">console</span>.log(item);
      },
      handleIconClick(ev) {
        <span class="hljs-built_in">console</span>.log(ev);
      }
    },
    mounted() {
      <span class="hljs-keyword">this</span>.restaurants = <span class="hljs-keyword">this</span>.loadAll();
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[5].expand" :index="5" @switcher="switcherState"></collapseBar>
      </div>
      <h3>远程搜索</h3>
      <p>从服务端搜索数据</p>
      <div class="demo-block">
        <div class="source">
          <el-autocomplete
            v-model="state4"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-autocomplete</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state4"</span>
  <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearchAsync"</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
  <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-autocomplete</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">restaurants</span>: [],
        <span class="hljs-attr">state4</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">timeout</span>:  <span class="hljs-literal">null</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      loadAll() {
        <span class="hljs-keyword">return</span> [
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"三全鲜食（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Hot honey 首尔炸鸡（仙霞路）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区淞虹路661号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新旺角茶餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"泷千家(天山西路店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路438号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"胖仙女纸杯蛋糕（上海凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"贡茶"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区金钟路633号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"豪大大香鸡排超级奶爸"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区曹安公路曹安路1685号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"茶芝兰（奶茶，手抓饼）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区同普路1435号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"十二泷町"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市北翟路1444弄81号B幢-107"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"星移浓缩咖啡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区新郁路817号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阿姨奶茶/豪大大"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安路1611号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新麦甜四季甜品炸鸡"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安公路2383弄55号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Monica摩托主题咖啡店"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浮生若茶（凌空soho店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海长宁区金钟路968号9号楼地下一层"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"NONO JUICE  鲜榨果汁"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路119号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"CoCo都可(北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"快乐柠檬（神州智慧店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路567号1层R117号店铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Merci Paul cafe"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"猫山王（西郊百联店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"枪会山"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区棕榈路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"纵食"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"元丰天山花园(东门) 双流路267号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"钱记"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹杯加"</span>, <span class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区通协路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"唦哇嘀咖"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(西郊百联)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号1305室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(近铁广场)"</span>, <span
              class="hljs-string">"address"</span>: <span
              class="hljs-string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"鲜果榨汁（金沙江路和美广店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"开心丽果（缤谷店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区威宁路天山路341号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"超级鸡车（丰庄路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区丰庄路240号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"妙生活果园（北新泾店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"香宜度麻辣香锅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区淞虹路148号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"凡仔汉堡（老真北路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区老真北路160号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"港式小铺"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"蜀香源麻辣香锅（剑河路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"剑河路443-1"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"北京饺子馆"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区北新泾街道天山西路490-1号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"饭典*新简餐（凌空SOHO店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"焦耳·川式快餐（金钟路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市金钟路633号地下一层甲部"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"动力鸡车"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路299弄3号101B"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浏阳蒸菜"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路430号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"四海游龙（天山西路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"樱花食堂（凌空店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹分米客家传统调制米粉(天山店)"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路428号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"福荣祥烧腊（平溪路店）"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区协和路福泉路255弄57-73号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"速记黄焖鸡米饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"红辣椒麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路492号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"(小杨生煎)西郊百联餐厅"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号百联2楼"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阳阳麻辣烫"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路389号"</span> },
          { <span class="hljs-string">"value"</span>: <span class="hljs-string">"南拳妈妈龙虾盖浇饭"</span>, <span
              class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> }
        ];
      },
      querySearchAsync(queryString, cb) {
        <span class="hljs-keyword">var</span> restaurants = <span class="hljs-keyword">this</span>.restaurants;
        <span class="hljs-keyword">var</span> results = queryString ? restaurants.filter(<span
              class="hljs-keyword">this</span>.createStateFilter(queryString)) : restaurants;

        clearTimeout(<span class="hljs-keyword">this</span>.timeout);
        <span class="hljs-keyword">this</span>.timeout = setTimeout(<span class="hljs-function"><span
              class="hljs-params">()</span> =&gt;</span> {
          cb(results);
        }, <span class="hljs-number">3000</span> * <span class="hljs-built_in">Math</span>.random());
      },
      createStateFilter(queryString) {
        <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">state</span>) =&gt;</span> {
          <span
            class="hljs-keyword">return</span> (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === <span
              class="hljs-number">0</span>);
        };
      },
      handleSelect(item) {
        <span class="hljs-built_in">console</span>.log(item);
      }
    },
    mounted() {
      <span class="hljs-keyword">this</span>.restaurants = <span class="hljs-keyword">this</span>.loadAll();
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[6].expand" :index="6" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Input Attributes</h3>
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
          <td>type</td>
          <td>类型</td>
          <td>string</td>
          <td>text / textarea</td>
          <td>text</td>
        </tr>
        <tr>
          <td>value</td>
          <td>绑定值</td>
          <td>string / number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td>最大输入长度</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>minlength</td>
          <td>最小输入长度</td>
          <td>number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>输入框占位文本</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否可清空</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸，只在 <code>type!="textarea"</code> 时有效</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>prefix-icon</td>
          <td>输入框头部图标</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>suffix-icon</td>
          <td>输入框尾部图标</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>输入框行数，只对 <code>type="textarea"</code> 有效</td>
          <td>number</td>
          <td>—</td>
          <td>2</td>
        </tr>
        <tr>
          <td>autosize</td>
          <td>自适应内容高度，只对 <code>type="textarea"</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td>
          <td>boolean / object</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>auto-complete</td>
          <td>原生属性，自动补全</td>
          <td>string</td>
          <td>on, off</td>
          <td>off</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>原生属性，是否只读</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>max</td>
          <td>原生属性，设置最大值</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>min</td>
          <td>原生属性，设置最小值</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>step</td>
          <td>原生属性，设置输入字段的合法数字间隔</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>resize</td>
          <td>控制是否能被用户缩放</td>
          <td>string</td>
          <td>none, both, horizontal, vertical</td>
          <td>—</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>原生属性，自动获取焦点</td>
          <td>boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>form</td>
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
      <h3>Input slots</h3>
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>prefix</td>
          <td>输入框头部内容，只对 <code>type="text"</code> 有效</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>输入框尾部内容，只对 <code>type="text"</code> 有效</td>
        </tr>
        <tr>
          <td>prepend</td>
          <td>输入框前置内容，只对 <code>type="text"</code> 有效</td>
        </tr>
        <tr>
          <td>append</td>
          <td>输入框后置内容，只对 <code>type="text"</code> 有效</td>
        </tr>
        </tbody>
      </table>
      <h3>Input Events</h3>
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
          <td>blur</td>
          <td>在 Input 失去焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在 Input 获得焦点时触发</td>
          <td>(event: Event)</td>
        </tr>
        <tr>
          <td>change</td>
          <td>在 Input 值改变时触发</td>
          <td>(value: string | number)</td>
        </tr>
        </tbody>
      </table>
      <h3>Input Methods</h3>
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
      <h3>Autocomplete Attributes</h3>
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
          <td>placeholder</td>
          <td>输入框占位文本</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>valueKey</td>
          <td>输入建议对象中用于显示的键名</td>
          <td>string</td>
          <td>—</td>
          <td>value</td>
        </tr>
        <tr>
          <td>value</td>
          <td>必填值，输入绑定值</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>debounce</td>
          <td>获取输入建议的去抖延时</td>
          <td>number</td>
          <td>—</td>
          <td>300</td>
        </tr>
        <tr>
          <td>fetch-suggestions</td>
          <td>返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td>
          <td>Function(queryString, callback)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>Autocomplete 下拉列表的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>trigger-on-focus</td>
          <td>是否在输入框 focus 时显示建议列表</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>name</td>
          <td>原生属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>select-when-unmatched</td>
          <td>在输入没有任何匹配建议的情况下，按下回车是否触发 <code>select</code> 事件</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label</td>
          <td>输入框关联的label文字</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>prefix-icon</td>
          <td>输入框头部图标</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>suffix-icon</td>
          <td>输入框尾部图标</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Autocomplete slots</h3>
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>prefix</td>
          <td>输入框头部内容</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>输入框尾部内容</td>
        </tr>
        <tr>
          <td>prepend</td>
          <td>输入框前置内容</td>
        </tr>
        <tr>
          <td>append</td>
          <td>输入框后置内容</td>
        </tr>
        </tbody>
      </table>
      <h3>Autocomplete Events</h3>
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
          <td>select</td>
          <td>点击选中建议项时触发</td>
          <td>选中建议项</td>
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
        input: '',
        input1: '',
        input10: '',
        input2: '',
        input21: '',
        input22: '',
        input23: '',
        input3: '',
        input4: '',
        input5: '',
        select: '',
        restaurants: [],
        props: [],
        item: '',
        value: '',
        address: '',
        state1: '',
        state2: '',
        state3: '',
        state4: '',
        timeout: null,
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
    mounted () {
      this.meta = document.querySelectorAll('.meta')
      this.restaurants = this.loadAll()
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
      querySearch (queryString, cb) {
        let restaurants = this.restaurants
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll () {
        return [
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号'},
          {'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113'},
          {'value': '泷千家(天山西路店)', 'address': '天山西路438号'},
          {'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'},
          {'value': '贡茶', 'address': '上海市长宁区金钟路633号'},
          {'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号'},
          {'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号'},
          {'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107'},
          {'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号'},
          {'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号'},
          {'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号'},
          {'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F'},
          {'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层'},
          {'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号'},
          {'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路'},
          {'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺'},
          {'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819'},
          {'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306'},
          {'value': '枪会山', 'address': '上海市普陀区棕榈路'},
          {'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号'},
          {'value': '钱记', 'address': '上海市长宁区天山西路'},
          {'value': '壹杯加', 'address': '上海市长宁区通协路'},
          {'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元'},
          {'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室'},
          {'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺'},
          {'value': '鲜果榨汁（金沙江路和美广店）', 'address': '普陀区金沙江路2239号金沙和美广场B1-10-6'},
          {'value': '开心丽果（缤谷店）', 'address': '上海市长宁区威宁路天山路341号'},
          {'value': '超级鸡车（丰庄路店）', 'address': '上海市嘉定区丰庄路240号'},
          {'value': '妙生活果园（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': '香宜度麻辣香锅', 'address': '长宁区淞虹路148号'},
          {'value': '凡仔汉堡（老真北路店）', 'address': '上海市普陀区老真北路160号'},
          {'value': '港式小铺', 'address': '上海市长宁区金钟路968号15楼15-105室'},
          {'value': '蜀香源麻辣香锅（剑河路店）', 'address': '剑河路443-1'},
          {'value': '北京饺子馆', 'address': '长宁区北新泾街道天山西路490-1号'},
          {'value': '饭典*新简餐（凌空SOHO店）', 'address': '上海市长宁区金钟路968号9号楼地下一层9-83室'},
          {'value': '焦耳·川式快餐（金钟路店）', 'address': '上海市金钟路633号地下一层甲部'},
          {'value': '动力鸡车', 'address': '长宁区仙霞西路299弄3号101B'},
          {'value': '浏阳蒸菜', 'address': '天山西路430号'},
          {'value': '四海游龙（天山西路店）', 'address': '上海市长宁区天山西路'},
          {'value': '樱花食堂（凌空店）', 'address': '上海市长宁区金钟路968号15楼15-105室'},
          {'value': '壹分米客家传统调制米粉(天山店)', 'address': '天山西路428号'},
          {'value': '福荣祥烧腊（平溪路店）', 'address': '上海市长宁区协和路福泉路255弄57-73号'},
          {'value': '速记黄焖鸡米饭', 'address': '上海市长宁区北新泾街道金钟路180号1层01号摊位'},
          {'value': '红辣椒麻辣烫', 'address': '上海市长宁区天山西路492号'},
          {'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼'},
          {'value': '阳阳麻辣烫', 'address': '天山西路389号'},
          {'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13'}
        ]
      },
      querySearchAsync (queryString, cb) {
        let restaurants = this.restaurants
        let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      handleSelect (item) {
        console.log(item)
      },
      handleIconClick (ev) {
        console.log(ev)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"
  .el-input {
    width: 180px;
  }

  .demo-input-suffix {
    margin-bottom: 15px;
  }

  .demo-input-suffix .el-input {
    margin-right: 15px;
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .demo-autocomplete {
    text-align: center;
  }

  .demo-autocomplete .el-col:not(:last-child) {
    border-right: 1px solid rgba(224, 230, 237, .5);
  }

  .demo-autocomplete .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
  }

  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
  }
</style>
