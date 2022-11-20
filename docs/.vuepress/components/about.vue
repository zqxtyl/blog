<template>
  <div class="about">
    <ul class="aboutNav">
      <li
        v-for="item in nav"
        @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#0567f1;color:#fff;' : ''"
        class="aboutNavItem"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'me'">
        <ul class="colors">
          <li class="midnightblue">哈尔滨广厦学院</li>
          <li class="slateblue">养过很多宠物</li>
          <li class="blue">学过前端</li>
          <li class="deepskyblue">爱过一些路人</li>
          <li class="cornflowerblues">玩过很多游戏</li>
          <li class="lightskyblue">看过很多书籍</li>
          <li class="wuwangcaoblue">想去远方</li>
        </ul>
      </div>
      <div v-show="cur === 'tech'">
        <ul>
          <li><img src="../public/star.png" /><span>html</span></li>
          <li><img src="../public/star.png" /><span>css</span></li>
          <li><img src="../public/star.png" /><span>javascript</span></li>
          <li><img src="../public/star.png" /><span>vue</span></li>
        </ul>
      </div>
      <div v-show="cur === 'book'">
        我在看的
        <ul>
          <li><img src="../public/star.png" /><span>基督山伯爵</span></li>
        </ul>
        我喜欢的
        <ul>
          <li><img src="../public/star.png" /><span>推理</span></li>
          <li><img src="../public/star.png" /><span>文学</span></li>
          <li><img src="../public/star.png" /><span>爱情</span></li>
        </ul>
        2022
        <ul>
          <li><img src="../public/star.png" /><span>丰乳肥臀 - 莫言</span></li>
        </ul>
        2021
        <ul>
          <li>
            <img src="../public/star.png" /><span>云边的小卖铺 - 张嘉佳</span>
          </li>
          <li>
            <img src="../public/star.png" /><span>许三观卖血记 - 余华</span>
          </li>
        </ul>
      </div>
      <div v-show="cur === 'tv'">
        2022
        <ul>
          <li><img src="../public/star.png" /><span>越狱</span></li>
          <li><img src="../public/star.png" /><span>风骚律师</span></li>
          <li><img src="../public/star.png" /><span>权力的游戏</span></li>
        </ul>
        2021
        <ul>
          <li><img src="../public/star.png" /><span>行尸走肉</span></li>
          <li><img src="../public/star.png" /><span>绝密毒师</span></li>
          <li><img src="../public/star.png" /><span>良医</span></li>
          <li><img src="../public/star.png" /><span>丧尸国度</span></li>
          <li><img src="../public/star.png" /><span>切尔诺贝利</span></li>
        </ul>
      </div>
      <div v-show="cur === 'movie'">
        我喜欢的
        <ul>
          <li><img src="../public/star.png" /><span>厨子戏子痞子</span></li>
          <li><img src="../public/star.png" /><span>绿皮书</span></li>
          <li><img src="../public/star.png" /><span>霸王别姬</span></li>
          <li><img src="../public/star.png" /><span>星爷系列</span></li>
        </ul>
      </div>
      <div v-show="cur === 'music'">
        我喜欢的
        <ul>
          <li><img src="../public/star.png" /><span>刚好遇见你-李玉刚</span></li>
          <li><img src="../public/star.png" /><span>反方向的钟-周杰伦</span></li>
          <li><img src="../public/star.png" /><span>还是分开-张叶蕾</span></li>
          <li><img src="../public/star.png" /><span>呓语-毛不易</span></li>
        </ul>
      </div>
      <div v-show="cur === 'game'">
        想念那段无忧无虑的时光
        <ul>
          <li><img src="../public/star.png" /><span>LOL</span></li>
          <li><img src="../public/star.png" /><span>王者荣耀</span></li>
          <li><img src="../public/star.png" /><span>cf</span></li>
          <li><img src="../public/star.png" /><span>原神</span></li>
          <li><img src="../public/star.png" /><span>4399</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: '关于我', code: 'me' },
        { title: '技能', code: 'tech' },
        { title: '书', code: 'book' },
        { title: '剧', code: 'tv' },
        { title: '电影', code: 'movie' },
        { title: '音乐', code: 'music' },
        { title: '游戏', code: 'game' },
      ],
      cur: 'me',
    };
  },
  methods: {
    showNav(code) {
      this.cur = code;
    },
  },
};
</script>
