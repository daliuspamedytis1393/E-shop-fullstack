<template>
    <div id="nav" class="nav">
    
        <router-link to="/" class="brand">Pieva
            <span>.</span> 
        </router-link>
    
        <nav>
    
            <router-link :to="{ name: 'home' }">Pagrindinis</router-link> 
    
            <router-link :to="{ name: 'about' }">Apie mus</router-link> 

            <router-link :to="{ name: 'products' }">Užkandžiai</router-link> 
            <BaseIconButton
				:icon="['fas', 'user']"
			/>
            <BaseIconButton
				:icon="['fas', 'shopping-cart']"			
			/>
    
        </nav>
    
    </div>
</template>

<script>
import BaseIconButton from '@/components/BaseIconButton'
export default {
    components: {
        BaseIconButton
    }
}
</script>

<style scoped>
.nav {
    font-family: "Lato", "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    
    display: flex;
    letter-spacing: 0.5mm;
    font-size: 16px;
    background-color: white;
    color: black;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.5);
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
    animation-name: slideDown;
    opacity: 0.5!important;
    
}

.nav>.brand {
    
    font-family: 'Indie Flower', cursive;
    font-size: 2.8em;
    color: black;
    text-decoration: none;
    
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
    color: green;
    border-bottom: solid 2px white;
}
</style>