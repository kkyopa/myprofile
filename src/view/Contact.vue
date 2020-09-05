<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>
      最後までご覧いただきありがとうございました。
    </p>
    <p>
      もしこのサイトや私について何かコメントがありましたら
    </p>
    <p>
      下記フォームをご利用ください。
    </p>
    <p>
      どんな些細なことでも、お気軽にお問い合わせください。
    </p>
    <div class="form">
      <input name="name" type="text" class="feedback-input" v-model="params.name" placeholder="Name" />
      <input name="email" type="text" class="feedback-input" v-model="params.email" placeholder="Email" />
      <textarea name="text" class="feedback-input" v-model="params.text" placeholder="Comment"></textarea>
      <input type="button" value="送信" @click="submit"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  namecontact: 'App',
  data: function() {
    return {
      params:{
        name:"" ,
        email:"",
        text:""
      }
    };
  },
  methods:{
    submit(){
      window.console.log(this.params)
      axios.post('https://kyopa.tokyo/api/contact',this.params)
          .then((response) => {
            window.console.log(response.data)
          })
          .catch((e) => {
            alert(e);
          });
    }
   }
}

</script>

<style>
.contact {
  min-height: 800px;
  margin: 0;
}

.contact > h1 {
  margin: 0;
  line-height: 200px;
  color:white;
}

.contact p {
  color:white;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

body { background:rgb(30,30,40); }
.form { max-width:420px; margin:50px auto; }

.feedback-input {
  color:white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid #CC6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}

.feedback-input:focus { border:2px solid #CC4949; }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="button"] {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  background:#CC6666;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:24px;
  padding-top:10px;
  padding-bottom:10px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}
[type="submit"]:hover { background:#CC4949; }

</style>
