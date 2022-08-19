<template>
	<div class="container">
		<h4>Finalizadas</h4>
		<b-table striped hover :items="finish">
			
		</b-table>
	</div>
</template>
<script type="text/javascript">
	import {mapState, mapMutations} from 'vuex'

	export default {
		name: 'Listar',
		computed: {
			...mapState(['finish']),
		}
	}
</script>