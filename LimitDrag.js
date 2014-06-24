// LimitDrag - 限制区域拖拽
function LimitDrag(id)
{
	Drag.call(this,id);	//继承属性
}
for(var i in Drag.prototype){
	LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function(ev){
	var oEvent = ev || event;
	
	var oLeft = oEvent.clientX - this.disX;
	var oTop = oEvent.clientY - this.disY;
	var maxLeft = document.documentElement.clientWidth - this.oDiv.offsetWidth;
	var maxTop = document.documentElement.clientHeight - this.oDiv.offsetHeight;
	
	if(oLeft < 0 ){
		oLeft = 0;
	}else if(oLeft > maxLeft){
		oLeft = maxLeft;
	}
	
	if(oTop < 0){
		oTop = 0;
	}else if(oTop > maxTop){
		oTop = maxTop;
	}
	
	this.oDiv.style.left = oLeft + "px";
	this.oDiv.style.top = oTop + "px";
};