game.PlayerEntity = me.Entity.extend({
	init: function(x, y, settings){
		this.setSuper();
		this.setPlayerTimers();
		this.setAttributes();

		this.type = "PlayerEntity";
		this.setFlags();
			me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
			this.addAnimation();
	},

	setSuper: function(){
		this._super(me.Entity,'init', [x, y, {
			image: "player",
			width:64,
			height:64,
			spritewidth: "64",
			spriteheight: "64",
			getShape: function(){
				return(new me.Rect(0,0, 64, 64)).toPolygon();
			}
		}]);
	},

	setPlayerTimers: function(){
		this.now = new Date().getTime();
		this.lastHit = this.now;
		this.lastAttack = new Date().getTime();
	},

	setAttributes: function(){
	this.health = game.data.playerHealth;
	this.body.setVelocity(game.data.playerMoveSpeed, 20);
	this.attack = game.data.playerAttack;

	},
	setFlags: function(){
	this.facing = "right";
	this.dead = false;
	this.attacking = false;
	},

	addAnimation:function(){
			this.renderable.addAnimation("idle",[78]);
			this.renderable.addAnimation("walk", [117,118,119,120,121,122,123,124]),80;
			this.renderable.addAnimation("attack", [65,66,67,68,69,70,71,72],80);
			this.renderable.setCurrentAnimation("idle");

	},

	update:function(delta){
		this.now = new Date().getTime();
		this.dead = checkIfDead();
		this.checkKeyPressesAndMove();
		this.setAnimation();

			me.collision.check(this, true, this.collideHandler.bind(this), true);
			this.body.update(delta);
			this._super(me.Entity, "update", [delta]);
			return true;
		},
		checkifDead: function(){
			if (this.health <= 0){
				return true;
			}
			return false;
		},

		checkKeyPressesAndMove: function(){
		if(me.input.isKeyPressed("right")){
			this.moveRight();
			else if(me.input.isKeyPressed("left")){
				this.moveLeft();
			}

			else{
				this.body.vel.x = 0;
			}

			if(me.input.isKeyPressed("jump") && !
			this.jump();
			},
			this.attacking = me.input.isKeyPressed("attack");
		},

			moveRight: function(){
//makes it so that when the right key is pressed it makes the player go right
				this.body.vel.x += this.body.accel.x * me.timer.tick;
					this.facing = "right";
					this.flipX(true); 
			},

			moveLeft: function(){
			},

			jump: function(){
			this.jumping && !this.falling){
			this.body.jumping = true;
			this.body.vel.y -= this.body.accel.y * me.timer.tick;
			},

			setAnimation: function(){
			if(this.attacking){
				if (!this.renderable.isCurrentAnimation("attack")){
					this.renderable.setCurrentAnimation("attack","idle");
					this.renderable.setAnimationFrame();
				}
			}
			else if(!this.body.vel.x !== 0 && !this.renderable.isCurrentAnimation("attack")){
			if(!this.renderable.isCurrentAnimation("walk")){
				this.renderable.setCurrentAnimation("walk");
			}
		}

		else if(!this.renderable.isCurrentAnimation("attack")){
				this.renderable.setCurrentAnimation("idle");
			}
			},

			loseHealth: function(damage){
			this.health = this.health - damage;
		},

	collideHandler: function(response){
		if(response.b.type=== 'EnemyBaseEntity'){
			var ydif = this.pos.y - response.b.pos.y;
			var xdif = this.pos.x - response.b.pos.x;
			if(ydif<-40 && xdif<70 && xdif>-35){
				this.body.falling = false;
				this.body.vel.y = -1;
			}

			else if(xdif>-35 && this.facing==="right" && (xdif<0)) {
				this.body.vel.x = 0;
				this.pos.x = this.pos.x -1;
			}else if(xdif<70 && this.facing==="left" && xdif>0){
				this.body.vel.x = 0;
				this.pos.x = this.pos.x +1;
			}

			if(this.renderable.isCurrentAnimation("attack")&& this.now-this.lastHit >=game.data.playerAttackTimer){
				this.lastHit = this.now;
				if(response.b.health <= game.data.playerAttack){
					game.data.gold += 1;

				}
				response.b.loseHealth(game.data.playerAttack);
			}
		}else if(response.b.type==='EnemyCreep'){
			if(this.renderable.isCurrentAnimation("attack")){
				response.b.loseHealth(game.data.playerAttack);
		}
	}
}
});
