document.getElementById('bam_input').addEventListener('input', function(e){
	let bam = e.target.value;
	document.getElementById('usd_output').innerHTML = bam*0.5969;
	document.getElementById('eur_output').innerHTML = bam*0.5113;	
	document.getElementById('hrk_output').innerHTML = bam*3.8618;	
	document.getElementById('rsd_output').innerHTML = bam*60.6399;
});