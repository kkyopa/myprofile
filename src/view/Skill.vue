<template>
  <div class="skill">
    <h1>Skill set</h1>
    <p>見方としては「1: 独学で学習中の段階」、「2:独学で数ヶ月以上学んだor実務で多少使ったことがある」、「3: 実務で数ヶ月以上使用したことがある」
    </p>
    <p>「4: 実務レベルで開発可能」、「5: 実務レベルで開発可能+技術を教えられる」という感じです。
    </p>
    <div class="skill_table">
      <table>
      <caption>プログラミング言語</caption>
        <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        <tr><th>HTML/CSS</th><td></td><td></td><td>○</td><td></td><td></td></tr>
        <tr><th>JavaScript</th><td></td><td></td><td>○</td><td></td><td></td></tr>
        <tr><th>PHP</th><td></td><td></td><td></td><td>○</td><td></td></tr>
        <tr><th>Ruby</th><td></td><td>○</td><td></td><td></td><td></td></tr>
      </table>

      <table>
      <caption>開発環境</caption>
        <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        <tr><th>Git</th><td></td><td></td><td>○</td><td></td><td></td></tr>
        <tr><th>Docker</th><td>○</td><td></td><td></td><td></td><td></td></tr>
        <tr><th>Vagrant</th><td>○</td><td></td><td></td><td></td><td></td></tr>
        <tr><th>VSCode</th><td></td><td></td><td></td><td>○</td><td></td></tr>
      </table>

      <table>
      <caption>フレームワーク,ライブラリ</caption>
        <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        <tr><th>Laravel</th><td></td><td>○</td><td></td><td></td><td></td></tr>
        <tr><th>Vue.js</th><td>○</td><td></td><td></td><td></td><td></td></tr>
        <tr><th>RubyonRails</th><td>○</td><td></td><td></td><td></td><td></td></tr>
        <tr><th>jQuery</th><td></td><td></td><td>○</td><td></td><td></td></tr>
      </table>

      <table>
      <caption>tool</caption>
        <tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
        <tr><th>Slack</th><td></td><td></td><td></td><td>○</td><td></td></tr>
        <tr><th>Jira</th><td></td><td></td><td>○</td><td></td><td></td></tr>
        <tr><th>Github</th><td></td><td></td><td></td><td>○</td><td></td></tr>
        <tr><th>Backlog</th><td></td><td></td><td></td><td>○</td><td></td></tr>
      </table>
      </div>
    </div>
</template>

<script></script>

<style>
.skill {
  min-height: 800px;
  margin: 0;
  background-color: white;
}

.skill > h1 {
  margin: 0;
  line-height: 300px;
  font-size: 52px;
  font-family: "Brandon Grotesque W01", "Century Gothic",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ,
    sans-serif;
}

.skill p {
  padding-bottom:20px;
}

caption {
font-size: 22px;
padding-top:20px;
}

table{
  border:1px solid #666;
  border-spacing: 0;
  width:600px;
  float:left;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom:30px;
}
td,th{
  border-bottom:1px solid #666;
}
td,th{
  padding:10px;
}
th{
  background:#EFEFEF;
}
table tbody tr:last-child th,
table tbody tr:last-child td{
  border-bottom: none;
}
th + th,td{
  border-left:1px solid #666;
}

.skill_table {
  overflow: hidden;
}

@media screen and (max-width:767px) {
    caption {
    font-size: 22px;
    padding-top:20px;
    }

    table{
      border:1px solid #666;
      border-spacing: 0;
      width:340px;
      margin-left: 30px;
      margin-right: 30px;
      margin-bottom:30px;
    }
    td,th{
      border-bottom:1px solid #666;
    }
    td,th{
      padding:10px;
    }
    th{
      background:#EFEFEF;
    }
    table tbody tr:last-child th,
    table tbody tr:last-child td{
      border-bottom: none;
    }
    th + th,td{
      border-left:1px solid #666;
    }

    .skill_table {
      overflow: hidden;
    }


}

</style>
