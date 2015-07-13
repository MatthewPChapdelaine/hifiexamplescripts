//
// K George The Goat Talk 1.0
// **************************
//
// Created by Kevin M. Thomas and Thoys on 12/26/14.
// Copyright 2014 Kevin M. Thomas and Thoys.
// kevintown.net
//
// JavaScript for the High Fidelity interface that adds an talk function to an entity upon left clicking the entity.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
 
 
// Function that attaches the WAV file to the entity and runs upon clicking the entity.
(function(){
	var isPlaying = false;
    	var sound = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/kgeorgethegoat10/kgeorgethegoatwelcome.wav");
    	var sound2 = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/kgeorgethegoat10/kgeorgethegoatresponse2.wav");
    	var sound3 = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/kgeorgethegoat10/kgeorgethegoatresponse3.wav");
    	var state1 = 0;
    	this.clickDownOnEntity = function(entityID, mouseEvent) {
        	if (mouseEvent.button == "LEFT") {
			if(!isPlaying) {
				state1++;
				print("the state is now: " + state1);
				if (state1 === 1) {   
					if (!isPlaying) {
						isPlaying = true;
						Audio.playSound(sound, {
							position: Entities.getEntityProperties(entityID).position,
							volume: 0.35
						});
						var one_timer = Script.setTimeout(function() { 
							isPlaying = false;
						}, 8000);
					}
				}
				else if (state1 === 2) {   
					if (!isPlaying) {
						isPlaying = true;
						Audio.playSound(sound2, {
							position: Entities.getEntityProperties(entityID).position,
							volume: 0.35
						});
						var one_timer = Script.setTimeout(function() { 
							isPlaying = false;
						}, 8000);
					}
				}
				else if (state1 > 2) {   
					if (!isPlaying) {
						isPlaying = true;
						Audio.playSound(sound3, {
							position: Entities.getEntityProperties(entityID).position,
							volume: 0.35
						});
						var one_timer = Script.setTimeout(function() { 
							isPlaying = false;
						}, 8000);
					}
				}
			}
		}
	};
})