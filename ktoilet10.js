//
// K Toilet 1.0
// ************
//
// Created by Kevin M. Thomas and Thoys on 04/09/15.
// Copyright 2015 Kevin M. Thomas and Thoys.
// kevintown.net
//
// JavaScript for the High Fidelity interface that adds an an animation and sound to an entity upon clicking the entity in addition to a secret teleport to another domain.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
 
 
// Function that attaches the WAV file to the entity and runs upon clicking the entity and stops the sound when releasing.
(function(){
    var _this = this;
    this.entityID = false;
    this.playingSound = false;
    this.sound = SoundCache.getSound("https://dl.dropboxusercontent.com/u/17344741/ktoilet10/toilet.wav?v=3");
    this.playTime = 0;
    this.oldCameraMode = "",
    this.position = false,
    this.onUpdate = function(deltaTime) {
        if (!_this.playingSound.isPlaying) {
            Entities.editEntity(_this.entityID, {animationSettings: '{ "frameIndex": 30, "lastFrame":60, "running": true, "fps": 60}'});
            Script.update.disconnect(_this.onUpdate);
            MyAvatar.scale = 1;
            Camera.mode = _this.oldCameraMode;
            print("Playtime = " + _this.playTime);
            Window.location = "hifi://" + Entities.getEntityProperties(_this.entityID).userData;
            return;
        }
        _this.playTime += deltaTime;
        MyAvatar.bodyYaw += deltaTime * 200;
        MyAvatar.scale = 1.0 - (_this.playTime / 7.5);
        MyAvatar.position = _this.position;
    },
    this.clickDownOnEntity = function(entityID, mouseEvent) {
        _this.entityID = entityID;
        if (mouseEvent.button == "LEFT") {
            if (!_this.playingSound || !_this.playingSound.isPlaying) {
                _this.playTime = 0;
                Entities.editEntity(_this.entityID, {animationSettings: '{ "frameIndex": 0, "lastFrame":30, "running": true, "fps": 60}'});
                _this.position = Entities.getEntityProperties(entityID).position;
                _this.playingSound = Audio.playSound(_this.sound, {
                    position: _this.position,
                    volume: 0.20,
                    loop: false
                });
                _this.oldCameraMode = Camera.mode;
                Camera.mode = "independent";
                Script.update.connect(this.onUpdate);
            }
        }
    };
})