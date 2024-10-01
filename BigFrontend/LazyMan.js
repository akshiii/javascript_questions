class ALazyMan{

	constructor(name, logFn){
		this.name = name;
		this.logFn = logFn;
		this.urgentTask = [];
		this.normalTask = [];

		this.greet();

		setTimeout(() => {
			this._start();
		}, 0);

		return this;
	}

	greet(item){
		this.normalTask.push(['greet']);
		return this;
	}

	eat(item){
		this.normalTask.push(['eat', item]);
		return this;
	}

	sleep(time){
		this.normalTask.push(['sleep', time]);
		return this;
	}

	sleepFirst(time){
		this.urgentTask.push(['sleepfirst', time]);
		return this;
	}

	_start(){
		if(this.urgentTask.length > 0){
			let task = this.urgentTask.shift();
			setTimeout(()=>{
				this.logFn(`Wake up after ${task[1]} second${task[1] > 1 ? 's': ''}`);
				this._start();
			},task[1]*1000);
		}
		else if(this.normalTask.length> 0){
			let task = this.normalTask.shift();
			switch(task[0]){
				case "greet":
					this.logFn("Hi, I'm", this.name);
					this._start();
					break;
				case "eat":
					this.logFn("Eat", task[1]);
					this._start();
					break;
				case "sleep":
					setTimeout(()=>{
						this.logFn(`Wake up after ${task[1]} second${task[1] > 1 ? 's': ''}`);
						this._start();
					},task[1]*1000);
					break;
			}
		}
		else
			return;
	}
}

function LazyMan(name, logFn){
	return new ALazyMan(name,logFn);
}
LazyMan('Jack', console.log).eat('banana').eat('apple').sleep(2).sleep(1).sleepFirst(4)