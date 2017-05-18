window.onload = function(){
	document.querySelector('.boton').addEventListener('click', function(){
		document.querySelector('.container').classList.toogle('invisible');
			this.classList.toogle('mif-chevron-left');
	});
}