
'use strict';

goog.provide('Blockly.JavaScript.Screeps.RoomPosition');

goog.require('Blockly.JavaScript');

/*
 * RoomPosition Ctor
 */

Blockly.JavaScript['roomposition_ctor'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_room = Blockly.JavaScript.valueToCode(block, 'ROOMNAME', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_x && value_y && value_room ) {
        code = 'new RoomPosition(' + value_x + ', ' + value_y + ', ' + value_room + ')';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
 * RoomPosition Attributes setter/getter
 */

Blockly.JavaScript['roomposition_roomname'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.roomName';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_x'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.x';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_y'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.y';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
 * RoomPosition Methods
 */

Blockly.JavaScript['roomposition_createconstructionsite'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_type = Blockly.JavaScript.valueToCode(block, 'structureType', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_type ) {
        code = value_self + '.createConstructionSite(' + value_type + ')';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_createflag'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_secondarycolor = null;
    if (block.getInput('secondaryColor'))
        value_secondarycolor = Blockly.JavaScript.valueToCode(block, 'secondaryColor', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.createFlag(';
        var args = false;
        if (value_name) { code += ' ' + value_name; args = true; }
        if (value_color) { code += (args ? ', ' : ' ') + value_color; args = true; }
        if (value_secondarycolor) { code += (args ? ', ' : ' ') + value_secondarycolor; args = true; }
        code += (args ? ' ' : '') + ')';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_findclosestbypath'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_from ) {
        code = value_self + '.findClosestByPath( ' + value_from;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_findclosestbyrange'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_from ) {
        code = value_self + '.findClosestByRange( ' + value_from;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_findinrange'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_from && value_range ) {
        code = value_self + '.findInRange( ' + value_from + ', ' + value_range;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_findpathto'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.findPathTo( ' + value_target;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    else if ( value_self && value_x && value_y ) {
        code = value_self + '.findPathTo( ' + value_x + ', ' + value_y;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_getdirectionto'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.getDirectionTo( ' + value_target;
        code += ' )';
    }
    else if ( value_self && value_x && value_y ) {
        code = value_self + '.getDirectionTo( ' + value_x + ', ' + value_y;
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_getrangeto'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.getRangeTo( ' + value_target;
        code += ' )';
    }
    else if ( value_self && value_x && value_y ) {
        code = value_self + '.getRangeTo( ' + value_x + ', ' + value_y;
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_inRangeTo'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_range = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target && value_range ) {
        code = value_self + '.inRangeTo( ' + value_target+ ', ' + value_range;
        code += ' )';
    }
    else if ( value_self && value_x && value_y && value_range ) {
        code = value_self + '.inRangeTo( ' + value_x + ', ' + value_y+ ', ' + value_range;
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_isEqualTo'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.isEqualTo( ' + value_target;
        code += ' )';
    }
    else if ( value_self && value_x && value_y ) {
        code = value_self + '.isEqualTo( ' + value_x + ', ' + value_y;
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_isNearTo'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.isNearTo( ' + value_target;
        code += ' )';
    }
    else if ( value_self && value_x && value_y ) {
        code = value_self + '.isNearTo( ' + value_x + ', ' + value_y;
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_look'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.look()';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['roomposition_lookfor'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var name = block.getFieldValue('LOOK');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.lookFor( '+name+' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
