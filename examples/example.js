const Launchpad = require( '../launchpad-mini' ),
    pad = new Launchpad();

pad.connect().then( () => {     // Auto-detect Launchpad
    pad.reset( 2 );             // Make Launchpad glow yellow
    pad.on( 'key', k => {
        // Make button red while pressed, green after pressing
        // console.log(k)
        pad.col( k.pressed ? pad.red : pad.green, k );
    } );
} );