<template>
	<div class="container">
		<h4>Pendientes</h4>
		<b-table striped hover :fields="fields" :items="tasks">
			<template #cell(index)="data">
		        {{ data.index + 1 }}
		    </template>
		    <template #cell(text)="data">
		        {{ data.value }}
		    </template>
		    <template #cell(date)="data">
		        {{ data.value }}
		    </template>
		    <template #cell(finish)="data">
		        {{ data.value }}
		    </template>
		    <template #cell(borrar)="data">
		        <button class="btn-sm btn-danger btn" @click="deleteTask(data.index)">Delete</button>
		    </template>
		    <template #cell(terminar)="data">
		        <button class="btn-sm btn-success btn" v-bind:disabled="isFinish(data.index) " @click="finishTask(data.index)">Finish</button>
		    </template>
		</b-table>
		<br>
		<h4>Finalizadas</h4>
		<b-table striped hover :items="finish">
			
		</b-table>
	</div>
</template>
<script type="text/javascript">
	import {mapState, mapMutations} from 'vuex'

	export default {
		name: 'Listar',
		data() {
	      return {
	        fields: [
	          // A virtual column that doesn't exist in items
	          'index',
	          { key: 'text', label: 'Tarea' },
	          { key: 'date', label: 'Fecha' },
	          { key: 'finish', label: 'Terminado' },
	          'borrar',
	          'terminar'
	        ],
	        
	      }
	    },
		computed: {
			...mapState(['tasks', 'finish']),
		},
		methods: {
			isFinish(i){
				return this.tasks[i].finish
			},
			...mapMutations(['setTask', 'finishTask', 'deleteTask'])
		}
	}
</script>