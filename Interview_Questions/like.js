//https://leetcode.com/discuss/interview-question/1719943/Amazon-or-Phone-Screen-or-FEE-L5-or-Like-Button

window.onload = () =>{
	let heart = document.getElementById('heart');
	let likeText = document.getElementById('like_text');
	let likeComponent = document.getElementById('like_comp');
	let isClicked = false;

	likeComponent.onmouseover = (event) => {
		if(!isClicked){
			heart.style.backgroundColor = 'red';
			likeText.style.color = 'red';
			likeComponent.style.borderColor = 'red';
			heart.style.setProperty('--like-bg', 'red');
		}

	};

	likeComponent.onmouseout = (event) => {
		if(!isClicked){
			heart.style.backgroundColor = 'grey';
			likeText.style.color = 'grey';
			likeComponent.style.borderColor = 'grey';
			heart.style.setProperty('--like-bg', 'grey');
			likeComponent.style.backgroundColor = 'white';
		}

	};

	likeComponent.onclick = (e) =>{
		if(!isClicked){
			isClicked = true;
			heart.style.backgroundColor = 'white';
			likeText.style.color = 'white';
			likeComponent.style.borderColor = 'red';
			likeComponent.style.backgroundColor = 'red';
			heart.style.setProperty('--like-bg', 'white');
		}
		else{
			isClicked = false;
			heart.style.backgroundColor = 'grey';
			likeText.style.color = 'grey';
			likeComponent.style.borderColor = 'grey';
			heart.style.setProperty('--like-bg', 'grey');
			likeComponent.style.backgroundColor = 'white';
		}
	};
};