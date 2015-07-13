//
// K Radio 1.0
// ***********
//
// Created by Kevin M. Thomas and Thoys on 03/30/15.
// Copyright 2015 Kevin M. Thomas and Thoys.
// kevintown.net
//
// JavaScript for the High Fidelity interface that adds an on/off audio trigger function to an entity upon left clicking the entity.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
 
 
// Function that attaches the WAV file to the entity and runs upon clicking the entity.
(function(){
    var playingSound = false;
    var sound = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/kradio10/lo.wav");
    this.clickDownOnEntity = function(entityID, mouseEvent) {
        if (mouseEvent.button == "LEFT") {
			if(!playingSound) {
				playingSound = Audio.playSound(sound, {
						position: Entities.getEntityProperties(entityID).position,
						volume: 0.35,
						loop: true
				});
			} else {
				playingSound.stop();
				playingSound = false;
			}
		}
    };
})