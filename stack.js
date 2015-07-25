stackCommponent = {
	el: document.getElementById('stack'),

	push: function() {
		var elem = document.getElementById("inputFieldStackComponent");
		var row = '<p class="stackRow">' + elem.value + '</p>';

		this.stackItems.unshift(row);
		this.el.innerHTML = this.header + this.stackItems.join('');
	},

	pop: function() {
		this.stackItems.shift();
		this.el.innerHTML = this.header + this.stackItems.join('');
	},

	boot: function() {
		if(!this.el) {
			console.log("stackCommponent can't find wrapper div.");
			return;
		}
		var btnNamePush = this.el.dataset.btnnamepush || "Push";
		var btnNamePop = this.el.dataset.btnnamepop || "Pop";
		var inputText = this.el.dataset.inputtext || "Input value";

		var input = '<input type="text" id="inputFieldStackComponent" value=' + '"' + inputText 
		+'" onblur="if (this.value == ' + "'') {this.value = " + "'" 
		+ inputText + "';}" + '" onfocus="if (this.value == ' + "'" + inputText 
		+ "') {this.value = '';}" + '"/>';

		var buttonPush = '<input type="button" class="btn btnPush" value="' 
		+ btnNamePush + '" onClick="stackCommponent.push();">';
		var buttonPop = '<input type="button" class="btn btnPop" value="' 
		+ btnNamePop + '" onClick="stackCommponent.pop();">';

		this.header = input + '\n' + buttonPush + buttonPop;
		this.el.innerHTML = this.header;
		this.stackItems = [];
	}
}

stackCommponent.boot();
