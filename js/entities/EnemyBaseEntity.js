game.EnemyBaseEntity = me.Entity.extend({
	init : function(x, y, settings){
		this._super(me.Entity, 'init', [x,y,{
			image: "tower",
			width: 100,
			height: 100,
			spritewidth : "100",
			spriteheight: "100",
	getShape: function(){
			return (new me.Rect(0, 0, 100 ,70)).toPolygon();
			}

		}]);
		this.broken = false;
		this.health = game.data.enemyBaseHealth;
		this.alwaysUpdate = true;
		this.body.onColission = this.onColission.bind(this);

		this.type = "EnemyBaseEntity";

		this.renderable.addAnimation("idle", [0]);
		this.renderable.addAnimation("broken");
		this.renderable.setCurrentAnimation("broken");
	
	},

	update:function(delta){
		if(this.health<=2){
			this.broken = true;
			game.data.win = true;
			this.renderable.setCurrentAnimation("broken");
		}
		this.body.update(delta);

		this._super(me.Entity, "update", [delta]);
		return true;
	},


	onColission: function (){
		
	},
	loseHealth: function(){
	this.health--;
	}

});