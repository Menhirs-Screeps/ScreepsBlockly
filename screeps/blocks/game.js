
'use strict';

goog.provide('Blockly.Screeps.Game');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Game.Toolbox =
'<category name="Game" colour="#708449">' +
'   <block type="game_constructionsites"></block>' +
'   <block type="game_cpu"></block>' +
'   <block type="game_creeps"></block>' +
'   <block type="game_flags"></block>' +
'   <block type="game_gcl"></block>' +
'   <block type="game_map"></block>' +
'   <block type="game_market"></block>' +
'   <block type="game_resources"></block>' +
'   <block type="game_rooms"></block>' +
'   <block type="game_shard"></block>' +
'   <block type="game_spawns"></block>' +
'   <block type="game_structures"></block>' +
'   <block type="game_time"></block>' +
'   <block type="game_getobjectbyid"></block>' +
'   <block type="game_notify"></block>' +
'   <category name="Game.cpu" colour="#708449">' +
'       <block type="game_cpu_limit"></block>' +
'       <block type="game_cpu_ticklimit"></block>' +
'       <block type="game_cpu_bucket"></block>' +
'       <block type="game_cpu_shardlimits"></block>' +
'       <block type="game_cpu_getused"></block>' +
'       <block type="game_cpu_setshardlimits"></block>' +
'   </category>' +
'   <category name="Game.gcl" colour="#708449">' +
'       <block type="game_gcl_level"></block>' +
'       <block type="game_gcl_progress"></block>' +
'       <block type="game_gcl_progressTotal"></block>' +
'   </category>' +
'   <category name="Game.shard" colour="#708449">' +
'       <block type="game_shard_name"></block>' +
'       <block type="game_shard_type"></block>' +
'       <block type="game_shard_ptr"></block>' +
'   </category>' +
'</category>'
;

Blockly.Screeps.Game.Hue = 80;
Blockly.Screeps.Game.HelpUrl = "http://docs.screeps.com/api/#Game";

/*
    Game object
*/
Blockly.Blocks['game_constructionsites'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.constructionSites");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all your construction sites with their id as hash keys.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.constructionSites');
    }
};

Blockly.Blocks['game_cpu'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.cpu");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Cpu");
        this.setTooltip("An object containing information about your CPU usage.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.cpu');
    }
};

Blockly.Blocks['game_creeps'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.creeps");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all your creeps with creep names as hash keys.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.creeps');
    }
};

Blockly.Blocks['game_flags'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.flags");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all your flags with flag names as hash keys.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.flags');
    }
};

Blockly.Blocks['game_gcl'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.gcl");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Gcl");
        this.setTooltip("Your Global Control Level.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.gcl');
    }
};

Blockly.Blocks['game_map'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.map");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Map");
        this.setTooltip("A global object representing world map.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.map');
    }
};

Blockly.Blocks['game_market'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.market");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Market");
        this.setTooltip("A global object representing the in-game market.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.market');
    }
};

Blockly.Blocks['game_resources'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.resources");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("An object with your global resources that are bound to the account, like subscription tokens. Each object key is a resource constant, values are resources amounts.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.resources');
    }
};

Blockly.Blocks['game_rooms'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.rooms");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all the rooms available to you with room names as hash keys. A room is visible if you have a creep or an owned structure in it.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.rooms');
    }
};

Blockly.Blocks['game_shard'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.shard");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("An object describing the world shard where your script is currently being executed in.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.shard');
    }
};

Blockly.Blocks['game_spawns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.spawns");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all your spawns with spawn names as hash keys.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.spawns');
    }
};

Blockly.Blocks['game_structures'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.structures");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("A hash containing all your structures with structure id as hash keys.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.structures');
    }
};

Blockly.Blocks['game_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Game.time");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("System game tick counter. It is automatically incremented on every tick.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.time');
    }
};

Blockly.Blocks['game_getobjectbyid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("getObjectById");
        this.appendValueInput("id")
            .appendField("id")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Object");
        this.setTooltip("Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.getObjectById');
    }
};

Blockly.Blocks['game_notify'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("notify");
        this.appendValueInput("message")
            .appendField("message")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("String");
        this.appendValueInput("groupInterval")
            .appendField("groupInterval")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.notify');
    }
};

/*
    Cpu object
*/
Blockly.Blocks['game_cpu_limit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cpu limit");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("Your assigned CPU limit for the current shard.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.cpu');
    }
};

Blockly.Blocks['game_cpu_ticklimit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cpu tick limit");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("An amount of available CPU time at the current game tick. Usually it is higher than Game.cpu.limit.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.cpu');
    }
};

Blockly.Blocks['game_cpu_bucket'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cpu bucket");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("An amount of unused CPU accumulated in your bucket.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.cpu');
    }
};

Blockly.Blocks['game_cpu_shardlimits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cpu shard limits");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Array");
        this.setTooltip("An object with limits for each shard with shard names as keys. You can use setShardLimits method to re-assign them.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.cpu');
    }
};

Blockly.Blocks['game_cpu_getused'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cpu used");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.getUsed');
    }
};

Blockly.Blocks['game_cpu_setshardlimits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("setShardLimits");
        this.appendValueInput("limits")
            .appendField("limits")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Object");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "ErrorConstant");
        this.setTooltip("Allocate CPU limits to different shards. Total amount of CPU should remain equal to Game.cpu.shardLimits. This method can be used only once per 12 hours.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.setShardLimits');
    }
};

/*
    Gcl object
*/
Blockly.Blocks['game_gcl_level'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gcl level");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("The current level.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.gcl');
    }
};

Blockly.Blocks['game_gcl_progress'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gcl progress");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("The current progress to the next level.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.gcl');
    }
};

Blockly.Blocks['game_gcl_progressTotal'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gcl total progress");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Number");
        this.setTooltip("The progress required to reach the next level.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.gcl');
    }
};

/*
    Shard object
*/
Blockly.Blocks['game_shard_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("shard name");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "String");
        this.setTooltip("The name of the shard.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.shard');
    }
};

Blockly.Blocks['game_shard_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("shard type");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "String");
        this.setTooltip("Currently always equals to normal.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.shard');
    }
};

Blockly.Blocks['game_shard_ptr'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("shard ptr");
        this.setColour(Blockly.Screeps.Game.Hue);
        this.setOutput(true, "Boolean");
        this.setTooltip("Whether this shard belongs to the PTR.");
        this.setHelpUrl(Blockly.Screeps.Game.HelpUrl+'.shard');
    }
};
