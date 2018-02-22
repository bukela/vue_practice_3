Vue.component('greeting',{
	template: '<p class="reusable">{{ name }} says helloo from reusable component <button v-on:click="changeName">Change name</button></p>',
	data: function() {
		return {
			name: 'Loodie'
		}
	},
	methods: {
		changeName: function() {
			this.name = 'Moodie changed';
		}
	}
});
var one = new Vue({
  	el: '#app-one',
  	data: {
		title: 'vue app one',
	},
	methods: {
		readRefs: function() {
			console.log(this.$refs);
		}
	},
	computed: {
		greet: function() {
			return 'hello from app one';
		}
	}
});

var two = new Vue({
	el: '#app-two',
	data: {
		title: 'vue app two',
  },
  methods: {
	changeTitle: function() {
		one.title = 'Title changed';
	}
  },
  computed: {
	greet: function() {
		return 'hello from app two';
	}
  }
});

// two.title = 'outside change';  //radi i van vue intance
