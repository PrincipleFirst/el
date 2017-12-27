<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Carousel 走马灯</h2>
      <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
      <h3>基础用法</h3>
      <p>适用广泛的基础用法</p>
      <div class="demo-block demo-carousel">
        <div class="source trim">
          <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="meta"><div class="description"><p>结合使用<code>el-carousel</code>和<code>el-carousel-item</code>标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在<code>el-carousel-item</code>标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置<code>trigger</code>属性为<code>click</code>，可以达到点击触发的效果。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认 Hover 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"150px"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{{</span> item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>Click 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"150px"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{{</span> item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-carousel__item</span> <span class="hljs-selector-tag">h3</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
     <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n+1)</span> {
     <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>指示器</h3>
      <p>可以将指示器的显示位置设置在容器外部</p>
      <div class="demo-block demo-carousel2">
        <div class="source">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="meta"><div class="description"><p><code>indicator-position</code>属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为<code>outside</code>则会显示在外部；设置为<code>none</code>则不会显示指示器。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">indicator-position</span>=<span class="hljs-string">"outside"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{{</span> item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-carousel__item</span> <span class="hljs-selector-tag">h3</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n+1)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>切换箭头</h3>
      <p>可以设置切换箭头的显示时机</p>
      <div class="demo-block demo-carousel2">
        <div class="source">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="meta"><div class="description"><p><code>arrow</code>属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将<code>arrow</code>设置为<code>always</code>，则会一直显示；设置为<code>never</code>，则会一直隐藏。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">:interval</span>=<span class="hljs-string">"5000"</span> <span class="hljs-attr">arrow</span>=<span class="hljs-string">"always"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{{</span> item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-carousel__item</span> <span class="hljs-selector-tag">h3</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n+1)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>卡片化</h3>
      <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
      <div class="demo-block demo-carousel3">
        <div class="source">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="meta"><div class="description"><p><code>arrow</code>属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将<code>arrow</code>设置为<code>always</code>，则会一直显示；设置为<code>never</code>，则会一直隐藏。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel</span> <span class="hljs-attr">:interval</span>=<span class="hljs-string">"5000"</span> <span class="hljs-attr">arrow</span>=<span class="hljs-string">"always"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{{</span> item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-carousel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-carousel__item</span> <span class="hljs-selector-tag">h3</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#475669</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">300px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#99a9bf</span>;
  }

  <span class="hljs-selector-class">.el-carousel__item</span><span class="hljs-selector-pseudo">:nth-child(2n+1)</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#d3dce6</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Carousel Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>走马灯的高度</td><td>string</td><td>—</td><td>—</td></tr><tr><td>initial-index</td><td>初始状态激活的幻灯片的索引，从 0 开始</td><td>number</td><td>—</td><td>0</td></tr><tr><td>trigger</td><td>指示器的触发方式</td><td>string</td><td>click</td><td>—</td></tr><tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>interval</td><td>自动切换的时间间隔，单位为毫秒</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>indicator-position</td><td>指示器的位置</td><td>string</td><td>outside/none</td><td>—</td></tr><tr><td>arrow</td><td>切换箭头的显示时机</td><td>string</td><td>always/hover/never</td><td>hover</td></tr><tr><td>type</td><td>走马灯的类型</td><td>string</td><td>card</td><td>—</td></tr></tbody></table>
      <h3>Carousel Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>幻灯片切换时触发</td><td>目前激活的幻灯片的索引，原幻灯片的索引</td></tr></tbody></table>
      <h3>Carousel Methods</h3>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setActiveItem</td><td>手动切换幻灯片</td><td>需要切换的幻灯片的索引，从 0 开始；或相应 <code>el-carousel-item</code> 的 <code>name</code> 属性值</td></tr><tr><td>prev</td><td>切换至上一张幻灯片</td><td>—</td></tr><tr><td>next</td><td>切换至下一张幻灯片</td><td>—</td></tr></tbody></table>
      <h3>Carousel-Item Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>幻灯片的名字，可用作 <code>setActiveItem</code> 的参数</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>该幻灯片所对应指示器的文本</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
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
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-carousel .block {
    padding: 30px;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }

  .demo-carousel .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-carousel .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .demo-carousel2 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .demo-carousel3 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .trim
    padding 0 !important
    font-size 0
</style>
