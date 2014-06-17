/**
 *
 * a basic Tiled loader 
 */

var game = {

    /**
     * initlization
     */
    onload: function() {

        if (!me.video.init('jsapp', 800, 480)) {
            alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
            return;
        }

        // set all ressources to be loaded
        me.loader.onload = this.loaded.bind(this);

        // set all ressources to be loaded
        me.loader.preload(global_resources);

        // load everything & display a loading screen
        me.state.change(me.state.LOADING);
    },


    /**
     * callback when everything is loaded
     */
    loaded: function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // enable the keyboard (to navigate in the map)
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP,    "up");
        me.input.bindKey(me.input.KEY.DOWN,  "down");
        me.input.bindKey(me.input.KEY.ENTER, "enter");

        // start the game
        me.state.change(me.state.PLAY);
    },

    /**
     *
     * change the current level
     */
    changelevel: function(level) {
        // load the new level
        me.levelDirector.loadLevel(level);
    }

}; // game


//bootstrap :)
window.onReady(function() {
    game.onload();
});
