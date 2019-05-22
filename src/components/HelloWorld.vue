<template>
  <div class="hello">
		{{ datas }}
		</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
			datas:count
    }
  },
	methods:{
		
	},
	computed:{
		count(){
			return this.$store.state.datas
		}
	},
	mounted(){}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
