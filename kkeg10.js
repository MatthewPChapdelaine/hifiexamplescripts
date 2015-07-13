//
// K Keg 1.0
// *********
//
// Created by Kevin M. Thomas and Thoys on 03/30/15.
// Modified by Konstantin.
// Copyright 2015 Kevin M. Thomas and Thoys.
// kevintown.net
//
// JavaScript for the High Fidelity interface that adds an pour function animation and sound to an entity upon clicking the entity.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
  
  
// Function that attaches the WAV file to the entity and runs upon clicking the entity and stops the sound when releasing.
(function(){
    var _this = this;
    this.playingSound = false;
    this.sound = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/kkeg10/kkegpour.wav");
    this.clickDownOnEntity = function(entityID, mouseEvent) {
        if (mouseEvent.button == "LEFT") {
            if (!_this.playingSound || !_this.playingSound.isPlaying) {
                Entities.editEntity(entityID, {animationSettings: '{ "frameIndex": 0, "lastFrame":30, "running": true, "fps": 60}'});
                _this.playingSound = Audio.playSound(_this.sound, {
                    position: Entities.getEntityProperties(entityID).position,
                    volume: 0.35,
                    loop: true
                });
            }
        }
    };
    this.clickReleaseOnEntity = function(entityID, mouseEvent) {
        if (mouseEvent.button == "LEFT") {
            Entities.editEntity(entityID, {animationSettings: '{ "frameIndex": 30, "lastFrame":60, "running": true, "fps": 60}'});
            this.playingSound.stop();
            this.playingSound = false;
        }
    };
})