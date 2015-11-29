window.onload=function(){
var scene=document.getElementById('scene'); 
var el,hang;
//事件委托

// dom方式
//金字塔28个
document.onmousedown=function(e){
	e.preventDefault();
};
var fnjinzita1=function(){
	for(var i=0;i<7;i++){
		
		for(var j=0;j<i+1;j++){
			
			el=document.createElement('div');
			scene.appendChild(el);
			el.setAttribute('class','block');
			el.setAttribute('id',i+'-'+j);
			el.style.left=(6-i)*67+j*134+'px';
			el.style.top=i*40+'px';
		}

	}
};
fnjinzita1();
//左边24个
var fanpai=document.getElementById('fanpai'),odd,
    refan=document.getElementById('refan');
for(var i=0;i<24;i++){
	odd=document.createElement('div');
	odd.setAttribute('class','block');
	fanpai.appendChild(odd);

}
// var odd1=document.getElementsByClassName('block');
// console.log(odd);
//点击时的变化
var above=document.getElementById('above');
var below=document.getElementById('below');
var jishu=0;
// var kaiggg=true;
below.onclick=function(){
	
	// 
	// if(!kaiggg){return;}
	if(fanpai.children.length==0){
		// kaiggg=false;
		
		if(jishu>=3){return;}
		// fanpai.style.display='block';
		var cccc=refan.children.length;
		console.log(cccc);
		for(var i=0;i<cccc;i++){
			fanpai.appendChild(refan.lastElementChild);
			// refan.removeChild(refan.lastElementChild);
		}
		jishu++;
		
	}
}

var dic={1:'A',2:'2',3:'3',4:'4',5:'5',
		6:'6',7:'7',8:'8',9:'9',10:'10',
		11:'J',12:'Q',13:'K'
};


// 写一个函数生成一副乱序的扑克牌
// 
var hs=['hong','hei','fang','mei'];

var pai=function(){
	var poker=[];
	var zidian={};
	while(poker.length!==52){
	
		var rehs=hs[Math.floor(Math.random()*4)];
		var num=dic[1+Math.floor(Math.random()*13)];
		if(!zidian[rehs+num]){
			poker.push({huase:rehs,number:num});
			zidian[rehs+num]=true;
		}
	

	}
	return poker;
	// console.table(poker);
};

var poker=pai();

var els=document.getElementsByClassName('block');
// console.table(els);
for(var i=0;i<52;i++){

	els[i].innerHTML=poker[i].number;
	// if(poker[i].huase=='hong'){
		els[i].style.backgroundImage='url(./images/'+poker[i].number+'_'+poker[i].huase+'.png)';
	// }
	// if(poker[i].huase=='hei'){
	// 	els[i].style.backgroundImage='url(./images/hongtao.jpg)'
	// }
	// if(poker[i].huase=='fang'){
	// 	els[i].style.backgroundImage='url(./images/hongtao.jpg)'
	// }
	// if(poker[i].huase=='mei'){
	// 	els[i].style.backgroundImage='url(./images/hongtao.jpg)'
	// }
}
var previous=null;
var diyi,dier;

above.onclick=function(){
	// if(jishu>=3){return;}
	if(fanpai.lastElementChild==null){return;}
	diyi=0,dier=0, previous=null;
	// refan.style.display='block';
	refan.appendChild(fanpai.lastElementChild);
	// fanpai.removeChild(fanpai.lastElementChild);
	// if(fanpai.children.length==0){
	// 	// fanpai.style.display='none';
	// }
	
};
scene.onclick=function(e){
	var el=e.target;
	if(el==this){
		return;
	}
	if(el==above||el==below||el==fanpai||el==refan){return;}
	// if(el==fanpai){
	// 	console.log(fanpai);
	// 	// e.target.style.border='1px solid red';
	// 	return;
	// }
	if(el.hasAttribute('id')){
		var id=el.getAttribute('id');
		// console.log(id);
		var x=Number(id.split('-')[0]);
		// console.log(x);
		var y=Number(id.split('-')[1]);
		var nx=document.getElementById((x+1)+'-'+(y+1));//z怎么获取id，document.getElementById();
		var ny=document.getElementById((x+1)+'-'+(y));
		if(nx||ny){
		return;
		}
	}
	
	

	if(previous!==null){
		diyi=previous.innerHTML;//前一次
		var qqq=previous;
		console.log(qqq);
		if(diyi=='A'){diyi=1;}
		else if(diyi=='J'){diyi=11;}
		else if(diyi=='Q'){diyi=12;}
		else if(diyi=='K'){diyi=0;previous=null;
			if(qqq.parentElement.getAttribute('id')=='scene'){
			scene.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='fanpai'){
				fanpai.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='refan'){
				refan.removeChild(qqq);
			}

		}
		else{
			diyi=Number(diyi);
		}
		
		console.log(diyi);
		previous.style.border='none';

	}
	
	el.style.border='1px solid red';
	// diyi=el.innerHTML;
	
	previous=el;
		// console.log(previous);
	dier=previous.innerHTML;
	var ppp=previous;
	if(dier=='A'){dier=1;}
	else if(dier=='J'){dier=11;}
	else if(dier=='Q'){dier=12;}
	else if(dier=='K'){
		dier=0;previous=null;
		if(ppp.parentElement.getAttribute('id')=='scene'){
			scene.removeChild(ppp);
		}
		else if(ppp.parentElement.getAttribute('id')=='fanpai'){
			fanpai.removeChild(ppp);
		}
		else if(ppp.parentElement.getAttribute('id')=='refan'){
			refan.removeChild(ppp);
		}
		

	}
	else{
		dier=Number(dier);
	}

	console.log(dier);
	if(diyi+dier==13){
		diyi=0;dier=0;previous=null;
		if(ppp.parentElement.getAttribute('id')=='scene'){
			scene.removeChild(ppp);
			if(qqq.parentElement.getAttribute('id')=='scene'){
				scene.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='fanpai'){
				fanpai.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='refan'){
				refan.removeChild(qqq);
			}
			
			// scene.removeChild(qqq);
		}
		else if(ppp.parentElement.getAttribute('id')=='fanpai'){
			fanpai.removeChild(ppp);
			if(qqq.parentElement.getAttribute('id')=='scene'){
				scene.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='fanpai'){
				fanpai.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='refan'){
				refan.removeChild(qqq);
			}

		}
		else if(ppp.parentElement.getAttribute('id')=='refan'){
			refan.removeChild(ppp);
			if(qqq.parentElement.getAttribute('id')=='scene'){
				scene.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='fanpai'){
				fanpai.removeChild(qqq);
			}
			else if(qqq.parentElement.getAttribute('id')=='refan'){
				refan.removeChild(qqq);
			}
		}









			// if(previous.parentElement.getAttribute('id')=='fanpai')

		// else{
		// 		if(ppp.parentElement.getAttribute('id')=='fanpai'){
		// 			fanpai.removeChild(ppp);
		// 		}
		// 		else if(ppp.parentElement.getAttribute('id')=='refan'){
		// 			refan.removeChild(ppp);
		// 		}
			
			
		// 	// scene.removeChild(qqq);
		// }
		//  if(qqq.parentElement.getAttribute('id')=='fanpai')
		//  {
		// 	// fanpai.removeChild(previous);
		// 	// diyi=0;
		// 	// if(previous.parentElement.getAttribute('id')){}
		// 	fanpai.removeChild(qqq);
		// }
		//  // if(qqq.parentElement.getAttribute('id')=='scene')
		//  else{
		// 	// fanpai.removeChild(previous);
		// 	// diyi=0;
		// 	// if(previous.parentElement.getAttribute('id')){}
		// 	scene.removeChild(qqq);
		// }
			
	}
	
	
}


// for(var i=2;i<24;i++){

// 	els[i].innerHTML=poker[i+28].number;
// }

//红心大战

};//最后