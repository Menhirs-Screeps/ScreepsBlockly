
'use strict';

goog.provide('Blockly.Screeps.Game.Map');

goog.require('Blockly.Screeps');
goog.require('Blockly.Screeps.Game');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Game.Map.Toolbox =
'<category name="Game.Map" colour="#668449">' +
'   <block type="game_map_describeexits"></block>' +
'   <block type="game_map_findexit"></block>' +
'   <block type="game_map_findroute"></block>' +
'   <block type="game_map_getroomlineardistance"></block>' +
'   <block type="game_map_getterrainat"></block>' +
'   <block type="game_map_getworldsize"></block>' +
'   <block type="game_map_isroomavailable"></block>' +
'</category>'
;

Blockly.Screeps.Game.Map.Hue = 90;
Blockly.Screeps.Game.Map.HelpUrl = "http://docs.screeps.com/api/#Game.map";

Blockly.Screeps.Game.Map.TerrainFromPosDefinition = [
    [ 'detail', 'GET_TERRAIN_AT_DETAIL' ],
    [ 'position', 'GET_TERRAIN_AT_POS' ]
];

function updateShapeTerrainFromPos(block,usePos)
{
    var extraPinsExist = block.getInput('POS');
    if (usePos) {
        if (!extraPinsExist) {
            block.removeInput ( 'X' );
            block.removeInput ( 'Y' );
            block.removeInput ( 'ROOMNAME' );
            block.appendValueInput('POS')
                .setCheck("RoomPosition")
                .appendField('pos')
                .setAlign(Blockly.ALIGN_RIGHT);
        }
    } else {
        if (extraPinsExist) {
            block.removeInput ( 'POS' );
            block.appendValueInput("X")
                .appendField("x")
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck("Number");
                block.appendValueInput("Y")
                .appendField("y")
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck("Number");
                block.appendValueInput("ROOMNAME")
                .appendField("roomName")
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck("String");
        }
    }
}

/*
    Map object
*/

Blockly.Blocks['game_map_describeexits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("describeExits");
        this.appendValueInput("roomName")
            .appendField("roomName")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("List all exits available from the room with the given name.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.describeExits');
    }
};

Blockly.Blocks['game_map_findexit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("findExit");
        this.appendValueInput("fromRoom")
            .appendField("from")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(["String","Room"]);
        this.appendValueInput("toRoom")
            .appendField("to")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(["String","Room"]);
        this.appendValueInput("opts")
            .appendField("options")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Object");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setOutput(true, ["FindConstant", "ErrorConstant"]);
        this.setTooltip("Find the exit direction from the given room en route to another room.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.findExit');
    }
};

Blockly.Blocks['game_map_findroute'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("findRoute");
        this.appendValueInput("fromRoom")
            .appendField("from")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(["String","Room"]);
        this.appendValueInput("toRoom")
            .appendField("to")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(["String","Room"]);
        this.appendValueInput("callback")
            .appendField("callback")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(["RouteCallback","FunctionReference"]);
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setOutput(true, ["Array", "ErrorConstant"]);
        this.setTooltip("Find route from the given room to another room.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.findRoute');
    }
};

Blockly.Blocks['game_map_getroomlineardistance'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("getRoomLinearDistance");
        this.appendValueInput("roomName1")
            .appendField("roomName1")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.appendValueInput("roomName2")
            .appendField("roomName2")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.appendValueInput("continuous")
            .appendField("continuous")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Boolean");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of sending resources through terminals, or using observers and nukes.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.getRoomLinearDistance');
    }
};

Blockly.Blocks['game_map_getterrainat'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Game.Map.TerrainFromPosDefinition,
                function (text) {
                    updateShapeTerrainFromPos ( this.sourceBlock_, text == 'GET_TERRAIN_AT_POS' );
                }), "USEPOS")
            .appendField("getTerrainAt");
        this.appendValueInput("X")
            .appendField("x")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number");
        this.appendValueInput("Y")
            .appendField("y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number");
        this.appendValueInput("ROOMNAME")
            .appendField("roomName")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.setOutput(true, "TerrainTypeConstant");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setTooltip("Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.getTerrainAt');
    }
};

Blockly.Blocks['game_map_getworldsize'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("getWorldSize");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("Returns the world size as a number of rooms between world corners. For example, for a world with rooms from W50N50 to E50S50 this method will return 102.");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.getWorldSize');
    }
};

Blockly.Blocks['game_map_isroomavailable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("isRoomAvailable");
        this.appendValueInput("ROOMNAME")
            .appendField("roomName")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Screeps.Game.Map.Hue);
        this.setTooltip("Check if the room is available to move into..");
        this.setHelpUrl(Blockly.Screeps.Game.Map.HelpUrl+'.map.isRoomAvailable');
    }
};
