game.MiniMap = me.Entity.extend({
	init: function(x,y,settings){
		this._super(me.Entity, "init", [x,y,{
			image: "miniMap",
			width:447,
			height:169,
			spritewidth:"447",
			spriteheight:"169",
			getShape: function(){
				return (new me.Rect ()).toPolygon();
			}
		}]);
		this.floating = true;
	}
});