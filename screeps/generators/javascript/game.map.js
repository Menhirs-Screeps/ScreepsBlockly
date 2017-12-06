
'use strict';

goog.provide('Blockly.JavaScript.Screeps.Game.Map');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['game_map_describeexits'] = function(block) {
    var roomName = Blockly.JavaScript.valueToCode(block, 'roomName', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( roomName ) {
        code = 'Game.map.describeExits( ' + roomName + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_findexit'] = function(block) {
    var fromRoom = Blockly.JavaScript.valueToCode(block, 'fromRoom', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var toRoom = Blockly.JavaScript.valueToCode(block, 'toRoom', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var opts = Blockly.JavaScript.valueToCode(block, 'opts', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( fromRoom && toRoom ) {
        code = 'Game.map.findExit( ' + fromRoom + ', ' + toRoom;
        if ( opts ) code = code + ', ' + opts;
        code = code + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_findroute'] = function(block) {
    var fromRoom = Blockly.JavaScript.valueToCode(block, 'fromRoom', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var toRoom = Blockly.JavaScript.valueToCode(block, 'toRoom', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var callback = Blockly.JavaScript.valueToCode(block, 'callback', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( fromRoom && toRoom ) {
        code = 'Game.map.findExit( ' + fromRoom + ', ' + toRoom;
        if ( callback ) code = code + ', { routeCallback: ' + callback + ' }';
        code = code + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_getroomlineardistance'] = function(block) {
    var roomName1 = Blockly.JavaScript.valueToCode(block, 'roomName1', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var roomName2 = Blockly.JavaScript.valueToCode(block, 'roomName2', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var continuous = Blockly.JavaScript.valueToCode(block, 'continuous', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( roomName1 && roomName2 ) {
        code = 'Game.map.getRoomLinearDistance( ' + roomName1 + ', ' + roomName2;
        if ( continuous ) code = code + ', ' + continuous;
        code = code + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_getterrainat'] = function(block) {
    var pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var roomName = Blockly.JavaScript.valueToCode(block, 'ROOMNAME', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( pos ) {
        code = 'Game.map.getTerrainAt( ' + pos + ' )';
    }
    if ( x && y && roomName ) {
        code = 'Game.map.getTerrainAt( ' + x + ', ' + y + ', ' + roomName + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_getworldsize'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Game.map.getWorldSize()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map_isroomavailable'] = function(block) {
    var roomName = Blockly.JavaScript.valueToCode(block, 'ROOMNAME', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( roomName ) {
        code = 'Game.map.isRoomAvailable( ' + roomName + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
