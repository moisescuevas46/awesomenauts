game.PlayerBaseEntity = me.Entity.extend({
	init : function(x, y, settings){
		this._super(me.Entity, 'init', [x,y,{
			image: "tower",
			width: 100,
			height: 100,
			spritewidth : "100",
			spriteheight: "100",

	getShape: function(){
				return (new me.Rect(0, 0, 100,70)).toPolygon();
				}

		}]);

		this.broken = false;
		this.health = game.data.playerBaseHealth;
		this.alwaysUpdate = true;
		this.body.onColission = this.onColission.bind(this);

		this.type = "PlayerBase";
		this.renderable.addAnimation("idle",[0]);
		this.renderable.setCurrentAnimation;

		this.renderable.addAnimation("idle", [0]);
		this.renderable.addAnimation("broken");
		this.renderable.setCurrentAnimation("idle");
		//adds animations and sets animation

	},


	update:function(delta){
		if(this.health<=0){
			this.broken = true;
			this.renderable.setCurrentAnimation("broken");
		}
		this.body.update(delta);
		this._super(me.Entity, "update", [delta]);
		return true;
	},

	loseHealth: function(damage){
		this.health = this.health - damage;
	},

	onColission: function (delta){

	}

});