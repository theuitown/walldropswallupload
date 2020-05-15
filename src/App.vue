<template>
  <div id="app">
    <left>
      <div class="upload-btn-img">
        <img :src="url"
            class="img-thumbnail p-0 m-0" style="" alt="user profile image">
        <input type="file" name="myfile[]" @change="onFileChange" />
        </div>
    </left>
      <right>
        <form class="uploadwall" @submit="uploadwallp">
          <label>ImageLink</label>
          <input type="text" v-model="imageLink">
            <label>Select Category</label>
          <select v-model="value">
            <option v-for="(cate,id) in category" :key="cate" :value="id+1">{{ id+1 }} . {{ cate.name }} </option>
          </select>
          <button style="margin-top:2rem;" type="submit" class="main-btn">Submit Wallpaper</button>
        </form>
        <p>Timestamp: {{ timestampp }}</p>
      </right>
  </div>
</template>
<script>

import { db } from './firebase';

export default {
  data() {
    return {
      category:[],
      Background:[],
      url:"https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
      timestampp:-1294
    }
  },
  firebase: {
    category:db.ref('CategoryBackground'),
  },
  methods:{
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.imageLink=e.target.files[0].name;
    },
    uploadwallp(f){
      f.preventDefault();
      db.ref('Backgrounds').push({
        imageLink:"https://raw.githubusercontent.com/theuitown/Walldropsdatabase/master/wall2/"+this.imageLink,
        categoryId:(this.value).toString(),
        timestamp: this.timestampp
      })
      this.timestampp--;
      alert("Ho gya upload :) Pero Boi");
    }
  }
}
</script>
<style>

  #app{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:centre;
    align-items:centre;
    width:80%;
    margin:0 auto;
  }

  left{
    width:50%;
  }

  right{
    width:50%;
  }

.uploadwall{
  display:flex;
  justify-content:centre;
  flex-direction:column;
  width:100%;
}

.main-btn{
  border:none;
  Background:black;
  color:white;
  border-radius:10px;
  padding:1rem !important;
  transition:.4s all ease-in;
  font-weight:bold;
}

.main-btn:hover{
  transform:translateY(-.4rem);
  transition:.4s all ease-in;
}

input{
  border:2px solid black;
  border-radius:10px;
  padding:1rem;
  margin:1rem;
}

.upload-btn-img {
        position: relative;
        overflow: hidden;
        display: inline-block;
        margin-bottom:2rem;
    }

    .upload-btn-img input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        width: 450px; height: 900px;
        opacity: 0;
    }

    .img-thumbnail {
        opacity: 1;
        transition: opacity .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out;
        -webkit-transition: opacity .25s ease-in-out;
        cursor: pointer;
        width: 450px; height: 900px;
        object-fit:cover;
    }

    .upload-btn-img:hover .img-thumbnail {
        opacity: 0.7;
        cursor: pointer;
    }

    .upload-btn-img:hover input {
        cursor: pointer;
    }

  .profileimg{
    width:500px;
    height:auto;
    object-fit:cover;
  }

  input[type="file"]{
    border:none;
    margin-bottom:2rem;
  }

  h1{
  margin-bottom:2rem;font-weight:bold;
  }


  @media (max-width: 769px) {
          #app{flex-wrap:wrap;flex-direction:column;}
          left{
            width:80%;
            margin:0 auto;
          }

          .img-thumbnail {
              width: 150px; height: 300px;
              margin:0 auto;
          }


          .upload-btn-img input[type=file] {
              width: 150px; height: 300px;
          }

          right{
            width:100%;
            margin:0 auto;
          }
    }


</style>
