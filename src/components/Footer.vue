<template>
  <div class="footer">
      <p>here will be footer</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    font-family: 'PT Sans', sans-serif;
    padding: 30px 0;
	width: 100%;
    text-align: center;
    background-color: white;
	font-size: 18px;
    color: rgba(black, .87);
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
    animation-name: slideUp;
}

span{
	animation: blink 2s infinite;
}
span:nth-child(2){
	animation: blink 2.1s infinite;	
}

.nav .nav-item {
    box-sizing: border-box;
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
}

.nav .nav-item.router-link-exact-active {
    color: white;
    border-bottom: solid 2px white;
}
</style>