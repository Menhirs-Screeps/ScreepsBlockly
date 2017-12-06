
'use strict';

goog.provide('Blockly.Screeps.Helpers');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Helpers.Toolbox =
'  <category name="JS Helpers">' +
'    <block type="module"></block>' +
'    <block type="structuredtype"></block>' +
'    <block type="structuredtype_fields"></block>' +
'    <block type="returnignore"></block>' +
'    <block type="inlinefunction"></block>' +
'    <block type="getinhash"></block>' +
'  </category>' +
'  <category name="Options">' +
'    <block type="pathfindingalgorithm"></block>' +
'    <block type="filterobject"></block>' +
'    <block type="pathfindingoptions"></block>' +
'  </category>'
;

Blockly.Screeps.Helpers.Hue = 160;
Blockly.Screeps.Helpers.HelpUrl = "http://docs.screeps.com/api/#RoomObject.room";

Blockly.Blocks['getinhash'] = {
    init: function() {
        this.appendValueInput("HASH")
            .appendField("get")
            .setCheck("Array");
        this.appendValueInput("KEY")
            .appendField("[")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

Blockly.Blocks['module'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Module")
          .appendField(new Blockly.FieldVariable("module"), "NAME");
      this.appendStatementInput("CONTENT")
          .setCheck("Field");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['structuredtype'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Structure");
        this.appendStatementInput("FIELDS")
            .setCheck("Field")
            .appendField("fields");
        this.setOutput(true, "Object");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['structuredtype_fields'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("name")
            .appendField(new Blockly.FieldTextInput("default"), "NAME")
            .appendField("equals");
        this.setPreviousStatement(true, "Field");
        this.setNextStatement(true, "Field");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['returnignore'] = {
    init: function() {
      this.appendValueInput("IGNORED")
          .setCheck(null)
          .appendField("Ignore return of");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['inlinefunction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("function")
          .appendField(new Blockly.FieldVariable("item"), "ARGUMENT");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setOutput(true, "FilterFunction");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

    /*
        Constants
    */

    /*
        Options
    */

Blockly.Blocks['pathfindingalgorithm'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Pathfinding algorithm")
        .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.PathfindingAlgorithm), "VALUE");
      this.setOutput(true, "PathfindingAlgorithm");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['filterobject'] = {
    init: function() {
        this.appendValueInput("FILTER")
            .appendField("filter")
            .setCheck(["Object", "FilterFunction", "String"]);
        this.setOutput(true, "FilterObject");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pathfindingoptions'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pathfinding options");
        this.appendValueInput("ignoreCreeps")
            .setCheck("Boolean")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ignoreCreeps");
        this.appendValueInput("ignoreDestructibleStructures")
            .setCheck("Boolean")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ignoreDestructibleStructures");
        this.appendValueInput("ignoreRoads")
            .setCheck("Boolean")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ignoreRoads");
        this.appendValueInput("costCallback")
            .setCheck("CostCallback")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("costCallback");
        this.appendValueInput("ignore")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ignore");
        this.appendValueInput("avoid")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("avoid");
        this.appendValueInput("maxOps")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("maxOps");
        this.appendValueInput("heuristicWeight")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("heuristicWeight");
        this.appendValueInput("serialize")
            .setCheck("Boolean")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("serialize");
        this.appendValueInput("maxRooms")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("maxRooms");
        this.setOutput(true, "PathfindingOptions");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
