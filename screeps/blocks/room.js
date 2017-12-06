
'use strict';

goog.provide('Blockly.Screeps.Room');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Room.Toolbox =
'<category name="Room" colour="#488448">' +
'   <block type="room_find"></block>' +
'</category>'
;

Blockly.Screeps.Room.Hue = 200;
Blockly.Screeps.Room.HelpUrl = "http://docs.screeps.com/api/#Room";

Blockly.Screeps.Room.Compatibility = [ "Room", "Object" ];

Blockly.Blocks['room_find'] = {
    init: function() {
        this.appendValueInput("type")
            .appendField("Find")
            .setCheck("FindConstant")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("SELF")
            .appendField("in")
            .setCheck(Blockly.Screeps.Room.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField('options')
            .setCheck("FilterObject")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Object");
        this.setColour(Blockly.Screeps.Room.Hue);
        this.setTooltip("Find all objects of the specified type in the room.");
        this.setHelpUrl(Blockly.Screeps.Room.HelpUrl+'.find');
    }
};
