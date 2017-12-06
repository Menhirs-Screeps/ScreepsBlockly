
'use strict';

goog.provide('Blockly.JavaScript.Screeps.Game');

goog.require('Blockly.JavaScript');

/*
    Game object
*/
Blockly.JavaScript['game_constructionsites'] = function(block) {
    return ['Game.constructionSites', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu'] = function(block) {
    return ['Game.cpu', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_creeps'] = function(block) {
    return ['Game.creeps', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_flags'] = function(block) {
    return ['Game.flags', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_gcl'] = function(block) {
    return ['Game.gcl', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_map'] = function(block) {
    return ['Game.map', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_market'] = function(block) {
    return ['Game.market', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_rooms'] = function(block) {
    return ['Game.rooms', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_shard'] = function(block) {
    return ['Game.shard', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_spawns'] = function(block) {
    return ['Game.spawns', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_structures'] = function(block) {
    return ['Game.structures', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_time'] = function(block) {
    return ['Game.time', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_getobjectbyid'] = function(block) {
    var id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( id ) {
        code = 'Game.getObjectById( ' + id + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_notify'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC) || null;
    var groupInterval = Blockly.JavaScript.valueToCode(block, 'groupInterval', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( message ) {
        code = 'Game.notify( ' + message;
        if ( groupInterval ) code = code + ', ' + groupInterval;
        code = code + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
    Cpu object
*/
Blockly.JavaScript['game_cpu_limit'] = function(block) {
    return ['Game.cpu.limit', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu_ticklimit'] = function(block) {
    return ['Game.cpu.tickLimit', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu_bucket'] = function(block) {
    return ['Game.cpu.bucket', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu_shardlimits'] = function(block) {
    return ['Game.cpu.shardLimits', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu_getused'] = function(block) {
    return ['Game.cpu.getUsed ()', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_cpu_setshardlimits'] = function(block) {
    var limits = Blockly.JavaScript.valueToCode(block, 'limits', Blockly.JavaScript.ORDER_ATOMIC) || null;
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    if ( limits ) {
        code = 'Game.cpu.setShardLimits( ' + limits + ' )';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
    Gcl object
*/
Blockly.JavaScript['game_gcl_level'] = function(block) {
    return ['Game.gcl.level', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_gcl_progress'] = function(block) {
    return ['Game.gcl.progress', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_gcl_progressTotal'] = function(block) {
    return ['Game.gcl.progressTotal', Blockly.JavaScript.ORDER_ATOMIC];
};

/*
    Shard object
*/
Blockly.JavaScript['game_shard_name'] = function(block) {
    return ['Game.shard.name', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_shard_type'] = function(block) {
    return ['Game.shard.type', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['game_shard_ptr'] = function(block) {
    return ['Game.shard.ptr', Blockly.JavaScript.ORDER_ATOMIC];
};
