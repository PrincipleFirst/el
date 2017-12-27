<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container"><h1><a href="#/zh-CN" class="nav-link"><img
        src="./logo.png" alt="element-logo" class="nav-logo">&nbsp;hqep</a></h1>
        <ul class="nav">
          <li class="nav-item nav-algolia-search">
            <div aria-haspopup="listbox" role="combobox" aria-owns="el-autocomplete-7460"
                 class="el-autocomplete">
              <div class="el-input el-input--small" valuekey="value" popperclass="algolia-search"
                   fetchsuggestions="function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}"
                   debounce="300"><input autocomplete="off" placeholder="搜索文档" size="small" type="text" rows="2"
                                         validateevent="true" class="el-input__inner" role="textbox"
                                         aria-autocomplete="list" aria-controls="id">
              </div>
            </div>
          </li>
          <li class="nav-item"><a href="#/zh-CN/guide">指南
          </a></li>
          <li class="nav-item"><a href="#/zh-CN/component" class="active">组件
          </a></li>
          <li class="nav-item">
            <div class="nav-gap"></div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
  .headerWrapper {
    position: fixed;
    height: 80px;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
  }

  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
  }

  .container {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
  }

  .header h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }

  .header .nav-logo{
    vertical-align: sub;
  }

  .nav-link {
    text-decoration: none;
    color: #01175e;
    font-style: italic;
  }

  .header .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
  }

  .header .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: default;
  }

  .header .nav-item a {
    text-decoration: none;
    color: #888;
    display: block;
    padding: 0 22px;
  }

  .header .nav-item a.active, .header .nav-item a:hover {
    color: #333;
  }

  .header .nav-item a.active, .header .nav-item a:hover {
    color: #333;
  }

  .header .nav-item a.active:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 15px;
    left: calc(50% - 7px);
    width: 14px;
    height: 4px;
    background: #409eff;
  }
</style>
