
'use strict';

goog.provide('Blockly.Screeps.RoomPosition');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.RoomPosition.Toolbox =
    '<category name="RoomPosition" colour="#496684">' +
    '   <block type="roomposition_ctor">' +
    '      <value name="X">' +
    '        <block type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="Y">' +
    '        <block type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="ROOMNAME">' +
    '        <block type="text"></block>' +
    '      </value>' +
    '   </block>' +
    '   <block type="roomposition_roomname"></block>' +
    '   <block type="roomposition_x"></block>' +
    '   <block type="roomposition_y"></block>' +
    '   <block type="roomposition_createconstructionsite"></block>' +
    '   <block type="roomposition_createflag"></block>' +
    '   <block type="roomposition_findclosestbypath"></block>' +
    '   <block type="roomposition_findclosestbyrange"></block>' +
    '   <block type="roomposition_findinrange"></block>' +
    '   <block type="roomposition_findpathto"></block>' +
    '   <block type="roomposition_getdirectionto"></block>' +
    '   <block type="roomposition_getrangeto"></block>' +
    '   <block type="roomposition_inRangeTo"></block>' +
    '   <block type="roomposition_isEqualTo"></block>' +
    '   <block type="roomposition_isNearTo"></block>' +
    '   <block type="roomposition_look"></block>' +
    '   <block type="roomposition_lookfor"></block>' +
    '</category>'
;

Blockly.Screeps.RoomPosition.Hue = 210;
Blockly.Screeps.RoomPosition.HelpUrl = "http://docs.screeps.com/api/#RoomPosition";

Blockly.Screeps.RoomPosition.Compatibility = [ "RoomPosition", "Object" ];

Blockly.Screeps.RoomPosition.TargetDefinition = [
    [ 'target', 'TGT_DEF_TARGET' ],
    [ 'position', 'TGT_DEF_POSITION' ]
];

Blockly.Screeps.RoomPosition.PathfinderDefinition = [
    [ 'type', 'DEF_TYPE' ],
    [ 'objects', 'DEF_OBJECTS' ]
];

Blockly.Screeps.RoomPosition.PathfinderOptions = [
    [ 'pathfinding', 'OPT_PATHFINDING' ],
    [ 'filter', 'OPT_FILTERING' ],
    [ 'algorithm', 'OPT_ALGORITHM' ]
];

function updateShapeTargetUsingPositionOrTarget(block,doTarget)
{
    var extraPinsExist = block.getInput('TARGET');
    var optionsExist = block.getInput('OPTIONS');
    if (doTarget) {
        if (!extraPinsExist) {
            block.removeInput ( 'X' );
            block.removeInput ( 'Y' );
            block.appendValueInput('TARGET')
                .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
                .appendField('to target')
                .setAlign(Blockly.ALIGN_RIGHT);
            if (optionsExist)
                block.moveInputBefore ( "TARGET", "OPTIONS" );
        }
    } else {
        if (extraPinsExist) {
            block.removeInput ( 'TARGET' );
            block.appendValueInput('X')
                .setCheck("Number")
                .appendField('to x')
                .setAlign(Blockly.ALIGN_RIGHT);
            block.appendValueInput('Y')
                .setCheck("Number")
                .appendField('y')
                .setAlign(Blockly.ALIGN_RIGHT);
            if (optionsExist) {
                block.moveInputBefore ( "X", "OPTIONS" );
                block.moveInputBefore ( "Y", "OPTIONS" );
            }
        }
    }
}

function updateShapeTwoColorsFlag (block,twocolors) {
    var extraPinsExist = block.getInput('secondaryColor');
    if (twocolors) {
        if (!extraPinsExist) {
            block.appendValueInput("secondaryColor")
                .appendField("secondary color")
                .setCheck("ColorConstant")
                .setAlign(Blockly.ALIGN_RIGHT);
        }
    } else {
        if (extraPinsExist) {
            block.removeInput("secondaryColor");
        }
    }
}

Blockly.Blocks['roomposition_ctor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("RoomPosition Ctor");
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
        this.setOutput(true, ["RoomPosition","Object"]);
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Creates a new instance of RoomPosition");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_roomname'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("roomName")
            .appendField("of")
            .setCheck(["RoomPosition", "Object"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "String");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("The name of the room");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_x'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("x")
            .appendField("of")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("X position in the room");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_y'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("y")
            .appendField("of")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Y position in the room");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_createconstructionsite'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Construction site at")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("structureType")
            .appendField("of type")
            .setCheck("StructureConstant")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "ErrorConstant");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Create new ConstructionSite at the specified location");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_createflag'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldCheckbox("FALSE", function(text) {
                updateShapeTwoColorsFlag(this.sourceBlock_,text==true);
            }), "TWOCOLORS")
            .appendField("Create flag at")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("name");
        this.appendValueInput("color")
            .appendField("color")
            .setCheck("ColorConstant")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, ["String", "ErrorConstant"]);
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Create new Flag at the specified location");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_findclosestbypath'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Find closest by path from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("FROM")
            .appendField("type / objects")
            .setCheck(["FindConstant","Array"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField('options')
            .setCheck(["PathfindingOptions", "FilterObject", "PathfindingAlgorithm"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Object");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Find an object with the shortest path from the given position. Uses Jump Point Search algorithm and Dijkstra's algorithm.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_findclosestbyrange'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Find closest by range from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("FROM")
            .appendField("type / objects")
            .setCheck(["FindConstant","Array"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField('options')
            .setCheck("FilterObject")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Object");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Find an object with the shortest linear distance from the given position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_findinrange'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Find in range from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("FROM")
            .appendField("type / objects")
            .setCheck(["FindConstant","Array"])
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("RANGE")
            .appendField("range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField('options')
            .setCheck("FilterObject")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Array");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Find all objects in the specified linear range.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_findpathto'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("Find path")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField('to target')
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField('options')
            .setCheck("PathfindingOptions")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Array");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Find an optimal path to the specified position using Jump Point Search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_getdirectionto'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("Get direction")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField('to target')
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Direction");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Get linear direction to the specified position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_getrangeto'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("Get range")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField("to target")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Get linear range to the specified position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_inRangeTo'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("In range")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField("to target")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("OPTIONS")
            .appendField("range")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Check whether this position is in the given range of another position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_isEqualTo'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("Is equal")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField("to target")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Check whether this position is the same as the specified position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_isNearTo'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.RoomPosition.TargetDefinition,
            function (text) {
                updateShapeTargetUsingPositionOrTarget ( this.sourceBlock_, text == 'TGT_DEF_TARGET' );
            }), "OVERLOAD")
            .appendField("Is near")
            .appendField("from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("TARGET")
            .appendField("to target")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_look'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField("Look from")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
        this.setOutput(true, "Array");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Get the list of objects at the specified room position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};

Blockly.Blocks['roomposition_lookfor'] = {
    init: function() {
        this.appendValueInput("SELF")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Screeps.Constants.Looks), "LOOK")
            .appendField("at")
            .setCheck(Blockly.Screeps.RoomPosition.Compatibility)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true, "Array");
        this.setColour(Blockly.Screeps.RoomPosition.Hue);
        this.setTooltip("Get an object with the given type at the specified room position.");
        this.setHelpUrl(Blockly.Screeps.RoomPosition.HelpUrl);
    }
};
