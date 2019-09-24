<template>
    <main class="default-layout">
		<NavBar />
		    <div class="container">
			    <slot />
		    </div>
		<NavBar />
	</main>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
	name: 'DefaultLayout',
	components: {
		NavBar
	}
}
</script>