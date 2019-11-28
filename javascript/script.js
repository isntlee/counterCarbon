
    function calMeans() {
       
    var total   = parseFloat(0.8);
    var radio1  = parseFloat(document.getElementById("question-means-A").value);
    var radio2  = parseFloat(document.getElementById("question-means-B").value);
    var radio3  = parseFloat(document.getElementById("question-means-C").value);
    
    if (radio1.checked==true){
        meansSubtotal = radio1 + total;
        
    if (radio2.checked==true)
        meansSubtotal = radio2 + total;
        
    if (radio3.checked==true)
        meansSubtotal = radio3 + total;
     
     
        
        
    function calflying() {
       
    var total   = parseFloat(0.8);
    var radio4  = parseFloat(document.getElementById("question-flying-A").value);
    var radio5  = parseFloat(document.getElementById("question-flying-B").value);
    var radio6  = parseFloat(document.getElementById("question-flying-C").value);
    
    if (radio6.checked==true){
        flyingSubtotal = radio6 + total;
        
    if (radio7.checked==true)
        flyingsSubtotal = radio7 + total;
        
    if (radio8.checked==true)
        flyingSubtotal = radio8 + total;
        
        
    var mobilityTotal = flyingSubtotal + meansSubtotal
    
    
    
    
    
    
    const chart = Highcharts.chart('container', options)


    options.series[0].data.forEach((data, i) => {
      const el = document.createElement('input')
      el.addEventListener('change', updateColumn(i))
      document.body.appendChild(el)
    })
    
    
    function updateColumn (i) {
    	return function (e) {
        const value = Number(e.target.value) || null
        chart.series[0].data[i].update(value)	
      }
    }
    
    