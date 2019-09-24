<template>
	<button
		class="app-icon-button"
		@click="$emit('click', $event)"
	>
		<FontAwesomeIcon
			:icon="icon"
			class="app-icon-button__icon"
		/>
		<small
			v-if="badge.type === 'text' && badge.value"
			class="app-icon-button__badge"
		>
			{{ badge.value }}
		</small>
	</button>
</template>

<script>
export default {
	name: 'BaseIconButton',
	props: {
		badge: {
			type: Object,
			default: () => ({ type: 'text', value: 0 })
		},
		icon: {
			required: true,
			type: Array,
			default: () => []
		}
	}
}
</script>
<style lang="scss">
	.app-icon-button {

		-webkit-appearance: none;
		position: relative;
		border: 0;
		padding: 0;
		background-color: transparent;
		width: 36px;
		height: 36px;
		margin: 0 7.5px;
		outline: 0;

		&__icon {
			font-size: 23px;
			color: white;
		}

		&__badge {
			position: absolute;
			bottom: 5px;
			right: 0px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			background-color: hsl(348, 100%, 61%);
			height: 17px;
			width: 17px;
			border-radius: 100%;
			font-size: 10px;
			animation: BadgePopIn .2s cubic-bezier(0.4, 0.0, 0.2, 1);
		}

		&:hover {
			cursor: pointer;
			opacity: .7;
		}
	}

	@keyframes BadgePopIn {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to	{
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
