
'use strict';

goog.provide('Blockly.JavaScript.Screeps.Room');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['room_find'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_type = Blockly.JavaScript.valueToCode(block, 'type', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_type ) {
        code = value_self + '.find( ' + value_type;
        if ( value_options ) {
            code += ', ' + value_options;
        }
        code += ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
