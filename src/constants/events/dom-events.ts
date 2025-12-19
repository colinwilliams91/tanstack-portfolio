/**
 * DOM Event Type Constants/Map
 * Provides centralized reference for DOM event names used in addEventListener/removeEventListener
 * Based off of the GlobalEventHandlersEventMap from the lib.dom.d.ts definitions.
 */
export const DOM_EVENTS = {
  // Mouse Events
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_MOVE: 'mousemove',
  MOUSE_ENTER: 'mouseenter',
  MOUSE_LEAVE: 'mouseleave',
  CLICK: 'click',
  DOUBLE_CLICK: 'dblclick',
  CONTEXT_MENU: 'contextmenu',

  // Keyboard Events
  KEY_DOWN: 'keydown',
  KEY_UP: 'keyup',
  KEY_PRESS: 'keypress',

  // Focus Events
  FOCUS: 'focus',
  BLUR: 'blur',
  FOCUS_IN: 'focusin',
  FOCUS_OUT: 'focusout',

  // Form Events
  SUBMIT: 'submit',
  CHANGE: 'change',
  INPUT: 'input',

  // Window Events
  RESIZE: 'resize',
  SCROLL: 'scroll',
  LOAD: 'load',
  UNLOAD: 'unload',

  // Touch Events
  TOUCH_START: 'touchstart',
  TOUCH_MOVE: 'touchmove',
  TOUCH_END: 'touchend',
  TOUCH_CANCEL: 'touchcancel',

  // Drag Events
  DRAG: 'drag',
  DRAG_START: 'dragstart',
  DRAG_END: 'dragend',
  DRAG_ENTER: 'dragenter',
  DRAG_LEAVE: 'dragleave',
  DRAG_OVER: 'dragover',
  DROP: 'drop',
} as const;

export type DOMEventType = typeof DOM_EVENTS[keyof typeof DOM_EVENTS];
