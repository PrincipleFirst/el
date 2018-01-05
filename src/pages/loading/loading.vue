<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Loading 加载</h2>
      <p>加载数据时显示动效。</p>
      <h3>区域加载</h3>
      <p>在表格等容器中加载数据时显示。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>有两种调用 Loading
            的方法：指令和服务。对于自定义指令<code>v-loading</code>，只需要绑定<code>Boolean</code>即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加<code>body</code>修饰符，可以使遮罩插入至
            DOM 中的 body 上。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">v-loading</span>=<span class="hljs-string">"loading"</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-tag">body</span> {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }],
        <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义</h3>
      <p>可自定义加载文案、图标和背景色。 </p>
      <div class="demo-block">
        <div class="source">
          <el-table
            v-loading="loading2"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>在绑定了<code>v-loading</code>指令的元素上添加<code>element-loading-text</code>属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，<code>element-loading-spinner</code>和<code>element-loading-background</code>属性分别用来设定图标类名和背景色值。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">v-loading</span>=<span class="hljs-string">"loading2"</span>
    <span class="hljs-attr">element-loading-text</span>=<span class="hljs-string">"拼命加载中"</span>
    <span class="hljs-attr">element-loading-spinner</span>=<span class="hljs-string">"el-icon-loading"</span>
    <span class="hljs-attr">element-loading-background</span>=<span class="hljs-string">"rgba(0, 0, 0, 0.8)"</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }],
        <span class="hljs-attr">loading2</span>: <span class="hljs-literal">true</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>整页加载</h3>
      <p>页面数据加载时显示。</p>
      <div class="demo-block">
        <div class="source">
          <el-button
            type="primary"
            @click="openFullScreen"
            v-loading.fullscreen.lock="fullscreenLoading">
            指令方式
          </el-button>
          <el-button
            type="primary"
            @click="openFullScreen2">
            服务方式
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>当使用指令方式时，全屏遮罩需要添加<code>fullscreen</code>修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用<code>lock</code>修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"openFullScreen"</span>
    <span class="hljs-attr">v-loading.fullscreen.lock</span>=<span
      class="hljs-string">"fullscreenLoading"</span>&gt;</span>
    指令方式
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"openFullScreen2"</span>&gt;</span>
    服务方式
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">fullscreenLoading</span>: <span class="hljs-literal">false</span>
      }
    },
    <span class="hljs-attr">methods</span>: {
      openFullScreen() {
        <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">true</span>;
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">false</span>;
        }, <span class="hljs-number">2000</span>);
      },
      openFullScreen2() {
        <span class="hljs-keyword">const</span> loading = <span class="hljs-keyword">this</span>.$loading({
          <span class="hljs-attr">lock</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">text</span>: <span class="hljs-string">'Loading'</span>,
          <span class="hljs-attr">spinner</span>: <span class="hljs-string">'el-icon-loading'</span>,
          <span class="hljs-attr">background</span>: <span class="hljs-string">'rgba(0, 0, 0, 0.7)'</span>
        });
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          loading.close();
        }, <span class="hljs-number">2000</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>服务</h3>
      <p>Loading 还可以以服务的方式调用。</p>
      <p>在需要调用时：</p>
      <pre><code class="hljs language-javascript">Loading.service(options);
</code></pre>
      <p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code> 会返回一个 Loading 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p>
      <pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance = Loading.service(options);
<span class="hljs-keyword">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-comment">// 以服务的方式调用的 Loading 需要异步关闭</span>
  loadingInstance.close();
});
</code></pre>
      <p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</p>
      <pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance1 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-keyword">let</span> loadingInstance2 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-built_in">console</span>.log(loadingInstance1 === loadingInstance2); <span class="hljs-comment">// true</span>
</code></pre>
      <p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p>
      <h3>Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 <code>document.querySelector</code>以获取到对应 DOM 节点</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>同 <code>v-loading</code> 指令中的 <code>body</code> 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>同 <code>v-loading</code> 指令中的 <code>fullscreen</code> 修饰符</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>同 <code>v-loading</code> 指令中的 <code>lock</code> 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>显示在加载图标下方的加载文案</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>自定义加载图标类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>遮罩背景色</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>Loading 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    data () {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true,
        loading2: true,
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen () {
        this.fullscreenLoading = true
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      },
      openFullScreen2 () {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        setTimeout(() => {
          loading.close()
        }, 2000)
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
