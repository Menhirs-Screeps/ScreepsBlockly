
'use strict';

goog.provide('Blockly.Screeps.Creep');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Creep.Toolbox =
'<category name="Creep" colour="#498466">' +
'   <block type="creep_pos"></block>' +
'   <block type="creep_room"></block>' +
'   <block type="creep_carry"></block>' +
'   <block type="creep_carrycapacity"></block>' +
'   <block type="creep_harvest"></block>' +
'   <block type="creep_moveto"></block>' +
'   <block type="creep_transfert"></block>' +
'</category>'
;

Blockly.Screeps.Creep.Hue = 160;
Blockly.Screeps.Creep.HelpUrl = "http://docs.screeps.com/api/#Creep";

/**
 * @todo implementation
 */

Blockly.Screeps.Creep.Compatibility = [ "Creep", "Object" ];

Blockly.Blocks['creep_pos'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("pos")
            .appendField("of")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "RoomPosition");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("An object representing the position of this object in the room.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.pos');
    }
};

Blockly.Blocks['creep_room'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("room")
            .appendField("of")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Room");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("The link to the Room object. May be undefined in case if an object is a flag or a construction site and is placed in a room that is not visible to you.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.room');
    }
};

Blockly.Blocks['creep_carry'] = {
    init: function() {
        this.appendValueInput("LOAD")
            .appendField("carried")
            .setCheck("ResourceConstant")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("SELF")
            .appendField("by")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("An object with the creep's cargo contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.carry');
    }
};

Blockly.Blocks['creep_carrycapacity'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("carry capacity")
            .appendField("of")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("The total amount of resources the creep can carry.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.carryCapacity');
    }
};

/*
 * Creep Methods
 */

Blockly.Blocks['creep_harvest'] = {
    init: function() {
        this.appendValueInput("target")
            .appendField("Harvest")
            .setCheck(["Source","Mineral","Object"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("SELF")
            .appendField("with")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "ErrorConstant");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("Harvest energy from the source or minerals from the mineral deposit. Requires the WORK body part. If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.harvest');
    }
};

Blockly.Blocks['creep_moveto'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Move")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("target")
            .appendField("to")
            .setCheck(["RoomPosition","Object"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "ErrorConstant");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Requires the MOVE body part");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.moveTo');
    }
};

Blockly.Blocks['creep_transfert'] = {
    init: function() {
        this.appendValueInput("resourceType")
            .appendField("Transfert")
            .setCheck("ResourceConstant")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("SELF")
            .appendField("from")
            .setCheck(Blockly.Screeps.Creep.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("target")
            .appendField("to")
            .setCheck(["Creep","Structure","Object"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("amount")
            .appendField("amount")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "ErrorConstant");
        this.setColour(Blockly.Screeps.Creep.Hue);
        this.setTooltip("Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.");
        this.setHelpUrl(Blockly.Screeps.Creep.HelpUrl+'.transfert');
    }
};
