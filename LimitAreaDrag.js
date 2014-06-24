// LimitAreaDrag - 限制区域拖拽
function LimitAreaDrag(id)
{
	Drag.call(this,id);	//继承属性
	this.parentDiv = this.oDiv.parentElement;
}
for(var i in Drag.prototype){
	LimitAreaDrag.prototype[i] = Drag.prototype[i];
}

LimitAreaDrag.prototype.fnMove = function(ev){
	var oEvent = ev || event;
	
	var oLeft = oEvent.clientX - this.disX;
	var oTop = oEvent.clientY - this.disY;
	var maxLeft = this.parentDiv.offsetWidth - this.oDiv.offsetWidth;
	var maxTop = this.parentDiv.offsetHeight - this.oDiv.offsetHeight;
	
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