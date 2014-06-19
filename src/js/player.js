game.PlayerEntity = me.AnimationSheet.extend(
{
    init:function (x, y) {
        this._super(me.AnimationSheet, 'init', [x, y , { image: me.loader.getImage("firefox"), spritewidth: 32, spriteheight: 32}]);

        this.addAnimation("idle", [56, 57, 58, 59]);
        this.setCurrentAnimation("idle");
    }
});
