
'use strict';

goog.provide('Blockly.JavaScript.Screeps.RoomPosition');

goog.require('Blockly.JavaScript');

function escapeRegExp(str) {
    return str.replace('/([.*+?^=!:${}()|\[\]\/\\])/g', "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

Blockly.JavaScript['getinhash'] = function(block) {
    var hash = Blockly.JavaScript.valueToCode(block, 'HASH', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var code = '';
    if ( hash && key ) code = hash + '[' + key + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['structuredtype'] = function(block) {
    var fields = Blockly.JavaScript.statementToCode(block, 'FIELDS') || null;
    var code = '';
    if ( fields ) {
        fields = fields.trim ();
        fields = fields.slice ( 0, fields.length - 1 );
        code = '{' + fields + '}';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['structuredtype_fields'] = function(block) {
    var name = block.getFieldValue('NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var code = '';
    if ( value ) code = name + ': ' + value + ( block.getNextBlock () ? ',' : '');
    return code;
};

Blockly.JavaScript['returnignore'] = function(block) {
    var value_filter = Blockly.JavaScript.valueToCode(block, 'IGNORED') || null;
    return value_filter + ';\n';
};

Blockly.JavaScript['inlinefunction'] = function(block) {
    var arg = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ARGUMENT'), Blockly.Variables.NAME_TYPE);
    var code = Blockly.JavaScript.statementToCode(block, 'CODE');
    return ['function (' + arg + ') {\n' + code +' }', Blockly.JavaScript.ORDER_ATOMIC];
};

    /*
        Constants
    */

    /*
        Options
    */

Blockly.JavaScript['filterobject'] = function(block) {
    var value_filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value = "{ filter: " + value_filter + " }";
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pathfindingalgorithm'] = function(block) {
    var value = "{ algorithm: '" + block.getFieldValue('VALUE') + "' }";
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pathfindingoptions'] = function(block) {
    var value_ignorecreeps = Blockly.JavaScript.valueToCode(block, 'ignoreCreeps', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_ignoredestructiblestructures = Blockly.JavaScript.valueToCode(block, 'ignoreDestructibleStructures', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_ignoreroads = Blockly.JavaScript.valueToCode(block, 'ignoreRoads', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_costcallback = Blockly.JavaScript.valueToCode(block, 'costCallback', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_ignore = Blockly.JavaScript.valueToCode(block, 'ignore', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_avoid = Blockly.JavaScript.valueToCode(block, 'avoid', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_maxops = Blockly.JavaScript.valueToCode(block, 'maxOps', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_heuristicweight = Blockly.JavaScript.valueToCode(block, 'heuristicWeight', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_serialize = Blockly.JavaScript.valueToCode(block, 'serialize', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var value_maxrooms = Blockly.JavaScript.valueToCode(block, 'maxRooms', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '{';
    var args = false;
    if ( value_ignorecreeps ) { code += (args ? ', ' : ' ') + 'ignoreCreeps: ' + value_ignorecreeps; args = true; }
    if ( value_ignoredestructiblestructures ) { code += (args ? ', ' : '') + 'ignoreDestructibleStructures: ' + value_ignoredestructiblestructures; args = true; }
    if ( value_ignoreroads ) { code += (args ? ', ' : ' ') + 'ignoreRoads: ' + value_ignoreroads; args = true; }
    if ( value_costcallback ) { code += (args ? ', ' : ' ') + 'costCallback: ' + value_costcallback; args = true; }
    if ( value_ignore ) { code += (args ? ', ' : ' ') + 'ignore: ' + value_ignore; args = true; }
    if ( value_avoid ) { code += (args ? ', ' : ' ') + 'avoid: ' + value_avoid; args = true; }
    if ( value_maxops ) { code += (args ? ', ' : ' ') + 'maxOps: ' + value_maxops; args = true; }
    if ( value_heuristicweight ) { code += (args ? ', ' : ' ') + 'heuristicWeight: ' + value_heuristicweight; args = true; }
    if ( value_serialize ) { code += (args ? ', ' : ' ') + 'serialize: ' + value_serialize; args = true; }
    if ( value_maxrooms ) { code += (args ? ', ' : ' ') + 'maxRooms: ' + value_maxrooms; args = true; }
    code += (args ? ' ' : '') + '}';
    if ( ! args ) code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
