
'use strict';

goog.provide('Blockly.JavaScript.Screeps.ConstructionSite');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['constructionsite_pos'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.pos';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_room'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.room';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_id'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.id';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_my'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.my';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_owner'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.owner';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_owner_username'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.owner.username';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_progress'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.progress';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_progresstotal'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.progressTotal';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_structuretype'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.structureType';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['constructionsite_remove'] = function(block) {
    var value_self = Blockly.JavaScript.valueToCode(block, 'SELF', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( value_self ) {
        code = value_self + '.remove()';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
