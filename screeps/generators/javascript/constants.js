
'use strict';

goog.provide('Blockly.JavaScript.Screeps.Constants');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['errorconstants'] = function(block) {
    var value = block.getFieldValue('VALUE');
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['findconstants'] = function(block) {
    var value = block.getFieldValue('VALUE');
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['colorconstants'] = function(block) {
    var value = block.getFieldValue('VALUE');
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['structureconstants'] = function(block) {
    var value = block.getFieldValue('VALUE');
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['resourceconstants'] = function(block) {
    var resource = block.getFieldValue('BASIC') || null;
    var combiner = block.getFieldValue('COMBINE') || null;
    var catalyzer = block.getFieldValue('CATALYZED') || null;
    var value = "RESOURCE_" +
        (catalyzer !== null ? ( catalyzer === "TRUE" ? "CATALYZED_" : "" ) : "" ) +
        resource +
        (combiner !== null ? ( combiner !== "NONE" ? "_" + combiner : "" ) : "" );
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['terrainconstants'] = function(block) {
    var value = '"' + block.getFieldValue('VALUE') + '"';
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};
