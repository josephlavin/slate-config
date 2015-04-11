/**
 * Right/Left Edge Position Placement
 * Cycle through 3 different sizes
 *
 * @param win window object
 * @param lastPos current tracked position
 * @param direction right|left
 * @returns {number} position to track
 * @param screen optional
 */
var pushToVerticalEdge = function(win, lastPos, direction, screen){
    if( screen == null ) {
        screen = slate.screen();
    }

    var style = "bar-resize:screenSizeX*";
    switch (lastPos) {
        case 2:
            style = style + ".66";
            lastPos = 3;
            break;

        case 1:
            style = style + ".34";
            lastPos = 2;
            break;

        default:
            style = style + ".5";
            lastPos = 1;
            break;
    }

    win.doOperation(slate.operation("push", {
        "direction" : direction,
        "style" : style,
        "screen" : screen
    }));

    return lastPos;
};

/**
 * Top & Bottom Position Placement
 * Cycle through 2 sizes
 *
 * @param win window object
 * @param lastPos current tracked position
 * @param direction top|bottom
 * @returns {number}  position to track
 */
var pushToHorizontalEdge = function(win, lastPos, direction){
    switch (lastPos) {
        case 1:
            var y = "0";
            if(direction == 'bottom') {
                y = "screenOriginY+(screenSizeY/2)";
            }

            win.doOperation(slate.operation("move", {
                "x": "screenOriginX+(screenSizeX*.34)",
                "y": y,
                "width" : "screenSizeX*.32",
                "height": "screenSizeY*.5"
            }));
            return 2;
            break;

        default:
            win.doOperation(slate.operation("push", {
                "direction" : direction,
                "style" : "bar-resize:screenSizeY*.5"
            }));
            return 1;
            break;
    }
};

var leftPos = 0;
slate.bind("pad4:cmd", function(win) {
    leftPos = pushToVerticalEdge(win, leftPos, 'left');
});
slate.bind("left:cmd,alt", function(win) {
    leftPos = pushToVerticalEdge(win, leftPos, 'left');
});

var rightPos = 0;
slate.bind("pad6:cmd", function(win) {
    rightPos = pushToVerticalEdge(win, rightPos, 'right');
});
slate.bind("right:cmd,alt", function(win) {
    rightPos = pushToVerticalEdge(win, rightPos, 'right');
});

var topPos = 0;
slate.bind("pad8:cmd", function(win) {
    topPos = pushToHorizontalEdge(win, topPos, 'top');
});
slate.bind("up:cmd,alt", function(win) {
    topPos = pushToHorizontalEdge(win, topPos, 'top');
});

var bottomPos = 0;
slate.bind("pad2:cmd", function(win) {
    bottomPos = pushToHorizontalEdge(win, bottomPos, 'bottom');
});
slate.bind("down:cmd,alt", function(win) {
    bottomPos = pushToHorizontalEdge(win, bottomPos, 'bottom');
});

/**
 * Push to Corner
 * Cycle through 3 sizes
 *
 * @param win window object
 * @param lastPos current tracked position
 * @param direction top-left|top-right|bottom-left|bottom-right
 * @returns {number} position to track
 */
var pushToCorner = function(win, lastPos, direction){
    var width = '';
    switch (lastPos) {
        case 2:
            width = "screenSizeX*.66";
            lastPos = 3;
            break;

        case 1:
            width = "screenSizeX*.34";
            lastPos = 2;
            break;

        default:
            width = "screenSizeX*.5";
            lastPos = 1;
            break;
    }

    win.doOperation(slate.operation("corner", {
        "direction" : direction,
        "width" : width,
        "height" : "screenSizeY*.5"
    }));

    return lastPos;
};

var cornerTopLeft = 0;
slate.bind("pad7:cmd", function(win) {
    cornerTopLeft = pushToCorner(win, cornerTopLeft, 'top-left');
});
slate.bind("left:cmd,alt,shift", function(win) {
    cornerTopLeft = pushToCorner(win, cornerTopLeft, 'top-left');
});

var cornerTopRight = 0;
slate.bind("pad9:cmd", function(win) {
    cornerTopRight = pushToCorner(win, cornerTopRight, 'top-right');
});
slate.bind("right:cmd,alt,shift", function(win) {
    cornerTopRight = pushToCorner(win, cornerTopRight, 'top-right');
});

var cornerBottomLeft = 0;
slate.bind("pad1:cmd", function(win) {
    cornerBottomLeft = pushToCorner(win, cornerBottomLeft, 'bottom-left');
});
slate.bind("up:cmd,alt,shift", function(win) {
    cornerBottomLeft = pushToCorner(win, cornerBottomLeft, 'bottom-left');
});

var cornerBottomRight = 0;
slate.bind("pad3:cmd", function(win) {
    cornerBottomRight = pushToCorner(win, cornerBottomRight, 'bottom-right');
});
slate.bind("down:cmd,alt,shift", function(win) {
    cornerBottomRight = pushToCorner(win, cornerBottomRight, 'bottom-right');
});

/**
 * Full Screen
 */
var fullScreen = function(win){
    win.doOperation(slate.operation("corner", {
        "direction" : 'top-left',
        "width" : "screenSizeX",
        "height" : "screenSizeY"
    }));
};

slate.bind("pad5:cmd", function(win) {
    fullScreen(win);
});
slate.bind("f:cmd,alt", function(win) {
    fullScreen(win);
});

/**
 * Move to right most or left most monitor based on direction
 *
 * @param direction right|left
 * @param win window object
 **/
var moveToScreen = function(direction, win) {
    // build an array of screens
    var screens = new Array();
    slate.eachScreen(function(screenObject) {
        screens.push(screenObject);
    });

    // figure out the target screen based off of direction
    if(direction == 'right') {
        // assume right is the last screen in screens array
        // use pushToVerticalEdge to continue cycle
        rightPos = pushToVerticalEdge(win, rightPos, 'right', screens.pop());
    }
    else if(direction == 'left') {
        // assume left is the first screen in screens array
        leftPos = pushToVerticalEdge(win, leftPos, 'left', screens.shift());
    }
};

slate.bind("pad6:cmd,shift", function(win) {
    moveToScreen('right', win);
});

slate.bind("right:cmd,alt,ctrl", function(win) {
    moveToScreen('right', win);
});

slate.bind("pad4:cmd,shift", function(win) {
    moveToScreen('left', win);
});

slate.bind("left:cmd,alt,ctrl", function(win) {
    moveToScreen('left', win);
});