function videoLinkChange(inputV){
	if(document.getElementById('inputLinkIframe')){
		console.log(document.getElementById('inputLinkIframe'));
		document.getElementById('inputLinkIframe').remove();
	}
		let iframeDivE = document.createElement('div');
		iframeDivE.setAttribute('id', 'inputLinkIframe');
		iframeDivE.style.marginBottom = '10px';
		iframeDivE.style.paddingLeft = '15px';
		iframeDivE.style.paddingRight = '15px';
		iframeDivE.style.width = '100%';
		
		let linkDiv = document.getElementById('linkDiv');
		let iframeE = document.createElement('iframe');
		iframeE.setAttribute('src', 'https://www.youtube.com/embed/' +inputV);
		iframeE.style.width = '100%';

		let pE = document.createElement('p');
		pE.innerHTML = 'Video example';




		linkDiv.append(iframeDivE);
		iframeDivE.append(pE);
		iframeDivE.append(iframeE);


}