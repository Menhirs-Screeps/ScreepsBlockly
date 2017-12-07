
'use strict';

goog.provide('Blockly.Screeps.ConstructionSite');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.ConstructionSite.Toolbox =
    '<category name="ConstructionSite" colour="#498466">' +
    '   <block type="constructionsite_pos"></block>' +
    '   <block type="constructionsite_room"></block>' +
    '   <block type="constructionsite_id"></block>' +
    '   <block type="constructionsite_my"></block>' +
    '   <block type="constructionsite_owner"></block>' +
    '   <block type="constructionsite_owner_username"></block>' +
    '   <block type="constructionsite_progress"></block>' +
    '   <block type="constructionsite_progresstotal"></block>' +
    '   <block type="constructionsite_structuretype"></block>' +
    '   <block type="constructionsite_remove"></block>' +
    '</category>'
;

Blockly.Screeps.ConstructionSite.Hue = 150;
Blockly.Screeps.ConstructionSite.HelpUrl = "http://docs.screeps.com/api/#ConstructionSite";

Blockly.Screeps.ConstructionSite.Compatibility = [ "ConstructionSite", "Object" ];

Blockly.Blocks['constructionsite_pos'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("pos")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "RoomPosition");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("An object representing the position of this object in the room.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.pos');
    }
};

Blockly.Blocks['constructionsite_room'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("room")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Room");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("The link to the Room object. May be undefined in case if an object is a flag or a construction site and is placed in a room that is not visible to you.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.room');
    }
};

Blockly.Blocks['constructionsite_id'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("id")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "String");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.id');
    }
};

Blockly.Blocks['constructionsite_my'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("my")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("Whether this is your own construction site.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.my');
    }
};

Blockly.Blocks['constructionsite_owner'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("owner")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Object");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("An object with the structure’s owner info.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.owner');
    }
};

Blockly.Blocks['constructionsite_owner_username'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("owner name")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "String");
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setTooltip("The name of the owner user.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.owner');
    }
};

Blockly.Blocks['constructionsite_progress'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("progress")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("The current construction progress.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.progress');
    }
};

Blockly.Blocks['constructionsite_progresstotal'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("total progress")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("The total construction progress needed for the structure to be built.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.progressTotal');
    }
};

Blockly.Blocks['constructionsite_structuretype'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("total progress")
            .appendField("of")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setOutput(true, "StructureConstant");
        this.setTooltip("One of the STRUCTURE_* constants.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.structureType');
    }
};

Blockly.Blocks['constructionsite_remove'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("remove")
            .setCheck(Blockly.Screeps.ConstructionSite.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setColour(Blockly.Screeps.ConstructionSite.Hue);
        this.setOutput(true, "ErrorConstant");
        this.setTooltip("Remove the construction site.");
        this.setHelpUrl(Blockly.Screeps.ConstructionSite.HelpUrl+'.remove');
    }
};