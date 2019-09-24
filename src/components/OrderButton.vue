<template>
        <a class="btn" data-js="btn">
    
            <div class="btn-inr">
    
                <p class="txt-a">Užsisakyti</p>
    
                <p class="txt-b">Dabar !</p>
    
            </div>
    
        </a>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
.btn {
    position: relative;
    bottom: -50%;
    transform: translateY(220%);
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html,
body {
    position: relative;
    font-family: "Lato", "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    font-weight: 300;
    text-align: center;
    overflow: hidden;
    background: url(http://magdeleine.co/wp-content/uploads/2015/01/tongariro-national-park-493289-1400x933.jpg) no-repeat center center;
    background-size: cover;
}

body:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2980b9 0%, #9B59B6 100%);
    background-size: 100% auto;
    opacity: 0;
    transition: all 0.65s ease-in-out;
}

.blur:after {
    opacity: 0.85;
}

.btn {
    position: relative;
    display: inline-block;
    border: 6px solid #ed7669;
    transition: all 0.1s ease-in-out;
    z-index: 99;
}

.btn.active {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.btn:focus,
.btn:hover {
    border: 12px solid #e74c3c;
}

.btn,
.btn>span {
    cursor: pointer;
}

.btn>div {
    min-width: 225px;
}

.btn-inr {
    display: inline-block;
    color: white;
    font-weight: 100;
    font-size: 1.1em;
    line-height: 1;
    text-transform: uppercase;
    background: #ed7669;
    padding: 1em 2em;
    margin: 6px;
    transition: all 0.1s ease-in-out;
}

.btn-inr:focus,
.btn-inr:hover {
    background: #e74c3c;
    padding: 6em 8em;
    margin: 0;
}

.txt-a {
    display: inline;
}

.txt-b {
    display: none;
}

.btn:focus .btn-inr,
.btn:hover .btn-inr {
    background: #e74c3c;
    padding: 1em 2em;
    margin: 0;
}

.btn:focus .txt-a,
.btn:hover .txt-a {
    display: none;
}

.btn:focus .txt-b,
.btn:hover .txt-b {
    display: inline;
}
</style>