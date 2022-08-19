<template>
	<div class="p-5 container my-2">
		<h3>Nueva Tarea</h3>
	    <b-form-group id="input-group-1" label="Escriber la tarea:" label-for="task" >
		    <b-form-input id="task" v-model="text" type="text" required></b-form-input>
	    </b-form-group>
	    <b-button @click="onSubmit" v-bind:disabled="checkInput" variant="primary">Submit</b-button>
	</div>
</template>
<script type="text/javascript">
	import {mapMutations} from 'vuex'

	export default {
		name: 'Formulario',
		data() {
	      return {
	          text: ''
	      }
	    },
	    methods: {
	      onSubmit(event) {
	        this.newTask({
	          text: this.text.trim(),
	          date: new Date().toLocaleDateString(),
	          finish: false
	        });
	        this.text = ''
	      },
	      
	      ...mapMutations(['newTask']),
	    },
	    computed: {
			checkInput () {
	    		return (this.text.trim().length == 0) ? true : false;;
	    	}
	    }
	}
</script>