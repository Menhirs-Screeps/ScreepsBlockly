
'use strict';

goog.provide('Blockly.Screeps.Constants');

goog.require('Blockly.Screeps');
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Screeps.Constants.Toolbox =
'<category name="Constants" colour="#48845C">' +
'    <block type="errorconstants"></block>' +
'    <block type="findconstants"></block>' +
'    <block type="colorconstants"></block>' +
'    <block type="structureconstants"></block>' +
'    <block type="resourceconstants"></block>' +
'    <block type="terrainconstants"></block>' +
'</category>'
;

Blockly.Screeps.Constants.Hue = 140;
Blockly.Screeps.Constants.HelpUrl = "http://docs.screeps.com/api/#Constants";

function updateEnergyBlockBasic(block,text) {
    var resource = text;
    var combiner = block.getFieldValue('COMBINE') || null;
    var catalyzer = block.getFieldValue('CATALYZED') || null;
    var canCombine = (resource=='UTRIUM')||(resource=='KEANIUM')||(resource=='LEMERGIUM')||(resource=='ZYNTHIUM')||(resource=='GHODIUM');
    var canCatalyze = combiner && (combiner!='NONE');
    if (canCombine) {
        if ( combiner === null ) {
            block.getInput ( 'DATA' ).appendField (
                new Blockly.FieldDropdown(Blockly.Screeps.Constants.CombineResources,
                    function(text) {
                        updateEnergyBlockCombine(this.sourceBlock_,text);
                    }),
                "COMBINE"
            );
        }
    } else {
        if ( catalyzer !== null ) {
            block.getInput ( 'DATA' ).removeField ( 'TMP' );
            block.getInput ( 'DATA' ).removeField ( 'CATALYZED' );
        }
        if ( combiner !== null ) {
            block.getInput ( 'DATA' ).removeField ( 'COMBINE' );
        }
    }
}

function updateEnergyBlockCombine(block,text) {
    var combiner = text;
    var catalyzer = block.getFieldValue('CATALYZED') || null;
    var canCatalyze = ! (combiner==='NONE');
    if ( canCatalyze ) {
        if ( catalyzer === null ) {
            block.getInput ( 'DATA' ).appendField (
                new Blockly.FieldCheckbox("FALSE"),
                "CATALYZED"
            )
            .appendField( "catalyzed", "TMP" );
        }
    } else {
        if ( catalyzer !== null ) {
            block.getInput ( 'DATA' ).removeField ( 'TMP' );
            block.getInput ( 'DATA' ).removeField ( 'CATALYZED' );
        }
    }
}

Blockly.Blocks['errorconstants'] = {
    init: function() {
      this.appendDummyInput()
      .appendField( "Error" )
      .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.Errors), "VALUE");
      this.setOutput(true, "ErrorConstant");
      this.setColour(Blockly.Screeps.Constants.Hue);
   this.setTooltip("");
   this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
};

  Blockly.Blocks['findconstants'] = {
    init: function() {
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.Finds), "VALUE");
      this.setOutput(true, "FindConstant");
      this.setColour(Blockly.Screeps.Constants.Hue);
   this.setTooltip("");
   this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
  };

  Blockly.Blocks['colorconstants'] = {
    init: function() {
      this.appendDummyInput()
      .appendField( "Color" )
      .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.Colors), "VALUE");
      this.setOutput(true, "ColorConstant");
      this.setColour(Blockly.Screeps.Constants.Hue);
   this.setTooltip("");
   this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
  };

  Blockly.Blocks['structureconstants'] = {
    init: function() {
      this.appendDummyInput()
        .appendField( "Structure" )
        .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.Structures), "VALUE");
      this.setOutput(true, "StructureConstant");
      this.setColour(Blockly.Screeps.Constants.Hue);
   this.setTooltip("");
   this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
  };

  Blockly.Blocks['resourceconstants'] = {
    init: function() {
        this.appendDummyInput('DATA')
        .appendField( "Resource" )
            .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.BasicResources,
                function(text) {
                    updateEnergyBlockBasic(this.sourceBlock_,text);
                }), "BASIC");
        this.setOutput(true, "ResourceConstant");
        this.setColour(Blockly.Screeps.Constants.Hue);
        this.setTooltip("");
        this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
};
    
  Blockly.Blocks['terrainconstants'] = {
    init: function() {
      this.appendDummyInput()
        .appendField( "Terrain" )
        .appendField(new Blockly.FieldDropdown(Blockly.Screeps.Constants.TerrainType), "VALUE");
      this.setOutput(true, "TerrainTypeConstant");
      this.setColour(Blockly.Screeps.Constants.Hue);
   this.setTooltip("");
   this.setHelpUrl(Blockly.Screeps.Constants.HelpUrl);
    }
  };
