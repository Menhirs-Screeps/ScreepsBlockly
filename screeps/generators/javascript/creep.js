
'use strict';

goog.provide('Blockly.JavaScript.Screeps.Creep');

goog.require('Blockly.JavaScript');

/*
 * Creep Attributes setter/getter
 */

Blockly.JavaScript['creep_pos'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.pos';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['creep_room'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.room';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['creep_carry'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_load = Blockly.JavaScript.valueToCode(block, 'LOAD', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_load ) {
        code = value_self + '.carry[ ' + value_load + ' ]';
    }
    else if ( value_self ) {
        code = value_self + '.carry';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['creep_carrycapacity'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.carryCapacity';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
 * Creep Methods
 */

Blockly.JavaScript['creep_harvest'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.harvest( ' + value_target + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['creep_moveto'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target ) {
        code = value_self + '.moveTo( ' + value_target + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['creep_transfert'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_resourceType = Blockly.JavaScript.valueToCode(block, 'resourceType', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_amount = Blockly.JavaScript.valueToCode(block, 'amount', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self && value_target && value_resourceType ) {
        code = value_self + '.transfert( ' + value_target + ', ' + value_resourceType;
        if ( value_amount ) code = code + ', ' + value_amount;
        code = code + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
