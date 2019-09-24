<template>
    <main class="default-layout">
		
		    <div class="container">
                <NavBar />
			    <slot />
		    </div>
		<Footer />
	</main>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
	name: 'DefaultLayout',
	components: {
        NavBar,
        Footer
	}
}
</script>
<style>
    .container{
        min-height:100vh;
        background-position:center;
        background-size: cover;
        background-attachment: fixed;
        background-image: url('https://photos.mandarinoriental.com/is/image/MandarinOriental/tokyo-event-catering-16-1?wid=2880&hei=400&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72&fit=wrap');
    }
</style>