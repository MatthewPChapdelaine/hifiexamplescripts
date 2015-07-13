//
// K Virtual Electric Guitar 1.0
// *****************************
//
// Created by Kevin M. Thomas and Thoys on 06/29/15.
// Copyright 2015 Kevin M. Thomas and Thoys.
// kevintown.net
//
// JavaScript for the High Fidelity interface that creates a playable virtual electric guitar by utilizing the keyboard.
//
// Music samples provided royalty-free by musicradar @ musicradar.com, utilizing the musicradar heavy metal samples library.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
 
 
// Function that plays a selected WAV when pressing the number keys where the note A = 1, B = 2, etc.
var soundURLA = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-A_converted.wav";
var soundURLB = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-B_converted.wav";
var soundURLC = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-C_converted.wav";
var soundURLDh = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-D_Hi_converted.wav";
var soundURLDl = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-D_Lo_converted.wav";
var soundURLE = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-E_converted.wav";
var soundURLF = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-F_converted.wav";
var soundURLG = "https://dl.dropboxusercontent.com/u/17344741/kvirtualelectricguitar10/HMRhyB_Chug-G_converted.wav";
 
var soundA = SoundCache.getSound(soundURLA, true);
var soundB = SoundCache.getSound(soundURLB, true);
var soundC = SoundCache.getSound(soundURLC, true);
var soundDh = SoundCache.getSound(soundURLDh, true);
var soundDl = SoundCache.getSound(soundURLDl, true);
var soundE = SoundCache.getSound(soundURLE, true);
var soundF = SoundCache.getSound(soundURLF, true);
var soundG = SoundCache.getSound(soundURLG, true);
 
//var injectorA = false;
//var injectorB = false;
//var injectorC = false;
 
function playPowerChord(volume, sound) {
    var position = Vec3.sum(MyAvatar.position,
                                Vec3.multiplyQbyV(MyAvatar.orientation,
                                                  {x: 0, y: -0.3, z: -2}));
    var rotation = Quat.multiply(MyAvatar.orientation,
                                     Quat.fromPitchYawRollDegrees(0, -90, 0));
  
var audioOptions = {
    loop: false,
    position: position,
    volume: volume,
    secondOffset: 1000.0
}
 
    audioOptions.position = position;
    audioOptions.orientation = rotation;
    return Audio.playSound(sound, audioOptions);
}
 
function stopPowerChord(injector) {
    if (injector != false) {
        injector.stop();
        injector = false;
    }
}
 
Controller.keyPressEvent.connect(function(event) {
    if (event.text == "1" && soundA.downloaded) {
        playPowerChord(0.5, soundA);
    } else if (event.text == "2" && soundB.downloaded) {
        playPowerChord(0.5, soundB);
    } else if (event.text == "3" && soundC.downloaded) {
        playPowerChord(0.5, soundC);
    } else if (event.text == "4" && soundDl.downloaded) {
        playPowerChord(0.5, soundDh);
    } else if (event.text == "0" && soundDh.downloaded) {
        playPowerChord(0.5, soundDl);
    } else if (event.text == "5" && soundE.downloaded) {
        playPowerChord(0.5, soundE);
    } else if (event.text == "6" && soundF.downloaded) {
        playPowerChord(0.5, soundF);
    } else if (event.text == "7" && soundG.downloaded) {
        playPowerChord(0.5, soundG);
    }
});
 
Window.alert("K Virtual Electric Guitar 1.0\n*******************************\n\nCopyright 2015\nKevin M. Thomas and Thoys.\n\nDirections:\nPress the numbers 1-7 to play powerchord.\n1 = A\n2 = B\n3 = C\n4 = D\n5 = E\n6 = F\n7 = G\n0 = Low D");

    Write Preview 

Parsed as Markdown Edit in fullscreen
