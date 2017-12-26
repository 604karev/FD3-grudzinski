import {EventEmitter}from 'events';

let activeBlock = new EventEmitter();
let editMode = new EventEmitter();
let removeBlock = new EventEmitter();

export {activeBlock, editMode, removeBlock};